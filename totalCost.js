
let products=[
    {name:'jacket',price:2000},
    {name:'shirt',price:500},
    {name:'pants',price:7000},
    {name:'laptop',price:52000},
]
let totalPrice=0;
for(let product of products){
    totalPrice=totalPrice+product.price;
}
//   console.log(totalPrice);

let cart=[
    {name:'jacket',price:2000,quantity:2},
    {name:'shirt',price:500,quantity:3},
    {name:'pants',price:700,quantity:4},
    {name:'laptop',price:52000,quantity:1},
]
let cartTotal=0;
for(let product of cart){
    // console.log(product);
    let productTotal=product.price*product.quantity;
    cartTotal=cartTotal+productTotal;
    

}
console.log("Total cost",cartTotal);
