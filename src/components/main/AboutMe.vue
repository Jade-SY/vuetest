<template>
  <section class="about-me">
    <v-container>
      <div class="text-box">
        <h2 class="con-tit">ABOUT ME</h2>
        <v-divider class="line"></v-divider>
        <v-divider class="line"></v-divider>
        <p>{{ text }}</p>
        <v-avatar class="elevation-12 mb-12 avatar" size="128">
          <img :src="johnImg" alt="John" />
        </v-avatar>
        <v-btn outlined class="about-btn" height="45" elevation="0"
          >Vuetify Documentation</v-btn
        >
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "about-me",
  components: {},
  data() {
    return {
      johnImg: "https://cdn.vuetifyjs.com/images/john.png",
      text:
        "Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components."
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.text-box {
  max-width: 700px;
  margin: 50px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}
p {
  margin-top: 30px;
}
.avatar {
  margin: 10px auto 40px;
}
.about-btn {
  margin: 0 auto;
  color: #666 !important;
}
</style>
