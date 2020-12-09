<template>
  <div class="vue-load-image">
    <slot v-if="status === 'loaded'" name="image" />
    <slot v-else-if="status === 'failed'" name="error" />
    <slot v-else-if="status === 'loading'" name="preloader" />
  </div>
</template>

<script>
const Status = {
  PENDING: "pending",
  LOADING: "loading",
  LOADED: "loaded",
  FAILED: "failed"
};

export default {
  data() {
    return {
      status: null,
      img: null,
      src: null
    };
  },
  created() {
    const { attrs } = this.$slots.image[0].data;
    this.src = attrs.src || attrs["data-src"];
    if (this.src) {
      this.status = Status.LOADING;
      this.crossOrigin = attrs.crossorigin;
      this.createLoader();
      return;
    }
    this.status = Status.PENDING;
  },
  updated() {
    const { attrs } = this.$slots.image[0].data;
    const receivedSrc = attrs.src || attrs["data-src"];
    if (this.status === Status.LOADING && !this.img) {
      this.createLoader();
      return;
    }
    if (this.src !== receivedSrc) {
      this.src = receivedSrc;
      this.crossOrigin = attrs.crossorigin;
      this.createLoader();
    }
  },
  watch: {
    src(value) {
      this.status = value ? Status.LOADING : Status.PENDING;
    }
  },
  methods: {
    createLoader() {
      this.destroyLoader();
      this.img = new Image();
      this.img.onload = this.handleLoad;
      this.img.onerror = this.handleError;
      this.img.crossOrigin = this.crossOrigin;
      this.img.src = this.src;
    },
    destroyLoader() {
      if (this.img) {
        this.img.onload = null;
        this.img.onerror = null;
        this.img = null;
      }
    },
    handleLoad() {
      this.destroyLoader();
      this.status = Status.LOADED;
      this.$emit("onLoad");
    },
    handleError(error) {
      this.destroyLoader();
      this.status = Status.FAILED;
      this.$emit("onError", error);
    }
  }
};
</script>
