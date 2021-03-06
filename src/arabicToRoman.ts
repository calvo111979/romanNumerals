interface Value {
  arabic: number;
  roman: string;
}

const breakValues: Value[] = [
  {
    arabic: 1000,
    roman: "M",
  },
  {
    arabic: 900,
    roman: "CM",
  },
  {
    arabic: 500,
    roman: "D",
  },
  {
    arabic: 400,
    roman: "CD",
  },
  {
    arabic: 100,
    roman: "C",
  },
  {
    arabic: 90,
    roman: "XC",
  },
  {
    arabic: 50,
    roman: "L",
  },
  {
    arabic: 40,
    roman: "XL",
  },
  {
    arabic: 10,
    roman: "X",
  },
  {
    arabic: 9,
    roman: "IX",
  },
  {
    arabic: 5,
    roman: "V",
  },
  {
    arabic: 4,
    roman: "IV",
  },
  {
    arabic: 1,
    roman: "I",
  },
];

export function arabicToRoman(arabic: number): string {
  return breakValues.reduce(
    (accumulator, value) => {
      const { remaining, roman } = accumulator;

      const times = Math.trunc(remaining / value.arabic);
      const step = value.arabic * times;
      const newLetters = value.roman.repeat(times);
      return {
        remaining: remaining - step,
        roman: roman + newLetters,
      };
    },
    {
      roman: "",
      remaining: arabic,
    }
  ).roman;
}
