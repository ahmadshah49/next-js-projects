import { NextResponse } from "next/server";
export const GET=()=>{
    console.log("Get method Call");
   return  NextResponse.json({message:"Api is working"})
}
