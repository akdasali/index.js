
function getGrading(marks){
    if(marks>=80 && marks<=100){
        console.log("I have got A+ ");
    }
    else if(marks>=70 && marks<80){
        console.log("I have got A ");
    }
    
    else if(marks>=60 && marks<70){
        console.log("I have got A- ");
    }

    else if(marks>=50 && marks<60){
        console.log("I have got B ");
    }

    else if(marks>=40 && marks<50){
        console.log("I have got C ");
    }

    else if(marks>=33 && marks<40){
        console.log("I have got D ");
    }
    else if(marks<0 || marks>100){
        console.log("Please enter right number in 1 to 100 marks");
    }

    else{
        console.log("I have failed");
    }
    return marks;
}
let myGrade= getGrading(102);
console.log("My Marks is: ",myGrade);
