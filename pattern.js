const prompt = require('prompt-sync')();
let n = Number(prompt('enter a number = '));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write('*');
    }
    console.log()
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write('* ');
    }
    console.log();
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j + " ");
    }
    console.log();
}

for (let i = 1; i <= n; i++) {
    let ch = 65;
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ch) + " ");
        ch++
    }
    console.log()
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write('*')
    }
    console.log()
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
        process.stdout.write(" ")
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i == j || i + j == n + 1) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log()
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
        if (i == j || i + j == 2 * n) {
            process.stdout.write("*")
        } else {
            process.stdout.write('  ')
        }
    }
    console.log()
}
