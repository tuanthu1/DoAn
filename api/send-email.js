// file: server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": "eyJhcGlfa2V5IjoieGtleXNpYi1kMTY5ZTE3ZTM3YWU0ZTNhYzNiNjg3YzE0ZTAxZDM2MzI0MTlmMzU5NTk2Y2RjNWY0NmQ2YzdiMzkwOGJhM2E2LW5POWV5QVQ0Y0Y1a2RkeW4ifQ==", // <-- API key ở đây
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { name: "Đặt Vé Xem Phim", email: "noreply@yourdomain.com" },
        to: [{ email: to }],
        subject,
        htmlContent: html
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(500).send(error);
    }

    res.status(200).send("Email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
