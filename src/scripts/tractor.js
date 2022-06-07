//exporting plantSeeds func w yearlyplantingplan

import { addPlant } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

//as parameter
export const plantSeeds = (annualPlantingPlan) => {
    //iterate through growingplanarray of annualplan arrays
    for (const growingPlan of annualPlantingPlan) {
        //iterate through each growingplan to see planted items
        for (const planted of growingPlan) {
            //check if plant is in planted if true
            //add plantseed to arrayofPlants in field.js
            if (planted === "Asparagus") {
                let asparagusSeed = createAsparagus();
                addPlant(asparagusSeed)
            }
            else if (planted === "Corn") {
                let cornSeed = createCorn();
                addPlant(cornSeed)
            }
            else if (planted === "Potato") {
                let potatoSeed = createPotato();
                addPlant(potatoSeed)
            }
            else if (planted === "Soybean") {
                let soybeanSeed = createSoybean();
                addPlant(soybeanSeed)
            }
            else if (planted === "Sunflower") {
                let sunflowerSeed = createSunflower();
                addPlant(sunflowerSeed)
            }
            else if (planted === "Wheat") {
                let wheatSeed = createWheat();
                addPlant(wheatSeed)
            }
        }
    }
}

