export const add2Nums = (num1, num2) => num1 + num2;

export const greet = (name = "Anonymous") => `Hello, ${name}!`;

export const calculateTip = (total, tipRate = 20) => (total * tipRate) / 100;
