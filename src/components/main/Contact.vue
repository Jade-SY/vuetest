<template>
  <div class="contact-me">
    <h2 class="con-tit">{{ 'contact me'.toUpperCase() }}</h2>
    <v-divider color="gray" class="line"></v-divider>
    <v-divider color="gray" class="line"></v-divider>
    <!-- <v-input>
        <v-col cols="12">
          <v-text-field
            v-for="(name, i) in inputName"
            :key="i"
            :label="name.name"
            solo
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
        <v-btn depressed width="115" height="52" color="blue accent-1"
          ><span>SUBMIT</span></v-btn
        >
      </div> -->

    <!-- 리뷰 -->
    <div class="form">
      <v-text-field placeholder="Name*" solo v-model="name"></v-text-field>
      <!-- v-model:사용자의 입력값을 받아오는 역할 -->
      <v-text-field placeholder="Email*" solo v-model="email"></v-text-field>
      <v-text-field
        placeholder="Subject*"
        solo
        v-model="subject"
      ></v-text-field>
      <v-textarea solo placeholder="Message*" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn
          width="115"
          height="52"
          color="#82b1ff"
          dark
          @click="requestSendEmail"
          >submit</v-btn
        ></v-row
      >
    </div>
    <!-- form end -->
    <div>
      <div v-for="(employee, i) in body.data" :key="i">
        <div>
          {{
            'name : ' +
              employee.employee_name +
              ' age : ' +
              employee.employee_age
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sendGrid from '@/config/sendGrid.json';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  beforeMount() {},
  computed: { ...mapState(['body']) },
  methods: {
    httpGetExample() {
      // this.$http
      //   .get('http://dummy.restapiexample.com/api/v1/employees')
      //   .then(function(response) {
      //     // handle success
      //     console.log(response.data);
      //   })
      //   .catch(function(error) {
      //     // handle error
      //     console.log(error);
      //   });
      // console.log(this.body);
      // for문
      // for (let i = 0; i < this.body.data.length; i++) {
      //   let employee = this.body.data[i];
      //   console.log(
      //     'name : ' + employee.employee_name + ' age : ' + employee.employee_age
      //   );
      // }
      // for of문
      // for (let employee of this.body.data) {
      //   console.log(
      //     'name : ' + employee.employee_name + ' age : ' + employee.employee_age
      //   );
      // }
      // for each문(가장 많이 쓰임)
      // this.body.data.forEach((employee) => {
      //   console.log(
      //     'name : ' + employee.employee_name + ' age : ' + employee.employee_age
      //   );
      // });
    },
    requestSendEmail() {
      let body = {
        personalizations: [
          {
            to: [
              {
                email: 'kkamang611@naver.com',
              },
            ],
            subject: this.subject,
          },
        ],
        from: {
          email: this.email,
        },
        content: [
          {
            type: 'text/plain',
            value: '안녕하세요. 저는 ' + this.name + '입니다. ' + this.message,
          },
        ],
      };

      this.$http
        .post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', body, {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
            'x-rapidapi-key': sendGrid.key,
            accept: 'application/json',
            useQueryString: true,
          },
        })
        // get은 url에서 끝나지만 post는 url, 뒤에 데이터를 넣을 수 있는 공간이있다
        // 여기서는 body가 데이터에 해당
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-me {
  background-color: #333;
  padding: 115px;
}

.con-tit {
  color: #fff;
}
// self code
// .input-box:first-child {
//   margin-top: 50px;
// }
// .input-box {
//   margin-bottom: 20px;
// }
// .message {
//   margin-top: -35px;
// }
// .submit {
//   text-align: center;
// }
// span {
//   color: #fff;
// }

// 리뷰
</style>
