English | [한국어](./README-ko.md)

# Vue-load-image

[![npm](https://img.shields.io/npm/dt/vue-load-image.svg)](https://www.npmjs.com/package/vue-load-image) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/minzip/vue-load-image.svg) [![npm version](https://img.shields.io/npm/v/vue-load-image.svg?style=flat)](https://www.npmjs.com/package/vue-load-image) [![NpmLicense](https://img.shields.io/npm/l/vue-load-image.svg)](https://github.com/john015/vue-load-image/blob/master/LICENSE)

Vue-load-image is 1KB(gzipped size) minimalist Vue component that display loader during image loading and display alternate content when the image fails to load.

## Demo

[vue-load-image Demo](https://john015.github.io/vue-load-image/) / [(Source Code)](https://github.com/john015/vue-load-image/tree/master/example) 

## Installation

### Via NPM:

```bash
# for Vue 2.x
npm i vue-load-image 

# for Vue 3.x
npm i vue-load-image@next
```

### Via CDN:

```html
<!-- for Vue 2.x -->
<script src='https://unpkg.com/vue-load-image'></script>

<!-- for Vue 3.x -->
<script src='https://unpkg.com/vue-load-image@next'></script>
```

## Usage

### Image

#### Vue 2.x

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
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```

#### Vue 3.x

```js
<template>
  <div>
    <vue-load-image>
      <template v-slot:image>
        <img src="./image.png"/>
      </template>
      <template v-slot:preloader> 
        <img src="./image-loader.gif" />
      </template>
      <template v-slot:error>Image load fails</template>
    </vue-load-image>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```

### Background-image

#### Vue 2.x

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
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```

#### Vue 3.x

```js
<template>
  <div>
    <vue-load-image>
      <template v-slot:image>
        <div style="background-image: url(./image.png)" data-src='./image.png' />
      </template>
      <template v-slot:preloader> 
        <img src="./image-loader.gif" />
      </template>
      <template v-slot:error>Image load fails</template>
    </vue-load-image>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
}
</script>
```

#### ⚠️Notice

Set data-src to be the same as background-image url

## Events

| Name      | Description                                          |
| --------- | ---------------------------------------------------- |
| `onError` | onError gets triggered when the image fails to load. |
| `onLoad`  | onLoad gets triggered when the image is loaded.      |

## Slots

`"image"` slot will be rendered when the image is successfully loaded

`"preloader"` slot will be rendered when the image is in the process of loading

`"error"` slot will be rendered when the image load fails.