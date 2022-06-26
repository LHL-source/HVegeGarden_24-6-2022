//w? yes very good job!!
const corn = {
    name: "corn",
    yield: 30,
    salesPrice: 2,
    factors: {
        sun: {
            low: -20,
            medium: 0,
            high: 50,
        },
        wind: {
            low: 0,
            medium: -30,
            high: -60,
        },
    },
}; //corn
const pumpkin = {
    name: "pumpkin",
    yield: 4,
    salesPrice: 3,
    factors: {
        sun: {
            low: -20,
            medium: 0,
            high: 50,
        },
        wind: {
            low: 0,
            medium: -30,
            high: -60,
        },
    },
}; //pumpkin
module.exports = { corn, pumpkin };