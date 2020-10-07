<template>
  <div>
    <v-app-bar color="white" dark>
      <v-avatar>
        <img :src="require('../../assets/logo.svg')" alt="logo" />
        <!-- 자바스크립트에서 파일을 불러오는 코드 require 직접 src에 경로를 입력하면
        웹에서 제대로 적용이 안될 수도 있으므로 자바스크립트를 사용한다-->
      </v-avatar>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="menu">Home</router-link>
      <v-spacer></v-spacer>
      <router-link to="/gallery" class="menu">Gallery</router-link>
      <v-spacer></v-spacer>
      <v-btn class="login">login</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.v-toolbar__title {
  margin-left: 10px;
  color: #333;
  font-weight: bold;
}
.menu {
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
