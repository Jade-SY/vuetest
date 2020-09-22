<template>
  <div>
    <h1>New for / If page</h1>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else-if="isElse">This is Else If</h1>
    <h1 v-else>Oh no 😢</h1>
    <h1 v-show="ok">안녕하세요!</h1>
  </div>
</template>

<script>
export default {
  name: "Forif",
  components: {},
  data() {
    return {
      awesome: true,
      isElse: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
