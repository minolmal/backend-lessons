const path = require("path");

// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "abc.txt");
// console.log(filePath);

// console.log(path.basename(filePath));
console.log(__dirname)

console.log(path.resolve(__dirname,"/content", "subfolder", "abc.txt"));
