
let fibo=[0,1];
for(let i=2; i<=10; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);
// index starting in=[0,1]
//(2-1)+(2-2)= ak num index a one ache tai tai one r zero num index a zero tai zero tai one plus zero hoyece.1+0=1  fibo=[0,1,1]

//fibo=[0,1,1]
//i er man 2 theke 1 bridhi peye 3 hoye(3-1)+(3-2)= 2(2num index a 1 ache tai 1+  r (3-2)=1num index a 1 tai 1=1+1=2  fibo=[0,1,1,2]
// ai bhabe 10 porjonto cholte thakbe