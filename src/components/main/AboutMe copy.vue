<template>
  <div class="about-me">
    <div class="flex-item">
      <h2>{{'about-me'.toUpperClass()}}</h2>
      <div class="divider"></div>
      <p>{{text}}</p>
      <v-card elevation="11" rounded="circle" width="100">
        <v-avatar size="100">
          <img :src="johnImg" alt="John" />
        </v-avatar>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  components: {},
  data() {
    return {
      text:
        "Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.",
      johnImg: "https://cdn.vuetifyjs.com/images/john.png"
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.about-me {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 96px;
  text-align: center;
}
.flex-item {
  max-width: 900px;
}
.divider {
  width: 56px;
  height: 5px;
  margin: 0 auto 32px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  opacity: 0.3;
}
</style>
