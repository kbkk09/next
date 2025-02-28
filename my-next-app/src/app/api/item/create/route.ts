import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"
import { NextRequest, NextResponse } from "next/server"

export const POST = async(request: NextRequest) =>{
    const reqBody = await request.json()
    console.log(reqBody)
    try{
        await connectDB()
        await ItemModel.create(reqBody)
    
        return NextResponse.json({message: "アイテム作成"})    
    }catch(err){
        return NextResponse.json({message: "アイテム作成失敗"})
    }
}