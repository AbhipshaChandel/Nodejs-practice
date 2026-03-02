import fs from  "fs/promises"

const a=await fs.readFile("abhipsha.txt")//as we are inside a module so we do not need to be inside a async function to write await
const b=await fs.writeFile("abhipsha.txt","\nToday is very sunny day")
const c=await fs.appendFile("abhipsha.txt","\n\n Amazing code")
console.log(a.toString(),b)