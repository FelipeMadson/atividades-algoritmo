const N = 50;  
let S = 0;
let i = 1;

while (i <= N) {
    S += (2 * i - 1) / i;
    i++;
}

console.log(`O valor de S é ${S.toFixed(4)}`);