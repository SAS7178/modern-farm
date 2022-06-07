
//create exported func catalog
export const Catalog = (foodsObject) => {
    let HTMLString = ""
    for (const food of foodsObject) {
        HTMLString += `<section class="plant">${food.type}</section>`
    };
    return HTMLString;
}
    