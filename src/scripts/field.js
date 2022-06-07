// empty array to hold plants to export
const fieldArray = []
//addplant method to push seedObjects to field then to fieldarray
export const addPlant = (seedObject) => {
  if (Array.isArray(seedObject)) {
    fieldArray.push(seedObject[0])
    fieldArray.push(seedObject[1])
  } else {
    fieldArray.push(seedObject)
  }
}
//use plant function to export copy of resulting fieldarray 
//to other modules, without effecting original array
export const usePlants = () => {
  return fieldArray.map(row => ({ ...row }))
}