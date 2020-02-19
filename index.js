// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function innerFunc(fare) {
    return fare * integer;  
}
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2);
    return doubler(fare);
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3);
    return tripler(fare);
}

function selectDifferentDrivers(drivers, method) {
    return method(drivers);
}
