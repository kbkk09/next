import connectDB from "@/app/utils/database"
import { GetServerSidePropsContext } from "next"
import { NextRequest, NextResponse } from "next/server"

export const GET = async(request: NextRequest, context:GetServerSidePropsContext) =>{
    const params = await context.params
    try{
        await connectDB()
        return NextResponse.json({message: "アイテム読み取り成功（シングル）"})
    }catch(err){
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
    }
}