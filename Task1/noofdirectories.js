const fs= require('fs')
/**
 * function to find no of files in directory
 * @param {*} dir
 * @returns 
 */

 module.exports= function noofdirectories(){
    const dir = 'C:/Users/s.lakshmi.sravanthi/OneDrive - Accenture/Desktop/Task1'
    return(fs.readdirSync(dir).filter(file => (fs.lstatSync(file).isDirectory() && file !== "node_modules")).length);
}