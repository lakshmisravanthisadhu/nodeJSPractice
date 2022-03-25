const http = require('http');
const data = require('./readFile');
function fileAnalysis(){
const server = http.createServer((req, res) => {
    const copyfile = require('./copyfile')
    const wordscount=require('./WordsCount')
    const countLines=require('./CountLines')
    const noofdirectories = require('./noofdirectories');
    const statementsInFile=require('./StatementsInFile')
    const Highestoccoured=require('./HighestOccouranceWord')
    const filesinDirectory=require('./filesInDirectory')
    const memoryUsed=require('./memoryused')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<center><h2>${copyfile()}</h2>`+
    `<h2>Number of words in the file: ${wordscount(data)}</h2>`+
    `<h2>Number of lines in the file: ${countLines(data)}</h2>`+
    `<h2>Number of statements in the file: ${statementsInFile(data)}</h2>`+
    `<h2> ${Highestoccoured(data.toLowerCase())}</h2>`+
    `<h2>Number of files in path: ${filesinDirectory()}</h2>`+
    `<h2>Number of directories in path: ${noofdirectories()}</h2>`+
    `<h2>Memory used: ${memoryUsed()}</h2></center>`)
})
const port = 8080
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})
}
fileAnalysis()