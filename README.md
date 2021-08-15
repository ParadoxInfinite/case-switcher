# case-switcher
A simple package to switch between multiple case standards effortlessly.

######  Note: This is still under active development, keep an eye out for new features!

---

## Installation and Usage:
1. Run the following to install the package
    ```sh
    npm install case-switcher
    # OR
    npm i case-switcher
    ```
2. Import the package as
    ```js
    const caseSwitcher = require('case-switcher');
    // OR
    import caseSwitcher from 'case-switcher';
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