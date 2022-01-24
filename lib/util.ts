export function LuhnAlgorithm(code: string): boolean {
  const length: number = code.length;
  let sum: number = 0;
  let isSecond: boolean = false;
  let digit = 0;

  for (let i = length - 1; i >= 0; i--) {

    digit = parseInt(code[i], undefined);

    if (isSecond) {
      digit = digit * 2;
    }
    sum = sum + parseInt(String(digit / 10), undefined);
    sum = sum + parseInt(String(digit % 10), undefined);
    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}
