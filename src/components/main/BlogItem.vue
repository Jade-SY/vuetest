<template>
  <div class="blog-item">
    <v-img :src="imgUrl" height="300"></v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn>Continue Reading</v-btn>
  </div>
</template>

<script>
export default {
  name: "blogItem",
  props: ["imgUrl", "title", "text"],
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
