let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenCount++;
  }
  else {
    oddCount++;
  }
}
console.log(evenCount);
console.log(oddCount);