let a = 0;
let b = 1;
let count = 1;

while (count <= 10) {
  console.log(a);

  let next = a + b;
  a = b;
  b = next;

  count++;
}