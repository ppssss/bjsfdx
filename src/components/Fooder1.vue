<template>
  <div class="fooder">
    <section class="up">
      <el-row style="text-align:center">
        <el-col :span="6" class="left">
          <div class="icon">
            <span class="sina"></span>
            <span class="ma1"></span>
            <span class="weixin"></span>
            <span class="ma2"></span>
          </div>
        </el-col>
        <el-col :span="6" class="center">
          <el-row class="up"><span></span><a href="##">@北京师范大学</a></el-row>
          <el-row class="down">
            #百廿初心 红色基因##我的青春宣言# 百余年引领时代，木铎金声传风采。
            献礼建党百年和建校120周年， 北师大人唱响《青春恰时来》！
          </el-row>
        </el-col>
        <el-col :span="6" class="right">
            <el-row class="up"><span></span><a href="##">@北京师范大学</a></el-row>
          <el-row class="down">
            #百廿初心 红色基因##我的青春宣言# 百余年引领时代，木铎金声传风采。
            献礼建党百年和建校120周年， 北师大人唱响《青春恰时来》！
          </el-row>
        </el-col>
      </el-row>
    </section>
    <div class="down1">
        <el-row class="dowR">
            <el-col :span="6">© 版权所有 北京师范大学</el-col>
            <el-col :span="6">地址：北京市新街口外大街19号    邮编：100875</el-col>
            <el-col :span="6">京ICP备10031106号-58 京公网安备110402430002号</el-col>
            <el-col :span="6">电话查号台：010-58806183</el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // url:this.$store.state.Url
    };
  },
};
</script>
<style scoped lang="less">
.fooder {
    a,a:visited{
        text-decoration: none;
    }
  
  text-align: center;
  section.up {
      padding: 15px 0 30px;
      background: #eaeef5;
    align-items: center;
    text-align: center;
    .left {
        margin-left: 200px;
      padding-left: 220px;
      border-right: 1px solid black;
      .icon {
        width: 150px;
        height: 150px;
        .sina {
          display: inline-block;
          height: 75px;
          width: 75px;
          background: #438bcf url("../assets/sina.png") no-repeat center;
        }
        .ma1 {
          display: inline-block;
          height: 75px;
          width: 75px;
          background: url("../assets/ma01.png") no-repeat center;
        }
        .weixin {
          display: inline-block;
          height: 75px;
          width: 75px;
          background: #25407a url("../assets/weixin.png") no-repeat center;
        }
        .ma2 {
          display: inline-block;
          height: 75px;
          width: 75px;
          background: url("../assets/ma02.png") no-repeat center;
        }
      }
    }
    .center {
      border-right: 1px solid black;
      .up {
        span {
          display: inline-block;
          height: 30px;
          width: 30px;
          margin-left: 50px;
          background: url("../assets/small_sina.png") no-repeat;
        }
      }
      .down {
        margin-top: 20px;
        width: 250px;
        margin-left: 50px;
        line-height: 1.9;
        font-size: 14px;
      }
    }
    .right {
        .up {
        span {
          display: inline-block;
          height: 30px;
          width: 30px;
          margin-left: 50px;
          background: url("../assets/small_weixin.png") no-repeat;
        }
      }
      .down {
        margin-top: 20px;
        width: 280px;
        margin-left: 50px;
        line-height: 1.9;
        font-size: 14px;
      }
    }
  }
  div.down1{
      display: block;
  background-image: linear-gradient(to right, rgb(27, 27, 128),rgb(67, 67, 192),rgb(27, 27, 128));
  text-align: center;
  height: 80px;
  .dowR{
      font-size: 14px;
      margin: 0 auto;
      text-align: center;
      align-items: center;
       width: 1500px;
      height: 100%;
      color: white;
      >.el-col:not(:last-child){
          border-right: 1px solid rgb(127, 155, 248);
      }
  }
}
}
</style>