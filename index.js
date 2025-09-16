import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.send("Server on fire")
})

app.listen(5000,()=>{
    console.log("Server running on PORT 5000")
})