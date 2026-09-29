const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Trust reverse proxies (needed for secure cookies behind Render/Railway/Vercel)
app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());

const allowedOrigins = process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",").map((url) => url.trim().replace(/\/$/, ""))
    : [];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, server-to-server)
        if (!origin) return callback(null, true);
        if (allowedOrigins.length === 0) return callback(null, true);

        const cleanOrigin = origin.replace(/\/$/, "");
        if (allowedOrigins.includes(cleanOrigin) || allowedOrigins.includes("*")) {
            return callback(null, true);
        }
        // Also allow local development origins by default
        if (cleanOrigin.startsWith("http://localhost:") || cleanOrigin.startsWith("http://127.0.0.1:")) {
            return callback(null, true);
        }

        return callback(null, true);
    },
    credentials: true
}));

/* Health check routes */
app.get("/", (req, res) => {
    res.status(200).json({ status: "ok", message: "SkillMatch AI API is running" });
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;