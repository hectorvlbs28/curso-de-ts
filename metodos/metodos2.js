function greeting(name, text) {
    if (text) {
        return "Hello ".concat(name, ", ").concat(text);
    }
    else {
        return "Hello ".concat(name);
    }
}
console.log(greeting('Juan', 'welcome to the course'));
console.log(greeting('Juan'));
function addAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(addAll(1, 2, 3, 4, 5));
function sayBay(name, msg) {
    if (msg === void 0) { msg = 'Bye'; }
    return "".concat(msg, " ").concat(name);
}
console.log(sayBay('Juan'));
console.log(sayBay('Juan', 'See you later'));
