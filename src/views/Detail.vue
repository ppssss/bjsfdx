<template>
  <div class="detail">
    <el-row class="one">
      <el-col class="left" :span="15">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item>您所在的位置：</el-breadcrumb-item
          >
          <el-breadcrumb-item><a href="#/">首页</a></el-breadcrumb-item>
          <el-breadcrumb-item><a :href="type=='headlines'?`#/List/${type}`:`#/DetailVideo/${type}`">{{ name }}</a></el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card class="box-card">
          <!-- <template #header> -->
          <div class="card-header">
            <span class="title" v-html="title"></span>
          </div>
          <!-- </template> -->
          <el-row class="card">
            <div v-html="content"></div>
            <div v-if="type=='images'" class="photo">
              <img v-for="el in photoesArr" :key="el" :src="`${url}photoes/${el}`">
            </div>            
          </el-row>

        </el-card>

        <el-pagination
          background
          @current-change="changePage"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </el-col>
      <el-col class="right" :span="8">
        <Extra />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Extra from "../components/Extra.vue";
export default {
  components: { Extra },
  data() {
    return {
      obj: {
        newest: "最新文章",
        video: "视频新闻",
        images: "图说新闻",
        headlines:"头条关注",
        notice:'专题公告'
      },
      url:this.$store.state.Url,
      type:'',
      title: "",
      content: "",
      name:'',
      photoesArr:[]
    };
  },
  computed: {
    Extra,
  },
  mounted() {
      const type = this.$route.params.type;
      this.type=type;
      this.name = this.obj[type];

    const id = this.$route.params.id;
    const newType = this.$route.params.type;
    // console.log(id,tableName);
    let tableName = "";
    switch (newType) {
      case "notice":
        tableName="Notice";
        break
      case "images":
        tableName = "Images";
        break;
      case "video":
        tableName = "Video";
        break;
      default:
        tableName = "News";
    }
    const params = { params: { tableName, id } };
    this.$axios.get("getDetail", params).then((arr) => {
      if(newType=='images'){
        this.photoesArr=arr.photoes.split(',')
      }
      this.title = arr.title;
      this.content = arr.content;
    });
  },
};
</script>
<style lang="less" scoped>
.detail {
  a,
  a:visited {
    text-decoration: none;
  }
  padding-top: 40px;
  text-align: center;
  background: #ecf2f6;
  .one {
    width: 80%;
    margin: 0 auto;
    .left {
      margin-right: 50px;
      padding: 0 10px;
      /deep/img {
        height: 500px;
        width: 100%;
      }
      .span1 {
        position: absolute;
        left: 20px;
        font-size: 30px;
        font-weight: bold;
        color: rgb(22, 21, 119);
      }
      .el-breadcrumb {
        padding-left: 200px;
        margin-top: 20px;
        color: rgb(76, 143, 243);
        span {
          color: rgb(76, 143, 243);
        }
      }
      .box-card {
        margin-top: 30px;
        text-align: center;
        .card-header {
          padding-bottom: 20px;
        }
        .title {
          font-size: 20px;
          color: rgb(61, 118, 240);
        }
        .content {
          font-size: 14px;
          color: black;
        }
        .carright {
          padding: 0 15px;
          margin: 0 auto;
        }
        .card{
          .photo{
            text-align: left;
            img{
              width: 46%;
              height: 350px;
              margin: 20px 15px 0 0;
            }
          }
        }
      }
    }
    .right {
    }
  }
}
</style>