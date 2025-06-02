const products = [
    {
        id: 101,
        name: "Sony LED 40 inch",
        category: "Electronics",
        brand: "Sony",
        sku: "SONY-LED-40",
        description: "40 inch Full HD LED TV with smart features.",
        isActive: true,
        createdAt: "2021-01-15",
        updatedAt: "2022-10-22",
        tags: ["LED", "Smart TV", "HD"],
        supplier: {
            name: "ElectroHouse",
            contact: "support@electrohouse.com"
        },
        variations: [
            {
                id: 1,
                color: "Black",
                price: 50000,
                quantity: 5,
                warranty: "2 years",
                discount: 0,
                isAvailable: true
            },
            {
                id: 2,
                color: "Red",
                price: 50000,
                quantity: 1,
                warranty: "2 years",
                discount: 5,
                isAvailable: true
            },
            {
                id: 3,
                color: "Silver",
                price: 55000,
                quantity: 8,
                warranty: "3 years",
                discount: 10,
                isAvailable: false
            }
        ],
        reviews: [
            {
                id: 1,
                user: {
                    name: "Ahmad",
                    email: "ahmad@gmail.com",
                    location: "Lahore"
                },
                rating: 4.0,
                title: "Good Product",
                comment: "Very good product for the price.",
                date: "2021-02-06",
                approved: true,
                likes: 2,
                verifiedPurchase: true
            },
            {
                id: 2,
                user: {
                    name: "Zubair",
                    email: "zubair@yahoo.com",
                    location: "Karachi"
                },
                rating: 4.5,
                title: "Awesome",
                comment: "I’m impressed by the quality.",
                date: "2021-02-05",
                approved: false,
                likes: 5,
                verifiedPurchase: false
            }
        ]
    }
];

// 🧠 Real-World JavaScript Exercises

// Q1. List all product names with their supplier name and contact.

let solve1 = products.map(pn => `Product name: ${pn.name} - supplier name: ${pn.supplier.name} - supplier contact: ${pn.supplier.contact}`);
console.log(solve1);
///////--------------------////////////

// Q2. Display all available colors for active products.

let solve2 = products.map(c => c.variations.filter(check => check.isAvailable).map( col => col.color));
console.log(solve2)
// ///////--------------------////////////

// 3. Count the total quantity of all variations that are currently available.

let solve3 = products.reduce((total , pro) => {
let storeProduct = pro.variations.filter(p => p.isAvailable).reduce((acc , curr) => acc + curr.quantity , 0)
return total + storeProduct;
},0)
console.log(solve3);
// ///////--------------------////////////


