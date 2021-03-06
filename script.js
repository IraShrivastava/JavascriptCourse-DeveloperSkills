// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1:
/* We work for a company building a smart home 
thermometer, Our most recent task is this: "Given an 
array of temperatures of one day, calculate the 
temperature amplitude. Keep in mind that sometimes 
there might be a sensor error." */

//const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Q. what is temp altitude?
//A. Difference between highest and lowest temp
//Q. how to compute the max and min temperatures?
//   what's a sensor error? and what to do when one occurs

//breaking into sub-problem
//how to ignore errors?
//find max value in temp array
//find min value in temp array
//subtract min from max [amplitude] and return it

/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temp);
console.log(amplitude); */

//PROBLEM 2:
//Function should now receive 2 arrays of temps

/* const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //prompt returns string
    //C. FIX
    value: 10,
  };
  //B. FIND
  console.log(measurement);
  console.table(measurement);
  //console.log(measurement.value);
  /* console.warn(measurement.value);
  console.error(measurement.value); */
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A. IDENTIFY
console.log(measureKelvin());

//using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//A. IDENTIFY
console.log(amplitudeBug);
