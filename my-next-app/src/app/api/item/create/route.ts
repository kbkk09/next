import { NextResponse } from "next/server"

export const POST = async(request: NextResponse) =>{
    console.log(await request.json())
    return NextResponse.json({message: "アイテム作成"})
}