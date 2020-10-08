<template>
  <div class="gallery-item">
    <v-img
      class="img-box"
      :src="url"
      aspect-ratio="1.7"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      <v-expand-transition>
        <div v-if="isMouseOver" class="hover-shade">
          <v-row justify="center" align="center" style="height : 100%;">
            <div class="contents-wrapper">
              <v-btn
                onclick="location.href='#'"
                class="ma-2"
                x-large
                text
                icon
                color="white"
              >
                <v-icon dark x-large>mdi-link</v-icon>
              </v-btn>
              <h3>{{ author }}</h3>
            </div>
          </v-row>
        </div>
      </v-expand-transition>
    </v-img>
  </div>
</template>

<script>
export default {
  props: ['url', 'author'],
  data() {
    return {
      isMouseOver: false,
    };
  },
  methods: {
    mouseover() {
      this.isMouseOver = true;
    },
    mouseleave() {
      this.isMouseOver = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.contents-wrapper {
  width: 200px;
  height: 100px;
  margin: auto;
  text-align: center;
}
.hover-shade {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #efa053;
  opacity: 0.9;
}
</style>
