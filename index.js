// Code your solution in this file!
function returnFirstTwoDrivers(array){
    return array.slice(0,2)
}
function returnLastTwoDrivers(array){
    return array.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply){
    return function(value){
        return multiply * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, whichDrivers){
    return whichDrivers(arrayOfDrivers)
}