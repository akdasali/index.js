
for(i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log("Divided by 3 and 5");
    }
    else if(i%3==0){
        console.log("Divided by 3");
    }
    else if(i%5==0){
        console.log("Divided by 5");
    }
    else{
        console.log(i);
    }
}
