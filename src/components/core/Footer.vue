<template>
  <div>
    <v-footer class="font-weight-medium">
      <v-col class="text-center" cols="12">
        <p>
          © 2020 —
          Vuetify, Made by SoYeon Park
        </p>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      fixed: true
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
// .font-weight-medium {
//   position: fixed;
//   left: 0;
//   right: 0;
//   bottom: 0;
// }
p {
  font-weight: normal;
  font-size: 14px;
  word-spacing: 0.2em;
}
</style>
