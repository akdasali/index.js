let phones=[
    {name:'Walton',price:15000,storage:32},
    {name:'Samsung',price:25000,storage:64},
    {name:'Oppo',price:13000,storage:16},
    {name:'Nokia',price:11000,storage:8}
];
let lowestPrice=phones[0];
for(let phone of phones){
    if(phone.price<lowestPrice.price){
        lowestPrice=phone;
    }
}
console.log(lowestPrice);