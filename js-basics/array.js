// Array
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits, fruits.pop(), fruits);  // removes last item
console.log(fruits.push('blackberries'), fruits); // appends
fruits[5] = 'banana';
console.log(fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.unshift('kiwi'), fruits);

let vegetables = ['tomato', 'onion', 'potato'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 5));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());