const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);


const start = async () => {
  try {
    const first = await readFilePromise(
      "./2-lesson/content/first.txt",
      "utf-8"
    );
    const second = await readFilePromise(
      "./2-lesson/content/second.txt",
      "utf-8"
    );
    await writeFilePromise("./2-lesson/content/promise_result.txt",`Promise result: ${first}, ${second}`);
    // console.log(first);
    // console.log(second);
    console.log("written to file")
  } catch (error) {
    console.log(error);
  }
};

start();
