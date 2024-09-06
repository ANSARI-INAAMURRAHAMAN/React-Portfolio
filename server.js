const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require('dotenv').config();

// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email configuration:", error);
  } else {
    console.log("Email configuration verified successfully");
  }
});

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.RECIPIENT_EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Error sending message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});