import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

dotenv.config({ path: "./config.env" });

const app = express();
const router = express.Router();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Route
router.post("/send/mail", async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    console.log("Received request:", { name, email, phone, subject, message: message.substring(0, 50) + '...' });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all details",
      });
    }

    await sendEmail({
      email: "pratul@thedaimon.com", // The recipient email
      subject: subject, // Subject of the email
      phone: phone,
      message: message, // Message from the contact form
      userEmail: email, // User's email
      name: name, // User's name
     
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error("Detailed error:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    res.status(500).json({
      success: false,
      message: `Failed to send email: ${error.message}`,
    });
  }
});

// Use Router
app.use("/api", router);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

