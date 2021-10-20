[![Total alerts](https://img.shields.io/lgtm/alerts/g/andae/tailwindcss-outlines.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andae/tailwindcss-outlines/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andae/tailwindcss-outlines.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andae/tailwindcss-outlines/context:javascript)

# Tailwind CSS Outlines Plugin

## Installation

> Note that tailwindcss-outlines is designed for Tailwind CSS v2.0.

Install the plugin from npm:

```sh
# Using npm
npm install tailwindcss-outlines

# Using Yarn
yarn add tailwindcss-outlines
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-outlines'),
    // ...
  ],
}
```

## Usage

Set the following properties in your `tailwind.config.js` theme options.

```js
outlineColor: theme => ({
  ...theme('colors')
}),
outlineStyle: {
  default: 'solid',
  solid: 'solid',
  dotted: 'dotted'
},
outlineWidth: {
  default: '4px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '6': '6px',
  '8': '8px',
  '10': '10px'
},
outlineOffset: {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px'
}
```

Feel free to [open an issue](https://github.com/andae/tailwindcss-outlines/issues/new), if you are having a trouble with `tailwindcss-outlines`. PR's are welcome. 

