const romanNumbers = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};
const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

export function numberToRoman(numero: number): string {
  let romanNumber = "";

  for (let i = 0; i < keys.length; i++) {
    let arabNumber = keys[i];
    while (numero >= arabNumber) {
      numero -= arabNumber;
      romanNumber += romanNumbers[arabNumber];
    }
  }

  return romanNumber;
}
