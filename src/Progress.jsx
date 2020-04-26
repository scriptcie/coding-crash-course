import React from 'react';
import { useLanguage, LANGUAGES } from './Providers/LanguageProvider';

const contains7 = (number) => number.toString().indexOf('7') !== -1;
const divisibleBy7 = (number) => number % 7 === 0;
const isPalindrome = (number) =>
  number === parseInt(number.toString().split('').reverse().join(''));
const isJuf = (number) =>
  contains7(number) ||
  divisibleBy7(number) ||
  (number > 9 && isPalindrome(number));

const displaySlideNumber = (slideNumber) => {
  if (slideNumber === 33) {
    return "'Vo";
  }

  return isJuf(slideNumber) ? 'Juf' : slideNumber;
};

const ProgressBar = ({ slideNumber, numberOfSlides }) => {
  const { language } = useLanguage();

  // When not using OffsetArrays Julia starts counting their arrays at 1
  const initialIndex = language === LANGUAGES.JULIA ? 1 : 0;

  return (
    <strong>
      {displaySlideNumber(slideNumber + initialIndex)} /{' '}
      {numberOfSlides - (1 - initialIndex)}
    </strong>
  );
};

export default ProgressBar;
