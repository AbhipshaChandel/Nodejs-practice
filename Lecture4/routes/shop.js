//Routes
//Makes the codes organized

const express=require('express')
const router=express.Router()

//define home page router

router.get('/about',(req,res)=>{
    res.send("shop home page")
})


//define the about router

router.get('/about',(req,res)=>{
    res.send('About shop')
})


//define the about router

router.get('/shoppost/:slug',(req,res)=>{
    res.send(`fetch the shoppost for ${req.params.slug}`)
})