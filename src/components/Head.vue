<template>
<div class="head">
  <el-row class="up">
  <el-col :span="12">
    <a href="##">信息门户|</a>
        <a href="##">信息公开|</a>
        <a href="##">联系校领导|</a>
        <a href="##">教师邮箱|</a>
        <a href="##">学生邮箱|</a>
        <a href="##">师大云盘</a>
  </el-col>
  <el-col :span="12">
    <a href="##">信息门户|</a>
        <a href="##">信息公开|</a>
        <a href="##">联系校领导|</a>
        <a href="##">教师邮箱|</a>
        <router-link to="/Search"><i class="el-icon-search"></i></router-link>
        
  </el-col>
</el-row>
<el-row style="display: inline-block;" class="down">
      <el-col :span="10"  class="h2L">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template #title>学校概况</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">组织机构</el-menu-item>
          <el-menu-item index="3">学部院系</el-menu-item>
          <el-menu-item index="4">教育教学</el-menu-item>
          <el-submenu index="5">
            <template #title>科学研究</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="logo" :span="4">
        <img class="bg" src="@/assets/logo_bg.png"/>
        <img src="@/assets/logo1.png"/>
        
      </el-col>      
      <el-col :span="10" class="h2R">
        <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="1">
            <template #title>学校概况</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">组织机构</el-menu-item>
          <el-menu-item index="3">学部院系</el-menu-item>
          <el-menu-item index="4">教育教学</el-menu-item>
          <el-submenu index="5">
            <template #title>科学研究</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
</el-row>
</div>
</template>
<script>
export default {
  data() {
    return {
      pagwW: this.$store.state.pagwW,
    };
  },
  methods:{
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>
<style scoped lang="less">
ul.el-menu--popup{
  min-width: 110px;
}

.head{
  text-align: center;
  a,
a:visited {
  
  text-decoration: none;
}

.up{
  background-image: linear-gradient(to right, rgb(27, 27, 128),rgb(67, 67, 192),rgb(27, 27, 128));
  height: 40px;
  align-items: center;
  font-size: 13px;
  a {
    color: white;
    padding-right:6px ;
    margin-left: 10px;
    &:hover{
      color: rgb(163, 157, 157);
    }
}
}
.down{
  height: 100%;
  width: 1300px;
  align-items: center;
  text-align: center;
  .h2L{
    display: block;
  }
  .logo{
    display: inline-block;
    text-align: center;
    position: relative;
    img{
  position: relative;
  width: 180px;
  margin: -40px auto 0;
  z-index: 5;
}
.bg{
  position: absolute;
  width: 210px;
  top: 100px;
  left: -13px;
  z-index: 2;
}
  }

}
}

</style>