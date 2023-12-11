// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jnaneshps5@gmail.com', // Update with your Gmail email
      pass: '9019008540@Jn',    // Update with your Gmail app password
    },
  });

  const mailOptions = {
    from: 'jnaneshps5@gmail.com',    // Update with your Gmail email
    to: 'jnaneshps4@gmail.com', // Update with the recipient's email
    subject: `New Message from ${name} - ${subject}`,
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error', details: error.message });
  }
}
