<template>
  <section class="content1">
    <v-row no-gutters>
      <v-img :min-height="'calc(100vh - 100px)'" src="../../assets/visual.jpg">
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col class="text-center" cols="12">
              <span class="font-weight-light">WELCOME TO</span>
              <br />
              <span class="font-weight-bold">VUETIFY</span>
            </v-col>
            <v-btn
              class="align-self-end"
              color="white"
              fab
              outlined
              @click="$vuetify.goTo('.about-me')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
            <!-- <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>-->
          </v-row>
        </v-container>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "content1",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.text-center {
  line-height: 3.5rem;
}
.font-weight-light {
  font-size: 3rem;
  font-weight: 300;
}
.font-weight-bold {
  font-size: 6rem;
  font-weight: 900;
}
// .down-vtn {
// }
// .v-btn:not(.v-btn--round).v-size--default {
//   width: 64px;
//   height: 64px;
//   border-radius: 50%;
//   border: 1px solid #fff;
// }
</style>
