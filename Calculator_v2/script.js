function appendValue(value) {
    document.getElementById("result").value += value;

}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
    if (!result) {
        document.getElementById("result").value = "Error";
    }

}
function or() {
    if (document.getElementById("result").value.includes("(")) {
        document.getElementById("result").value += ")";
    } else {
        document.getElementById("result").value += "(";
    }
}

function orwithdot() {
    if (!document.getElementById("result").value.includes(".")) {
        document.getElementById("result").value += ".";
    } else {
        document.getElementById("result").value += "";
    }
}