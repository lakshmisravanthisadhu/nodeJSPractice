const _=require("lodash")
const csv = require('csvtojson')
const http = require('http');
const arraySort=require('array-sort')
const fs=require('fs')
const path=require('path')
const { parse } = require('fast-csv');
let region=[];
/**
 * @descripton gives an array of regions from jsonArray without duplicates
 * @param {*} jsonArray 
 */
 let rows = [];
 fs.createReadStream(path.resolve(__dirname, 'SalesRecords.csv'))
   .pipe(parse({headers: true  }))
   .on('error', error => console.error(error))
   .on('data', row => {
       rows.push(row);
   })
   .on('end',function(){
       getRegionWiseArray(rows);
   });
function getRegionWiseArray(jsonArray) {
    _.forEach(jsonArray,function(value){
        const found=region.some(object=>object.Region === value.Region)
        if(!found){
            region.push({'Region':value.Region});
        }
    });
 regionobj(region, jsonArray);
}
    let countrysale=[];
    let countrynames=[];
    let Onlinesale=[];
    let Offlinesale=[];
    let UnitSold=[];
    let Category = [];
    let Revenue=[];
    let sale=[];
/**
 * @description Filters JSONArray into an array of JSON Objects based on region
 * @param {*} region 
 * @param {*} jsonArray 
 */
function regionobj(region,jsonArray) {
    for (let region_itr = 0; region_itr < region.length; region_itr++) {
        let TotalRevenue = 0, TotalCost = 0, TotalProfit = 0, Total_Cost = 0, Total_Profit = 0, Totalcost = 0, Totalprofit = 0;TotalSales=0;
        let ArrayOfCategories = [];
        let ArrayOfCountries = [];
        let country = [];
        let OnlineCount = 0, OfflineCount = 0;
        for (let json_itr = 0; json_itr < jsonArray.length; json_itr++) {
            if (region[region_itr].Region == (jsonArray[json_itr].Region)) {
                TotalRevenue = parseFloat(TotalRevenue) + parseFloat(jsonArray[json_itr]['Total Revenue'])
                TotalCost = parseFloat(TotalCost) + parseFloat(jsonArray[json_itr]['Total Cost'])
                TotalProfit = parseFloat(TotalProfit) + parseFloat(jsonArray[json_itr]['Total Profit'])
                if (jsonArray[json_itr]['Sales Channel'] === "Online")
                    OnlineCount++;
                else {
                    OfflineCount++;
                }
                TotalSales=OnlineCount+OfflineCount;
                //Gives an array of Categories without duplicates
                if (Category.includes(jsonArray[json_itr]['Item Type']) == false) {
                    Category.push(jsonArray[json_itr]['Item Type']);
                }
                //Gives an array of Countries without duplicates
                if (country.includes(jsonArray[json_itr].Country) == false) {
                    country.push(jsonArray[json_itr].Country);
                }
            }
        }
        sale[region_itr]=parseInt(TotalSales);
        Onlinesale[region_itr]=OnlineCount;
        Offlinesale[region_itr]=OfflineCount;
        /**
         * @description to give a array of categories as a value to the json object along with category cost.profit,unit sold
         */
         for (let category_itr = 0; category_itr < Category.length; category_itr++) {
            TotalUnitsSold = 0;OnlineSales=0,OfflineSales=0;TotalSales=0,categoryrevenue=0,Total_Cost=0,Total_Profit=0;
            for (let json_itr = 0; json_itr< jsonArray.length; json_itr++) {
                    if (Category[category_itr] == jsonArray[json_itr]['Item Type']) {
                        TotalUnitsSold = parseFloat(TotalUnitsSold) + parseFloat(jsonArray[json_itr]['Units Sold'])
                        Total_Cost = parseFloat(Total_Cost) + parseFloat(jsonArray[json_itr]['Total Cost'])
                        Total_Profit = parseFloat(Total_Profit) + parseFloat(jsonArray[json_itr]['Total Profit'])
                        categoryrevenue=parseFloat(categoryrevenue) + parseFloat(jsonArray[json_itr]['Total Revenue'])
                        if(jsonArray[json_itr]['Sales Channel']=="Online"){
                        OnlineSales++;}
                        else{ OfflineSales++;}
                        TotalSales=OnlineSales+OfflineSales;
                    }
            }
            UnitSold[category_itr]=TotalUnitsSold;
            Revenue[category_itr]=categoryrevenue;
            let ob = {
                Category_Name: Category[category_itr],
                TotalUnitsSold: TotalUnitsSold,
                TotalProfit: Total_Profit,
                TotalCost: Total_Cost,
                OnlineSales:OnlineSales,
                OfflineSales:OfflineSales,
                TotalSales:TotalSales
            };
            ArrayOfCategories.push(ob);
        }
        /**
         * @description to give a array of countries as a value to the json object along with category cost.profit.
         */
        for (let country_itr = 0; country_itr < country.length; country_itr++) {
            TotalSales= 0; Totalcost = 0, Totalprofit = 0
            for (let json_itr = 0; json_itr < jsonArray.length; json_itr++) {
                if (region[region_itr].Region == jsonArray[json_itr].Region) {
                    if (country[country_itr] == jsonArray[json_itr].Country) {
                        Totalcost = parseFloat(Totalcost) + parseFloat(jsonArray[json_itr]['Total Cost'])
                        Totalprofit = parseFloat(Totalprofit) + parseFloat(jsonArray[json_itr]['Total Profit'])
                        if(jsonArray[json_itr]['Sales Channel'])
                        TotalSales++;
                    }
                }
            }
            countrynames.push(country[country_itr]);
            countrysale.push(TotalSales);
            ArrayOfCountries.push({
                Country_Name: country[country_itr],
                TotalProfit: Totalprofit,
                TotalCost: Totalcost,
                TotalSales:TotalSales
            });
            //console.log(ArrayOfCountries);
        }
            region[region_itr]['TotalRevenue']= TotalRevenue;
            region[region_itr]['TotalCost']=TotalCost;
            region[region_itr]['TotalProfit']=TotalProfit;
            region[region_itr]['Total_Online_Sales']=OnlineCount;
            region[region_itr]['Total_Offline_Sales']= OfflineCount;
            region[region_itr]['Total_Categories']= ArrayOfCategories;
            region[region_itr]['Array_of_Countries']=ArrayOfCountries;
    }
    /* let write=fs.createWriteStream('output.json')
    write.write(region) */
    serverport(region);
    //console.log((JSON.stringify(region)));
}
/**
 * @description To dispaly the output on the server
 */
function serverport(region){
    //console.log(region);
const server = http.createServer((req, res) => {
var getTotalSalesByRegion= require('./salesbyregion.js');
var getTotalSalesByCountry= require('./salesbycountry.js');
var getTotalOnlineSalesByRegion= require('./onlinesalesbyregion.js');
var getTotalOfflineSalesByRegion=require('./offlinesalesbyregion.js');
var getTotalRevenueByCategory= require('./RevenueByCategory.js');
var getTotalUnitsSoldByCategory= require('./unitssoldbycategory.js');
res.statusCode = 200
res.setHeader('Content-Type', 'text/html')
res.end(`<center><h2>${getTotalSalesByRegion(region,sale)}</h2>`+
`<h2>${getTotalOnlineSalesByRegion(region,Onlinesale)}</h2>`+
`<h2>${getTotalSalesByCountry(countrynames,countrysale)}</h2>`+
`<h2>${getTotalOfflineSalesByRegion(region,Offlinesale)}</h2>`+
`<h2>${getTotalRevenueByCategory(Category,Revenue)}</h2>`+
`<h2>${getTotalUnitsSoldByCategory(Category,UnitSold)}</h2><center>`)
})
const port = 8080
server.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
})
}