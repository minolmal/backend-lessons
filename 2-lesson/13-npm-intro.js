// npm -global command, comes with node
// npm --version, npm --v

//local dependency - use it only in your project
//npm i <package name>

//global dependency - use it in any project
//npm install -g <package name>
//sudo npm install -g <package name>

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step-by-step, press enter to skip)
//npm init -y (everything is default)

//dev dependency
//npm install <package name> --save-dev
const __ = require("lodash");

const items = [1,[2,[3,[4]]]]
const newItems = __.flattenDeep(items)

console.log(newItems)


