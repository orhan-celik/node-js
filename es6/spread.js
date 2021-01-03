let numbers1 = [1,2,3]
let numbers2 = [numbers1,4,5,6]

console.log(numbers2);
// [ [ 1, 2, 3 ], 4, 5, 6 ]

numbers2 = [...numbers1,4,5,6];
console.log(numbers2)
// [ 1, 2, 3, 4, 5, 6 ]