import { NextResponse } from "next/server";
export async function GET() {             
    return NextResponse.json({
        allAccess : [
            '49.37.209.219', //fardeen
            '100.68.222.225', //fardeen
            '223.187.122.225', //fardeen
            '192.168.1.39', //choumya
            '192.168.1.35', //choumya
            '192.168.0.106', //salman
            '192.168.0.108' //salman
        ]
    }); 
}