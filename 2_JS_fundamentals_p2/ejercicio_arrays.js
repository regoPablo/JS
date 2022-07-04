const calcTip = (bill) => {
  let tip;
  bill > 50 && tip < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills);
console.log(tips);
