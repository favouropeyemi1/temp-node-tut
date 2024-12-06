const {readFileSync, writeFileSync} = require ('fs')

first = readFileSync('./contents/first.txt', 'utf8')
second = readFileSync('./contents/second.txt', 'utf8')

console.log (first, '\n', second)

writeFileSync(
    './contents/result.txt',
    `Here is the result : ${first}, \n ${second}`,
    {flag: 'a'}

)