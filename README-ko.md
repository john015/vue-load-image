[English](./README.md) | 한국어

# vue-load-image
 [![npm](https://img.shields.io/npm/dt/vue-load-image.svg)](https://www.npmjs.com/package/vue-load-image) ![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/vue-load-image.svg) [![npm version](https://img.shields.io/npm/v/vue-load-image.svg?style=flat)](https://www.npmjs.com/package/vue-load-image) [![NpmLicense](https://img.shields.io/npm/l/vue-load-image.svg)](https://github.com/john015/vue-load-image/blob/master/LICENSE)
 
vue-load-image는 이미지로드 중 이미지 로더를 표시하며 이미지로드에 실패 했을때 대체 내용을 표시하는 3KB Vue component 입니다.

## Demo
[vue-load-image Demo](https://john015.github.io/vue-load-image/)


## Installation

### NPM
`
npm i vue-load-image
`

### CDN
```
<script src='https://unpkg.com/vue-load-image'></script>
```
 
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
data-src 값을 background-image url과 동일하게 설정 해주세요.

## Events

| Name      | Description                 |
| --------- | --------------------------- |
| `onError` | 이미지 로드 실패시 onError가 호출 됩니다. |
| `onLoad`  | 이미지가 로드되면 onLoad가 호출 됩니다.   |

## Slots

이미지가 성공적으로 로드 되면 "image" slot이 렌더링 됩니다.

이미지가 로드 중일 때 "preloader" slot이 렌더링됩니다.

이미지로드에 실패하면 "error" slot이 렌더링됩니다.


## ChangeLog

0.1.0 npm repository 등록

0.1.1 README.md 수정

0.1.2 데모 페이지 추가, 버그 수정
