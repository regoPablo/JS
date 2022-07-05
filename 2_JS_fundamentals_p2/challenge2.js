const printForecast = (arr) => {
  let weatherStr = "";

  for (let i = 0; i < arr.length; i++) {
    weatherStr += `...${arr[i]}ºC in ${i + 1} days`;
  }

  weatherStr += `...`;
  return weatherStr;
};

let weatherResult = printForecast([17, 21, 23]);
console.log(weatherResult);
