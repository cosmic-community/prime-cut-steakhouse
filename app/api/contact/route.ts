import { NextRequest, NextResponse } from 'next/server';
import { sendContactNotification, sendConfirmationEmail } from '@/lib/email';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send notification email to restaurant
    const notificationResult = await sendContactNotification(data);
    
    if (!notificationResult.success) {
      console.error('Failed to send notification email:', notificationResult.error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send notification email. Please try again or call us directly.',
          error: notificationResult.error 
        },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const confirmationResult = await sendConfirmationEmail(data);
    
    if (!confirmationResult.success) {
      console.error('Failed to send confirmation email:', confirmationResult.error);
      // Don't fail the entire request if confirmation email fails
      // The notification was sent successfully, which is the primary goal
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you soon.',
      notificationSent: notificationResult.success,
      confirmationSent: confirmationResult.success,
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'Contact form API endpoint. Use POST to submit contact forms.' },
    { status: 405 }
  );
}