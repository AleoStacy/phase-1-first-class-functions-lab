// Code your solution in this file!
// 1. Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2); 
};

// 2. Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2); 
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function that creates a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier; 
  };
}

// 5. Function to double the fare
const fareDoubler = createFareMultiplier(2); 

// 6. Function to triple the fare
const fareTripler = createFareMultiplier(3); 

// 7. Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, callback) {
  return callback(drivers); 
}

console.log(returnFirstTwoDrivers(['Stacy', 'Steph', 'Cleo', 'Yvonne'])); 
console.log(returnLastTwoDrivers(['Stacy', 'Steph', 'Cleo', 'Yvonne'])); 
console.log(selectingDrivers[0]( ['Stacy', 'Steph', 'Cleo', 'Yvonne'] )); 
console.log(selectingDrivers[1]( ['Stacy', 'Steph', 'Cleo', 'Yvonne'] )); 
console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 
console.log(selectDifferentDrivers(['Stacy', 'Steph', 'Cleo', 'Yvonne'], returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(['Stacy', 'Steph', 'Cleo', 'Yvonne'], returnLastTwoDrivers)); 
