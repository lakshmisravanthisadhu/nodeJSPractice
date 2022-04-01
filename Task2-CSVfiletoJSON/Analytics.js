function Analytics(reg,Revenue,Category,UnitSold,Onlinesale,Offlinesale,countrynames,countrysale,sal){
let sortedsal=sortingarray(sal);
    console.log("Region with Lowest Sale ",reg[Lowestindex(sal,sortedsal)]);
    console.log("Region with Highest Sale ",reg[Highestindex(sal,sortedsal)]);

    let sortedcountrysale=sortingarray(countrysale);
    console.log("Country with Highest Sale ",countrynames[Lowestindex(countrysale,sortedcountrysale)]);
    console.log("Country with Lowest Sale ",countrynames[Highestindex(countrysale,sortedcountrysale)]);

    let sortedOnline=sortingarray(Onlinesale);
    console.log("Country with Highest Online Sale ",reg[Highestindex(Onlinesale,sortedOnline)]);

    let sortedOffline=sortingarray(Offlinesale);
    console.log("Country with Highest Offline Sale ",reg[Highestindex(Offlinesale,sortedOffline)]);

    let sortedRevenue=sortingarray(Revenue);
    console.log("Category with highest revenue is  ",Category[Highestindex(Revenue,sortedRevenue)],"has revenue",sortedRevenue[sortedRevenue.length-1]);
    console.log("Category with lowest revenue is  ",Category[Lowestindex(Revenue,sortedRevenue)],"has revenue",sortedRevenue[0]);

    let sortedCategoryUnits=sortingarray(UnitSold);
    console.log("Category with Highest UnitsSold ",Category[Highestindex(UnitSold,sortedCategoryUnits)]);

function sortingarray(unsorted){
    let sorted=unsorted.slice();
    return sorted.sort((a,b)=>a-b);

}
function Highestindex(unsorted,sorted){
    return unsorted.indexOf(sorted[sorted.length-1]);
}
function Lowestindex(unsorted,sorted){
    return unsorted.indexOf(sorted[0]);

}
}
module.exports.Analytics=Analytics;