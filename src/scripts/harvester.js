export const harvestPlants = (usedPlants) => {
    //empty array to hold harvest plants
    let harvestedPlants = []
    //iterate through usedPlants check if
    for (const plant of usedPlants) {
        // var output with value of plant type = "corn" w tenerarys adjust output value
        //* .5 otherwise leave as is
        const output = plant.type === "Corn" ? plant.output * .5 : plant.output
        //iterate through each plant index if index value is <= output value
        // push value to harvestedPlants Array     
        for (let index = 1; index <= output; index++) {
            harvestedPlants.push(plant)
        }
    }
    //return harvstedPlants array
    return harvestedPlants
}





