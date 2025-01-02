function sum() {
    let x = parseFloat(document.getElementById("Number1").value);
    let y = parseFloat(document.getElementById("Number2").value);
    let z = document.getElementById("Result");

    if (isNaN(x) || isNaN(y)) {
        z.innerHTML = "Please enter valid numbers.";
    } else {
        z.innerHTML = "Result: " + (x + y);
    }
}