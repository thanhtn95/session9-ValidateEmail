function validate(str) {
    let regex = /^[a-zA-z0-9]+[a-zA-z0-9]*@[a-zA-z0-9]+(\.[a-zA-z0-9]+)$/;
    if (regex.test(str)) {
        return true;
    } else return false;
}

let test1 = "abc@a.com"
let test2 = "a@gmail.x";
let test3 = "#ab@gamil.com"
console.log(validate(test1));
console.log(validate(test2));
console.log(validate(test3));