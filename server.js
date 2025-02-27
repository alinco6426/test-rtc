const dotenv = require("dotenv");
dotenv.config();

const express  = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/" , (req , res)=>{
    // res.send("Hello World");
    res.status(200).json({
        message : "nice one"
    })
})

app.listen(port , ()  => {
    console.log(`Server is running on port ${port}`);
})
