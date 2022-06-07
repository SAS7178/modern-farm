console.log("Welcome to the main module")
// import necessary functions
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

//importing createplan set to var to log to test
const yearlyPlan = createPlan()
console.log(yearlyPlan)
plantSeeds(yearlyPlan);

const plants = usePlants();
const harvested = harvestPlants(plants);
//import { Catalog } from "./catalog.js"
console.log(plants)

const cropHTMLElement = document.querySelector(".container")
cropHTMLElement.innerHTML = Catalog(harvested)
