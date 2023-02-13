function concat() {
  const arrays = Array.from(arguments);
  return arrays.reduce((result, array) => result.concat(array), []);
}
console.log(concat([1, 2, 3], [4, 5], [6, 7])); 
console.log(concat([1], [2], [3], [4], [5], [6], [7])); 
console.log(concat([1, 2], [3, 4])); 
console.log(concat([4, 4, 4, 4, 4])); 
