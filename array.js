let marks = [90,100,95,98,54];
console.log(typeof marks);
marks.push("anish");
console.log(marks);

let arr = new Array(5);
for(let i=0;i<arr.length;i++){
    arr[i] = Number(prompt("Enter value to insert in array"));
}
console.log(arr);

let add = [10,20,30,40,50,60,70,80,90,100];
let sum = 0;
for(let j=0;j<add.length;j++){
    sum += add[j]
}
console.log(sum);
let max = add[0];
for(let i=-0;i<add.length;i++){
    if(max > add[i]){
        max = add[i]
    }
}
console.log(max);
// 
let arrmax = Math.max(add[0] , add[1]);
let arrmin = Math.min(add[0] , add[1])
for(let j = 2; j<=add.length;j++){
    if(add[j]>arrmax){
        arrmin = arrmax;
        arrmax = add[j]
    }else if(add[j]>arrmin && arrmax != arrmin){
        arrmin = add[j]
    }
}
console.log(arrmax)
console.log(arrmin)
// reversed array
let all = [10,20,30,40,50];
let newarry = new Array(all.length);
let j = 0;
for(let i = all.length-1;i>=0;i--){
    newarry[j] = all[i];
    j++;
}
console.log(newarry);
// method two
let reversed = [2,4,6,8,10];
let i = 0,k=reversed.length-1;
while(i!=k){
    let termp = reversed[i];
    reversed[i] = reversed[k];
    reversed[k] = termp;
    i++;
    j--;
}
console.log(reversed);
// 
let zero = [0,1,0,1,0,1,1,0];
let p = 0,q = 0;
for(let p = 0;p<=zero.length-1;i++){
    if(zero[p] == 0){
       let temp = zero[p] ;
       zero[p] = zero[q];
       zero[q] = temp;
       q ++
    }
    p++
}
console.log(zero);
// seperation postion and negative number
let postive = [12,-25,36,-25,-2,100];
let r = 0;z =0;
while(r<postive.length){
    if(postive[r] >= 0){
        let temp = postive[r];
        postive[r] = postive[z];
        postive[z] = temp;
        z++
    }
    r++;
}
console.log(postive)
