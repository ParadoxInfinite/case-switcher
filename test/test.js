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
  camelToKebab,
  objSnakeToCamel,
  objSnakeToPascal,
  objSnakeToKebab,
  objCamelToSnake,
  objCamelToPascal,
  objCamelToKebab,
  objKebabToCamel,
  objKebabToPascal,
  objKebabToSnake,
  objPascalToCamel,
  objPascalToSnake,
  objPascalToKebab
} = require('../index.js');

describe('snakeToCamel unit test', function() {
  it('should properly identify and convert snake_case string to camelCase', function() {
    assert.strictEqual(snakeToCamel('hello_world'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToCamel('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('snakeToKebab unit test', function() {
  it('should properly identify and convert snake_case string to kebab-case', function() {
    assert.strictEqual(snakeToKebab('hello_world'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToKebab('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('snakeToPascal unit test', function() {
  it('should properly identify and convert snake_case string to PascalCase', function() {
    assert.strictEqual(snakeToPascal('hello_world'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => snakeToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => snakeToPascal('CONSTANT_SNAKE_CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToCamel unit test', function() {
  it('should properly identify and convert kebab-case string to camelCase', function() {
    assert.strictEqual(kebabToCamel('hello-world'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToCamel('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToPascal unit test', function() {
  it('should properly identify and convert kebab-case string to PascalCase', function() {
    assert.strictEqual(kebabToPascal('hello-world'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToPascal('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('kebabToSnake unit test', function() {
  it('should properly identify and convert kebab-case string to snake_case', function() {
    assert.strictEqual(kebabToSnake('hello-world'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => kebabToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => kebabToSnake('CONSTANT-KEBAB-CASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToCamel unit test', function() {
  it('should properly identify and convert PascalCase string to camelCase', function() {
    assert.strictEqual(pascalToCamel('HelloWorld'), 'helloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToCamel(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToCamel('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToSnake unit test', function() {
  it('should properly identify and convert PascalCase string to snake_case', function() {
    assert.strictEqual(pascalToSnake('HelloWorld'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToSnake('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('pascalToKebab unit test', function() {
  it('should properly identify and convert PascalCase string to kebab-case', function() {
    assert.strictEqual(pascalToKebab('HelloWorld'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => pascalToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => pascalToKebab('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToSnake unit test', function() {
  it('should properly identify and convert camelCase string to snake_case', function() {
    assert.strictEqual(camelToSnake('helloWorld'), 'hello_world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToSnake(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToSnake('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToKebab unit test', function() {
  it('should properly identify and convert camelCase string to kebab-case', function() {
    assert.strictEqual(camelToKebab('helloWorld'), 'hello-world');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToKebab(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToKebab('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('camelToPascal unit test', function() {
  it('should properly identify and convert camelCase string to PascalCase', function() {
    assert.strictEqual(camelToPascal('helloWorld'), 'HelloWorld');
  });
  it('should throw correct errors for specific conditions', function () {
    assert.throws(() => camelToPascal(4), Error, 'Provided object is not a string');
    assert.throws(() => camelToPascal('CONSTANTPASCALCASED'), Error, 'Provided object might contain a constant, you might want to recheck about converting it to camelCase');
  });
});

describe('objSnakeToCamel unit test', function() {
  it('should properly identify and convert an object with snake_cased keys to camelCased keys', function() {
    assert.deepEqual(objSnakeToCamel({
      key_one: 'random value',
      key: 3
    }), {
      keyOne: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objSnakeToPascal unit test', function() {
  it('should properly identify and convert an object with snake_cased keys to camelCased keys', function() {
    assert.deepEqual(objSnakeToPascal({
      key_one: 'random value',
      key: 3
    }), {
      KeyOne: 'random value',
      Key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objSnakeToKebab unit test', function() {
  it('should properly identify and convert an object with snake_cased keys to kebab-cased keys', function() {
    assert.deepEqual(objSnakeToKebab({
      key_one: 'random value',
      key: 3
    }), {
      'key-one': 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objCamelToSnake unit test', function() {
  it('should properly identify and convert an object with camelCased keys to snake_cased keys', function() {
    assert.deepEqual(objCamelToSnake({
      keyOne: 'random value',
      key: 3
    }), {
      key_one: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objCamelToPascal unit test', function() {
  it('should properly identify and convert an object with camelCased keys to PascalCased keys', function() {
    assert.deepEqual(objCamelToPascal({
      keyOne: 'random value',
      key: 3
    }), {
      KeyOne: 'random value',
      Key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objCamelToKebab unit test', function() {
  it('should properly identify and convert an object with camelCased keys to kebab-cased keys', function() {
    assert.deepEqual(objCamelToKebab({
      keyOne: 'random value',
      key: 3
    }), {
      'key-one': 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objKebabToSnake unit test', function() {
  it('should properly identify and convert an object with kebab-cased keys to snake_cased keys', function() {
    assert.deepEqual(objKebabToSnake({
      'key-one': 'random value',
      key: 3
    }), {
      key_one: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objKebabToPascal unit test', function() {
  it('should properly identify and convert an object with kebab-cased keys to PascalCased keys', function() {
    assert.deepEqual(objKebabToPascal({
      'key-one': 'random value',
      key: 3
    }), {
      KeyOne: 'random value',
      Key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objKebabToCamel unit test', function() {
  it('should properly identify and convert an object with kebab-cased keys to camelCased keys', function() {
    assert.deepEqual(objKebabToCamel({
      'key-one': 'random value',
      key: 3
    }), {
      keyOne: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objPascalToSnake unit test', function() {
  it('should properly identify and convert an object with PascalCased keys to snake_cased keys', function() {
    assert.deepEqual(objPascalToSnake({
      KeyOne: 'random value',
      Key: 3
    }), {
      key_one: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objPascalToKebab unit test', function() {
  it('should properly identify and convert an object with PascalCased keys to kebab-cased keys', function() {
    assert.deepEqual(objPascalToKebab({
      KeyOne: 'random value',
      Key: 3
    }), {
      'key-one': 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});

describe('objPascalToCamel unit test', function() {
  it('should properly identify and convert an object with PascalCased keys to camelCased keys', function() {
    assert.deepEqual(objPascalToCamel({
      KeyOne: 'random value',
      Key: 3
    }), {
      keyOne: 'random value',
      key: 3
    });
  });
  it('should throw correct errors for specific conditions', function () {
    // TODO: Think up of error conditions.
  });
});