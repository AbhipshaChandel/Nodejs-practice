const express=require('express')
const app=express()
const port=5500
const fs=require("fs")

app.use(express.static('public'))//vo pehlai niche likhai hua kisi bhe request response pr janai sai pehlai yha aayegi and puchegi file sai (harry.txt   kyuki humnai URL: main localhost:5500/harry.txt likha hai) ke kya tum public ho if yes toh vha pr chali jao and vo nichai valai sai check nhi hogi  and request response cycle khatam ho gye kyuki match ho gya

// yeh aisai work krta hai ke hmare request aaye ke hmai chaheyai / and yeh match ho gya is handler sai then yeh decide ho jata hai ke yeh vala jo function hai vo handle krega is request ko
app.get('/',(req,res)=>{//int the url we write localhost:5500/
    res.send('Hello World5!')
})


app.get('/about',(req,res)=>{
    res.send('Hello World about!')
})



//MIDDLEWARE:
       //WHY MIDDLEWARE:
             //yeh hr request sai pehlai chalta hai
             //iskai pass request and response dono ke shakti hai 
             //hum request ko modify kr sktai hai
             //order is very important in middleware..jo middleware baad mai chal ahai yeh usko follow krega

//Middle ware yeh keta hai ke vo request ko pakadta  hai and bolta hai ruko request and then us request ko laikr uspr kaam krna shuru kr deta hai

//syntax of middleware
//yeh teen functioon laita hai req,res and next (req jo aaye ,res vo hai jo janai vala response hai,next ka mtlb hai agla middleware)
//hum next isleyai detai hai taki vo request atki na reh jaye ...agr next hoga tbhi vo baaki bache huai middwares pr jayegi and actual routera or jayegi jissai vo match ho jayegi
//agr res.send first middle ware mai likha hoga yeh jis bhe middleware mai likha hoga vha pr stop ho jayega and vo print hoga in browser then next mt likho us midddleware kai baad vran error aayega kyuki response toh chala gya hai ab next ka kutch fayda nhi hai


app.use((req,res,next)=>{
    console.log('LOGGED')
    console.log(req,headers)
    req.harry="I m good"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    // res.send("Hacked by middleware 1")  // yeh nhi krna hai vrn abrowser vhi pr atac jayega
    next()
})

app.use((req,res,next)=>{
    console.log('LOGGED')
    req.harry="I m great"//yeh baad mai likha hai toh yeh chalega
    next()
})

app.get((req,res,next)=>{
    res.send("Hello world"+req.harry)
})




//TYPES OF MIDDLEWARE:
      //1.applicationlevel middleware
      //2.routerlevel middleware  //ekk specific router kai andr daal do and vo uskai andr kaam krega
      //3.Eror-handling middleware   //agr koi error aa jata hai toh us error ko handle krkai hum ky akrna chahtai hai hum vo likhtai hai
      //4.Built-in middleware    // like express.static 
      //5.Third party middleware  // kisi or nai middleware bnaya hai hum bs use import krkai use krengai



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})