// operator and dot checkers:
var operator = 1; 
var dot = 0;

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}
function math(val) { //dynamically adds a character to display
    if (document.getElementById("display").value.length < 15) {
        operator = 0 
        document.getElementById("display").value+=val;
    }
}
function oper(val) { //dynamically adds an operator to display
    if (val == '.' && dot == 0) {
        dot = 1
        document.getElementById("display").value+=val;
    } else {
        if (document.getElementById("display").value.length < 15 && operator == 0 && val != '.') {
            operator = 1
            dot = 0
            document.getElementById("display").value+=val;
        } 
    }
}
