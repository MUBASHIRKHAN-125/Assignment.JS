var product = {
    id:101,
    title:"Wireless Headphones",
    variations : [
{
    id: 1, color: "black", price: 500, quantity: 4 
},
{
    id: 2, color: "red", price: 1000, quantity: 2 
},
{
    id: 3, color: "green", price: 1500, quantity: 1
},
{
    id: 4, color: "gold", price: 2000, quantity: 10 
},
{
    id: 5, color: "blue", price: 3000, quantity: 6
},
{
    id: 6, color: "yellow", price: 1200, quantity: 8 
}
    ],
};
var price = 0;
 for(var i = 0 ; i < product.variations.length ; i++ ){
    price = price + product.variations[i].price;
 }
 var avg =price / product.variations.length;

document.write("Total Price:  " +  price +  " <br/>");
document.write("Total Avg:  " +  avg );
