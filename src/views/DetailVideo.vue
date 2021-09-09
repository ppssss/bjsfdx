<template>
  <div class="List">
    <el-row class="one">
      <el-col class="left" :span="15">
        <router-view></router-view>
        <span class="span1">{{ name }}</span>
        <el-breadcrumb separator=">">
          <el-breadcrumb-item
            >您所在的位置：</el-breadcrumb-item
          >
          <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
          <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card v-for="el in arr" :key="el" class="box-card">
          <router-link :to="`/Detail/${newType}/${el.id}`">
            <!-- <template #header> -->
            <div class="card-header">
              <span class="title" v-html="el.title"></span>
            </div>
            <!-- </template> -->
            <el-row class="card">
              <el-col class="carleft" :span="6">
                <img v-if="newType == 'video'" :src="`${url}video/${el.src}`" />
                <img
                  v-if="newType == 'images'"
                  :src="`${url}photoes/${el.src}`"
                />
                <div v-if="newType == 'newest'" v-html="el.img"></div>
              </el-col>
              <el-col class="carright" :span="18">
                <span
                  v-if="newType == 'video'"
                  class="content"
                  v-html="el.content"
                ></span>
                <span
                  v-if="newType == 'images'"
                  class="content"
                  v-html="el.content"
                ></span>
                <span
                  v-if="newType == 'newest'"
                  class="content"
                  v-html="el.first"
                ></span>
                <p class="record">
                  <span v-html="el.date"></span
                  ><i class="el-icon-time"></i>200<i class="el-icon-view"></i>
                </p>
              </el-col>
            </el-row>
          </router-link>
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
  data() {
    return {
      obj: {
        newest: "最新文章",
        video: "视频新闻",
        images: "图说新闻",
      },
      url: this.$store.state.Url,
      arr: [],
      newType: "",
      name: "",
      total: 0,
      curPage: 0,
    };
  },
  watch: {
    $route(to) {
      this.newType = to.params.type;
      this.getTotal();
      this.getPage();
      this.changename()
    },
  },
  components: {
    Extra,
  },
  mounted() {
    const type = this.$route.params.type;
    this.newType = type;
    this.name = this.obj[type];
    this.getPage();
    this.getTotal();
    this.changename()
  },
  methods: {
    changename() {
      const type = this.$route.params.type;
      this.newType = type;
      this.name = this.obj[type];
      this.getPage();
      this.getTotal();
    },
    changePage(i) {
      this.curPage = i - 1;
      this.getPage();
    },
    getTotal() {
      let clsType = "";
      switch (this.newType) {
        // case "newest":
        //   clsType="notice";
        //   break
        case "images":
          clsType = "Images";
          break;
        case "video":
          clsType = "Video";
          break;
        default:
          clsType = "news";
      }
      const params = { params: { type: this.newType, clsType } };
      this.$axios.get("getListTotal", params).then((total) => {
        this.total = parseInt(total);
        // console.log(this.total);
      });
    },
    getPage() {
      let clsType = "";
      switch (this.newType) {
        // case "newest":
        //   clsType="notice";
        //   break
        case "images":
          clsType = "Images";
          break;
        case "video":
          clsType = "Video";
          break;
        default:
          clsType = "news";
      }
      const params = {
        params: { type: this.newType, start: this.curPage * 10, clsType },
      };
      this.$axios.get("getListMsg", params).then((arr) => {
        if (this.newType == "newest") {
          this.arr = arr.map((el) => {
            let first = el.content.match(/<p>[^>]+>/)[0];
            el.first = first;
            let imgsrc = el.content.match(/<img[^>]+>/)[0];
            el.img = imgsrc;
            el.date = new Date(el.updatedAt).toLocaleDateString();
            return el;
          });
        }
        this.arr = arr.map((el) => {
          el.date = new Date(el.updatedAt).toLocaleDateString();
          return el;
        });
      });
    },
  },
};
</script>
<style scoped lang="less">
.List {
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
        height: 100%;
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
          .record {
            color: rgb(175, 171, 171);
            i {
              margin: 0 15px 0 5px;
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