import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message, phone, countryCode } = await req.json();

  // Set up Nodemailer transporter using Gmail's SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gmail username
      pass: process.env.EMAIL_PASS, // Gmail password or App password
    },
  });

  // Define the email content
  const subject = 'New Message from Contact Form';
  const textContent = `You have received a new message from ${name} (${email}, ${countryCode} ${phone}):\n\n${message}`;
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #e8f0fe;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .email-container {
            max-width: 650px;
            margin: 30px auto;
            background-color: #fff;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background-color: #2C82D3;
            color: white;
            text-align: center;
            padding: 15px 20px;
            border-radius: 8px 8px 0 0;
          }
          .email-header h2 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
          }
          .email-body {
            padding: 20px;
            background-color: #f9fafb;
            border-radius: 8px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);
          }
          .email-body p {
            font-size: 16px;
            line-height: 1.7;
            margin: 10px 0;
          }
          .info {
            font-weight: 600;
            color: #2C82D3;
          }
          .contact-info {
            background-color: #f4f9fd;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          }
          .contact-info p {
            margin: 8px 0;
            font-size: 16px;
          }
          .contact-info span {
            color: #0077b5;
          }
          .message {
            background-color: #ffffff;
            border-left: 5px solid #2C82D3;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            font-style: italic;
            font-size: 16px;
          }
          .footer {
            font-size: 14px;
            color: #888;
            text-align: center;
            margin-top: 25px;
            padding-top: 15px;
            border-top: 1px solid #e4e4e4;
          }
          .footer a {
            color: #2C82D3;
            text-decoration: none;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h2>You've Got a New Message!</h2>
          </div>
          <div class="email-body">
            <div class="contact-info">
              <p><span class="info">Name:</span> ${name}</p>
              <p><span class="info">Email:</span> ${email}</p>
              <p><span class="info">Phone:</span> ${countryCode} ${phone}</p>
            </div>
            <div class="message">
              <p><span class="info">Message:</span></p>
              <p>${message}</p>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Tanishk Tiwari POrtfolio</p>
            <p>All Rights Reserved. <a href="https://tanishk-tt-tiwari-portfolio.vercel.app/">Visit Our Website</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Set up the email data
  const mailOptions = {
    from: email, // Sender's email
    to: 'tanishktiwari12@gmail.com', // Your email address to receive the messages
    subject: subject,
    text: textContent,
    html: htmlContent,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), { status: 500 });
  }
}
