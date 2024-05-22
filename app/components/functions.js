/**
 * Takes an array of 40 data points and groups them into 5 sub-arrays
 * Each sub-array represents a day.
 * @param {Array} arr
 * @returns {Array}
 */
export const getItemsPerDay = (arr) => {
  const chunk = 8;

  const groups = arr.reduce((result, item, index) => {
      if (index % chunk === 0) {
          result.push(arr.slice(index, index + chunk));
      }
      return result;
  }, []);
  return groups;
};

/**
 * Iterates through the data points grouped by day and returns the average of each group
 * @param {Array} arr 
 * @returns {Array}
 */
export const getAvgItemsPerDay = (arr) => {
  return arr.reduce((result, item) => {
    result.push(avg(item));
    return result;
  }, []);
};

/**
 * Returns an average of a supplied array of numbers
 * @param {Array} arr 
 * @returns {Number}
 */
export const avg = (arr) => {
  return Math.round(arr.reduce((result, item) => result + item, 0 ) / arr.length);
};

/**
 * Assuming that the passed value is in Kelvin, this function will convert it to Fahrenheit.
 * @param {Number} temp 
 * @returns {Number}
 */
export const convertKToF = (temp) => {
  return Math.round(1.8 * (temp - 273) + 32);
};

/**
 * Iterates through the data points grouped by day and returns the high and low for each day
 * @param {Array} arr 
 * @returns {Array}
 */
export const getHighsAndLows = (arr) => {
  const newArr = []
  
  arr.forEach(subarr => {
    
    const high = subarr.reduce((acc, cur) => {
      return acc > cur ? acc : cur;
    })

    const low = subarr.reduce((acc, cur) => {
      return acc <= cur ? acc : cur;
    })

    newArr.push(high, low);
  })

  return newArr;
};