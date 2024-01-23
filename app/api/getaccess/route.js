import { NextResponse } from "next/server";
export async function GET() {
    return NextResponse.json({allAccess : ['49.37.209.219','192.168.1.39', '192.168.1.35','192.168.0.106','192.168.0.108','100.68.222.225','223.187.122.225']}); 
}