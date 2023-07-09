/**
 * @param {number} a
 * @param {number} b
 * @param {function} callback
 * @return {number | string}
 */
const checkNumbersAndExecuteOperation = (a, b, callback) => {
  if ((typeof a !== 'number') || (typeof b !== 'number')) {
    return 'Error with numbers. Operation impossible';
} else {
    callback(a, b);
}

 
};



/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return sum of two numbers
const sum = (a, b) => {
  return a + b;// write your code here
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return result of subtraction of two numbers
const subtract = (a, b) => {
  return a - b;// write your code here
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return result of multiplication of two numbers
const multiply = (a, b) => {
  return a * b;// write your code here
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return result of division of two numbers
const divide = (a, b) => {
  return a / b// write your code here
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return result of modulus of two numbers
const getModulus = (a, b) => {
  return a % b// write your code here
};


/**
 * @param {string} messageType
 * @return {function(*): string }
 */
// Create function that returns another function which receives messages param and returns combination of messageType with message
const formatLogger = (messageType) => {
      return function checkMessage () {
    if (messageType === 'Error') {
      return (`${messageType}: Unknown parameter`);
    } else if (messageType === 'Info') {
      return (`${messageType}: New user added`);
    } else {
      return (`${messageType}: Unsupported format type`);
    }
    
  };
 
  };

  



/**
 * @param {number} num1
 * @param {number} num2
 * @param {function} callback1
 * @param {function} callback2
 * @return {number | string}
 */
// Create function that receives two numbers, and two callbacks
  // It should check if two numbers are real numbers and return result of the second callback. In case it's not a numbers - it should return error message with firstCallback
const calculateResult = (num1, num2, callback1, callback2) => {
if (typeof num1 === 'number' && typeof num2 === 'number') {
   return callback2(num1, num2);
} else {
   return  callback1();
}
  
};



module.exports = {
  checkNumbersAndExecuteOperation,
  sum,
  subtract,
  multiply,
  divide,
  getModulus,
  calculateResult,
  formatLogger,
};
