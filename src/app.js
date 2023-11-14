import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//configurations to recieve data from json url and to public folder in which yyou can store img pdf etc
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
//configuration to perform crud operations on user cookie through server
app.use(cookieParser())