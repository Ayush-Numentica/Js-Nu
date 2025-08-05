let c_name = "numentica ui"
let count = 0
function vowel(a) {
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) == "a" || a.charAt(i) == "e" || a.charAt(i) == "i" || a.charAt(i) == "o" || a.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}
console.log(vowel(c_name));