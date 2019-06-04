const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.post("/guestData", (req, res) => {
  const { name, email, phone, country, arrive, depart, comments } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASS
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: ["ailisoaielarisa@yahoo.com"],
    subject: "New Booking",
    // text: `
    // Name: ${name}
    // Email: ${email}
    // Phone: ${phone}
    // Country: ${country}
    // Arrive date: ${arrive}
    // Departure: ${depart}
    // Comments: ${comments}`,
    html: `
    <h1 style="color: red;font-size: 2rem;">Name: ${name}</h1>
    <h2>Email: ${email}</h2>
    Phone: ${phone}
    Country: ${country}
    Arrive date: ${arrive}
    Departure: ${depart}
    Comments: ${comments}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.redirect("/");
});

const PORT = 3333;
app.listen(PORT, console.log(`Server running on port 3333`));
