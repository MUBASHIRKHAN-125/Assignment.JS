//////Product Data Modeling///////
//////// Find a Product by ID////
var products = [
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
    id: 102,
    title: "Mobile",
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
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];
var userInputId = parseInt(prompt("Enter Product ID then check Items \n Select id: 102 , 103 , 104"));
var productFound = false;
for (var i = 0; i < products.length; i++) {
  if (userInputId == products[i].id) {
    document.write("<h4>Product Details:</h4>");
    document.write("Id: " + products[i].id + " </br>");
    document.write("Title: " + products[i].title + " </br>");
    document.write("<h4>Reviews Details:</h4>");
    for (var j = 0; j < products[i].reviews.length; j++) {
      document.write(
        "Id: " + products[i].reviews[j].id +
        ", User: " + products[i].reviews[j].user +
        ", Title: " + products[i].reviews[j].title +
        ", Rating: " + products[i].reviews[j].rating +
        "<br> <br> Comments: " + products[i].reviews[j].comments +
        ", Date: " + products[i].reviews[j].date +
        ", Status: " + products[i].reviews[j].status + "<br> <br>"
      );
    }
    document.write("<h4>Variation Details:</h4>");
    for (var k = 0; k < products[i].variations.length; k++) {
      document.write(
        "Id: " + products[i].variations[k].id +
        " , Color: " + products[i].variations[k].color +
        " , Price: " + products[i].variations[k].price +
        " , Quantity: " + products[i].variations[k].quantity +
        "<br> <br>"
      );
    }
    productFound = true;
    break;
  }
};
if (productFound == false) {
  document.write("<h4>Product not found </h4>");
};
///////////////
////////// List All Product Titles////
document.write("<h4> Product Titles : </h4>");
for (var i = 0; i < products.length; i++) {
  document.write(" Title : " + products[i].title + " <br/> <br>");
};
// ///////////
// ///// Find Available Colors of a Product//////
document.write("<h4> Product Colors : </h4>");
for (var i = 0; i < products.length; i++) {
  if (userInputId == products[i].id) {
    for (var j = 0; j < products[i].variations.length; j++) {
      document.write(" Color: " + products[i].variations[j].color + " <br/>");
    }
  }
}
///////////////
////// Get Total Quantity of a Product////
document.write("<h4> Product Quantity : </h4>");
var totalQuan = 0;
for (var i = 0; i < products.length; i++) {
  if (userInputId == products[i].id) {
    for (var k = 0; k < products[i].variations.length; k++) {
      totalQuan += products[i].variations[k].quantity;
    }
  }
}
if (totalQuan > 0) {
  document.write("Total Quantity: " + totalQuan);
} else {
  document.write("Product not found!");
}
///////////////
//// 5. Filter Products with Low Stock /////
document.write("<h4>  Products with Low Stock : </h4>");
var flag = false;
for (var i = 0; i < products.length; i++) {
  for (var j = 0; j < products[i].variations.length; j++) {
    if (products[i].variations[j].quantity < 2) {
      flag = true;
      document.write(products[i].title + "<br>");
      break;
    }
  }
}
if (flag == false) {
  document.write("Product not low stock");
}
///////////////
////  Filter Products with Low Stock /////
document.write("<h4> Highest Rated Product: </h4>");
var highestRatedProduct = null;
var highestAvgRating = 0;
var flag = false;

for (var i = 0; i < products.length; i++) {
  var sumRating = 0;
  for (var j = 0; j < products[i].reviews.length; j++) {
    sumRating += products[i].reviews[j].rating;
  }
  var Ratingavg = sumRating / products[i].reviews.length;
  if (Ratingavg > highestAvgRating) {
    highestAvgRating = Ratingavg;
    highestRatedProduct = products[i].title;
    flag = true;
  }
}
document.write("Highest Rated Product: " + highestRatedProduct);
  if (flag == false) {
    document.write("Product not Highest Rated");
  }
///////////////
/////// Calculate Total Stock Value ///
document.write("<h4> Total Stock Value: </h4>");
var stockValue = 0;
for (var i = 0; i < products.length; i++) {
  for (var j = 0; j < products[i].variations.length; j++) {
   var variation = products[i].variations[j];
   stockValue += variation.price * variation.quantity;
  }
}
  document.write("Total Stock Value: " + stockValue);
///////////////