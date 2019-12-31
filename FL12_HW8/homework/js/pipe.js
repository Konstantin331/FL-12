function addOne(a){
    return a + 1;
}
function pipe(...ops){
    return ops.reduce(addOne);
}
pipe(1, addOne);
pipe(1, addOne, addOne); 
