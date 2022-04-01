const _=require("lodash")
const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
/**
 * @description Finds Country with Highest Online Sale
 * @param {*} region
 * @param {*} Onlinesale 
 * @returns Country with Highest Online Sale
 */
module.exports=function onlinesalesbyregion(region,Onlinesale){
    const regionarray=_.map(region,'Region');
let sortedOnline=sortingarray(Onlinesale);
    return "Country with Highest Online Sale "+regionarray[Highestindex(Onlinesale,sortedOnline)];
}
