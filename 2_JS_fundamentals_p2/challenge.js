let bills = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let tips = [];
let totals = [];

const calcTip = (bills) => {
  let tip;

  for (var i = 0; i < bills.length; i++) {
    if (bills[i] > 50 && bills[i] < 300) {
      tip = bills[i] * 0.15;
    } else {
      tip = bills[i] * 0.2;
    }

    tips.push(tip);
    totals.push(tip + bills[i]);
  }
};

const calcAverage = (arr) => {
  let arrSum = 0;

  for (var i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return arrSum / arr.length;
};

calcTip(bills);
calcAverage(bills);

console.log(tips);
console.log(totals);
