'use strict';

/**
 * Generate a random 4-digit number with unique digits.
 *
 * @return {string} A random 4-digit number (may start with 0)
 */
function generateRandomNumber() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [digits[i], digits[j]] = [digits[j], digits[i]];
  }

  const result = digits.slice(0, 4);

  return result.join('');
}

module.exports = {
  generateRandomNumber,
};
