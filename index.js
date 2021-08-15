const snakeToCamel = (objectToConvert) => {
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

module.exports = { snakeToCamel };