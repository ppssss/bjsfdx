<template>
  <div class="search">
    <el-form :inline="true" :model="formData" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="formData.keyword" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="formData.type" placeholder="请选择类型">
          <el-option label="头条关注" value="headlines"></el-option>
          <el-option label="综合新闻" value="comprehensive"></el-option>
          <el-option label="学术动态" value="learning"></el-option>
          <el-option label="师大故事" value="story"></el-option>
          <el-option label="通知公告" value="newest"></el-option>
          <el-option label="视频新闻" value="video"></el-option>
          <el-option label="专题公告" value="notice"></el-option>
          <el-option label="图片新闻" value="images"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div v-for="el in arr" :key="el" class="title">
        <router-link :to="`/Detail/${formData.type}/${el.id}`" v-html="el.title"></router-link>
        <span v-html="el.date"></span>
    </div>
    <div class="block">      
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        keyword: "",
        type: "",
      },
      total: 0,
      curPage: "",
      arr:''
    };
  },
  methods: {
    changePage(i) {
      this.curPage = i - 1;
      let tableName = "";
      switch (this.formData.type) {
        case "notice":
          tableName = "Notice";
          break;
        case "video":
          tableName = "Video";
          break;
        case "images":
          tableName = "Images";
          break;
        default:
          tableName = "News";
      }
      this.$axios
        .get("getSearchMsg", {
          params: { ...this.formData, tableName, start: this.curPage },
        })
        .then((el) => {
          console.log(el);
          this.arr=el.map(e=>{
              e.date = new Date(e.updatedAt).toLocaleDateString();
              return e
          })
        });
    },
    onSubmit() {
      let tableName = "";
      switch (this.formData.type) {
        case "notice":
          tableName = "Notice";
          break;
        case "video":
          tableName = "Video";
          break;
        case "images":
          tableName = "Images";
          break;
        default:
          tableName = "News";
      }
      const params = { params: { ...this.formData, tableName } };
      console.log({ ...this.formData, tableName });
      this.$axios.get("getSearchTotal", params).then((el) => {
        console.log(el);
        this.total = parseInt(el);
      });
      this.$axios
        .get("getSearchMsg", {
          params: { ...this.formData, tableName, start: this.curPage },
        })
        .then((el) => {
          console.log(el);
          this.arr=el.map(e=>{
              e.date = new Date(e.updatedAt).toLocaleDateString();
              return e
          })
        });
    },
  },
};
</script>
<style scoped lang='less'>
.search {
    a,a:visited{
        text-decoration: none;
    }
  margin-top: 100px;
  padding-bottom: 300px;
  .title{
      background:  rgb(105, 138, 230);
      color: white;
      font-size: 20px;
      margin-top: 20px;
      a{
          color: white;
      }
      span{
          padding-left: 20px;
      }
  }
}
</style>