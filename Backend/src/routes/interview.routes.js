const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewRouter = express.Router()

/**
 * @route POST /api/interview/
 * @description Generate new interview report.
 * @access Private
 */
interviewRouter.post(
    "/",
    authMiddleware.authUser,
    upload.single("resume"),
    interviewController.generateInterViewReportController
)

/**
 * @route GET /api/interview/report/:interviewId
 * @description Get interview report by interviewId.
 * @access Private
 */
interviewRouter.get(
    "/report/:interviewId",
    authMiddleware.authUser,
    interviewController.getInterviewReportByIdController
)

/**
 * @route GET /api/interview/
 * @description Get all interview reports of logged in user.
 * @access Private
 */
interviewRouter.get(
    "/",
    authMiddleware.authUser,
    interviewController.getAllInterviewReportsController
)

/**
 * @route DELETE /api/interview/:interviewId
 * @description Delete an interview report.
 * @access Private
 */
interviewRouter.delete(
    "/:interviewId",
    authMiddleware.authUser,
    interviewController.deleteInterviewReportController
)

/**
 * @route POST /api/interview/resume/pdf/:interviewReportId
 * @description Generate resume PDF.
 * @access Private
 */
interviewRouter.post(
    "/resume/pdf/:interviewReportId",
    authMiddleware.authUser,
    interviewController.generateResumePdfController
)

module.exports = interviewRouter