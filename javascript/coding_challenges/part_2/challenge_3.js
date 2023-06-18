/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

let mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

let john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return this.weight / this.height ** 2;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullname}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullname
    }'s BMI (${john.calcBMI()}).`
  );
} else if (mark.calcBMI() < john.calcBMI()) {
  console.log(
    `${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullname
    }'s BMI (${mark.calcBMI()}).`
  );
} else {
  console.log(`${mark.fullname}'s BMI is the same as ${john.fullname}'s BMI.`);
}
