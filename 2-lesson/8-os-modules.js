const os = require("os");

// console.log(os.userInfo());

// console.log(`uptime in seconds ${os.uptime()}`);

// name, release, total mem, free mem

const obj = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(obj);
