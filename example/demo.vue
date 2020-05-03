<template>
  <div id="app">
    <h1>vue-load-image</h1>
    <button @click="changeImageURL">change image</button>
    <vue-load-image>
      <img slot="image" :src="src" />
      <img src="./image-loader.gif" slot="preloader" />
      <div slot="error">image load fails</div>
    </vue-load-image>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";
export default {
  name: "App",
  data() {
    return {
      src: "https://picsum.photos/500/600/?random"
    };
  },
  methods: {
    changeImageURL() {
      const randomImageNumber = Math.floor(Math.random() * 999) + 1;
      this.src = "https://picsum.photos/500/600/?image=" + randomImageNumber;
    }
  },
  components: {
    "vue-load-image": VueLoadImage
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 0px 0px 60px;
}
button {
  height: 35px;
  font-size: 16px;
  border-radius: 6px;
  margin-bottom: 12px;
  -webkit-appearance: none;
}
</style>
