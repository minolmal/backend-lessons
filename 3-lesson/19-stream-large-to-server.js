var fs = require("fs");
var http = require("http");

// for (let i = 0; i < 100000; i++) {
//   writeFileSync("./3-lesson/content/big_file2.txt", `Result line ${i} \n`, {
//     flag: "a",
//   });
// }

// console.log("Completed")
http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream(
      "./3-lesson/content/big_file2.txt",
      "utf-8"
    );

    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      console.log(err);
      res.end(err);
    });
  })
  .listen(5000);