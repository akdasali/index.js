// let doctor=300;
// let engineer=400;
// let teacher=440;

// find max values between 2 numbers
// if(doctor>engineer){
//     console.log("Doctor is bigger");

// }
// else {
//     console.log("Engineer is bigger ");
// }

// find max values between 3 numbers
// if(doctor>engineer && doctor>teacher){
//     console.log("Doctor is bigger");

// }
// else if(engineer>doctor && engineer>teacher){
//     console.log("Engineer is bigger ");
// }
// else{
//     console.log("Teacher is bigger");
// }

// let max=Math.max(doctor,engineer,teacher);
// console.log("The max is: ",max);

// find max num by the function
// function findMaxNum(doctor,engineer,teacher){
//     if(doctor>engineer && doctor>teacher){
//         console.log("Doctor is bigger");
//         return doctor;
    
//     }
//     else if(engineer>doctor && engineer>teacher){
//         console.log("Engineer is bigger");
//         return engineer; 
//     }
//     else{
//         console.log("Teacher is bigger");
//         return teacher;
//     }
// }
//    let find=findMaxNum(600,900,1000);
//    console.log("Max value is: ",find);

   // find min num by the function

   function findMinNum(doctor,engineer,teacher){
    if(doctor<engineer && doctor<teacher){
        console.log("Doctor is smaller");
        return doctor;
    
    }
    else if(engineer<doctor && engineer<teacher){
        console.log("Engineer is smaller");
        return engineer; 
    }
    else{
        console.log("Teacher is smaller");
        return teacher;
    }
}
   let find2=findMinNum(600,900,1000);
   console.log("Min value is: ",find2);
