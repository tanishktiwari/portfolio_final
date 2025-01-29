import nodemailer from 'nodemailer';

// Named export for the POST method
export async function POST(req) {
  const { name, email, message, phone, countryCode } = await req.json(); // Parse the incoming request body

  // Set up Nodemailer transporter using Gmail's SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Gmail username
      pass: process.env.EMAIL_PASS,  // Gmail password or App password
    },
  });

  // Define the email content
  const subject = 'New Message from Contact Form';
  const textContent = `You have received a new message from ${name} (${email}, ${countryCode} ${phone}):\n\n${message}`;
  const htmlContent = `
    <strong>You have received a new message from ${name} (${email}, ${countryCode} ${phone}):</strong>
    <p>${message}</p>
  `;

  // Set up the email data
  const mailOptions = {
    from: email,  // Sender's email
    to: 'tanishktiwari12@gmail.com',  // Your email address to receive the messages
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
