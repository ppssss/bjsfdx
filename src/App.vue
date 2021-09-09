<template>
  <el-container class="app" :style="`width${pageW}px`">
    <el-header style="text-align:center"><Head/></el-header>
    <el-main ><router-view></router-view></el-main>
    <el-footer ><Fooder/></el-footer>
  </el-container>
</template>
<script>
import Head from './components/Head.vue'
import Fooder from './components/Fooder1.vue'
import Home from './components/Home.vue'

export default {
  components: { Head,Fooder,Home },
  data() {
    return {
      pageW: this.$store.state.pageW,
    };
  },
};
</script>
<style>
#app{
  width: 100%;
}
ul.el-menu--popup{
  min-width: 120px;
}
body{
  padding: 0;
}
.el-header{
  padding: 0;
  height: 100px;
  background: white;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
.el-main{
  text-align: center;
  width: 100%;
  margin-top: 101px;
  padding: 0;
  margin-right: 0;
}
.el-footer{
  height: 200px;
  width: 100%;
  padding: 0;
}

.home .el-carousel__button{
  height: 10px;
  width: 10px;
  border: 2px solid rgb(15, 15, 116);
  border-radius: 50%;
}
.el-carousel__indicator.is-active button{
  background:rgb(15, 15, 116) ;
}
.el-card{
  border: none;
  border-radius:0;
  margin-left: 2px;
}
</style>