function add(a, b) {
  return a + b;
}

console.log(add(1, '2')); // Output: "12"

function add(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return NaN;
    }
    return a+b;
}