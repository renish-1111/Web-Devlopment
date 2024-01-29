// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let num = 0
let big = 0
let small = 0

function password(string) {
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            num++
        }
        else if (string[i] == string[i].toLowerCase()) {
            small++
        }
        else if (string[i] == string[i].toUpperCase()) {
            big++
        }
    }
    if (num == 0 || small == 0 || big == 0 || string.length <= 7) {
        return "Password is Invalid"
    }
    else {
        return "Password is valid"
    }
}

let pass = password('AS12sjsd4')
console.log(pass);
