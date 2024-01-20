import mongoose from 'mongoose'
const URL="mongodb+srv://ahmadraza:raza12345a+@projects.zpoplwq.mongodb.net/OYO"
const connectDB = async() => {
await mongoose.connect(URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

}

export default connectDB