// Code your solution in this file!


function returnFirstTwoDrivers(drivers){
    let firsttwo = []
    firsttwo.push(drivers[0])
    firsttwo.push(drivers[1])
    
    return firsttwo
}

function returnLastTwoDrivers(drivers) {
  let lasttwo = []
    lasttwo.push(drivers[drivers.length - 2])
    lasttwo.push(drivers[drivers.length - 1])

  return lasttwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num){

    return function(newnum){ return newnum * num
    }
}

function fareDoubler(fare){
    return fare * 2

}

function fareTripler(fare) {
    return fare * 3

}

function selectDifferentDrivers(arrayOfDrivers, newf){
    return newf(arrayOfDrivers)
}