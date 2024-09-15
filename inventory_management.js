// TASK 1 Initialize inventory with product objects 
const inventory = [
    {name: 'Basketball', price: 150, quantity: 47, lowStockLevel: 10},
    {name: 'Soccerball', price: 120, quantity: 27, lowStockLevel: 5},
    {name: 'Baseball', price: 50, quantity: 70, lowStockLevel: 15},
    {name: 'Tennisball', price: 30, quantity: 100, lowStockLevel: 40},
    {name: 'Pickleball', price: 15, quantity: 40, lowStockLevel: 50}
];

// TASK 2 Created a function to Display product Details 
function displayProductDetails(inventory) {
    return inventory.forEach(inventory => console.log(`Product: ${inventory.name}
        Price: ${inventory.price}
        Quantity: ${inventory.quantity}
        Low Stock Level:${inventory.lowStockLevel}`))
    }
 
let ProductDetails = displayProductDetails(inventory)
console.log(ProductDetails)


function DetermineLowStock(inventory) {
    let stockStatus = inventory.quantity <= inventory.lowStockLevel ? 'Low in Stock' : 'In Stock' //Notes: inventory.quantity so that it is gathered from object {}

    return `${inventory.name} is ${stockStatus}` //Note: return is not similar to console.log, but it will be the result for console.log of the function

}

console.log(`${DetermineLowStock(inventory[0])}
${DetermineLowStock(inventory[1])}
${DetermineLowStock(inventory[2])}
${DetermineLowStock(inventory[3])}
${DetermineLowStock(inventory[4])}`)


// TASK 3: Create a function to Update Product Stock After Sales
function updateStock (inventory, unitsSold) {
    let newStock = inventory.quantity -= unitsSold 
    return `Updated ${inventory.name} quantity after sales is: ${newStock}`
}

console.log(`${updateStock(inventory[0], 45)}
Basketball Availability: ${DetermineLowStock(inventory[0])}`)



//TASK 4: Create a Function to Check Low Stock Products
function checkLowStock (inventory) {
    inventory.forEach(inventory => {
        if (inventory.quantity <= inventory.lowStockLevel)
            return console.log(`Product with low stock level: ${inventory.name}`) ;{
        }})
}

let LowStockArray = checkLowStock(inventory)
console.log(LowStockArray)

//Task 5 Create a Function to Calculate Total Inventory Value
function calculateTotalValue () {
    return inventory.reduce((total, inventory) => {
        return total + (inventory.price * inventory.quantity)},0)};


let totalInventoryValue = calculateTotalValue()
console.log(`Total Inventory Value is: ${totalInventoryValue}`);


