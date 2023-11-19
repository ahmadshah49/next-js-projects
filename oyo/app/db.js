import mongoose from 'mongoose'
const URL=process.env.APIKEY
const connectDB = async() => {
await mongoose.connect(URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
console.log("DB Conneted...");
}

export default connectDB