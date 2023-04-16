function fibonacci(num) {
// your code here
	let fibArr = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr[num];
}

module.exports = fibonacci;
