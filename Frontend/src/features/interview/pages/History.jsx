import InterviewHistory from "../components/InterviewHistory";

const History = () => {
    return (
        <div className="home-page">

            <header className="page-header">
                <h1>
                    Interview <span className="highlight">History</span>
                </h1>

                <p>
                    View all your previously generated interview strategies.
                </p>
            </header>

            <InterviewHistory />

        </div>
    );
};

export default History;