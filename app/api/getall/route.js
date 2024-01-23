import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { authorize } from "@/app/lib/authorization";
export async function GET() {
  try {
    var authorized = await authorize();

    if(!authorized){
      return NextResponse.json({
        msg:"You are not authorized to view this data",
        data: authorized
    });
    }

    await connectDB();
    var data = await Contact.find();

    return NextResponse.json({
      msg: ["Data fetched successfully"],
      success: true,
      data: data.reverse()
    });
  } catch (error) {
      console.log(error);
      return NextResponse.json({ msg: ["Unable to get data."] });
    }
  }