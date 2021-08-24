'use strict';

const convertBtn = document.querySelector('.convert');
const resetBtn = document.querySelector('.reset');
const userInputField = document.querySelector('.binary__input');
const errorMessage = document.querySelector('.error');
const decimalNumber = document.querySelector('.binary__heading-two');

const displayErrorMessage = function (message) {
  userInputField.value = '';
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
};

const renderDisplay = function () {
  convertBtn.classList.toggle('hidden');
  userInputField.classList.toggle('hidden');
  decimalNumber.classList.toggle('hidden');
  resetBtn.classList.toggle('hidden');
};

const convertToBinary = function () {
  try {
    const userInputValue = userInputField.value;

    if (!userInputValue)
      throw new Error(displayErrorMessage('Field can not be empty'));

    if (userInputValue.length > 8)
      throw new Error(displayErrorMessage('Binary must be less than 8'));

    if (
      [...userInputValue].map((el) => el * 1).some((el) => el > 1) ||
      [...userInputValue].map((el) => el * 1).some((el) => el < 0)
    )
      throw new Error(displayErrorMessage('Only 0 and 1 is acceptable'));

    const decimal = parseInt(Number(userInputValue), 2);
    userInputField.value = '';
    decimalNumber.textContent = decimal;
    renderDisplay();
  } catch (err) {}
};

const resetBinaryNumber = function () {
  decimalNumber.textContent = '';
  renderDisplay();
};

convertBtn.addEventListener('click', convertToBinary);
resetBtn.addEventListener('click', resetBinaryNumber);
