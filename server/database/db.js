import mongoose from "mongoose"

const ConnectDB=async ()=>{
    const MONGODB_URL=`mongodb+srv://vaibhav:12345@quickshare.plf1h1o.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
        console.log("Database connected successfully...")
    } catch (error) {
        console.error('Error while connecting database...')
    }
}

export default ConnectDB