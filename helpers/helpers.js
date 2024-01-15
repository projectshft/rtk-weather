

const average = (Arr, type) => {
  return Math.floor(Arr.map(item => item.main[type]).reduce((a, b) => a + b, 0) / Arr.length);
}

export default average;