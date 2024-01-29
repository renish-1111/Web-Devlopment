// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = 'The penalty imposed by a law court or other authority upon someone found guilty of a crime or other offense.'

function vowelCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
            count++
        }

    }
    return count
}

console.log(vowelCount(str));