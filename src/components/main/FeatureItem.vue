<template>
  <div class="feature-item">
    <v-avatar color="blue">
      <v-icon color="white">{{ icon }}</v-icon></v-avatar
    >

    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureItem",
  props: ["icon", "title", "text"],
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.feature-item {
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
}
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
</style>
