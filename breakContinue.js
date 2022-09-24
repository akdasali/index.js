
// for(let i=0; i<=10; i++){
//     console.log(i);
//     if(i==5){
//         break;
//     }
    
// }

// let i=1;
// while(i<=7){
//     console.log(i);
//     if(i==3){
//         break;
//     }
//     i++;
// }

// let numbers=[10,20,30,40,50,60,70,80,90,102];
// for(let i=0; i<numbers.length; i++){
//     let totalNum=numbers[i];
//     console.log(totalNum);
//     if(totalNum>50)
//     break;// 50 er cheye borogulo print korbe na
// }

let numbers=[10,20,30,40,51,60,17,18,19,33];
for(let i=0; i<numbers.length; i++){
    let totalNum=numbers[i];
    
    if(totalNum>50){
        continue;//50 ercheye borogulo print korbe na boro gulo skip korbe
    }
    
    console.log(totalNum);
}