
let Mobile={

    price:1200,
    color:"Black",
    display:"2inch"   
};

let bodySpray={
    smell:"sweet",
    sustainability:"24hr",
    price:270,
    brand:"Nivea"
}
// console.log(bodySpray);
// console.log(bodySpray.sustainability);
// let bodySprayPrice = bodySpray.price;
// console.log(bodySprayPrice);
// bodySpray.price=500;
// bodySpray["price"]=600;
// console.log(bodySpray);

// different ways to set a value of an object property

let lastPrice="price";
bodySpray.price=700;
bodySpray["price"]=800;
bodySpray[lastPrice]=900;
console.log(bodySpray);

console.log(bodySpray.brand);



