// Synchronous approach
const { readFileSync, writeFileSync } = require("fs");

console.log("Start")
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first)

writeFileSync("./content/result_sync.txt", `Result: ${first}, ${second}`, {
  flag: "a",
});


console.log("Completed")
