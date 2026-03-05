const express=require('express')
const app=express()
const port=5500


//static(Yeh kehta hai ke public folder ko public bna do)

app.use(express.static('public'))//jo bhe folder ka naam hoga vo he likhna hai but standard hum public he use krtai hai




//this is not good way so thats why we use Express

app.get('/',(req,res)=>{//int the url we write localhost:5500/
    res.send('Hello World5!')
})

app.get('/about',(req,res)=>{//in the url write localhost:5500/about
    res.send('About us!')
})

app.get('/contact',(req,res)=>{
    res.send('Contact us!')
})

app.get('/blog/intro-to-js',(req,res)=>{// int the url write localhost:5500/blog/intro-to-js
    res.send('intro-to-js!')
})





//So we use Express

app.get('/blog/:slug',(req,res)=>{// int the url write localhost:5500/blog/(anything which we want to show on the screen)
    console.log(req)//all the things inside it will be shown in terminal
    res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second',(req,res)=>{// int the url write localhost:5500/blog/(anything which we want to show on the screen)/(anything)
    res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})






//Query parameters

// app.get('/:slug',(req,res)=>{
//     res.send('Contact us!')
//     //for url: http://localhost:5500/intro-to-js?mode=dark&region=in
//     console.log(req.params)//will output params:{slug:'intro to js'}
//     console.log(req.query)//will output query:{mode:'dark', region:'in'}
//     //query mai vo vali cheezai aati hai jo question mark kai baad aata hai
// })






app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
