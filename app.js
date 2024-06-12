const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { productmodel } = require("./models/product")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://ananthan123:ananthan123@cluster0.4r0z6.mongodb.net/productdb?retryWrites=true&w=majority&appName=Cluster0")

//app.get("/",(req,res)=>{
    //res.send("hello")
//})

app.post("/add",(req,res)=>{
    let input = req.body
    let employees = new productmodel(input)
    employees.save()
    console.log(productmodel)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    productmodel.find(input).then(
            (data) => {
                res.json(data)
            }
    ).catch(
            (error)=>{
                res.json(error)
            }
    )
}
)

app.get("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8082,()=>{
    console.log("server started")
})