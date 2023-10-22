// Instructions can be found in rest_parameters.md

// Add rest parameters here!
export function add(...args) {
  return args.reduce((total, currentValue) => total + currentValue, 0);
}

console.log(add(1, 2, 3, 4, 5));
