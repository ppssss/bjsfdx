<template>
  <div class="extra">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="Tit"
            ><router-link to="/DetailVideo/video">视频</router-link></span
          >
        </div>
      </template>
      <el-carousel indicator-position="outside" height="280px">
        <el-carousel-item v-for="el in videoArr" :key="el">
          <router-link :to="`/Detail/Video/${el.id}`">
            <img :src="`${url}video/${el.src}`" />
            <h3 class="title1" v-html="el.title"></h3>
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <i class="el-icon-video-play"></i>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="Tit"
            ><router-link to="/DetailVideo/images">图说</router-link></span
          >
        </div>
      </template>
      <el-carousel indicator-position="outside" height="280px">
        <el-carousel-item v-for="el in imgArr" :key="el">
          <router-link :to="`/Detail/images/${el.id}`">
            <img :src="`${url}photoes/${el.src}`" />
            <h3 class="title1" v-html="el.title"></h3>
          </router-link>
        </el-carousel-item>
      </el-carousel>
      <i class="el-icon-video-play"></i>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span class="Tit"
            ><router-link to="/DetailVideo/newest">最新</router-link></span
          >
        </div>
      </template>
      <ul>
        <li v-for="el in newestArr" :key="el">
          <router-link :to="`/Detail/newest/${el.id}`">
            <div class="date">
              <span class="day" v-html="el.day"></span>
              <span class="my" v-html="el.my"></span>
            </div>
            <div class="title" v-html="el.title"></div>
            <i class="el-icon-view">1222</i>
          </router-link>
        </li>
      </ul>
      
    </el-card>
  </div>
</template>
<script>
export default {
  name: "extra",
  data() {
    return {
      url: this.$store.state.Url,
      videoArr: [],
      imgArr: [],
      newestArr: [],
    };
  },
  mounted() {
    this.$axios.get("getMsgObj").then((arr) => {
      this.videoArr = arr[3];
      this.imgArr = arr[2];
      this.newestArr = arr[1].map((el) => {
        const d = new Date(el.updatedAt);
        el.day = d.getDate();
        el.my = d.getMonth() + "-" + d.getFullYear();
        return el;
      });
    });
  },
};
</script>
<style scoped lang="less">
.extra {
  a,:active{
    text-decoration: none;
  }
  .box-card {
    ul {
      padding: 0;
      li {
        margin-bottom: 10px;
        padding: 5px 0;
        list-style: none;
        &:not(:last-child){
          border-bottom: 1px dashed rgb(207, 205, 205);
          }
        a{
          display: flex;
          align-items: center;
          .date{
            width: 80px;
            height:60px;
            background: rgb(156, 156, 250);
            color: white;
            .day{
              display: block;
              font-size: 20px;
              font-weight: bold;
            }
            
          }
          .title{
            width: 340px;
            text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          }
        }
      }
    }
    margin-top: 25px;
    position: relative;
    .el-icon-video-play {
      position: absolute;
      font-size: 50px;
      left: calc(50% - 25px);
      top: calc(50% - 10px);
      color: rgba(0, 0, 0, 0.4);
    }
    .card-header {
      padding: 0;
      text-align: left;
      .Tit {
        font-size: 25px;
        color: rgb(66, 139, 221);
        margin-left: 20px;
      }
    }

    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
      .title1 {
        position: absolute;
        top: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>