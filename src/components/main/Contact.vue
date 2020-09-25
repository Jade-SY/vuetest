<template>
  <div class="contact-me">
    <h2 class="con-tit white-tit">{{ "contact me".toUpperCase() }}</h2>
    <v-divider color="gray" class="line"></v-divider>
    <v-divider color="gray" class="line"></v-divider>
    <div class="contact-wrap">
      <v-input>
        <v-col cols="12">
          <v-text-field
            v-for="(name, i) in inputName"
            :key="i"
            :label="name.name"
            solo
            mb-2
            class="input-box"
          ></v-text-field>
        </v-col>
      </v-input>
      <v-col cols="12">
        <v-textarea
          class="message"
          solo
          name="message"
          label="Message*"
        ></v-textarea>
      </v-col>
      <div class="my-2 submit">
        <v-btn depressed width="114" height="52" color="blue accent-1"
          ><span>SUBMIT</span></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: [{ name: "Name*" }, { name: "Email*" }, { name: "Subject*" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-me {
  background-color: #333;
  padding: 115px;
}

.white-tit {
  color: #fff;
}
.input-box:first-child {
  margin-top: 50px;
}
.input-box {
  margin-bottom: 20px;
}
.message {
  margin-top: -35px;
}
.submit {
  text-align: center;
}
span {
  color: #fff;
}
</style>