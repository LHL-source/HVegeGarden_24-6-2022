//getYieldForPlant w? yes -----------------------
// const getYieldForPlant = (corn) => {
//     const testCornYield = corn.yield
//     return corn.yield;
//     //console.log('corn.yield', corn.yield);
// };

//end getYieldForplant_1------------------------------
//start getYieldForPlant_1 w with factor?not yet
const getYieldForPlant_1 = (input) => {
    console.log('input getYieldFroPlant_1 before if:', input); //w? y
    console.log("input.crop.factors.sun.low: ", input.crop.factors.sun.low); //w? y
    console.log("input.crop.factors.sun.medium: ", input.crop.factors.sun.medium); //w? 
    console.log("input.crop.factors.sun.high: ", input.crop.factors.sun.high); //w?

    console.log("input.crop.factors.wind.low: ", input.crop.factors.wind.low); //w?y
    console.log("input.crop.factors.wind.medium: ", input.crop.factors.wind.medium); //w?y
    console.log("input.crop.factors.wind.high: ", input.crop.factors.wind.high); //w?y

    if (input.sun = "low") {
        const sunFactor = (100 + input.crop.factors.sun.low) / 100;
        console.log("sunFactor low -20: ", sunFactor);

    } else if (input.sun = "medium") {
        const sunFactor = (100 + input.crop.factors.sun.medium) / 100;
        console.log("input.crop.factors.sun.medium: ", input.crop.factors.sun.medium);
        console.log("sunFactor medium 0: ", sunFactor);

    } else if (input.sun = "high") {
        const sunFactor = (100 + input.crop.factors.sun.high) / 100;
        console.log("sunFactor high 50: ", sunFactor);
    };

    if (input.wind = "low") {
        const windFactor = (100 + input.crop.factors.wind.low) / 100;
        console.log("windFactor low 0: ", windFactor);
    } else if (input.wind = "medium") {
        const windFactor = (100 + input.crop.factors.wind.medium) / 100;
        console.log("windFactor medium -30: ", windFactor);
    } else if (input.wind = "high") {
        const windFactor = (100 + input.crop.factors.wind.high) / 100;
        console.log("windFactor high -60: ", windFactor);
    };
    const sunWind = sunFactor * windFactor;
    const yieldInclFac = input.crop.yield * sunWind;
    console.log('sunWind: ', sunWind);
    console.log(' yieldInclFac: ', yieldInclFac);
    return yieldInclFac


    // if (!factor) {
    //     const testCornYield = input.crop.yield;
    //     //   console.log('testCornYield:', testCornYield);
    //     return testCornYield
    //         //console.log('corn.yield', corn.yield);
    // }; //if !factor


    // //   console.log("sun, wind : ", sun, wind); //w? y
    // const yieldPerPlant = input.yield * sun * wind;
    // //  console.log("yield per plant:", yieldPerPlant);
    // return parseFloat(yieldPerPlant.toFixed(2));

}; // getYieldForPlant_1 with factor

//end getYieldForPlant_1 ------------------------------

//getYieldForCrop with environment factor W? yes good job-----------------------
//const getYieldForCrop = (input, factor) => {
// console.log('input of getYieldForCrop: ', input);

//  const yieldPerPlant = getYieldForPlant_1(input.crop, factor);
// console.log('input.crop of yetYieldForCrop:', input.crop);
// console.log('factor of yetYieldForCrop:', factor); //w? y
// console.log('yieldPerPlant', yieldPerPlant); //w? y


//const yieldPerCrop = yieldPerPlant * input.numCrops;
//console.log(' input.numCrops of getYieldForCrop', yieldPerCrop); //w?y
// console.log(' yieldPerCrop', yieldPerCrop); //w?y
//const parseYieldForCrop = parseFloat(yieldPerCrop.toFixed(2)); //w?y
//console.log('parseFloat yieldPerCrop of getYieldForCrop:', parseYieldForCrop);
//return parseYieldForCrop;

//here under getYieldForCrop no factor w? yes-------------------------
// const cropDataYield = input.crop.yield; //w? y
// const cropDataNumCrops = input.numCrops;
// // console.log('cropDataNumCrops', cropDataNumCrops); //w?y
// const result = cropDataYield * cropDataNumCrops; //w? y
// //  console.log('result', result); //w? y
// return result;
//}; //yetyieldForCrop

//end getYieldForCrop no factor------------------------------------



//start test getTotalYield no factor works? yes? 23-6--------------------------------------
//const getTotalYield = (input) => {
//  console.log('input of getTotalYield no fac', input);

//  const cornYield = input.crops[0].crop.yield; //w?y
// console.log('cornYield ', cornYield); //w?y
//    const cornNumCrops = input.crops[0].numCrops; //w?y
// console.log('cornNumCrops ', cornNumCrops); //w? y
//  const cornYieldNumCrops = cornYield * cornNumCrops; //w? y
//  console.log('cornYieldNumCrops  ', cornYieldNumCrops); //w? y

//    const pumpkinYield = input.crops[1].crop.yield; //w? not yet
// console.log('pumpkinYield', pumpkinYield); // W?not yet
//   const pumpkinNumCrops = input.crops[1].numCrops; //w?y
// console.log('pumpkinNumCrops ', pumpkinNumCrops); //w/y
//const pumpkinYieldNumCrops = pumpkinYield * pumpkinNumCrops; / / w ? y
// console.log('pumpkinYieldNumCrops  ', pumpkinYieldNumCrops); //w? y

//const resultYieldCrop = cornYieldNumCrops + pumpkinYieldNumCrops; //wy
// console.log(' resultYieldCrop  ', resultYieldCrop); //w? y

//return resultYieldCrop
//} //getTotalY

//end getTotalYield no fac---------------------------------------------------------------

//start test getTotalYield WITH factor works? yes good job? 29-6--------------------------------------
//const getTotalYieldWithFactor = (input, factor) => {
// console.log('getTotalYieldWithFactor input', input); //w? 
//console.log('getTotalYieldWithFactor factor', factor); //w?y

// const yieldPerCrop = input.crops.map((eachCrop) => {
//     //  console.log('eachCrop ', eachCrop);
//     const getYieldForCropArray = getYieldForCrop(eachCrop, factor)
//         //   console.log('eachCrop of getYieldForcrop in map', getYieldForCrop)
//     return getYieldForCropArray
// }); //.map
// console.log('yieldPerCrop', yieldPerCrop);
// let acc;
// let cur;
// const totalYield = yieldPerCrop.reduce((acc, cur) => acc + cur);
// console.log('acc of totalYield', acc);
// console.log('cur of totalYield', cur);
// // console.log('reduce : totalYield before parseFloat ', totalYield);
// return parseFloat(totalYield.toFixed(2));


//}; //getTotal

//end getTotalYield WITH factor--------------------------------------------------------------

//start test getTotalYield_ZeroAmount No factor works? yes good job--------------------------------------
// const getTotalYield_ZeroAmount = (cropsObj) => {
//         // console.log('cropsData in func getTotalYield_1', cropsObj); //w? yes amazing job

//         const cornYield = cropsObj.crops[0].crop.yield; //w?y
//         //console.log('cornYield ', cornYield); //w?y
//         const cornNumCrops = cropsObj.crops[0].numCrops; //w?y
//         //console.log('cornNumCrops ', cornNumCrops); //w? y
//         const cornYieldNumCrops = cornYield * cornNumCrops; //w? y
//         //console.log('cornYieldNumCrops  ', cornYieldNumCrops); //w? y

//         const resultYieldCrop = cornYieldNumCrops; //wy
//         //console.log(' resultYieldCrop  ', resultYieldCrop); //w? y

//         return resultYieldCrop
//     } //getTotalY
//end getTotalYield---------------------------------------------------------------

//start getCostForCrop works? yes good job--------------------------------------
// const getCostForCrop = (input) => {
//         const costOnePlant = 1;
//         const costCorn = input.numCrops * costOnePlant;
//         const sumCost = costCorn;
//         return sumCost
//     } //getTotalY
// end  getCostForCrop----------------------------------------------

//start getRevenueForCrop No Factorw? not yet 29-6-------------------------------------
// const getRevenueForCropWithFactor = (input, factor) => {
//         console.log('input getRevenueForCrop with fac', input); //w? y
//         console.log('input.corn.salesPrice ', input.crop.salesPrice); //w?y
//         //console.log('input.crop.yield ', input.crop.yield);
//         console.log('input.numCrops ', input.numCrops); //w? y

//         const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant_1(input, factor)
//         console.log('revenueForOnePlant', revenueForOnePlant);
//         const revenueForCrop = revenueForOnePlant * input.numCrops;
//         console.log('revenueForCrop', revenueForCrop);
//         return revenueForCrop //?
//     } //getREv

//end getRevenueForCrop ---------------------------------------------

//start getRevenueForCrop With Factorw? not yet 29-6-------------------------------------
// const getRevenueForCrop = (input) => {
//         // console.log('input getRevenueForCrop', input);
//         // console.log('input.corn.salesPrice ', input.crop.salesPrice);
//         // console.log('input.crop.yield ', input.crop.yield);
//         // console.log('input.numCrops ', input.numCrops);

//         const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant_1(input)
//             // console.log('revenueForOnePlant', revenueForOnePlant);
//         const revenueForCrop = revenueForOnePlant * input.numCrops;
//         return revenueForCrop //?
//     } //getREv

//end getRevenueForCrop WITH factor ---------------------------------------------
//getProfitForCrop w? yes amazing job in one run---------------------------------------
// const getProfitForCrop = (input) => {
//         //console.log('input in func getProfitForCrop', input); //w? y
//         const profitForCrop = getRevenueForCrop(input) - getCostForCrop(input);
//         //console.log('profitForCrop', profitForCrop); //w? yes
//         return profitForCrop


//     } //getProfit
//end getProfitForCrop -----------------------------------------------


//start getTotalProfit w? works? yes-------------------------------------

// const getTotalProfit = (input) => {
//         // console.log('crops in func out .map', crops); //w? y
//         // console.log('crops[0].crop.yield in func out .map', crops[0].crop.yield); //? yes
//         let profitForCrop_1 = 0;
//         const totalProfit = input.map((eachCrop) => {
//                 // console.log('crops.map', eachCrop); //W? yes
//                 const profitForCrop = getProfitForCrop(eachCrop); // w ? y
//                 // console.log('profitForCrop', profitForCrop);
//                 //  console.log('return profitForCrop inner function ', profitForCrop);
//                 return profitForCrop
//             }) //map

// console.log('totalProfit for return', totalProfit); //W? yes

// console.log('totalProfit after return', totalProfit);
//reduce Works? yes amazing job , way to go, thumb up
// const totalProfitSum = totalProfit.reduce((total, item) => {
//         // console.log('total:', total);
//         //   console.log('item:', item);

//         const totalItem = total + item;
//         return totalItem

//     }, 0) //reduce
// return totalProfitSum
// console.log('totalProfitSum: ${totalProfitSum}');
// } //getTotal





module.exports = {
    // getYieldForPlant,
    getYieldForPlant_1,
    // getYieldForCrop,
    // getTotalYield,
    // getTotalYieldWithFactor,
    // //getTotalYield_ZeroAmount,
    // getCostForCrop,
    // getRevenueForCrop,
    // getRevenueForCropWithFactor,
    // getProfitForCrop,
    // getTotalProfit
};


//start test1 case------------------------------------
// test1 works? yes good job
// const gardenfunctions_1 = (one, two) => {
//     console.log('one, two', one, two);
//     const som = one + two;
//     return som;
// };
// module.exports = { gardenfunctions_1 };
//const somprint = gardenfunctions_1(1, 2);
//console.log('somprint: ', somprint);//w? yes good job
//end test1------------------------------------------------