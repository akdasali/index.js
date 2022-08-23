
let i=1;
let sum=0;

while(i<=100){
    
    if(i%3==0 && i%5==0){
        document.write("Number = " +i +"<br>");
        sum=sum+i;
    }
    i=i+1;
}

document.write("Resul= " +sum);