import nodemailer from "nodemailer";
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function PUT(req) {
    console.log(req.body)
//   try {
//     await connectDB();
//     var data = await Contact.updateOne({ "name" : "Central Perk Cafe" },
//     { $set: { "violations" : 3 } });
//     return NextResponse.json({
//       msg: ["Verified successfully"],
//       success: true,
//       data: data.reverse()
//     });
//   } catch (error) {
//       console.log(error);
//       return NextResponse.json({ msg: ["Unable to get message."] });
//     }
  }

async function sendConfirmationEmail(fullname, email) {
    // Configure Nodemailer with your email service details
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
      },
    });
  
    // Email setup
    const mailOptions = {
      from: 'your@icon2k24symposium@gmail.com',
    to: email,
    subject: `Confirmation for ICON Registration`,
    text: `Dear ${fullname},
  
      We trust this message finds you well. On behalf of Team ICON, we extend our sincere appreciation for registering to attend our upcoming symposium.
  
      Key Details:
      - Date: 08/02/2024
      - Time: 09:00 AM
      - Venue: Convention Centre, B.S.Abdur Rahman Crescent Institute of Science and Technology
  
      For any inquiries or to enhance your symposium experience, please contact us at icon2k24symposium@gmail.com or call the undersigned team members:
      - Choumya: +91 8925059696
      - Salman Fariz: +91 6380393289
  
      Your Event Pass for the registered event will be dispatched within 24 hours.
  
      Best Regards,
  
      Team ICON`
    };
  
    // Send the email
    await transporter.sendMail(mailOptions);
  }

  export default sendConfirmationEmail;