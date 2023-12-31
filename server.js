import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan  from 'morgan';
import connectDB from './config/db.js';
import authRoutes from'./routes/authroute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
dotenv.config();    //The line dotenv.config(); is typically used in programming to load environment variables from a file into the application's runtime environment.

connectDB();
//es module fix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app=express();    //In this line of code, the express() function is called to create a new instance of the Express application. The resulting app object represents the Express application that can handle HTTP requests and define routes, middleware, and other functionality.

//This line adds middleware to the Express application using app.use()
app.use(cors());
app.use(express.json());    //When this middleware is used, it automatically parses the incoming request's body as JSON and makes it available on req.body for further processing.
app.use(morgan('dev')); //When a request is received, morgan logs information about the request to the console, such as the HTTP method, the requested URL, the response status, and the response time.

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);
app.use(express.static(path.join(__dirname,'./client/build')));
//It means that any incoming requests that start with "/api/v1/auth" will be handled by the authRoutes router. The authRoutes router contains specific route handlers for authentication-related endpoints.
//Parsing allows the application to extract and convert that text into a structured format that can be easily understood and processed by the application's code.
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html")),
    function (err){
        res.status(500).send(err)
        }
});
// app.get('/',(req,res)=>{
//     res.send("<h1>Hello</h1>");
// })

const PORT=process.env.port||8080;

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
})