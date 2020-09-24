<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
.con-tit {
  font-size: 3rem;
  text-align: center;
}
.line {
  width: 60px;
  margin: 2px auto;
}
p {
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.87);
}
</style>