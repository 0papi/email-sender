const nodemailer = require("nodemailer");

module.exports = async (subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: process.env.PORT,
      secure: process.env.SECURE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: "evanskwofie67@gmail.com",
      to: "evanskwofie67@gmail.com",
      subject: subject,
      text: text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};
