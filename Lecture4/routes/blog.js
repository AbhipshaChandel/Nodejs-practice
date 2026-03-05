//Routes
//Makes the codes organized

const express=require('express')
const router=express.Router()

//define home page router

router.get('/about',(req,res)=>{
    res.send("Blog home page")
})


//define the about router

router.get('/about',(req,res)=>{
    res.send('About blog')
})


//define the about router

router.get('/blogpost/:slug',(req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})