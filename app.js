function tribonacci(signature,n){
  //make a for loop that adds the previous three numbers and adds it to the array up until we reach n
  if (n === 0) {
    return [];
  } else if (n <= 3) {
    return signature.slice(0, n);
  }

  const tribonacciSequence = [...signature];

  for (let i = 3; i < n; i++) {
    const nextElement = tribonacciSequence[i - 1] + tribonacciSequence[i - 2] + tribonacciSequence[i - 3];
    tribonacciSequence.push(nextElement);
  }

  return tribonacciSequence;
}