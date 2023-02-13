function oddishOrEvenish(num) {
    return (num.toString().split('').reduce((sum, digit) => sum + +digit, 0) % 2 === 0) ? 'Evenish' : 'Oddish';
  }
  console.log(oddishOrEvenish(43)); 
  console.log(oddishOrEvenish(373));
  console.log(oddishOrEvenish(4433)); 