// Asynchronous approach
const { readFile, writeFile } = require("fs");

console.log("Start");

// const first = readFile('./content/first.txt', 'utf-8')
readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) throw err;
  // console.log(data);
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) throw err;
    // console.log(data);
    const second = data;
    // console.log(second);

    writeFile(
      "./content/result_async.txt",
      `Async result: ${first}, ${second}`,
      (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
        console.log("Completed");
      }
    );
  });
});
console.log("Start next")

// console.log(first);
