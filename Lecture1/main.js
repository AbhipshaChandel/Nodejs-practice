//Import-------->
//After removing type from module to commonjs our main.js is also converted to require


//import {a,c} from "./import.js" //curly brackets are required
//console.log(a,c)

//import obj from "./import.js" //we can also use any other name instead of obj like (exp , http many more)
//console.log(obj)                // No need of curly brackets




//Require------->
//After removing type from commonjs to module our main.js is also converted to import

(function(exports,require,module,__filename,__dirname){
    //module code actually lives here
}) 

const a=require("./require.js")
console.log(a,__dirname,__filename)  // kutch bhe code hum nodejs main likhtai hai agr hum commonjs ka istemal kr rhe hai toh vo is function kai andr wrap ho jata hai humai krnai ke zaroorat nhi hai or humai yeh variables use krnai kai leyai mil jatia hai
