module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base', // Extends Airbnb Base
    'plugin:prettier/recommended' // Extends Prettier
  ],
  settings: {
    "import/resolver": {
      webpack: "webpack.config.js"   // Setting for ESlint import resolver knows alias `~`
    }
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        // .js and .vue always removed.
        js: "never",
        vue: "never"
      }
    ],

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // allow add extra comma when multiline
    "comma-dangle": [2, "only-multiline"],

    // prettier config
    "prettier/prettier": ["error", {
      "trailingComma": "all",
      "printWidth": 80,
      "singleQuote": true
    }],

    // if tag has >= 2 attributes, each attributes must write on per line.
    "vue/max-attributes-per-line": [2, {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
