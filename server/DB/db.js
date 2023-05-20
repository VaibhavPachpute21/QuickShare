import mongoose from "mongoose"

const ConnectDB=async ()=>{
    var SERVER_URL='mongodb+srv://vaibhav:12345@quickshare.plf1h1o.mongodb.net'
    var Local_URL='mongodb://localhost:27017'
    try {
        await mongoose.connect(`${SERVER_URL}`,{useNewUrlParser:true});
        console.log("Database connected successfully...")
    } catch (error) {
        console.error('Error while connecting database...',error)
    }
}

export default ConnectDB