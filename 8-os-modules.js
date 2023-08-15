const { builtinModules } = require("module");
const os = require("os")

//info of the user
const user = os.userInfo();

// console.log(user)
// console.log(`The for the update was ${os.uptime()} seconds`)

// other built in builtinModules
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOs)