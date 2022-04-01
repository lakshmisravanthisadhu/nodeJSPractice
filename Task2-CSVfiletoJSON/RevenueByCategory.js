const sortingarray=require('./sortingarray.js')
const Highestindex=require('./Highestindex.js')
const Lowestindex=require('./Lowestindex.js')
/**
 * @description Finds Category with Highest revenue
 * @param {*} Category 
 * @param {*} Revenue 
 * @returns Category with Highest revenue
 */
module.exports=function RevenueByCategory(Category,Revenue){
    let sortedRevenue=sortingarray(Revenue);
    return "Category with highest revenue is  "+Category[Highestindex(Revenue,sortedRevenue)]+"has revenue"+sortedRevenue[sortedRevenue.length-1]+"Category with lowest revenue is  "+Category[Lowestindex(Revenue,sortedRevenue)]+"has revenue"+sortedRevenue[0];
}