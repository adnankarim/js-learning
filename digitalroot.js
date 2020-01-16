// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
function digital_root(input) {
  let tempArray = input.toString().split('');
  if (tempArray.length === 1) {
    return n
  }
  for (let i = 0; i < tempArray.length; i++) {
    let sum = 0;

    for (let i = 0; i < tempArray.length; i++) {
      let element = Number(tempArray[i]);

      sum += element;
    }
    tempArray = sum.toString().split('')
  }
  return Number(tempArray[0])
}
