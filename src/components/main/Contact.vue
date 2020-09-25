<template>
  <div class="contact-me">
    <h2 class="con-tit white-tit">{{ "contact me".toUpperCase() }}</h2>
    <v-divider color="gray" class="line"></v-divider>
    <v-divider color="gray" class="line"></v-divider>
    <div class="contact-wrap">
      <v-input v-for="(name, i)in inputBoxName" :key="i">
        <v-col cols="12">
          <v-text-field label="Name*" solo></v-text-field>
        </v-col>
      </v-input>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-me {
  background-color: #1e1e1e;
  padding: 115px;
}
.white-tit {
  color: #fff;
}
</style>