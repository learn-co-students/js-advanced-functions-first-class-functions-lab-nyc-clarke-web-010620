// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (integer){
    return function (fare){
        return fare * integer
    }
}

let fareDoubler = createFareMultiplier(2)
let fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayOfDrivers, fn){
    return fn(arrayOfDrivers)
}
