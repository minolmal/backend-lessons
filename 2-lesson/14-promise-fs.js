const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

getText("./2-lesson/content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("./2-lesson/content/first.txt");
    const second = await getText("./2-lesson/content/second.txt");
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
