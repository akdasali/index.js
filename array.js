// let nilam=[777,"Akdas","Malia",true];
// document.write(nilam +"<br>");
// document.write(nilam[0]);

// let thikh=[1,2,3,4,5];
// let sum=0;
// for(let a=0; a<=4; a++){
//     sum=sum+thikh[a];
//     document.write(" " +thikh[a] +"<br>");
// }
// document.write("Addition of total number is: " +sum);
let arry=["valobasa","mon","kharap","bhalomon"];
console.log(arry);// arry te ki ki ache ta print kore dekhabe

let length=arry.length; // arry er length ba dhorgho koto ta dekhabe
console.log(length);

let index=arry.indexOf("valobasa");
console.log(index); // kono specific arry er element er index koto ta dekhabe

//arr er element er sob index show korbe 
let arr=["bhalo","kharap","motamoti","khubkharap"];
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}





 




// let total=arry[3];
// console.log(total);
// let chek=arry.indexOf('valobasa');
// console.log(chek);

// let arr=[33,44,55,77];
// let check=arr.indexOf(77);
// let dekhi=arr[7];
// console.log(dekhi);
// console.log(check);

// ***** What would nums.indexOf(0) and nums.indexOf(1) return respectively, if var nums = [1, 5, 8]?
// 1) 1 and -1
// 2) -1 and 1
// 3) -1 and 0
// 4) 1 and 5
// C.A is 3) -1 and 0 because akhane 0 index er bhitore nei tai -1 and 1 er index num hocche 0 . tai -1 and 0.

/* ****
How to replace the second element in the array, arr = [1, 7, 9] with the value 8?
1) arr.indexOf(1)=8
2) arr[1]=8
3) arr[2]=8
4) arr.push(8)
C.A is 2) arr[1]=8

*/


/*
  function example(parameter) {
  console.log(parameter); // Output = foo
}

const argument = 'foo';

example(argument);
Copy to Clipboard
Note the difference between parameters and arguments:

Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.
Parameters are initialized to the values of the arguments supplied


*/