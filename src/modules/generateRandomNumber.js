'use strict';

/**
 * Generate a random 4-digit number with unique digits, first digit not 0.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const digits = ['0','1','2','3','4','5','6','7','8','9'];

  // Fisher–Yates shuffle
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  // Берём первые 4 цифры
  const result = digits.slice(0, 4);

  // Если первый ноль, меняем с первой ненулевой цифрой
  if (result[0] === '0') {
    for (let i = 1; i < 4; i++) {
      if (result[i] !== '0') {
        [result[0], result[i]] = [result[i], result[0]];
        break;
      }
    }
  }

  return +result.join(''); // приводим к числу
}

module.exports = {
  generateRandomNumber,
};
