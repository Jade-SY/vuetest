<template>
  <div class="vuex-ex-comp">
    <div v-for="(file, i) in files" :key="i">
      <v-card class="mx-auto" max-width="344">
        <v-list-item-title class="headline mb-1">
          {{ file.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ file.subtitle }}
        </v-list-item-subtitle>
      </v-card>
      <v-btn @click="addFile">AddFile</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["files"]) },
  methods: {
    addFile() {
      //click이벤트
      this.$store.commit("addFile", {
        title: "Hello",
        subtitle: "this file is good file"
      });
      this.$store.delete("addFile");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>