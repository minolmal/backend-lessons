// const { writeFileSync } = require("fs");

// for (let i = 0; i < 10000; i++) {
//   writeFileSync("./3-lesson/content/big_file.txt", `Result line ${i} \n`, {
//     flag: "a",
//   });
// }

// console.log("Completed")

const {createReadStream}= require('fs')
const { result } = require('lodash')

// const stream = createReadStream('./3-lesson/content/big_file.txt')


//default 64kb
// last buffer - remainder
//highWaterMark - control size
// const stream = createReadStream('./3-lesson/content/big_file.txt',{highWaterMark:90000})
const stream = createReadStream('./3-lesson/content/big_file.txt',{encoding:'utf-8'} )

stream.on('error', (err) =>{
    console.log(err)
})
stream.on('data', (result)=> {
    console.log(result)
})