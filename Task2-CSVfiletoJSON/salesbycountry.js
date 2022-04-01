const sortingarray=require('./sortingarray.js')
const Lowestindex=require('./Lowestindex.js')
const Highestindex=require('./Highestindex.js')
/**
 * @description finds Country with Highest Sale and Lowest Sale
 * @param {*} countrynames 
 * @param {*} countrysale 
 * @returns Country with Highest Sale and Lowest Sale
 */
module.exports =function salesbycountry(countrynames,countrysale){
    //console.log(countrynames);
    let sortedcountrysale=sortingarray(countrysale);
   // console.log(countrysale,sortedcountrysale);
    return "Country with Highest Sale "+countrynames[Lowestindex(countrysale,sortedcountrysale)]+"Country with Lowest Sale "+countrynames[Highestindex(countrysale,sortedcountrysale)];
}