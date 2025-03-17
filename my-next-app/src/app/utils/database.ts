import mongoose from "mongoose"

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://kabasawa09:to3R8YfzZmrlB4gr@cluster0.dupmo.mongodb.net/NextMarket15Data?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.error(err)
        throw new Error()
    }
}

export default connectDB