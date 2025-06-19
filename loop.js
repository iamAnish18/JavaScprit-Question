let pr1 = prompt('Enter Random value');

if (pr1 === null) {
    console.log('cancled')
} else {
    let n = Number(pr1);

    if (isNaN(n)) {
        console.log('invalid input')
    } else {
        if (n > 0) {
            let sum = 0;
            for (let i = 0; i <= n; i++) {
                sum += i
            }
            console.log(`sum of number : ${sum}`);
        }
        else {
            console.log('enter postive number')
        }
    }
}

let pr = prompt('Enter the number');
if (pr === null) {
    console.log('cancled')
} else {
    let n = Number(pr);
    if (isNaN(n)) {
        console.log('worong input')
    } else {
        if (n > 0) {
            for (let i = 0; i <= Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    console.log(i)
                }
            }
            console.log(n);
        } else {
            console.log('enter postive number');
        }
    }
}

let pr2 = prompt('Enter the number');
if (pr2 === null) {
    console.log('cancled')
} else {
    let n = Number(pr2);
    if (isNaN(pr2)) {
        console.log('invalid input')
    } else {
        if (n > 0) {
            let primehai = true;
            for (let i = 0; i <= Math.floor(n / 2); i++) {
                if (n % i === 0) {
                    primehai = false
                }
            }
        } else {
            console.log('number should be postion')
        }
    }
}


let pr3 = prompt('enter the number');
if(pr3 === null){
    console.log('cancled now')
}else{
    let n = Number(pr3)
    if(isNaN(n)){
        console.log('invalid input')
    }else{
        if(n>0){
            let sum = 0;
            while(n>0){
                let rem = n%10;
                sum += rem
                n = Math.floor(n/10);
            }
            console.log(sum);
        }else{
            console.log('should be enter postive number')
        }
    }
}

let pr4 = prompt('enter the number');
if (pr4 === null) {
    console.log('cancled')
} else {
    let n = Number(pr4);
    if (isNaN(n)) {
        console.log('invalid input')
    } else {
        if (n > 0) {
            let sum = 0;
            let copy = n
            while (n > 0) {
                let rem = n % 10;
                let fact = 1;
                for (let i = 0; i <= rem; i++) {
                    fact *= i;
                }
                sum += fact;
                n = Math.floor(n / 10)
            }
            if (copy == sum) {
                console.log('strong number')
            } else {
                console.log('not a strong number')
            }
        } else {
            console.log('enter the postive number')
        }
    }
}
