// Why is the param called objectToConvert and not stringToConvert?
// Welcome to OOP! :)

// TODOS:
// 1. add object parsing and conversion (find most optimal method, if any others exist other than Object.assign and delete)
// 2. Verify test cases for each function.

function snakeToCamel(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('_')) {
    throw new Error('Provided object does not contain snake cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('_');
  const finalString = (array) => array.reduce(
    (tempStr, currentWord, index) => index === 0 ? 
      currentWord :
      tempStr + currentWord[0].toUpperCase() + currentWord.slice(1),
      ''
    );
  return finalString(brokenArray);
};

function snakeToKebab(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('_')) {
    throw new Error('Provided object does not contain snake cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('_');
  return brokenArray.join('-');
};

function snakeToPascal(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('_')) {
    throw new Error('Provided object does not contain snake cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('_');
  return brokenArray.reduce(
    (tempStr, currentWord) => tempStr + currentWord[0].toUpperCase() + currentWord.slice(1), ''
  )
};

function kebabToCamel(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('-')) {
    throw new Error('Provided object does not contain kebab cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('-');
  const finalString = (array) => array.reduce(
    (tempStr, currentWord, index) => index === 0 ? 
      currentWord :
      tempStr + currentWord[0].toUpperCase() + currentWord.slice(1),
      ''
    );
  return finalString(brokenArray);
}

function kebabToSnake(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('-')) {
    throw new Error('Provided object does not contain kebab cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('-');
  return brokenArray.join('_');
}

function kebabToPascal(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (!objectToConvert.includes('-')) {
    throw new Error('Provided object does not contain kebab cased string/variable(s)')
  }
  const brokenArray = objectToConvert.split('-');
  const finalString = (array) => array.reduce(
    (tempStr, currentWord) => tempStr + currentWord[0].toUpperCase() + currentWord.slice(1), ''
    );
  return finalString(brokenArray);
}

function pascalToCamel(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toUpperCase()) {
    throw new Error('Provided object does not resemble Pascal case, are you sure the correct parameter was passed?')
  }
  return objectToConvert[0].toLowerCase() + objectToConvert.slice(1);
}

function pascalToSnake(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toUpperCase()) {
    throw new Error('Provided object does not resemble Pascal case, are you sure the correct parameter was passed?')
  }
  let finalString = '';
  for (i in objectToConvert) {
    if (objectToConvert[i] === objectToConvert[i].toUpperCase()){
      if (parseInt(i) === 0) {
        finalString += objectToConvert[i].toLowerCase();
      } else finalString += `_${objectToConvert[i].toLowerCase()}`;
    } else finalString += objectToConvert[i];
  }
  return finalString;
}

function pascalToKebab(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toUpperCase()) {
    throw new Error('Provided object does not resemble Pascal case, are you sure the correct parameter was passed?')
  }
  let finalString = '';
  for (i in objectToConvert) {
    if (objectToConvert[i] === objectToConvert[i].toUpperCase()){
      if (parseInt(i) === 0) {
        finalString += objectToConvert[i].toLowerCase();
      } else finalString += `-${objectToConvert[i].toLowerCase()}`;
    } else finalString += objectToConvert[i];
  }
  return finalString;
}

function camelToSnake(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toLowerCase()) {
    throw new Error('Provided object does not resemble camel case, are you sure the correct parameter was passed?')
  }
  if (objectToConvert.includes('-')) {
    throw new Error('Provided object might be kebab-cased string/variable(s)')
  }
  if (objectToConvert.includes('_')) {
    throw new Error('Provided object might be snake-cased string/variable(s)')
  }
  let finalString = '';
  for (i in objectToConvert) {
    if (objectToConvert[i] === objectToConvert[i].toUpperCase()){
      finalString += `_${objectToConvert[i].toLowerCase()}`;
    } else finalString += objectToConvert[i];
  }
  return finalString;
}

function camelToKebab(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toLowerCase()) {
    throw new Error('Provided object does not resemble camel case, are you sure the correct parameter was passed?')
  }
  if (objectToConvert.includes('-')) {
    throw new Error('Provided object might be kebab-cased string/variable(s)')
  }
  if (objectToConvert.includes('_')) {
    throw new Error('Provided object might be kebab-cased string/variable(s)')
  }
  let finalString = '';
  for (i in objectToConvert) {
    if (objectToConvert[i] === objectToConvert[i].toUpperCase()){
      finalString += `-${objectToConvert[i].toLowerCase()}`;
    } else finalString += objectToConvert[i];
  }
  return finalString;
}

function camelToPascal(objectToConvert) {
  validations(objectToConvert, true, false, true, 'throw');
  if (objectToConvert[0] !== objectToConvert[0].toLowerCase()) {
    throw new Error('Provided object does not resemble camel case, are you sure the correct parameter was passed?')
  }
  if (objectToConvert.includes('-')) {
    throw new Error('Provided object might be kebab-cased string/variable(s)')
  }
  if (objectToConvert.includes('_')) {
    throw new Error('Provided object might be snake-cased string/variable(s)')
  }
  return objectToConvert[0].toUpperCase() + objectToConvert.slice(1);
}

module.exports = {
  snakeToCamel,
  snakeToKebab,
  snakeToPascal,
  kebabToCamel,
  kebabToSnake,
  kebabToPascal,
  pascalToCamel,
  pascalToSnake,
  pascalToKebab,
  camelToSnake,
  camelToPascal,
  camelToKebab
};

function validations(objectToCheck, stringCheck, objectCheck, constCheck, throwOrLog) {
  if (stringCheck) {
    if (typeof objectToCheck !== 'string') {
      if (throwOrLog === 'throw') {
        throw new Error('Provided object is not a string');
      }
      if (throwOrLog === 'log') {
        console.error('Provided object is not a string');
      }
    }
  }
  if (objectCheck) {
    if (!(objectToCheck instanceof Object && objectToCheck.constructor === Object)) {
      if (throwOrLog === 'throw') {
        throw new Error('Provided object is not a parsable object');
      }
      if (throwOrLog === 'log') {
        console.error('Provided object is not a parsable object');
      }
    }
  }
  if (constCheck) {
    if (objectToCheck === objectToCheck.toUpperCase()) {
      if (throwOrLog === 'throw') {
        throw new Error('Provided object might contain a constant, you might want to recheck about converting it\'s case');
      }
      if (throwOrLog === 'log') {
        console.error('Provided object might contain a constant, you might want to recheck about converting it\'s case');
      }
    }
  }
}