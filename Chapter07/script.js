//////Product Data Modeling///////
////////1. Find a Product by ID////
var products = [
{
    id: 102,
    title: "Mobile",
    varations: ["8GB RAM ", " 16GB RAM"],
    reviews: ["Good " , " Excellent"]
},
{
    id: 103,
    title: "Laptop",
    varations: ["16GB RAM ",   " 18GB RAM"],
    reviews: ["Awesome", "Value for money"]
},
{
    id: 104,
    title: "Tablet",
    varations: ["WiFi " , " WiFi + Cellular"],
    reviews: ["Nice " , " Decent"]
}
];

var userInputId = parseInt(prompt("Enter Product ID then check Items \n Select id: 102 , 103 , 104"));
var productFound = false;
for(var i = 0 ; i < products.length; i++){
    if(userInputId == products[i].id){
        document.write("<h4> Product  : <h4/>" + "Id : " + products[i].id  +"<br/> " + " Title : " + products[i].title + "<br/> " + " Varations : " + products[i].varations  + "<br/> " + "Reviews : " + products[i].reviews);
        productFound = true;
        break;
    }
};
if(productFound == false){
    document.write("<h5>Product not found <h5/>");
};

//////
////////2. List All Product Titles////
var titles = [
    {
        id: 102,
        title: "Mobile",
        varations: ["8GB RAM ", " 16GB RAM"],
        reviews: ["Good " , " Excellent"]
    },
    {
        id: 103,
        title: "Laptop",
        varations: ["16GB RAM ",   " 18GB RAM"],
        reviews: ["Awesome", "Value for money"]
    },
    {
        id: 104,
        title: "Tablet",
        varations: ["WiFi " , " WiFi + Cellular"],
        reviews: ["Nice " , " Decent"]
    }
    ];
    document.write("<h4> Product Titles : <h4/>");
   for(var i = 0 ; i < titles.length ; i++) {
    document.write( " Title : " + titles[i].title  + " <br/>")
   };
///////////
/////3. Find Available Colors of a Product//////
var colors = [
    {
        id: 102,
        title: "Mobile",
        varations: ["8GB RAM ", " 16GB RAM"],
        reviews: ["Good " , " Excellent"],
        color: [" Pink " , " Yellow " , " Blue "]
    },
    {
        id: 103,
        title: "Laptop",
        varations: ["16GB RAM ",   " 18GB RAM"],
        reviews: ["Awesome", "Value for money"],
        color: [" Red " , " White " , " Green "]
    },
    {
        id: 104,
        title: "Tablet",
        varations: ["WiFi " , " WiFi + Cellular"],
        reviews: ["Nice " , " Decent"],
        color: [" Orange " , " violet " , " Brown "]
    }
    ];
    document.write("<h4> Product Colors : <h4/>");
    var notFound = false;
var userColor = prompt("Enter product id then check color \n Select id: 102 , 103 , 104")
   for(var i = 0 ; i < colors.length ; i++) {
    if(userColor == colors[i].color){
    document.write(" Color : " + colors[i].color  + " <br/>");
    notFound = true;
    break;
    }
   };
   if(notFound == false){
    document.write("<h5>Product not found <h5/>");
   }
   /////////////
   ////4. Get Total Quantity of a Product////
   var quantities = [
    {
        id: 102,
        title: "Mobile",
        varations: ["8GB RAM ", " 16GB RAM"],
        reviews: ["Good " , " Excellent"],
        color: [" Pink " , " Yellow " , " Blue "],
        quantity:56
    },
    {
        id: 103,
        title: "Laptop",
        varations: ["16GB RAM ",   " 18GB RAM"],
        reviews: ["Awesome", "Value for money"],
        color: [" Red " , " White " , " Green "],
        quantity:5
    },
    {
        id: 104,
        title: "Tablet",
        varations: ["WiFi " , " WiFi + Cellular"],
        reviews: ["Nice " , " Decent"],
        color: [" Orange " , " violet " , " Brown "],
        quantity:14
    }
    ];
    var totalQuan = 0 ;
    for(var i = 0 ; i < quantities.length ; i++){
        totalQuan = totalQuan + quantities[i].quantity;
    }
    document.write(" Total Quantity  : " + totalQuan);
  