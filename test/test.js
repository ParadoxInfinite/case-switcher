const assert = require('assert').strict;
const {
  snakeToCamel,
  snakeToKebab,
  snakeToPascal,
  kebabToCamel,
  kebabToPascal,
  kebabToSnake,
  pascalToKebab,
  pascalToSnake,
  pascalToCamel,
  camelToSnake,
  camelToPascal,
  camelToKebab
} = require('../index.js');

describe('snakeToCamel unit test', function() {
  it('should properly identify and convert snake_case string to camelCase', function() {
    assert.strictEqual(snakeToCamel('hello_world'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToCamel('badParam'), Error, 'Provided object does not contain snake cased string/variable(s)');
    assert.throws(() => snakeToCamel('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('snakeToKebab unit test', function() {
  it('should properly identify and convert snake_case string to kebab-case', function() {
    assert.strictEqual(snakeToKebab('hello_world'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToKebab('badParam'), Error, 'Provided object does not contain snake cased string/variable(s)');
    assert.throws(() => snakeToKebab('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('snakeToPascal unit test', function() {
  it('should properly identify and convert snake_case string to PascalCase', function() {
    assert.strictEqual(snakeToPascal('hello_world'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToPascal('badParam'), Error, 'Provided object does not contain snake cased string/variable(s)');
    assert.throws(() => snakeToPascal('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToCamel unit test', function() {
  it('should properly identify and convert kebab-case string to camelCase', function() {
    assert.strictEqual(kebabToCamel('hello-world'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToCamel('badParam'), Error, 'Provided object does not contain kebab cased string/variable(s)');
    assert.throws(() => kebabToCamel('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToPascal unit test', function() {
  it('should properly identify and convert kebab-case string to PascalCase', function() {
    assert.strictEqual(kebabToPascal('hello-world'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToPascal('badParam'), Error, 'Provided object does not contain kebab cased string/variable(s)');
    assert.throws(() => kebabToPascal('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToSnake unit test', function() {
  it('should properly identify and convert kebab-case string to snake_case', function() {
    assert.strictEqual(kebabToSnake('hello-world'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToSnake('badParam'), Error, 'Provided object does not contain kebab cased string/variable(s)');
    assert.throws(() => kebabToSnake('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToCamel unit test', function() {
  it('should properly identify and convert PascalCase string to camelCase', function() {
    assert.strictEqual(pascalToCamel('HelloWorld'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToCamel('badParam'), Error, 'Provided object does not contain pascal cased string/variable(s)');
    assert.throws(() => pascalToCamel('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToSnake unit test', function() {
  it('should properly identify and convert PascalCase string to snake_case', function() {
    assert.strictEqual(pascalToSnake('HelloWorld'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToSnake('badParam'), Error, 'Provided object does not contain pascal cased string/variable(s)');
    assert.throws(() => pascalToSnake('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToKebab unit test', function() {
  it('should properly identify and convert PascalCase string to kebab-case', function() {
    assert.strictEqual(pascalToKebab('HelloWorld'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToKebab('badParam'), Error, 'Provided object does not contain pascal cased string/variable(s)');
    assert.throws(() => pascalToKebab('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToSnake unit test', function() {
  it('should properly identify and convert camelCase string to snake_case', function() {
    assert.strictEqual(camelToSnake('helloWorld'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToSnake('hello_world'), Error, 'Provided object might be snake-cased string/variable(s)');
    assert.throws(() => camelToSnake('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToKebab unit test', function() {
  it('should properly identify and convert camelCase string to kebab-case', function() {
    assert.strictEqual(camelToKebab('helloWorld'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToKebab('hello_world'), Error, 'Provided object might be snake-cased string/variable(s)');
    assert.throws(() => camelToKebab('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToPascal unit test', function() {
  it('should properly identify and convert camelCase string to PascalCase', function() {
    assert.strictEqual(camelToPascal('helloWorld'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToPascal('hello_world'), Error, 'Provided object might be snake-cased string/variable(s)');
    assert.throws(() => camelToPascal('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});