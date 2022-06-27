//getYieldForPlant w? yes -----------------------
// const getYieldForPlant = (corn) => {
//     const testCornYield = corn.yield
//     return corn.yield;
//     //console.log('corn.yield', corn.yield);
// };

//end getYieldForplant_1------------------------------
//start getYieldForPlant_1 w with factor?not yet
const getYieldForPlant_1 = (input, factor) => {
    console.log('input for if:', input); //w? y
    console.log('factor for if:', factor); //w?y
    if (!factor) {
        const testCornYield = input.crop.yield;
        console.log('testCornYield:', testCornYield);
        return testCornYield
            //console.log('corn.yield', corn.yield);
    }; //if !factor
    let sun;
    let wind;
    if (!input.factors.sun) {
        sun = 1;
    } //if
    else {
        switch (factor.sun) {
            case "low":
                sun = (100 + input.factors.sun.low) / 100;
                break;
            case "medium":
                sun(100 + input.factors.sun.medium) / 100;
                break;
            case "high":
                sun = (100 + input.factors.sun.high) / 100;
                break;
            default:
                sun = 1;
        }; //switch

    }; //else
    if (!input.factors.wind) {
        wind = 1;
    } else {
        switch (factor.wind) {
            case "low":
                wind = (100 + input.factors.wind.low) / 100;
                break;
            case "medium":
                wind = (100 + input.factors.wind.medium) / 100;
                break;
            case "high":
                wind = (100 + input.factors.wind.high) / 100;
                break;
            default:
                wind = 1;
        };
    };
    console.log("sun, wind : ", sun, wind);
    const yieldPerPlant = input.field * sun * wind;
    console.log("yield per plant:", yieldPerPlant);
    return parseFloat(yieldPerPlant.toFixed(2));

}; // getYieldForPlant_1 with factor
//end getYieldForPlant_1 ------------------------------

//getYieldForCrop with environment factor W? not yet-----------------------
const getYieldForCrop = (input) => {
    console.log('input of yetYieldForCrop: ', input);

    const yieldPerPlant = getYieldForPlant_1(input.crop, factor);
    console.log('input.crop of yetYieldForCrop:', input.crop);
    console.log('factor of yetYieldForCrop:', factor);
    console.log('yieldPerPlant', yieldPerPlant);


    const yieldPerCrop = yieldPerPlant * input.numCrops;
    console.log(' input.numCrops of getYieldForCrop', yieldPerCrop);
    console.log(' yieldPerCrop', yieldPerCrop);
    const parseYieldForCrop = parseFloat(yieldPerCrop.toFixed(2));
    console.log('parseFloat yieldPerCrop of getYieldForCrop:', parseYieldForCrop);
    return parseYieldForCrop;

    // const cropDataYield = input.crop.yield; //w? y
    // const cropDataNumCrops = input.numCrops;
    // // console.log('cropDataNumCrops', cropDataNumCrops); //w?y
    // const result = cropDataYield * cropDataNumCrops; //w? y
    // //  console.log('result', result); //w? y
    // return result;
}; //yetyieldForCrop

//end getYieldForCrop no factor------------------------------------

//getYieldForCrop with environment factorW? not yet-----------------------
// const getYieldForCropFactor = (input, factor) => {
//     const cropDataYield = input.crop.yield; //w? y
//     const cropDataNumCrops = input.numCrops;
//     // console.log('cropDataNumCrops', cropDataNumCrops); //w?y
//     const result = cropDataYield * cropDataNumCrops; //w? y
//     //  console.log('result', result); //w? y



//     return result; //???
// }; //yetyieldForCrop

//end getYieldForCrop with factor------------------------------------


//start test getTotalYield works? works? 23-6--------------------------------------
const getTotalYield = (input, factor) => {
        console.log('getTotalYield', input); //w? yes amazing job

        const cornYield = input.crops[0].crop.yield; //w?y
        console.log('cornYield ', cornYield); //w?y
        const cornNumCrops = input.crops[0].numCrops; //w?y
        // console.log('cornNumCrops ', cornNumCrops); //w? y
        const cornYieldNumCrops = cornYield * cornNumCrops; //w? y
        //  console.log('cornYieldNumCrops  ', cornYieldNumCrops); //w? y

        const pumpkinYield = input.crops[1].crop.yield; //w? not yet
        // console.log('pumpkinYield', pumpkinYield); // W?not yet
        const pumpkinNumCrops = input.crops[1].numCrops; //w?y
        // console.log('pumpkinNumCrops ', pumpkinNumCrops); //w/y
        const pumpkinYieldNumCrops = pumpkinYield * pumpkinNumCrops; //w? y
        // console.log('pumpkinYieldNumCrops  ', pumpkinYieldNumCrops); //w? y

        const resultYieldCrop = cornYieldNumCrops + pumpkinYieldNumCrops; //wy
        // console.log(' resultYieldCrop  ', resultYieldCrop); //w? y

        return resultYieldCrop
    } //getTotalY

//end getTotalYield---------------------------------------------------------------

//start test getTotalYield_ZeroAmount works? yes good job--------------------------------------
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
const getCostForCrop = (input) => {
        const costOnePlant = 1;
        const costCorn = input.numCrops * costOnePlant;
        const sumCost = costCorn;
        return sumCost
    } //getTotalY
    // end  getCostForCrop----------------------------------------------

//start getRevenueForCrop w? yes 22-6-------------------------------------
const getRevenueForCrop = (input) => {
        // console.log('input getRevenueForCrop', input);
        // console.log('input.corn.salesPrice ', input.crop.salesPrice);
        // console.log('input.crop.yield ', input.crop.yield);
        // console.log('input.numCrops ', input.numCrops);

        const revenueForOnePlant = input.crop.salesPrice * getYieldForPlant_1(input)
            // console.log('revenueForOnePlant', revenueForOnePlant);
        const revenueForCrop = revenueForOnePlant * input.numCrops;
        return revenueForCrop //?
    } //getREv

//end getRevenueForCrop ---------------------------------------------

//getProfitForCrop w? yes amazing job in one run---------------------------------------
const getProfitForCrop = (input) => {
        //console.log('input in func getProfitForCrop', input); //w? y
        const profitForCrop = getRevenueForCrop(input) - getCostForCrop(input);
        //console.log('profitForCrop', profitForCrop); //w? yes
        return profitForCrop


    } //getProfit
    //end getProfitForCrop -----------------------------------------------


//start getTotalProfit w? works? yes-------------------------------------

const getTotalProfit = (input) => {
        // console.log('crops in func out .map', crops); //w? y
        // console.log('crops[0].crop.yield in func out .map', crops[0].crop.yield); //? yes
        let profitForCrop_1 = 0;
        const totalProfit = input.map((eachCrop) => {
                // console.log('crops.map', eachCrop); //W? yes
                const profitForCrop = getProfitForCrop(eachCrop); // w ? y
                // console.log('profitForCrop', profitForCrop);
                //  console.log('return profitForCrop inner function ', profitForCrop);
                return profitForCrop
            }) //map

        // console.log('totalProfit for return', totalProfit); //W? yes

        // console.log('totalProfit after return', totalProfit);
        //reduce Works? yes amazing job , way to go, thumb up
        const totalProfitSum = totalProfit.reduce((total, item) => {
                // console.log('total:', total);
                //   console.log('item:', item);

                const totalItem = total + item;
                return totalItem

            }, 0) //reduce
        return totalProfitSum
        console.log('totalProfitSum: ${totalProfitSum}');
    } //getTotal



//test2 case works?not yet --------------------------------
// const gardenfunctions = {
//     addOne: (one, two) => {
//         return one + two
//     },
//     minusOne: (one, two) => {},
// };
// const test = addOne(1, 2);
// console.log('test', test);
//module.exports = gardenfunctions;
//end test2--------------------------------------------

module.exports = {
    // getYieldForPlant,
    getYieldForPlant_1,
    getYieldForCrop,
    getTotalYield,
    //getTotalYield_ZeroAmount,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
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