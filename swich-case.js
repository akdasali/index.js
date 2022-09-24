let color="red";

if(color=="white"){
  console.log('The color is white');
}
else if(color=="yellow"){
    console.log('The color is yellow');
}
else if(color=="blue"){
    console.log('The color is blue');
}
else if(color=="pink"){
    console.log('The color is pink');
}
else if(color=="magenta"){
    console.log('The color is magenta');
}
else{
         console.log('The color is black');
    
}

//the switch statement is faster in most cases when compared to if-else , but significantly faster only when the number of conditions is large

switch(color){
    case 'yellow':
    console.log("The color is yellow");
    break;

    case 'white':
        console.log("The color is white");
        break;

         case 'magenta':
            console.log("The color is magenta");
            break;
         case 'red':
            console.log("The color is red");
            break;

        default:
            console.log("The color is skyblue");

}
