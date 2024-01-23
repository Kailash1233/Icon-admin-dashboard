import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET() {
  try {
    const allowedIp = ['49.37.209', '192.168.1','192.168.0','223.187.115']; 
    var response = await fetch('https://api.ipify.org?format=json');
    var data = await response.json();
    var ip = data.ip.split(".",3).toString().replaceAll(',','.');
    console.log(ip);
    if(!allowedIp.includes(ip)){
      return NextResponse.json({
        msg:"You are not authorized to view this data",
        data: []
    });
    }
    await connectDB();
    var data = await Contact.find({eventname: "VOXRECK"});
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