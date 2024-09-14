// Initialize inventory with product objects TASK1 
const inventory = [
    {name: 'Basketball', price: 150, quantity: 50, lowStockLevel: 10},
    {name: 'Soccerball', price: 120, quantity: 35, lowStockLevel: 5},
    {name: 'Baseball', price: 50, quantity: 70, lowStockLevel: 15},
    {name: 'Tennisball', price: 30, quantity: 100, lowStockLevel: 40},
    {name: 'Pickleball', price: 15, quantity: 60, lowStockLevel: 50}
];

// Created a function to Display product Details TASK 2
function displayProductDetails(inventory) {
    let stockStatus = inventory.quantity <= inventory.lowStockLevel ? 'Low in Stock' : 'In Stock' //Notes: inventory.quantity so that it is gathered from object {}

    return `${inventory.name} is ${stockStatus}` //Note: return is not similar to console.log, but it will be the result for console.log of the function

}

console.log('Product details are as following:');
console.log(`Product: ${inventory[0].name}`); // [0] is to pull from the first product: basketball
console.log(`Price: ${inventory[0].price}`);
console.log(`Quantity: ${inventory[0].quantity}`);
console.log(`Availability: ${displayProductDetails(inventory[0])}`);

// TASK 3: Create a function to Update Product Stock After Sales
function updateStock (inventory, unitsSold) {
    let newStock = inventory.quantity -= unitsSold 
    return `Updated ${inventory.name} quantity after sales is: ${newStock}`
}

console.log(updateStock(inventory[0], 45))
console.log(`Product Availability: ${displayProductDetails(inventory[0])}`);

