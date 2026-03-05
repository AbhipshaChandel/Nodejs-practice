const express=require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')


const app=express()
const port=5500

app.use(express.static("public"))
app.use('/blog',blog)// slash blog (/blog ) sai start honai valai jo bhe hai ussai yeh file handle kregi
app.use('/shop',shop)

//There is a limit of get request and it is the basic request that we type in URL
//We can check get request on browser

app.get('/',(req,res)=>{
    console.log("Hey its a get request")
    res.send('Hello World51!')
})


//Post request
//We can't check it on browser 
//Firstly we do it by making a html page and then view it on browser but this is not a good method
//kya koi easy method nhi hai to check that whether post request is working or not
//yes there is an easy way to do so by installing postman 

app.post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send('Hello World51!')
})




//Put request
//it is used to update 
//hum ek he end point pr put request bna sktai hai

app.put('/',(req,res)=>{
    console.log("Hey its a put request")
    res.send('Hello World put!')
})




//Delete request

app.put('/',(req,res)=>{
    console.log("Hey its a put request")
    res.send('Hello World put!')
})



//res.json
//we can download extension json formatter
app.get('/api',(req,res)=>{
   res.json({a:1,b:2,c:3})
})





//chaining

app.get('/',(req,res)=>{
    console.log("Hey its a get request")
    res.send('Hello World51!')
}).post('/',(req,res)=>{
    console.log("Hey its a post request")
    res.send('Hello World51!')
}).put('/',(req,res)=>{
    console.log("Hey its a put request")
    res.send('Hello World put!')
})




//Now we go to our browser and write in URL: localhost:5500/index

app.arguments("/index",(req,res)=>{
    console.log("Hey its index")
    res.send('Hello World index!')
})



app.arguments("/index",(req,res)=>{
    console.log("Hey its index")
    res.sendFile('template/index.html')//issai hoga yeh ke jb hum browser pr jayengai and likhaingai: localhost:5500/index  then hmara html page show hoga
})                                     //pr humai error milega kyu hum relative path dai rhe hai ke template kai andr index.html hai  pr ussai nhit pta ke template folder kha pr hai 
                                       // so we have to do res.sendFile('template/index.html',{root:__dirname})







//other methods

//1.res.download()
//2.res.end()
//3.res.json()
//4.res.jsonp()
//5.res.redirect()
//6.res.render()
//7.res.send()
//8.res.sendFile()
//9.res.sendStatus()





app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})