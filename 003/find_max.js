//using the array reduce function to find the biggest value in array
let vals = [2, 5, 6, 8, 9, 27, 8, 17, 2, 19];
/*function findMax(acc, val) {
    if (val > acc) {
        acc = val;
    }
    return acc;
}

let biggest = vals.reduce(findMax); */ //<-- full function that can be shortned with ternary operators
let biggest = vals.reduce((acc, val) => val > acc ? val : acc);
let smallest = vals.reduce((acc, val) => val < acc ? val : acc);

console.log(biggest);