<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="mainbox">
      <p class="maintxt" @:mouseover="fadeout">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tenetur minus
        tempora animi. Suscipit earum laboriosam, doloribus commodi at quidem
        perferendis, totam maxime magni optio nesciunt dolorum corporis rem
        ipsam itaque!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  width: 1200px;
  margin: 0 auto;
}
.mainbox {
  width: 1200px;
  height: 600px;
  background: rgb(29, 29, 29);
  color: #fff;
  text-align: left;
}
.mainbox > .maintxt {
  width: 660px;
  padding: 50px 0 0 50px;
}
</style>
