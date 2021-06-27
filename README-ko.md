[English](./README.md) | 한국어

# vue-load-image

[![npm](https://img.shields.io/npm/dt/vue-load-image.svg)](https://www.npmjs.com/package/vue-load-image) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/minzip/vue-load-image.svg) [![npm version](https://img.shields.io/npm/v/vue-load-image.svg?style=flat)](https://www.npmjs.com/package/vue-load-image) [![NpmLicense](https://img.shields.io/npm/l/vue-load-image.svg)](https://github.com/john015/vue-load-image/blob/master/LICENSE)

vue-load-image 는 이미지로드 중 이미지 로더를 표시하며 이미지로드에 실패 했을때 대체 내용을 표시하는 1KB(gzipped size) Vue component 입니다.

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

#### ⚠️유의사항

data-src 값을 background-image url 과 동일하게 설정 해주세요.

## Events

| Name      | Description                                |
| --------- | ------------------------------------------ |
| `onError` | 이미지 로드 실패시 onError 가 호출 됩니다. |
| `onLoad`  | 이미지가 로드되면 onLoad 가 호출 됩니다.   |

## Slots

이미지가 성공적으로 로드 되면 "image" slot 이 렌더링 됩니다.

이미지가 로드 중일 때 "preloader" slot 이 렌더링됩니다.

이미지로드에 실패하면 "error" slot 이 렌더링됩니다.