 
/*
 **** array tay -1 jokhon ase
let numbers=[10,20,30,40,50];
let index=numbers.indexOf(100);// element er bhitore 10,20,30,40,50 ache r 100 nai tai -1
console.log(index);
output is -1

*/

/* 
**** array tay undefined jokhon ase
let books=['moner', 'shukh','bahok','godogodo','onnokonodin'];

var checkIndex=books[50];// books array er bhitore 50 index nei tai undefined 
console.log(checkIndex);
//output is undefined.

*/

let shirtColor ="white";
let shirtQuantity=5;
let isFavourite=true;

//array
let items=['shirt','jeans','jacket','phone'];
let check=items.indexOf('jeans');//-1
// console.log(check);
// items.push("tShirt");
// items.pop();

// condition
if(items.length >=4){
    console.log("So many collection");
}
else if(items.length ==4){
    console.log("equal equal");
}
else{
    console.log("less collection");
}


