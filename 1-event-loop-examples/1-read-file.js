const { readFile } = require("fs");

console.log('started a first task');

readFile("./content/first.txt", "utf-8", (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res)
    console.log('Completed first task')
})

console.log('Starting next task')