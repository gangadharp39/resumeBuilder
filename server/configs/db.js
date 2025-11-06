import mongoose from "mongoose";
import Mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", ()=>{console.log("Database connected sucessfully")})

        let mongodbURI = process.env.MONGODB_URI;
        const projectName = 'resume-builder';

        if(!mongodbURI){
            throw new Error("MONGODB_URI enivronment variable not set");
            
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)
    }catch(error){
        console.error("error connecting to mongodb:", error)
    }
}

export default connectDB;