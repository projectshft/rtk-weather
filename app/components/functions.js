export const getItemsPerDay = (arr) => {
  // Split the array of 40 data points into 5 sub-arrays.
  // Each array represents a day of data.

  const chunk = 8;

  const groups = arr.reduce((result, item, index) => {
      if (index % chunk === 0) {
          result.push(arr.slice(index, index + chunk));
      }
      return result;
  }, []);
  return groups;
};

export const getAvgItemsPerDay = (arr) => {
  // Iterates through the data points grouped by day and returns the average grouped by day
  return arr.reduce((result, item) => {
    result.push(avg(item));
    return result;
  }, []);
};

export const avg = (arr) => {
  // Returns an average of a supplied array of numbers
  return Math.round(arr.reduce((result, item) => result + item, 0 ) / arr.length);
};

export const convertKToF = (temp) => {
  // Assuming that the passed value is Kelvin, this function will convert it to Fahrenheit
  return Math.round(1.8 * (temp - 273) + 32);
};

export const getHighsAndLows = (arr) => {
  const newArr = []
  
  for (const a in arr) {
    const subarr = arr[a];
    let high = 0;
    let low = 0;
    
    for (let s = 0; s < subarr.length - 1; s++) {
      high, low = subarr[s];
      const nextValue = subarr[s+1];

      high = high > nextValue ? high : nextValue;
      low = low < nextValue ? low : nextValue;
    }
    newArr.push(high, low);
  }

  console.log(newArr);
  return newArr;
};