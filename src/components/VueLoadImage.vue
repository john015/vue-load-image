<template>
  <div class="vue-load-image">
    <slot v-if="status === 'loaded'" name="image" />
    <slot v-else-if="status === 'failed'" name="error" />
    <slot v-else-if="status === 'loading'" name="preloader" />
  </div>
</template>

<script>
const Status = {
  PENDING: 'pending',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
}

export default {
  data() {
    return {
      status: null,
      img: null,
      src: null,
    }
  },
  created() {
    const imageElement = this.getImgElementFromImageSlot()
    if (imageElement == null) {
      return
    }
    this.src = imageElement.props.src || imageElement.props['data-src']
    if (this.src) {
      this.status = Status.LOADING
      this.crossOrigin = imageElement.props.crossorigin
      this.createLoader()
    } else {
      this.status = Status.PENDING
    }
  },
  updated() {
    const imageElement = this.getImgElementFromImageSlot()
    if (imageElement == null) {
      return
    }
    const receivedSrc = imageElement.props.src || imageElement.props['data-src']
    if (this.status === Status.LOADING && !this.img) {
      this.createLoader()
      return
    }
    if (this.src !== receivedSrc) {
      this.src = receivedSrc
      this.crossOrigin = imageElement.props.crossorigin
      this.createLoader()
    }
  },
  watch: {
    src(value) {
      this.status = value ? Status.LOADING : Status.PENDING
    },
  },
  methods: {
    createLoader() {
      this.destroyLoader()
      this.img = new Image()
      this.img.onload = this.handleLoad
      this.img.onerror = this.handleError
      this.img.crossOrigin = this.crossOrigin
      this.img.src = this.src
    },
    destroyLoader() {
      if (this.img) {
        this.img.onload = null
        this.img.onerror = null
        this.img = null
      }
    },
    handleLoad() {
      this.destroyLoader()
      this.status = Status.LOADED
      this.$emit('onLoad')
    },
    handleError(error) {
      this.destroyLoader()
      this.status = Status.FAILED
      this.$emit('onError', error)
    },
    getImgElementFromImageSlot() {
      const imageSlot = this.$slots.image && this.$slots.image()
      if (imageSlot === undefined) {
        console.warn('Please define <template v-slot:image> slot in <vue-load-image>')
        return
      }
      return this.findImgElementFrom(imageSlot)
    },
    findImgElementFrom(slot) {
      const queue = [...slot]
      while (queue.length > 0) {
        const child = queue.shift()
        if (
          child.type === 'img' ||
          (child.props && child.props['data-src'] != null)
        ) {
          return child
        }
        if (child.children instanceof Array) {
          queue.push(...child.children)
        }
      }
      return null
    },
  },
}
</script>
