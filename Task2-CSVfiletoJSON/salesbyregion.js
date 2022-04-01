const _=require("lodash")
const sortingarray=require('./sortingarray.js')
const Lowestindex=require('./Lowestindex.js')
const Highestindex=require('./Highestindex.js')
/**
 * @description finds Region having Highest Sales and Lowest Sales.
 * @param {*} region 
 * @param {*} sale 
 * @returns Region having Highest Sales and Lowest Sales.
 */
module.exports =function salesbyregion(region,sale){
    const regionarray=_.map(region,'Region');
    //console.log(regionarray);
let sortedsale=sortingarray(sale);
    return "Region with Lowest Sale "+regionarray[Lowestindex(sale,sortedsale)]+"Region with Highest Sale "+regionarray[Highestindex(sale,sortedsale)];
}