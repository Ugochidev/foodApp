const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (config) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.cykle.studio",
      port: 465,
      secure: true,
      auth: {
        user: process.env.userEmail,
        pass: process.env.userPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.user,
      ...config,
    });

    return `Preview URL: %s', ${nodemailer.getTestMessageUrl(info)}`;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { sendMail };
