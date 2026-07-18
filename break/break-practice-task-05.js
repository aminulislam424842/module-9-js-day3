let oddCount = 0;
let n = 100;

for (let i = 1; i <= n; i++) {

  if (i % 2 !== 0) {
    console.log(i);
    oddCount++;
    if (oddCount === 5) {
      break;
    }
  }
}