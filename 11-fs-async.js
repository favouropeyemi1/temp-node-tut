const {readFile, writeFile} = require ('fs')

readFile('./contents/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
const first = result;
console.log(first)
readFile('./contents/second.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const second = result;
    console.log(second)
    writeFile('./contents/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        })
});
});

