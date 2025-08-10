import { Resend } from 'resend';
import { ContactFormData } from '@/types';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is required');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = 'tony@cosmicjs.com';
const RECIPIENT_EMAIL = 'tony@cosmicjs.com';

export async function sendContactNotification(data: ContactFormData): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const subject = `New Contact Form Submission: ${data.subject}`;
    
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #8B0000; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px;">Prime Cut Steakhouse</h1>
          <p style="margin: 5px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-left: 4px solid #8B0000;">
          <h2 style="color: #8B0000; margin-top: 0;">Contact Details</h2>
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${data.phone}</p>` : ''}
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="margin: 8px 0;"><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
          </div>
          
          <h3 style="color: #8B0000;">Message</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0; white-space: pre-line;">${data.message}</p>
          </div>
    `;

    // Add reservation details if provided
    if (data.reservationRequest && (data.partySize || data.preferredDate || data.preferredTime)) {
      emailContent += `
        <h3 style="color: #8B0000;">Reservation Request Details</h3>
        <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          ${data.partySize ? `<p style="margin: 8px 0;"><strong>Party Size:</strong> ${data.partySize} guests</p>` : ''}
          ${data.preferredDate ? `<p style="margin: 8px 0;"><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
          ${data.preferredTime ? `<p style="margin: 8px 0;"><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
        </div>
      `;
    }

    emailContent += `
        </div>
        
        <div style="text-align: center; padding: 20px; color: #666; font-size: 14px;">
          <p>This message was sent through the Prime Cut Steakhouse contact form.</p>
          <p>Respond to the customer directly at: <a href="mailto:${data.email}" style="color: #8B0000;">${data.email}</a></p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: subject,
      html: emailContent,
      replyTo: data.email,
    });

    if (result.error) {
      console.error('Error sending notification email:', result.error);
      return { success: false, message: 'Failed to send notification email', error: result.error.message };
    }

    return { success: true, message: 'Notification email sent successfully' };
  } catch (error) {
    console.error('Error sending notification email:', error);
    return { 
      success: false, 
      message: 'Failed to send notification email', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

export async function sendConfirmationEmail(data: ContactFormData): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    const subject = `Thank you for contacting Prime Cut Steakhouse - ${data.subject}`;
    
    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #8B0000; padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">Prime Cut Steakhouse</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Thank You For Your Message</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-left: 4px solid #8B0000;">
          <h2 style="color: #8B0000; margin-top: 0;">Hello ${data.name},</h2>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to Prime Cut Steakhouse! We have received your message and truly appreciate your interest in our restaurant.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8B0000; margin-top: 0;">Your Message Summary</h3>
            <p style="margin: 8px 0;"><strong>Subject:</strong> ${data.subject}</p>
            <p style="margin: 8px 0;"><strong>Preferred Contact Method:</strong> ${data.preferredContact}</p>
            ${data.reservationRequest ? '<p style="margin: 8px 0; color: #8B0000;"><strong>🍽️ Reservation Request Noted</strong></p>' : ''}
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Our team will review your message and respond within 24 hours during business hours. If you've requested a reservation, we'll check availability and confirm your preferred date and time.
          </p>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #8B0000; margin-top: 0;">Restaurant Information</h3>
            <p style="margin: 8px 0;"><strong>📍 Location:</strong> Downtown Prime District</p>
            <p style="margin: 8px 0;"><strong>📞 Phone:</strong> (555) 123-STEAK</p>
            <p style="margin: 8px 0;"><strong>🕐 Hours:</strong></p>
            <ul style="margin: 5px 0; padding-left: 20px;">
              <li>Tuesday - Thursday: 5:00 PM - 10:00 PM</li>
              <li>Friday - Saturday: 5:00 PM - 11:00 PM</li>
              <li>Sunday: 4:00 PM - 9:00 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            We look forward to serving you an exceptional dining experience at Prime Cut Steakhouse, where every cut tells a story of culinary excellence.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="font-size: 18px; color: #8B0000; font-weight: bold; margin: 0;">Thank you for choosing Prime Cut Steakhouse!</p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #666; font-size: 14px;">
          <p>This is an automated confirmation email. Please do not reply to this email.</p>
          <p>For immediate assistance, please call us at (555) 123-STEAK</p>
        </div>
      </div>
    `;

    const result = await resend.emails.send({
      from: SENDER_EMAIL,
      to: data.email,
      subject: subject,
      html: emailContent,
    });

    if (result.error) {
      console.error('Error sending confirmation email:', result.error);
      return { success: false, message: 'Failed to send confirmation email', error: result.error.message };
    }

    return { success: true, message: 'Confirmation email sent successfully' };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { 
      success: false, 
      message: 'Failed to send confirmation email', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}