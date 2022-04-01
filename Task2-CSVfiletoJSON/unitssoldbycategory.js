const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
const Lowestindex=require('./Lowestindex.js')
/**
 * @description Finds Category with Highest Units Sold
 * @param {*} Category 
 * @param {*} UnitSold 
 * @returns Category with Highest Units Sold 
 */
module.exports=function unitssoldbycategory(Category,UnitSold){
    let sortedCategoryUnits=sortingarray(UnitSold);
    return "Category with Highest UnitsSold "+Category[Highestindex(UnitSold,sortedCategoryUnits)];
}