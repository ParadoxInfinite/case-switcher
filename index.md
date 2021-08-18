## convert-case Docs 

[![Unit Tests](https://github.com/ParadoxInfinite/convert-case/actions/workflows/node.js.yml/badge.svg)](https://github.com/ParadoxInfinite/convert-case/actions/workflows/node.js.yml) [![GitHub version](https://badge.fury.io/gh/paradoxinfinite%2Fconvert-case.svg)](https://badge.fury.io/gh/paradoxinfinite%2Fconvert-case) [![npm version](https://badge.fury.io/js/%40paradoxinfinite%2Fconvert-case.svg)](https://badge.fury.io/js/%40paradoxinfinite%2Fconvert-case)


A simple package to switch between multiple case standards effortlessly.

######  Note: This is still under active development, keep an eye out for new features!

---

### Important note

While using the object related functions, make sure your object is not polluted with mixed cases for keys.
Errors, other than validations, are no longer thrown but `console.error`ed. So, please be sure to check (error) logs before raising a bug on this.

---

## Installation and Usage
1. Run the following to install the package
    ```sh
    npm install convert-case
    # OR
    npm i convert-case
    ```
2. Import the package as
    ```js
    const convertCase = require('convert-case');
    // OR
    import convertCase from 'convert-case';
    ```
3. Use one of the functions after the import
    ```js
    const camelCaseString = convertCase.snakeToCamel('hello_world');
    console.log(camelCaseString);
    // Outputs: helloWorld
    ```

---

## Functions

1. [snakeToCamel()](#snakeToCamel)
2. [snakeToKebab()](#snakeToKebab)
3. [snakeToPascal()](#snakeToPascal)
4. [kebabToCamel()](#kebabToCamel)
5. [kebabToSnake()](#kebabToSnake)
6. [kebabToPascal()](#kebabToPascal)
7. [pascalToCamel()](#pascalToCamel)
8. [pascalToSnake()](#pascalToSnake)
9. [pascalToKebab()](#pascalToKebab)
10. [camelToSnake()](#camelToSnake)
11. [camelToKebab()](#camelToKebab)
12. [camelToPascal()](#camelToPascal)
13. [objSnakeToCamel()](#objSnakeToCamel)
14. [objSnakeToPascal()](#objSnakeToPascal)
15. [objSnakeToKebab()](#objSnakeToKebab)
16. [objCamelToSnake()](#objCamelToSnake)
17. [objCamelToPascal()](#objCamelToPascal)
18. [objCamelToKebab()](#objCamelToKebab)
19. [objPascalToSnake()](#objPascalToSnake)
20. [objPascalToCamel()](#objPascalToCamel)
21. [objPascalToKebab()](#objPascalToKebab)
22. [objKebabToPascal()](#objKebabToPascal)
23. [objKebabToSnake()](#objKebabToSnake)
24. [objKebabToCamel()](#objKebabToCamel)

---

## Contributing
1. **Test Cases:**
    I would really appreciate any help on writing test cases for this package. The more testing it gets, the better it will be.

2. **Bug fixes and feature development:**
    If you want to contribute to the code, feel free to raise a PR as long as it's a minor change. For a major change, please open an issue and discuss it out before you raise a PR or even get started with coding!

3. **Feature requests:**
    Feature requests will be great, raise an issue with the feature template to let me know what feature you would like added.

4. **Documentation:**
    Documentation and examples are also an amazing way to contribute, so if you notice any mistakes or want to add more content to the docs, you are more than welcome to!

---

## Examples
All examples assume you've installed and imported the package by following [this](#Installation-and-Usage).

1. <a name="snakeToCamel"></a>snakeToCamel()
    ```js
    console.log(snakeToCamel('convert_case'));
    // Outputs: convertCase
    ```

1. <a name="snakeToKebab"></a>snakeToKebab()
    ```js
    console.log(snakeToKebab('convert_case'));
    // Outputs: convert-case
    ```

1. <a name="snakeToPascal"></a>snakeToPascal()
    ```js
    console.log(snakeToPascal('convert_case'));
    // Outputs: ConvertCase
    ```

1. <a name="kebabToCamel"></a>kebabToCamel()
    ```js
    console.log(kebabToCamel('convert-case'));
    // Outputs: convertCase
    ```

1. <a name="kebabToSnake"></a>kebabToSnake()
    ```js
    console.log(kebabToSnake('convert-case'));
    // Outputs: convert_case
    ```

1. <a name="kebabToPascal"></a>kebabToPascal()
    ```js
    console.log(kebabToPascal('convert-case'));
    // Outputs: ConvertCase
    ```

1. <a name="pascalToCamel"></a>pascalToCamel()
    ```js
    console.log(pascalToCamel('ConvertCase'));
    // Outputs: convertCase
    ```

1. <a name="pascalToSnake"></a>pascalToSnake()
    ```js
    console.log(pascalToSnake('ConvertCase'));
    // Outputs: convert_case
    ```

1. <a name="pascalToKebab"></a>pascalToKebab()
    ```js
    console.log(pascalToKebab('ConvertCase'));
    // Outputs: convert-case
    ```

1. <a name="camelToSnake"></a>camelToSnake()
    ```js
    console.log(camelToSnake('convertCase'));
    // Outputs: convert_case
    ```

1. <a name="camelToKebab"></a>camelToKebab()
    ```js
    console.log(camelToKebab('convertCase'));
    // Outputs: convert-case
    ```

1. <a name="camelToPascal"></a>camelToPascal()
    ```js
    console.log(camelToPascal('convertCase'));
    // Outputs: ConvertCase
    ```

1. <a name="objSnakeToCamel"></a>objSnakeToCamel()
    ```js
    console.log(objSnakeToCamel({
      key_one: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    keyOne: 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objSnakeToPascal"></a>objSnakeToPascal()
    ```js
    console.log(objSnakeToPascal({
      key_one: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    KeyOne: 'random value',
    //    Key: 3
    //  }
    ```

1. <a name="objSnakeToKebab"></a>objSnakeToKebab()
    ```js
    console.log(objSnakeToKebab({
      key_one: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    'key-one': 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objCamelToSnake"></a>objCamelToSnake()
    ```js
    console.log(objCamelToSnake({
      keyOne: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    key_one: 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objCamelToPascal"></a>objCamelToPascal()
    ```js
    console.log(objCamelToPascal({
      keyOne: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    KeyOne: 'random value',
    //    Key: 3
    //  }
    ```

1. <a name="objCamelToKebab"></a>objCamelToKebab()
    ```js
    console.log(objCamelToKebab({
      keyOne: 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    'key-one': 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objPascalToSnake"></a>objPascalToSnake()
    ```js
    console.log(objPascalToSnake({
      KeyOne: 'random value',
      Key: 3
    }));
    // Outputs: 
    //  {
    //    key_one: 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objPascalToCamel"></a>objPascalToCamel()
    ```js
    console.log(objPascalToCamel({
      KeyOne: 'random value',
      Key: 3
    }));
    // Outputs: 
    //  {
    //    keyOne: 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objPascalToKebab"></a>objPascalToKebab()
    ```js
    console.log(objPascalToKebab({
      KeyOne: 'random value',
      Key: 3
    }));
    // Outputs: 
    //  {
    //    'key-one': 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objKebabToPascal"></a>objKebabToPascal()
    ```js
    console.log(objKebabToPascal({
      'key-one': 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    KeyOne: 'random value',
    //    Key: 3
    //  }
    ```

1. <a name="objKebabToSnake"></a>objKebabToSnake()
    ```js
    console.log(objKebabToSnake({
      'key-one': 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    key_one: 'random value',
    //    key: 3
    //  }
    ```

1. <a name="objKebabToCamel"></a>objKebabToCamel()
    ```js
    console.log(objKebabToCamel({
      'key-one': 'random value',
      key: 3
    }));
    // Outputs: 
    //  {
    //    keyOne: 'random value',
    //    key: 3
    //  }
    ```
