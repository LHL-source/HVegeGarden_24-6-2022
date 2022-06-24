const {
    //getYieldForPlant,
    getYieldForPlant_1,
    getYieldForCrop,
    getTotalYield,
    // getTotalYield_ZeroAmount,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit
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


//getYieldForPlant_1 w? yes ----------------------------------------------
describe("getYieldForPlant_1", () => {

    const input = {
        crop: corn,
        numCrops: 1,
    };
    //test getYieldForplatn no environ w? yes good job
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant_1(input)).toBe(30);
    }); //test
}); //desc
//end getYieldForplant_1--------------------------------------------


// getYieldForCrop w? yes good job---------------------------
describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {

        const input = {
            crop: corn,
            numCrops: 1,
        };
        expect(getYieldForCrop(input)).toBe(30);
    }); //test
}); //desc




//getTotalYield w? yes------------------------------------
describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        // const corn = {
        //     name: "corn",
        //     yield: 3,
        // }; //corn

        const crops = [
            { crop: corn, numCrops: 10 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(308);
    }); //test
    //end getTotalYield---------------------------------------------

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
    describe('calculate cost for a crop', () => {
        test("Calculate cost for a crop", () => {

            const input = {
                crop: corn,
                numCrops: 10,
            };

            expect(getCostForCrop(input)).toBe(10);

        }); //test
    }); //desc
    //end test getCostForCrop---------------------------------------
    //test getRevenueForcrop w? yes-----------------------------------
    describe('calculate revenue for a crop', () => {
        test("Calculate revenue for a crop", () => {

            const input = {
                crop: corn,
                numCrops: 10,
            };

            expect(getRevenueForCrop(input)).toBe(600);
        }); //test
    }); //desc

    //end test getRevenueForcrop

    //test getProfitForCrop w? yes-----------------------------------
    describe('getProfitForCrop', () => {
        test("getProfitForCrop", () => {

            const input = {
                crop: corn,
                numCrops: 10,
            };

            expect(getProfitForCrop(input)).toBe(590);
        }); //test
    }); //desc

    //end test getProfitForCrop---------------------------------

    //test getTotalProfit w? not yet-----------------------------------
    describe('getTotalProfit', () => {
        test("getTotalProfit", () => {

            const crops = [
                { crop: corn, numCrops: 10 },
                { crop: pumpkin, numCrops: 2 },
            ];
            expect(getTotalProfit(crops)).toBe(612);

        }); //test
    }); //desc

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
});