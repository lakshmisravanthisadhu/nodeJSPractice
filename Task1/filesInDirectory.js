const fs=require('fs')
/**
 * @description counts no of files in the directory
 */
module.exports = function filesinDirectory() {
    const dir = 'C:/Users/s.lakshmi.sravanthi/OneDrive - Accenture/Desktop/Task1'
    return fs.readdirSync(dir).filter(file => (fs.lstatSync(file).isFile())).length;
}