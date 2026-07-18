let a = 0;
let b = 1;

for (let count = 1; count <= 100; count++) {
  console.log(a);

  let next = a + b;
  a = b;
  b = next;
}