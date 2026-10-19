
let total = 0, count = 1; // We initialize the variables total and count.
// As a long as "count" is less than or equal to 10, the block of code inside the while loop will execute, adding the value of count to total and then incrementing count by 1.
while (count <= 10) {
  total += count; // it is a shortened way of writing: total = total + count; (in other words, add the current value of "count" to value already held by total)
  count++; // increment count by 1.
}
console.log(total);

//55 

//we arrive at the same result using the range and sum operations, which create a collection of numbers within a specidied range and then add them together.
console.log(suma(rango(1, 10))); // 55
// warning: the range and sum operations are not built-in JavaScript functions, so they would need to be defined elsewhere in the code for this to work.
