import connectDB from "@/app/utils/database"
import { ItemModel } from "@/app/utils/schemaModels"
import { NextResponse } from "next/server"

export const GET = async() =>{
    try{
        await connectDB()
        const allItems = await ItemModel.find()
        return NextResponse.json({message: "アイテム読み取り成功（オール）", allItems: allItems})
    }catch(err){
        console.error(err)
        return NextResponse.json({message: "アイテム読み取り失敗（オール）"})
    }
}