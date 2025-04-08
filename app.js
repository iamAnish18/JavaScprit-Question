//Level 1
//Q1
console.log("Name : Anish Tamoli");
console.log("Hobby : coding");
//Q2
console.log(45*2-10);
//Q3
console.log("Years : 2025");
let newDate = new Date();
console.log(newDate.getFullYear());
//Q4
let first = "Anish";
let last = "Tamoli";
console.log(`${first} ${last}`);

//Q5

let a = 15;
console.log(a);
a = 35;
console.log(a);

//Q6
console.error("hello");

//Q7
console.log(12*12);

//Q8
let RCBWIN = true;
console.log(typeof RCBWIN);

//Q9
let age = 18;
if(age>18){
    console.log(age);
}

//Q10

console.log(100/0);

//Level 2
//Q11
let num = 12;
console.log(num);

//Q12
const PI = Math.PI;
console.log(PI)

//Q13
let p = 13;
p = 45;
console.log(p);

//Q14
let q = null;
console.log(typeof q);

//Q15
let st = "25";
console.log(typeof st);

//Q16
let bl = false;
console.log(typeof bl);

//Q17
let inp = 100;
let string = "hello";
let winner = true;
console.log(typeof inp , typeof string , typeof winner);

//Q18
let assing;
console.log(typeof assing);

//Q19
let value = undefined;
console.log(typeof value);

//Q20
// const arr = [1,2,3,4];
// arr = [1,5];//error = Assignment to constant variable.
// console.log(arr);

//level 3
//Q21
for(let i = 1; i<=50;i++){
    console.log(i);
}
//Q22
let i = 1;
let sum = 0;
while(i<=10){
    sum +=i;
    i++;
}
console.log(sum);

//Q23
let s = "javascrit";
for(let val of s){
    console.log(val);
}

//Q24

for(let skip = 1 ; skip <=20;skip++){
    if(skip%2 == 0) continue;
    console.log(skip);
}

//Q25

let aa = 5;
do{
    console.log(aa);
    aa--;
}while(aa>0);

//Q26
let fact = 1;
for(let i = 1; i<=5;i++){
    fact *= i;
    console.log(fact);
}
