const {
    //getYieldForPlant,
    getYieldForPlant_1,
    // getYieldForCrop,
    // getTotalYield,
    // getTotalYieldWithFactor,
    // // getTotalYield_ZeroAmount,
    // getCostForCrop,
    // getRevenueForCropWithFactor,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit
} = require("./garden");

const {
    corn,
    pumpkin
} = require("./Vegetable");
//getYieldForPlant w? yes ----------------------------------------------
// describe("getYieldForPlant", () => {
//     // const corn = {
//     //     name: "corn",
//     //     yield: 30,
//     // };
//     //test getYieldForplatn no environ w? yes good job
//     test("Get yield for plant with no environment factors", () => {
//         expect(getYieldForPlant(corn)).toBe(30);
//     }); //test
// }); //desc
//end getYieldForplant--------------------------------------------


//getYieldForPlant_1 WITH Factor w? not yet 29-6 ----------------------------------------------
describe("getYieldForPlant_1", () => {

    test("Get yield for plant with  environment factors", () => {
        const input = {
            crop: corn,
            sun: "low", //-20
            wind: "medium", //-30

            numCrops: 1,
        }; //input
        // const environmentFactors = {
        //     sun: "low",
        //     wind: "medium",

        //}; //envirnFac

        expect(getYieldForPlant_1(input)).toBe(16.8); //30//24.00//16.80
    }); //test
}); //desc
//end getYieldForplant_1--------------------------------------------


// getYieldForCrop no factorw? yes good job---------------------------
// describe("getYieldForCrop", () => {
//     test("Get yield for crop, no environments factor", () => {

//         const input = {
//             crop: corn,
//             numCrops: 1,
//         };
//         expect(getYieldForCrop(input)).toBe(30); //input, toBe(30)
//     }); //test
// }); //desc

//end getYieldForCrop no factor----------------------------

// getYieldForCrop with factor w? yes ---------------------------
// describe("getYieldForCrop", () => {
//     test("Get yield for crop, with environmentfactors", () => {
//         const environmentFactors = {
//             sun: "low",
//             wind: "medium",
//         };
//         const input = {
//             crop: corn,
//             numCrops: 1,
//         };
//         expect(getYieldForCrop(input, environmentFactors)).toBe(16.80); //24
//     }); //test
// }); //desc

//end getYieldForCrop with factor----------------------------


//getTotalYield no factorw? yes------------------------------------
// describe("getTotalYield", () => {
//     test("Calculate total yield with multiple crops no fac", () => {
//         // const corn = {
//         //     name: "corn",
//         //     yield: 3,
//         // }; //corn

//         // const environmentFactors = {
//         //     sun: "medium",

//         //}; //envirnFac
//         const crops = [
//             { crop: corn, numCrops: 10 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         expect(getTotalYield({ crops })).toBe(308);
//     }); //test
//end getTotalYield---------------------------------------------

//getTotalYield WITH factor w? yes 28-6------------------------------------
// describe("getTotalYieldWithFactor", () => {
//     test("getTotalYield WITH factor", () => {

//         const crops = [
//             { crop: corn, numCrops: 10 },
//             { crop: pumpkin, numCrops: 2 },
//         ];
//         const environmentFactors = {
//             sun: "high",
//             wind: "high",
//         }; //envirnFac
//         expect(getTotalYieldWithFactor({ crops }, environmentFactors))
//             .toBe(184.80); //308
//     }); //test
// });
//end getTotalYield--------------------------------------

//test Calculate total yield with 0 amount: w? yes
//     test("Calculate total yield with 0 amount", () => {
//         const corn = {
//             name: "corn",
//             yield: 3,
//         };
//         const crops = [{ crop: corn, numCrops: 0 }];
//         expect(getTotalYield_ZeroAmount({ crops })).toBe(0);
//     });
// }); //desc
//end test Calculate total yield with 0 amount

//test getCostForCrop W? yes good job 22-6---------------------------------
// describe('calculate cost for a crop', () => {
//     test("Calculate cost for a crop", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };

//         expect(getCostForCrop(input)).toBe(10);

//     }); //test
// }); //desc
//end test getCostForCrop---------------------------------------
//test getRevenueForcrop No factor w? yes-----------------------------------
// describe('getRevenueForCrop No fac', () => {
//     test("getRevenueForCrop No fac", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };

//         expect(getRevenueForCrop(input)).toBe(600);
//     }); //test
// }); //desc

//end test getRevenueForcrop

//test getRevenueForcrop With factor w? yes-----------------------------------
// describe('getRevenueForCrop With fac', () => {
//     test("getRevenueForCrop with fac", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };
//         const environmentFactors = {
//             sun: "medium",
//             wind: "high",
//         }; //envirnFac
//         expect(getRevenueForCropWithFactor(input, environmentFactors)).toBe(120.00);
//     }); //test
// }); //desc

//end test getRevenueForcropWithFactor

//test getProfitForCrop w? yes-----------------------------------
// describe('getProfitForCrop', () => {
//     test("getProfitForCrop", () => {

//         const input = {
//             crop: corn,
//             numCrops: 10,
//         };

//         expect(getProfitForCrop(input)).toBe(590);
//     }); //test
// }); //desc

//end test getProfitForCrop---------------------------------

//test getTotalProfit w? not yet-----------------------------------
// describe('getTotalProfit', () => {
// test("getTotalProfit", () => {

//     const crops = [
//         { crop: corn, numCrops: 10 },
//         { crop: pumpkin, numCrops: 2 },
//     ];
//     expect(getTotalProfit(crops)).toBe(612);

// }); //test
// }); //desc

//end test getTotalProfit-----------------------

//test1 works? yes way to go girl----------------------
// describe('de som is ', () => {
//     test('one + two', () => {
//         expect(gardenfunctions_1(1, 2)).toBe(3)
//     });
// }); //desc
//end test1--------------------------------------------
//test 2 w? not yet-----------------------------------
// describe("addOne", () => {
//     test("Adds two together", () => {
//         expect(gardenfunctions.addOne(3, 4)).toBe(7);
//     }); //test
// });
// end test1------------------------------------------
//});