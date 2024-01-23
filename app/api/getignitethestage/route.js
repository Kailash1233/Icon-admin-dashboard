import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    const allowedIp = ['49.37.209.163'];  
    var response = await fetch('https://api.ipify.org?format=json');
    var data = await response.json();
    console.log(data.ip);
    console.log(typeof data.ip);  
    if(!allowedIp.includes(data.ip)){
      console.log('allowed')
      return NextResponse.json({
        msg:"You are not authorized to view this data",
        data: []
      });
    }
    await connectDB();
    var data = await Contact.find({eventname: "IGNITE THE STAGE"});
    return NextResponse.json({
      msg: ["Data fetched successfully"],
      success: true,
      data: data.reverse()
    });
  } catch (error) {
      console.log(error);
      return NextResponse.json({ msg: ["Unable to get message."] });
    }
  }