let a = prompt("Enter value of a: ", "");
let b = prompt("Enter value of b: ", "");
let c = prompt("Enter value of c: ", "");
let discriminant = b * b - 4 * (a * c);
let sqrDiscriminant = Math.sqrt(discriminant);
if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert("Invalid input data");
} else if(Number(a) === 0 || Number(b) === 0 || Number(c) === 0){
    alert("Invalid input data");
} else if (discriminant < 0){
    console.log("There are no solution");
} else if (discriminant === 0){
    let x = (- b - sqrDiscriminant) / (2 * a);
    console.log(x)
} else if (discriminant > 0){
    let x1 = Math.floor((- b + sqrDiscriminant) / (2 * a));
    let x2 = Math.floor((- b - sqrDiscriminant) / (2 * a));
    console.log("x1 = " + x1, "and" + " x2 = " + x2);
}