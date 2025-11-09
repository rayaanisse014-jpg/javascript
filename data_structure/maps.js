// Create a Map with months as keys and sales amounts as values
const monthlySales = new Map([
  ["January", 1200],
  ["February", 1500],
  ["March", 1800],
  ["April", 1600],
  ["May", 2000],
  ["June", 2500],
  ["July", 3000],
  ["August", 2700],
  ["September", 2300],
  ["October", 2600],
  ["November", 3200],
  ["December", 4000]
]);

// 🔹 Print all data
for (let [month, sales] of monthlySales) {
  console.log(`${month}: $${sales}`);
}

// 🔹 Access one month’s data
console.log("\nSales in March:", monthlySales.get("March"));

// 🔹 Update a month’s data
monthlySales.set("March", 1900);
console.log("Updated March Sales:", monthlySales.get("March"));

// 🔹 Add new month (if needed)
monthlySales.set("BonusMonth", 500);
console.log("BonusMonth Sales:", monthlySales.get("BonusMonth"));

// 🔹 Calculate total yearly sales
let totalSales = 0;
for (let sales of monthlySales.values()) {
  totalSales += sales;
}
console.log("\nTotal Yearly Sales: $" + totalSales);

 