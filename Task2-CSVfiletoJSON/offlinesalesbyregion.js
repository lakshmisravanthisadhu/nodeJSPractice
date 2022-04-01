const _=require("lodash")
const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
/**
 * @description finds Country with Highest Offline sale
 * @param {@} region
 * @param {*} Offlinesale 
 * @returns 
 */
module.exports=function offlinesalesbyregion(region,Offlinesale){
    const regionarray=_.map(region,'Region');
let sortedOffline=sortingarray(Offlinesale);
    return "Country with Highest Offline Sale "+regionarray[Highestindex(Offlinesale,sortedOffline)];
}
