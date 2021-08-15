const assert = require('assert').strict;
const { snakeToCamel } = require('../index.js');

describe('snakeToCamel unit test', function() {
    it('should properly identify and convert snake_case string to camelCase', function() {
        assert.strictEqual(snakeToCamel('hello_world'), 'helloWorld');
    });
});