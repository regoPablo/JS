const Mark = {
  fullName: "Mark",
  mass: 78,
  height: 169,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  },
};

const John = {
  fullName: "John",
  mass: 92,
  height: 195,
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();

if (Mark.bmi > John.bmi) {
  console.log(`Mark BMI (${Mark.bmi}) is higher then John BMI (${John.bmi})`);
} else if (John.bmi > Mark.bmi) {
  console.log(`John BMI (${John.bmi}) is higher then Mark BMI (${Mark.bmi})`);
} else {
  console.log(`Both have the same BMI (${johnBMI})`);
}
