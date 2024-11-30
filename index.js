const express = require("express")
const server = express()

//dotenv for enviromental variables 
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8089




server.listen(PORT, ()=>{
    try {
        console.log(`server is running on PORT: ${PORT}`)
        
    } catch (error) {
        console.log(`something went wrong while starting server ${error.message}`)
    }
})

