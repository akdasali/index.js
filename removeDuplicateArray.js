
let duplicateName=['Romman','Jomman','Romma','Jomman','Tarif','Aman','Atif','Tahir','Shahir'];

let genuineName=[];

function getGenuineName(duplicateName){
    // for(let i=0; i<duplicateName.length; i++){
    //     let element=duplicateName[i];
    //     console.log(element);

    //  }
    for(let element of duplicateName)
    
    if(genuineName.indexOf(element)==-1){
        genuineName.push(element);
    }
    return genuineName;
}
let genuine=getGenuineName(duplicateName);
console.log(genuine);