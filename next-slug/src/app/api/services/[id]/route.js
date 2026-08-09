import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {id} = await params;
    return NextResponse.json([{ 
        id,
        like:"jayesh patil",
        commented:"vishal patil",
    },
    {
        id,
        like:"sachin yadav",
        commented:"priness gond",

    },
     { id,
        like:"darshan ",
        commented:"ajay gond",

    },

])
};