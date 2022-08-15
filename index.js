import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
mongoose.connect('mongodb://mariafernanda:mariafernanda@ac-9djembq-shard-00-00.jopzif0.mongodb.net:27017,ac-9djembq-shard-00-01.jopzif0.mongodb.net:27017,ac-9djembq-shard-00-02.jopzif0.mongodb.net:27017/?ssl=true&replicaSet=atlas-o3c8bu-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));