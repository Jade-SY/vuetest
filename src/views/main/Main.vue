<template>
  <div class="main">
    <Content1></Content1>
    <AboutMe></AboutMe>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
    Content1: () => import("@/components/main/Content1.vue"),
    AboutMe: () => import("@/components/main/AboutMe.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
