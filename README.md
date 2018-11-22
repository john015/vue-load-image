English | [한국어](./README-ko.md)

# vue-load-image
 [![npm](https://img.shields.io/npm/dt/vue-load-image.svg)](https://www.npmjs.com/package/vue-load-image) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/vue-load-image.svg) [![npm version](https://img.shields.io/npm/v/vue-load-image.svg?style=flat)](https://www.npmjs.com/package/vue-load-image) [![NpmLicense](https://img.shields.io/npm/l/vue-load-image.svg)](https://github.com/john015/vue-load-image/blob/master/LICENSE)

vue-load-image is 3KB minimalist Vue component that display loader during image loading, as well as by display alternate content when the image fails to load.

## Demo
[vue-load-image Demo](https://john015.github.io/vue-load-image/)

## Getting started

`
npm install vue-load-image --save
`   
## Usage

### img
```js
<template>
  <div>
    <vue-load-image>
      <img slot="image" src="./image.png"/>
      <img slot="preloader" src="./image-loader.gif"/>
      <div slot="error">error message</div>
    </vue-load-image>
  </div>
</template>

<script>
// es6
import VueLoadImage from 'vue-load-image'
// es5
var VueLoadImage = require('vue-load-image').default

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```

### background-image
```js
<template>
  <div>
    <vue-load-image>
      <div slot="image" style="background-image: url(./image.png)" data-src='./image.png' />
      <img slot="preloader" src="./image-loader.gif" />
      <div slot="error">error message</div>
    </vue-load-image>
  </div>
</template>

<script>
// es6
import VueLoadImage from 'vue-load-image'
// es5
var VueLoadImage = require('vue-load-image').default

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```
#####Notice

set data-src to be the same as background-image url


## Events

Name     | Description
---------|----------|
`onError`| onError gets triggered when image fails to load.
`onLoad` | onLoad gets triggered when image is loaded.

## Slots

"image" slot will be rendered when the image is successfully loaded

"preloader" slot will be rendered when the image is in the process of loading

"error" slot will be rendered when the image load fails.


## ChangeLog

0.1.0 Publish npm repository

0.1.1 Modify README.md

0.1.2 Add demo page, bug fix
