<template>
  <div class="blog-view">
    <h2 class="con-tit">{{ 'blog'.toUpperCase() }}</h2>
    <v-divider class="line"></v-divider>
    <v-divider class="line"></v-divider>
    <!-- <div class="blog-item-wrap">
      <div
        class="blog-item"
        v-for="({ img, title, copy }, i) in article"
        :key="i"
      >
        <v-img :src="img" class="mb-4" height="280" width="100%"></v-img>

        <h3 class="blog-tit font-weight-black mb-4">
          {{ title.toUpperCase() }}
        </h3>

        <div class="copy font-weight-light mb-5">{{ copy }}</div>

        <v-btn class="blog-btn font-weight-black" text>
          Continue Reading
        </v-btn>
      </div>
    </div> -->

    <!-- 리뷰 버전 -->
    <!-- <div class="wrapper">
      <blog-item
        v-for="(blog, i) in blogs"
        :key="i"
        :title="blog.title"
        :imgUrl="blog.url"
        :text="blog.text"
        class="blog-item"
    </div>
      ></blog-item> -->
    <!-- 그리드시스템에 한해 부트스트랩이 강력하나 사용은 개인취사 -->
    <!-- 아래는 그리드시스템으로 구현한 버전 -->
    <v-row justify="center">
      <v-col v-for="(blog, i) in blogs" :key="i" cols="12" sm="3" md="4">
        <blog-item
          :title="blog.title"
          :imgUrl="blog.url"
          :text="blog.text"
          class="blog-item"
        ></blog-item>
      </v-col>
    </v-row>
    <v-btn @click="addBlogItem">addBlog</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// 뷰엑스 사용을 위한 임포트
export default {
  name: 'blog',
  components: {
    blogItem: () => import('@/components/main/BlogItem.vue'),
  },
  data() {
    return {
      // article: [
      //   {
      //     img:
      //       "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      //     title: "MOBILE FIRST & RESPONSIVE",
      //     copy:
      //       "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
      //   },
      //   {
      //     img:
      //       "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      //     title: "THINK OUTSIDE THE BOX",
      //     copy:
      //       "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
      //   },
      //   {
      //     img:
      //       "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
      //     title: "SMALL CHANGES, BIG DIFFERENCE",
      //     copy:
      //       "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
      //   }
      // ]
    };
  },
  computed: { ...mapState(['blogs', 'etc']) },
  methods: {
    addBlogItem() {
      //click
      this.$store.commit('addBlog', {
        title: 'shiba',
        url:
          'https://pbs.twimg.com/profile_images/538716586576592896/DKIQ0dPL_400x400.jpeg',
        text: 'shiba입니다.',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// .blog-view {
//   padding: 115px 30px;
// }
// .blog-item-wrap {
//   display: flex;
//   flex-flow: row nowrap;
//   justify-content: center;
// }
// .blog-item {
//   width: 31%;
//   margin: 50px 0.65%;
// }
// .copy {
//   width: 97%;
//   font-size: 20px;
// }
// .blog-btn {
//   margin-left: -17px;
// }
// @media only screen and(max-width:768px) {
//   .blog-item-wrap {
//     flex-flow: column;
//   }
//   .blog-item {
//     width: 100%;
//     margin: 10px 0;
//   }
// }
// 셀프 css

// 리뷰 css
.blog-view {
  padding: 20px;
}
.wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

// .blog-item {
//   width: 31%;
//   margin: 0 10px;
// }

// @media only screen and(max-width:768px) {
//   .wrapper {
//     flex-flow: column;
//   }
//   .blog-item {
//     width: 100%;
//     margin: 10px 0;
//   }
// }

// 아래는 그리드시스템으로 구현한 버전
.blog-item {
  margin: 0 10px;
}
</style>
