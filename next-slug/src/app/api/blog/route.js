import { NextResponse } from 'next/server';

export const GET = async () => {

    return NextResponse. json({
        message: "GET Request Successfully Send",
         user:"hello user welcome to my website ",
    });
    
};