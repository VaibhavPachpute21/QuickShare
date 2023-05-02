import mongoose from "mongoose"

const ConnectDB=async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://vaibhav:12345@quickshare.plf1h1o.mongodb.net`,{useNewUrlParser:true});
        console.log("Database connected successfully...")
    } catch (error) {
        console.error('Error while connecting database...',error)
    }
}

export default ConnectDB