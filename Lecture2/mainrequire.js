//we can keep the type in package.json as coomonjs or module 
//change type to run thes code of fs module

const { error } = require("console")
const fs=require("fs")
// console.log(fs)



//we can also use fs/promises in fs
//const fs=require("fs/promises")




//this function writefilesync is synchonous in nature which meand only after one line is executed fully then it moves to next linE which is not good as javascript is asynchonous in nature

//console.log("Starting")
//fs.writeFileSync("abhipsha.txt","Abhipsha is a good girl")
//console.log("ending")




//So we use writefile which is asynchonous in nature 

// console.log("Starting")
// fs.writeFile("abhipsha.txt","Abhipsha is a good girl",()=>{
//     console.log("Done")
// })
// console.log("ending")



// how to append in an existing file

// fs.appendFile("abhipsha.txt"," u know",(e,d)=>{
//     console.log(d)
// })




//How to read the file

// console.log("Starting")
// fs.writeFile("abhipsha.txt","Abhipsha is a good girl",()=>{
//     console.log("Done")
//     fs.readFile("abhipsha.txt",(error,data)=>{
//         console.log(error,data)//if we write only data then we can  not able to read what is written in file so we should use data.toString
//     })
// })
// console.log("ending")


// console.log("Starting")
// fs.writeFile("abhipsha.txt","Abhipsha is a good girl",()=>{
//     console.log("Done")
//     fs.readFile("abhipsha.txt",(error,data)=>{
//         console.log(error,data.toString())
//     })
// })
// console.log("ending")


// if we keep on calling then it create a callback hell so to avoid this we use promises