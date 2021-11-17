require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.json('hello to homePage')
})



app.listen(PORT, ()=>{
    console.log(`We Rooling on Port: ${PORT}`)
})