import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email, 
    subject: options.subject,
    text: `
      You have received a new message from your website contact form.

      Full Name: ${options.name}
      Email: ${options.userEmail}
      Phone: ${options.phone || 'N/A'}
      Subject: ${options.subject}
      Message: ${options.message}
    `,
  };

  await transporter.sendMail(mailOptions);
};
