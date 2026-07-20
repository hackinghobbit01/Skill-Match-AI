import { useNavigate } from "react-router";
import { useInterview } from "../hooks/useInterview";

const InterviewHistory = () => {

  const {
    reports,
    handleDeleteInterview
  } = useInterview();

  const navigate = useNavigate();

  const deleteInterview = async (e, interviewId) => {

    e.stopPropagation();

    const confirmed = window.confirm(
      "Are you sure you want to delete this interview?"
    );

    if (!confirmed) return;

    await handleDeleteInterview(interviewId);
  };

  if (reports.length === 0) {
    return (
      <div className="recent-reports">
        <h2>Interview History</h2>
        <p>No interview plans generated yet.</p>
      </div>
    );
  }

  return (
    <section className="recent-reports">

      <h2>Interview History</h2>

      <ul className="reports-list">

        {reports.map((report) => (

          <li
            key={report._id}
            className="report-item"
            onClick={() => navigate(`/interview/${report._id}`)}
          >

            <div className="report-header">

              <h3>{report.title || "Untitled Position"}</h3>

              <button
                className="delete-report-btn"
                onClick={(e) => deleteInterview(e, report._id)}
              >
                Delete
              </button>

            </div>

            <p className="report-meta">
              Generated on{" "}
              {new Date(report.createdAt).toLocaleDateString()}
            </p>

            <p
              className={`match-score ${
                report.matchScore >= 80
                  ? "score--high"
                  : report.matchScore >= 60
                  ? "score--mid"
                  : "score--low"
              }`}
            >
              Match Score: {report.matchScore}%
            </p>

          </li>

        ))}

      </ul>

    </section>
  );
};

export default InterviewHistory;