// Why is the param called objectToConvert and not stringToConvert?
// Welcome to OOP! :)

// TODOS:
// 1. refactor finalString to a separate function
// 2. refactor object type validation based on the function called
// 3. add object parsing and conversion (find most optimal method, if any others exist other than Object.assign and delete)

function snakeToCamel(objectToConvert) {
  if (typeof objectToConvert !== 'string') {
    throw new Error('Provided object is not a string');
  }
  if (!objectToConvert.includes('_')) {
    throw new Error('Provided object does not contain snake cased string/variable(s)');
  }
  if (objectToConvert === objectToConvert.toUpperCase()) {
    throw new Error('Provided object might contain a constant, you might want to recheck about converting it to camelCase');
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

function kebabToCamel(objectToConvert) {
  // TODO: refactor this into a separate function. validation() maybe.
  if (typeof objectToConvert !== 'string') {
    throw new Error('Provided object is not a string');
  }
  if (!objectToConvert.includes('-')) {
    throw new Error('Provided object does not contain kebab cased string/variable(s)');
  }
  if (objectToConvert === objectToConvert.toUpperCase()) {
    throw new Error('Provided object might contain a constant, you might want to recheck about converting it to camelCase');
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

module.exports = {
  snakeToCamel,
  kebabToCamel
};