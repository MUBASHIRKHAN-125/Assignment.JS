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
                discount: 50,
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
                likes: 12,
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

let solve2 = products.map(c => c.variations.filter(check => check.isAvailable).map(col => col.color));
console.log(solve2)
// ///////--------------------////////////

// 3. Count the total quantity of all variations that are currently available.

let solve3 = products.reduce((total, pro) => {
    let storeProduct = pro.variations.filter(p => p.isAvailable).reduce((acc, curr) => acc + curr.quantity, 0);
    return total + storeProduct;
}, 0)
console.log(`currently available product: ${solve3}`);
// ///////--------------------////////////

// Q4. List all products that have at least one discounted variation.

let proDiscount = products.map(p => p.variations.filter(f => f.discount));
console.log(proDiscount);
// ///////--------------------////////////

// Q5. Calculate and display the effective price (after discount) for each variation.

let discount = products.map(m => m.variations.map(totalDis => {

    let discountPercent = totalDis.discount || 0;
    let discountAmount = (totalDis.price * discountPercent) / 100;
    let finalPrice = totalDis.price - discountAmount;
    return {
        color: totalDis.color,
        originalPrice: totalDis.price,
        quantity: totalDis.quantity,
        warranty: totalDis.warranty,
        discount: discountAmount,
        finalPrice: finalPrice,
    }

}));

console.log(discount);
/////----------//////////////////
// Q6. Find the variation with the highest discount across all products.

let highestDis = products.map(m => m.variations.reduce((acc, curr) => {
    let checkVariation = curr.discount > acc ? curr.discount : acc;

    return  checkVariation;
}, 0)
);
console.log(`Highest Discount: ${highestDis}`);

////////////---------------///////////
// Q7. Display the email of users who left approved reviews with more than 3 likes.
let app = products.flatMap(m => m.reviews.filter(f => f.approved && f.likes > 3));
let userEmails = app.map(e => e.user.email)
console.log(`user Email : ${userEmails}`);
/////////////---------//////////////

// Q8. Count how many reviews are verified purchases.

let reviews = products.flatMap(r => r.reviews.filter(f => f.verifiedPurchase));
console.log(reviews);
/////////////---------//////////////

// Q9. Add a new variation with a new color and stock to a product.
products.forEach(p => p.variations.push({color:'yellow' , quantity:10}));
let result = products.flatMap(v => v.variations)
console.log(result);
/////////////---------//////////////

// Q10. Add a new review with location and verified purchase fields.
products.forEach(r => r.reviews.push({ 
                id: 1,
                user: {
                    name: "talha",
                    email: "talha@gmail.com",
                    location: "Islamabad"
                },
                rating: 4.0,
                title: "Good Product",
                comment: "Very good product for the price.",
                date: "2021-02-06",
                approved: true,
                likes: 15,
                verifiedPurchase: true
            },
));
console.log(products);
/////////////---------//////////////

// Q11. Sort products by latest updatedAt date.



/////////////---------//////////////

// Q12. Filter out products that are inactive or have no variations in stock.
let filProduct = products.flatMap(f => f.variations.filter(v => v.isAvailable && v.quantity > 0));
console.log(filProduct);
/////////////---------//////////////

// Q13. Create a summary for each product: name, totalStock, avgRating, supplierContact.

let summary = products.map(m => ` product name: ${m.name} - supplier Contact - ${m.supplier.contact} -  total Stock: ${m.variations.reduce((acc , curr) => acc + curr.quantity ,0)} - avg Rating: ${m.reviews.reduce((acc ,curr)  =>  acc + curr.quantity ,0)/m.reviews.length}`
)
console.log(summary);





