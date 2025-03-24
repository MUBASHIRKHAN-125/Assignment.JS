let products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "john",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations:[
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "jh",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];
  ////1: Use map to get an array of product titles

  let productTitle = products.map(p => p.title);
    console.log(productTitle);

///////////


///2: Use filter to get all products that have variations in black color

let filterProduct = products.filter(f => f.variations.some(colorfil => colorfil.color === "black"));
console.log(filterProduct);
// let filterProductsByColor = products.filter((product) => {
  //     for (let i = 0; i < product.variations.length; i++) {
    //       if (product.variations[i].color === "black") {
      //         return true;
      //       }
      //     }
      //   });
      // console.log(filterProductsByColor);
      
// let filterProductsByColor = products.filter(
//   (product) =>
//     product.variations.find((variation) => variation.color === "black")
// );
// console.log(filterProductsByColor);
///

////3: Use reduce to calculate the total stock of all products
let stockProduct = products.reduce( (acc , curr) => {
 return acc + curr.variations.reduce((varacc, varcurr) => varacc + varcurr.quantity ,0) 
},0)
console.log("TotalStockProduct:" , stockProduct);
///

//// 4: Use map and reduce to get the average rating of each product
let averageRatings = products.map(p => {
let proStatus = p.reviews.filter(revfil => revfil.status === true);
let sumRating = proStatus.reduce((sum , rev) => sum + rev.rating ,0);
let avgRating = sumRating / proStatus.length;
return{title : p.title,avgRating : avgRating}
});
console.log(averageRatings);
//////

////5: Use filter to get products that have at least one review with a rating of 5.0
let filterRating = products.filter(filpro => filpro.reviews.some(revfil => revfil.rating >= 5.0));
console.log(filterRating);
/////

////6: Use map to format variations with product name
let productName = products.map(product => {
  return{
    title: product.title,
    variations: product.variations.map(varpro => {
    return{
       color: varpro.color,
        Price: varpro.price,
        Quantity: varpro.quantity
      };
  })};
});
console.log(productName);
//////

///7: Use reduce to get the total revenue if all items were sold
let totalRevenue = products.reduce((acc , totalrev) => {
 let rettotal = totalrev.variations.reduce((pri ,mul) => {
 return pri + (mul.price * mul.quantity);
 },0);
return acc + rettotal
},0);
console.log("Total Revenue:" , totalRevenue);
////

///9: Use map to get a summary of each product with total variations and total reviews
let prosummary = products.map( summary => {
return{
title: summary.title,
variations: summary.variations.length,
reviews: summary.reviews.length,
};
});
console.log("Product Summary:" , prosummary);
////












