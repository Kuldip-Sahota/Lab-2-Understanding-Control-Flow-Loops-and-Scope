let number = 10; 

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let day = 3; 

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}



// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop: " + i);
}

// While Loop
let i = 1;
while (i <= 5) {
    console.log("While Loop: " + i);
    i++;
}

// Do...While Loop
let j = 1;
do {
    console.log("Do...While Loop: " + j);
    j++;
} while (j <= 5);


// Using Break
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Break at: " + i);
        break;
    }
    console.log("Break Loop: " + i);
}

// Using Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Continue at: " + i);
        continue;
    }
    console.log("Continue Loop: " + i);
}


let globalVar = "I'm global!"; 

function scopeExample() {
    let localVar = "I'm local!"; 
    console.log(globalVar); 
    console.log(localVar);  
}

scopeExample();

console.log(globalVar); 
