# convert-case [![Unit Tests](https://github.com/ParadoxInfinite/convert-case/actions/workflows/node.js.yml/badge.svg)](https://github.com/ParadoxInfinite/convert-case/actions/workflows/node.js.yml) [![GitHub version](https://badge.fury.io/gh/paradoxinfinite%2Fconvert-case.svg)](https://badge.fury.io/gh/paradoxinfinite%2Fconvert-case) [![npm version](https://badge.fury.io/js/%40paradoxinfinite%2Fconvert-case.svg)](https://badge.fury.io/js/%40paradoxinfinite%2Fconvert-case)
A simple package to switch between multiple case standards effortlessly.

######  Note: This is still under active development, keep an eye out for new features!

---

## Important note:

While using the object related functions, make sure your object is not polluted with mixed cases for keys.
Errors, other than validations, are no longer thrown but `console.error`ed. So, please be sure to check (error) logs before raising a bug on this.

---

## Installation and Usage:
1. Run the following to install the package
    ```sh
    npm install convert-case
    # OR
    npm i convert-case
    ```
2. Import the package as
    ```js
    const caseSwitcher = require('convert-case');
    // OR
    import caseSwitcher from 'convert-case';
    ```
3. Use one of the functions after the import
    ```js
    const camelCaseString = caseSwitcher.snakeToCamel('hello_world');
    console.log(camelCaseString);
    // Outputs: helloWorld
    ```

---

## Contributing:
1. **Test Cases:**
    I would really appreciate any help on writing test cases for this package. The more testing it gets, the better it will be.

2. **Bug fixes and feature development:**
    If you want to contribute to the code, feel free to raise a PR as long as it's a minor change. For a major change, please open an issue and discuss it out before you raise a PR or even get started with coding!

3. **Feature requests:**
    Feature requests will be great, raise an issue with the feature template to let me know what feature you would like added.

4. **Documentation:**
    Documentation and examples are also an amazing way to contribute, so if you notice any mistakes or want to add more content to the docs, you are more than welcome to!
