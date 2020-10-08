<template>
  <div class="service">
    <h1>Why Choose Us</h1>
    <div class="devider"></div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(el, i) in list" :key="i">
        <v-expansion-panel-header>{{ el.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{ el.text }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Solutions Based',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          title: 'Professional Developers',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          title: 'Modular, Adoptable Code',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          title: 'Customizeble',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sem nibh, dapibus id turpis in, feugiat pharetra purus. Vivamus convallis erat eget lacinia molestie. Aliquam libero urna, imperdiet sed ipsum at, cursus accumsan nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service {
  min-height: calc(100vh - 136px);
}
h1 {
  color: #f09f54;
}
.devider {
  width: 28px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.12);
  margin: 10px 0 15px;
}
.v-expansion-panels {
  width: 50%;
}
.v-expansion-panel-content {
  padding: 25px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
