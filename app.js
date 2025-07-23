// Exercise 1 Section

for (let i = 0; i <= 100; i++){
    if (i % 2 == 0){
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
for (let i = 1; i < 100; i++){
    console.log(i);

    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ");
        }

        if (i % 5 == 0) {
            console.log("BUZZ");
        }

    }
}

// Exercise 3 Section
let i = 0;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let j = 0;
do {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
} while (j <= 100)


let k = 1;
while (k <= 100) {
        console.log(k);
    
        if (k % 3 == 0 && k % 5 == 0){
            console.log("FIZZBUZZ");
        } else {
            if (k % 3 == 0) {
                console.log("FIZZ");
            }
    
            if (k % 5 == 0) {
                console.log("BUZZ");
            }
    
        }
        k++;
    }

let l = 1;
do {
    console.log(l);

    if (l % 3 == 0 && l % 5 == 0) {
        console.log("FIZZBUZZ");
    } else {
        if (l % 3 == 0) {
            console.log("FIZZ");
        }

        if (l % 5 == 0) {
            console.log("BUZZ")
        }
    }
    l++;
} while (l < 100);

// Exercise 4 Section
let numberToFind = Math.round((Math.random() * 500)); 
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 
// creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind){
    console.log(`Found ${numberToFind}!`);
    break;
    }


if (i == n) {
console.log(`Did not find ${numberToFind} within 1-${n}..`);
}
}

// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ"
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);