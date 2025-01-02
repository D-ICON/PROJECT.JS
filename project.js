// function calculateSum(sum) {
//     return sum.reduce((a, b) => a + b, 0);
//   }
//   const numbers = [1, 2, 3, 4, 5];
// console.log(calculateSum(numbers));


function convertLength(value, fromUnit, toUnit) {
    const conversions = {
      meter: {
        meter: 1,
        centimeter: 100,
        millimeter: 1000,
        kilometer: 0.001,
        inch: 39.37,
        foot: 3.281,
        yard: 1.094,
        mile: 0.000621371
      },
      centimeter: {
        meter: 0.01,
        centimeter: 1,
        millimeter: 10,
        kilometer: 0.00001,
        inch: 0.3937,
        foot: 0.03281,
        yard: 0.01094,
        mile: 0.00000621371
      },
      millimeter: {
        meter: 0.001,
        centimeter: 0.1,
        millimeter: 1,
        kilometer: 0.000001,
        inch: 0.03937,
        foot: 0.003281,
        yard: 0.001094,
        mile: 0.000000621371
      },
      kilometer: {
        meter: 1000,
        centimeter: 100000,
        millimeter: 1000000,
        kilometer: 1,
        inch: 39370,
        foot: 3281,
        yard: 1094,
        mile: 0.621371
      },
      inch: {
        meter: 0.0254,
        centimeter: 2.54,
        millimeter: 25.4,
        kilometer: 0.0000254,
        inch: 1,
        foot: 0.08333,
        yard: 0.02778,
        mile: 0.000015783
      },
      foot: {
        meter: 0.3048,
        centimeter: 30.48,
        millimeter: 304.8,
        kilometer: 0.0003048,
        inch: 12,
        foot: 1,
        yard: 0.33333,
        mile: 0.000189394
      },
      yard: {
        meter: 0.9144,
        centimeter: 91.44,
        millimeter: 914.4,
        kilometer: 0.0009144,
        inch: 36,
        foot: 3,
        yard: 1,
        mile: 0.000568182
      },
      mile: {
        meter: 1609.34,
        centimeter: 160934,
        millimeter: 1609340,
        kilometer: 1.60934,
        inch: 63360,
        foot: 5280,
        yard: 1760,
        mile: 1
      }
    };
  
    if (conversions[fromUnit] && conversions[fromUnit][toUnit]) {
      return value * conversions[fromUnit][toUnit];
    } else {
      throw new Error(`Unsupported unit conversion from ${fromUnit} to ${toUnit}`);
    }
  }
  console.log(convertLength(10, 'meter', 'centimeter'));