// Code your solution in this file!
 function returnFirstTwoDrivers(array) {
    const firstTwo = array.slice(0, 2);
    return firstTwo;
 }

 function returnLastTwoDrivers(array) {
    const lastTwo = array.slice(array.length - 2);
    return lastTwo;
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };