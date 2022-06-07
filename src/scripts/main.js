console.log("Welcome to the main module")

//importing createplan set to var to log to test
import { createPlan } from "./plan.js"
const yearlyPlan= createPlan()
console.log(yearlyPlan)

import { plantSeeds } from "./tractor.js"
plantSeeds(yearlyPlan);

import { usePlants } from "./field.js"
const plants = usePlants();

import { harvestPlants } from "./harvester.js"
const harvested = harvestPlants(plants); 
console.log(harvested);

console.log(plants)



