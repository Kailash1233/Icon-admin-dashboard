import { NextResponse } from "next/server";
export async function GET() {             
    return NextResponse.json({
        allAccess : [
            '49.37.209.219', //fardeen
            '223.187.122.225', //fardeen
            '120.138.12.52', //choumya
            '157.51.183.95', //choumya
            '152.58.223.92', //salman
            '49.204.134.58', //salman
            '183.82.27.101', //kailash
            '110.224.95.205', //kailash
            '152.58.204.201', //nashith
            '1.38.8.177', //prem
        ]
    }); 
}