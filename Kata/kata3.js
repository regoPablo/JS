//Kata Codewars
//Nombew: Minimum amount of fuel needed to get some iron ingots
//Kyu: 6

/*
But first, Steve needs to melt some iron ores in the furnace to get the main building blocks of rails -- iron ingots.Alt text

Each iron ingot takes 11 seconds* to produce. Steve needs a lot of them, and he has the following fuel options to add into the furnace:

Buckets of lava, each lasts 800 seconds*Alt text
Blaze rod, each lasts 120 secondsAlt text
Coals, each lasts 80 secondsAlt text
Blocks of Wood, each lasts 15 secondsAlt text
Sticks, each lasts 1 second*Alt text
In JavaScript: Write a function calcFuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return an object of the form {lava: 2, blazeRod: 1, coal: 1, wood: 0, stick: 0} In Python: Write a function calc_fuel that calculates the minimum amount of fuel needed to produce a certain number of iron ingots. This function should return a dictionary of the form {"lava": 2, "blaze rod": 1, "coal": 1, "wood": 0, "stick": 0}
*/

function calcFuel(n) {
  let fuelReq = {
    lava: 0,
    blazeRod: 0,
    coal: 0,
    wood: 0,
    stick: 0,
  };
  while (n > 0.09) {
    console.log(n);
    if (n >= 72.72) {
      n = n - 72.72;
      fuelReq.lava++;
    } else if (n >= 10.9) {
      n = n - 10.9;
      fuelReq.blazeRod++;
    } else if (n >= 7.27) {
      n = n - 7.27;
      fuelReq.coal++;
    } else if (n >= 1.36) {
      n = n - 1.36;
      fuelReq.wood++;
    } else {
      n = n - 0.09;
      fuelReq.stick++;
    }
  }

  return fuelReq;
}

let n = 21;
let prueba = calcFuel(n);
console.log(prueba);
