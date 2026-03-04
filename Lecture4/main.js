const express=require('express')
const app=express()
const port=5500

app.use(express.static("public"))


//There is a limit of get request and it is the basic request that we type in URL
//We can check get request on browser

app.get('/',(req,res)=>{
    console.log("Hey its a get request")
    res.send('Hello World51!')
})


//Post request
//We can't check it on browser 
//Firstly we do it by making a html page andthen view it on browser but this is not a good method

app.post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send('Hello World51!')
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})