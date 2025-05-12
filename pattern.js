const prompt = require("prompt-sync")();
let a = Number(prompt("enter how many time will prites = "));
//square pattarn
for(let i = 1;i<=a;i++){
    for(let j=1;j<=a;j++){
    process.stdout.write("* ")
    }
    console.log();
}
// right angle patter
for(let i = 1; i<=a;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log()
}
// 
for(let i=1;i<=a;i++){
    let p = 1;
    for(let j=1;j<=i;j++){
        process.stdout.write(p +" ")//process.stdout.write it's pass only string value
        p++;
    }
    console.log()
}
// 
for(let i=1;i<=a;i++){
    let ascii = 65;
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(ascii) + " ");
        ascii++;
    }
    console.log()
}
// 
for(let i = 0;i<=a;i++){
    for(let j=1;j<=a-i;j++){
        process.stdout.write('* ')
    }
    console.log()
}
// 
for(let i=1;i<=a;i++){
    //inverted
    for(let j=1;j<=a-i+1;j++){
        process.stdout.write(' ')
    }
    //right angel
    for(let j=1;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log();
}
// 
for(let i=1;i<=a;i++){
    //inverted
    for(let j=1;j<=a-i+1;j++){
        process.stdout.write('  ')
    }
    //right angel
    for(let j=1;j<=i;j++){
        process.stdout.write('* ')
    }
    console.log();
}
// X
for(let i=1;i<=a;i++){
    for(let j=1;j<=a;j++){
        if(i==j || i+j == a+1){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log()
}
// y patter
for(let i=1;i<=a;i++){
    for(let j=1;j<=2*a-1;j++){
        if(i == j || j+i == 2*a){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ");
        }
    }
    console.log();
}
