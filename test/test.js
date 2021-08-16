const assert = require('assert').strict;
const { snakeToCamel, kebabToCamel } = require('../index.js');

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