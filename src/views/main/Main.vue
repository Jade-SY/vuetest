<template>
  <div class="main">
    <content1></content1>
    <about-me></about-me>
    <VF></VF>
    <Parallax></Parallax>
    <blog></blog>
    <VuexEx></VuexEx>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
    Content1: () => import("@/components/main/Content1.vue"),
    AboutMe: () => import("@/components/main/AboutMe.vue"),
    VF: () => import("@/components/main/Features.vue"),
    Parallax: () => import("@/components/main/Parallax.vue"),
    blog: () => import("@/components/main/Blog.vue"),
    VuexEx: () => import("@/components/main/VuexEx.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
</style>
