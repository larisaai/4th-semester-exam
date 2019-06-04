const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.get("/data", (req, res) => {
  fs.readFile("database/reviews.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.post("/reviews", (req, res) => {
  fs.readFile("database/reviews.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      data = JSON.parse(data); //now it is an object

      data.push(req.body);
      const json = JSON.stringify(data); //convert it back to json

      fs.writeFile("database/reviews.json", json, "utf8", err => {
        if (err) {
          console.log(err);
        }
      });
    }
  });

  res.redirect("/contact.html");
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

  res.redirect("/booking.html");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, console.log(`Server running on port 3333`));
