function ConcatenateData(input) {
    let FirstName = input[0];
    let LastName = input[1];
    let age = input [2];
    let city = input [3];

    console.log(`You are ${FirstName} ${LastName}, a ${age}-years old person from ${city}.`);
}

ConcatenateData(["John", "Doe", 30, "New York"]);