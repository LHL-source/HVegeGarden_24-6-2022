//getYieldForPlant w? yes -----------------------
// const getYieldForPlant = (corn) => {
//     const testCornYield = corn.yield
//     return corn.yield;
//     //console.log('corn.yield', corn.yield);
// };

//end getYieldForplant_1------------------------------
//start getYieldForPlant_1 w?yes
const getYieldForPlant_1 = (input) => {
    const testCornYield = input.crop.yield;
    return testCornYield
        //console.log('corn.yield', corn.yield);
};

//end getYieldForPlant_1 ------------------------------

//getYieldForCrop W? yes good job-----------------------
const getYieldForCrop = (input) => {
    const cropDataYield = input.crop.yield; //w? y
    const cropDataNumCrops = input.numCrops;
    // console.log('cropDataNumCrops', cropDataNumCrops); //w?y
    const result = cropDataYield * cropDataNumCrops; //w? y
    //  console.log('result', result); //w? y
    return result;
}; //yetyieldForCrop

//end getYieldForCrop------------------------------------

//start test getTotalYield works? works? 23-6--------------------------------------
const getTotalYield = (cropsObj) => {
        // console.log('cropsData in func getTotalYield_1', cropsObj); //w? yes amazing job

        const cornYield = cropsObj.crops[0].crop.yield; //w?y
        // console.log('cornYield ', cornYield); //w?y
        const cornNumCrops = cropsObj.crops[0].numCrops; //w?y
        // console.log('cornNumCrops ', cornNumCrops); //w? y
        const cornYieldNumCrops = cornYield * cornNumCrops; //w? y
        //  console.log('cornYieldNumCrops  ', cornYieldNumCrops); //w? y

        const pumpkinYield = cropsObj.crops[1].crop.yield; //w? not yet
        // console.log('pumpkinYield', pumpkinYield); // W?not yet
        const pumpkinNumCrops = cropsObj.crops[1].numCrops; //w?y
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

const getTotalProfit = (crops) => {
        // console.log('crops in func out .map', crops); //w? y
        // console.log('crops[0].crop.yield in func out .map', crops[0].crop.yield); //? yes
        let profitForCrop_1 = 0;
        const totalProfit = crops.map((eachCrop) => {
                console.log('crops.map', eachCrop); //W? yes
                const profitForCrop = getProfitForCrop(eachCrop); // w ? y
                console.log('profitForCrop', profitForCrop);
                console.log('return profitForCrop inner function ', profitForCrop);
                return profitForCrop
            }) //map

        console.log('totalProfit for return', totalProfit); //W? yes

        console.log('totalProfit after return', totalProfit);
        //reduce Works? yes amazing job , way to go, thumb up
        const totalProfitSum = totalProfit.reduce((total, item) => {
                console.log('total:', total);
                console.log('item:', item);

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