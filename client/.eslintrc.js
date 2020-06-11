module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:all",
        "plugin:react/all",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      "array-bracket-newline": ["error", "consistent"],
      "array-bracket-spacing": ["error", "always"],
      "array-element-newline": ["error", "consistent"],
      "arrow-parens": ["error", "as-needed"],
      "callback-return": 0,
      "class-methods-use-this": 0,
      "dot-location": ["error", "property"],
      "function-call-argument-newline": 0,
      "function-paren-newline": 0,
      "id-length": 0,
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "func-names": 0,
      "func-style": 0,
      "implicit-arrow-linebreak": 0,
      "max-classes-per-file": 0,
      "max-len": ["error", 140],
      "max-lines": 0,
      "max-lines-per-function": ["error", 100],
      "max-params": 0,
      "max-statements": 0,
      "multiline-ternary": 0,
      "no-await-in-loop": 0,
      "no-confusing-arrow": 0,
      "no-continue": 0,
      "no-extra-parens": 0,
      "no-implicit-coercion": 0,
      "no-invalid-this": 0,
      "no-magic-numbers": 0,
      "no-multi-assign": 0,
      "no-plusplus": 0,
      "no-process-env": 0,
      "no-return-assign": 0,
      "no-return-await": 0,
      "no-ternary": 0,
      "no-underscore-dangle": 0,
      "object-curly-spacing": 0,
      "object-property-newline": 0,
      "one-var": 0,
      "operator-linebreak": ["error", "before"],
      "padded-blocks": ["error", { "blocks": "never", "classes": "always", "switches": "never" }],
      "prefer-destructuring": 0,
      "prefer-named-capture-group": 0,
      "quotes": ["error", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
      "quote-props": 0,
      "react/no-array-index-key": 0,
      "react/destructuring-assignment": 0,
      "react/forbid-component-props": 0,
      "react/function-component-definition": 0,
      "react/jsx-closing-bracket-location": ["error", { "location": "after-props" }],
      "react/jsx-closing-tag-location": 0,
      "react/jsx-filename-extension": 0,
      "react/jsx-first-prop-new-line": 0,
      "react/jsx-handler-names": 0,
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2],
      "react/jsx-max-depth": ["error", { "max": 6 }],
      "react/jsx-max-props-per-line": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-no-literals": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/jsx-props-no-spreading": 0,
      "react/jsx-sort-props": 0,
      "react/no-danger": 0,
      "react/no-did-mount-set-state": 0,
      "react/no-set-state": 0,
      "react/prop-types": 0,
      "react/require-optimization": 0,
      "react/sort-comp": 0,
      "require-unicode-regexp": 0,
      "sort-keys": 0,
      "sort-imports": 0,
      "sort-vars": 0,
      "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
      "wrap-regex": 0
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
};
