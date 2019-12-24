let a = prompt("Enter value of a: ", "");
let b = prompt("Enter value of b: ", "");
let c = prompt("Enter value of c: ", "");
if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("input values should be ONLY numbers")
} else if (Number(a) === 0 || Number(b) === 0 || Number(c) === 0){
    alert("A triangle must have 3 sides with a positive definite length");
} else if (a < 0 || b < 0 || c < 0){
    console.log("Triangle doesn’t exist")
} else if (a === b && a === c){
    console.log("Equilateral triangle")
} else if (a === b || a === c || b === c){
    console.log("Isosceles triangle")
} else {
    console.log("Scalene triangle")
}