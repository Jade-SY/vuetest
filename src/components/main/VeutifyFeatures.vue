<template>
  <!-- <div class="vf">
    <h2 class="con-tit">VUETIFY FEATURES</h2>
    <v-divider class="line"></v-divider>
    <v-divider class="line"></v-divider>
    <v-row>
      <div class="wrap">
        <v-card elevation="0">
          <h3>{{ title }}</h3>
          <br />
          <p>
            {{ text }}
          </p>
        </v-card>
        <v-card elevation="0">
          <h3>{{ title }}</h3>
          <br />
          <p>
            {{ text }}
          </p>
        </v-card>
        <v-card elevation="0">
          <h3>{{ title }}</h3>
          <br />
          <p>
            {{ text }}
          </p>
        </v-card>
      </div>
    </v-row>
  </div> -->
  <section id="features" class="grey lighten-3">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card class="py-12 px-4" color="grey lighten-5" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  name: "VF",
  components: {},
  data() {
    return {
      // title: "VIBRANT COMMUNITY",
      // text:
      //   " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolor corrupti consectetur fugit adipisci itaque delectus odio. Deleniti, aperiam expedita? Rerum laborum qui culpa eos reiciendis voluptatum recusandae, eum corporis. "
      features: [
        {
          icon: "mdi-account-group-outline",
          title: "Vibrant Community",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-update",
          title: "Frequent Updates",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
// .row {
//   padding: 60px;
// }
// .wrap {
//   width: 100%;
// }
// .vf {
//   text-align: center;
//   padding-top: 115px;
//   background: #eee;
// }
// .v-card p {
//   color: #888;
//   font-size: 1.2rem;
//   margin-top: 0;
// }
// .v-card {
//   display: inline-block;
//   max-width: 32.55%;
//   padding: 50px 40px;
// }
// .v-card:nth-child(2) {
//   margin: 0 20px;
// }
// @media screen and (max-width: 960px) {
//   .v-card {
//     max-width: 100%;
//   }
//   .v-card:nth-child(2) {
//     margin: 20px 0;
//   }
// }
</style>
