<template>
  <div class="home">
    <div class="block">
      <el-carousel trigger="click" height="570px" indicator-position="outside">
        <el-carousel-item style="height: 570px" v-for="i in 6" :key="i">
          <img :src="`${url}images/${i}.jpg`" />
        </el-carousel-item>
      </el-carousel>
      <span></span>
    </div>
    <section class="headNew">
      <div class="one">
        <div class="txt1"><router-link to="/List/headlines">头条关注</router-link><i class="el-icon-help"></i></div>
        <el-row>
          <el-col :span="6" v-for="el in headlineArr" :key="el">
            <el-card :body-style="{ padding: '0px' }">
              <div class="image" v-html="el.img"></div>
              <div class="title" style="padding: 15px 5px">
                <span v-html="el.title"></span>
                <div class="bottom">
                  <router-link :to="`/Detail/headlines/${el.id}`" type="text"
                    ><i class="el-icon-d-arrow-right"></i
                  ></router-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="two">
      <div class="one">
        <div class="txt1"><router-link to="/List/comprehensive">综合新闻</router-link><i class="el-icon-help"></i></div>
        <el-row>
          <el-col class="animation" :span="6" v-for="el in arrTwo" :key="el">
            <el-card :body-style="{ padding: '0px' }">
              <div class="image" v-html="el.img"></div>
              <div class="title">
                <span class="up" v-html="el.title"></span>
                <span class="down" v-html="el.content"></span>
                <div class="bottom">
                  <router-link :to="`/Detail/comprehensive/${el.id}`" type="text"
                    ><i class="el-icon-d-arrow-right"></i
                  ></router-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="three">
      <div class="one">
        <div class="txt1"><router-link to="/List/learning">学术动态</router-link><i class="el-icon-help"></i></div>
        <el-row class="up">
          <el-col
            :span="6"
            v-for="(el, i) in arrThree.slice(0, 4)"
            :class="[i % 2 == 0 ? 'active' : '']"
            :key="el"
          >
          <router-link :to="`/Detail/learning/${el.id}`">
          <el-row class="title" v-html="el.title"></el-row>
            <el-row class="content" v-html="el.content.slice(0, 30)"></el-row>
          </router-link>
            
          </el-col>
        </el-row>
        <el-row class="down">
          <el-col
            :span="6"
            v-for="(el, i) in arrThree.slice(4, 8)"
            :class="[i % 2 == 0 ? '' : 'active']"
            :key="el"
          >
          <router-link :to="`/Detail/learning/${el.id}`">
          <el-row class="title" v-html="el.title"></el-row>
            <el-row class="content" v-html="el.content.slice(0, 30)"></el-row>
          </router-link>
            
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="four">
      <div class="one">
        <div class="txt1"><router-link to="/List/story">师大故事</router-link><i class="el-icon-help"></i></div>
        <el-row>
          <el-col class="r1" :span="6">
            <el-row v-for="el in arrFour.slice(0, 3)" :key="el">
              <router-link :to="`/Detail/story/${el.id}`">
              <div v-html="el.img"></div>
              </router-link>              
            </el-row>
          </el-col>
          <el-col class="r2" :span="12">
            <el-row v-for="el in arrFour.slice(3, 5)" :key="el">
              <router-link :to="`/Detail/story/${el.id}`">
              <div v-html="el.img"></div>
              </router-link>
            </el-row>
          </el-col>
          <el-col class="r3" :span="6">
            <el-row v-for="el in arrFour.slice(5, 8)" :key="el">
              <router-link :to="`/Detail/story/${el.id}`">
              <div v-html="el.img"></div>
              </router-link>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="five">
      <div class="one">
        <el-row>
          <el-col class="left" :span="15"><div class="title"><router-link to="/List/newest">通知公告</router-link><i class="el-icon-help"></i></div>
            <div class="block">
              <el-carousel interval='5000' trigger="click" height="200px">
                <el-carousel-item v-for="el in arrTwo" :key="el">
                  <router-link :to="`/Detail/newest/${el.id}`">
              <div v-html="el.img"></div>
              </router-link>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col class="right" :span="9">
            <div class="title"><router-link to="/List/notice">专题通告</router-link><i class="el-icon-help"></i></div>
            <el-row class="row" gutter="20">
              <el-col :span="11">
                <router-link to="/Detail/notice/2"><i class="el-icon-zoom-in"></i>
                  <el-image fit="fill" :src="`${url}images/1.jpg`">
                  
                  </el-image>
                </router-link>                
              </el-col>
            <el-col :span="11" >
              <router-link to="/Detail/notice/4"><i class="el-icon-zoom-in"></i>
                <el-image :src="`${url}images/2.jpg`"></el-image>
              </router-link>              
            </el-col>
            </el-row>
            <el-row class="row" gutter="20">
              <el-col :span="11">
                <router-link to="/Detail/notice/5"><i class="el-icon-zoom-in"></i>
                  <el-image fit="fill" :src="`${url}images/3.jpg`"></el-image>
                </router-link>                
              </el-col>
            <el-col :span="11" >
              <router-link to="/Detail/notice/6"><i class="el-icon-zoom-in"></i>
                <el-image :src="`${url}images/4.jpg`"></el-image>
              </router-link>              
            </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      url: this.$store.state.Url,
      headlineArr: [],
      arrTwo: [],
      arrThree: [],
      arrFour: [],
    };
  },
  mounted() {
    this.$axios.get("getData").then((arr) => {
      console.log(arr);
      const arr1 = arr[1];
      const arr2 = arr[2];
      this.arrThree = arr[3];
      this.arrFour = arr[4];
      this.headlineArr = arr1.map((el) => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      this.arrTwo = arr2.map((el) => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
      this.arrFour = this.arrFour.map((el) => {
        let imgsrc = el.content.match(/<img[^>]+>/)[0];
        el.img = imgsrc;
        return el;
      });
    });
  },
  computed: {},
};
</script>
<style scoped lang='less'>

.home {
  
  a,
  a:visited {
    text-decoration: none;
  }
  .block {
    height: 570px;
    span {
      position: absolute;
      display: block;
      height: 30px;
      width: 100%;
      background: url('../assets/line.png') no-repeat center;
      margin-top: -35px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .headNew {
    padding-top: 60px;
    height: 400px;
    width: 100%;
    background: #103869;
    text-align: center;
    z-index: -13;
    .one {
      margin: 0 auto;
      width: 80%;
      height: 300px;
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        left: 0;
        top: 15px;
        background-color: rgb(118, 160, 238);
      }
      .txt1 {
        padding-bottom: 20px;
        z-index: 1;
        height: 30px;
        position: relative;
        margin: 0 auto;
        background: #103869;
        width: 150px;
        font-size: 22px;
        color: white;
        a{
          color: white;
        }
      }
      .image {
        width: 100%;
        height: 180px;
        /deep/ img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        height: 100px;
        color: white;
        background-image: linear-gradient(
          to right,
          rgb(27, 27, 128),
          rgb(67, 67, 192)
        );
        span {
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .bottom {
          margin-top: 20px;
          padding-left: 180px;
          a {
            display: block;
            line-height: 36px;
            width: 36px;
            height: 36px;
            border: 1px solid rgb(151, 151, 245);
            color: rgb(151, 151, 245);
            border-radius: 50%;
          }
        }
      }
    }
  }
  .two {
    padding-top: 60px;
    height: 500px;
    width: 100%;
    background: #cce1fa;
    text-align: center;
    z-index: -13;
    .one {
      margin: 0 auto;
      width: 80%;
      text-align: center;
      position: relative;
      .animation:hover{
        margin: -10px 0 10px 0;
      }
      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        left: 0;
        top: 15px;
        background-color: rgb(118, 160, 238);
      }
      .txt1 {
        padding-bottom: 20px;
        z-index: 1;
        height: 20px;
        position: relative;
        margin: 0 auto 10px;
        background: #cce1fa;
        width: 150px;
        font-size: 22px;
        color: #103869;
      }

      .image {
        width: 100%;
        height: 180px;
        /deep/ img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        height: 230px;
        color: white;
        background: white;
        color: black;
        padding: 0 25px;
        span.up {
          padding: 0 15px;
          color: rgb(97, 106, 241);
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          border-bottom: 1px solid rgb(97, 106, 241);
        }
        span.down {
          line-height: 1.5;
          font-size: 14px;
          display: block;
          height: 100px;
          width: 100%;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        .bottom {
          margin-top: 20px;
          padding-left: 180px;
          a {
            display: block;
            line-height: 36px;
            width: 36px;
            height: 36px;
            border: 1px solid rgb(151, 151, 245);
            color: rgb(151, 151, 245);
            border-radius: 50%;
          }
        }
      }
    }
  }
  .three {
    padding-top: 60px;
    height: 420px;
    width: 100%;
    background: #eaeef5;
    text-align: center;
    z-index: -13;
    .one {
      margin: 0 auto;
      width: 80%;
      height: 300px;
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        left: 0;
        top: 15px;
        background-color: rgb(118, 160, 238);
      }
      .txt1 {
        padding-bottom: 20px;
        z-index: 1;
        height: 30px;
        position: relative;
        margin: 0 auto;
        background: #eaeef5;
        width: 150px;
        font-size: 22px;
        color: #103869;
      }
      .up {
        .active {
          background: #84b3ec;
        }
        .title {
          color: rgb(17, 96, 243);
          height: 90px;
          line-height: 2.2;
          padding-bottom: 20px;
          padding: 15px 20px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .content {
          color: black;
          font-size: 12px;
          padding: 15px 20px;
        }
      }
      .down {
        height: 100px;
        .active {
          background: #84b3ec;
        }
        .title {
          color: rgb(17, 96, 243);
          height: 90px;
          line-height: 2.2;
          padding-bottom: 20px;
          padding: 15px 20px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .content {
          color: black;
          font-size: 12px;
          padding: 15px 20px;
        }
      }
    }
  }
  .four {
    /deep/ img {
      border: 1px solid white;
    }
    padding-top: 60px;
    height: 630px;
    width: 100%;
    background: url("../assets/mode04_bg.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    z-index: -13;
    .one {
      margin: 0 auto;
      width: 80%;
      height: 300px;
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        height: 1px;
        width: 100%;
        left: 0;
        top: 15px;
        background-color: rgb(118, 160, 238);
      }
      .txt1 {
        background: #033d59;
        padding-bottom: 20px;
        z-index: 1;
        height: 30px;
        position: relative;
        margin: 0 auto;
        width: 140px;
        font-size: 22px;
        color: white;
      }
      .r1 {
        padding-right: 5px;
        border: 1px solid black;
        height: 350px;
        /deep/ img {
          margin: 0 5px 5px 0;
          height: 180px;
          width: 100%;
        }
      }
      .r2 {
        border: 1px solid black;
        width: 100%;
        height: 350px;
        /deep/ img {
          height: 276px;
          width: 710px;
        }
      }
      .r3 {
        border: 1px solid black;
        height: 350px;
        /deep/ img {
          margin-bottom: 5px;
          height: 180px;
          width: 100%;
        }
      }
    }
  }
  .five {
    padding-top: 60px;
    height: 320px;
    width: 100%;
    background: #cce1fa;
    text-align: center;
    z-index: -13;
    .one {
      border: 1px solid black;
      margin: 0 auto;
      width: 80%;
      height: 300px;
      text-align: center;
      padding: 0 15px;
      .left {
        text-align: center;
        position: relative;
        padding: 0 15px;
        &::after {
          position: absolute;
          content: "";
          height: 1px;
          width: 90%;
          left: 0;
          top: 25px;
          background-color: rgb(204, 200, 200);
        }
        .title {
          position: relative;
          padding: 0 10px;
          z-index: 5;
          margin: 15px auto;
          width: 110px;
          color: #103869;
          font-size: 22px;
          background: #cce1fa;
        }
        .block{
          margin: 0 auto;
          height:200px;
          width: 80%;
          /deep/ img{
            height: 200px;
            width: 100%;
          }
        }
      }
      .right {
        text-align: center;
        position: relative;
        padding: 0 15px;
        .row{
          margin-bottom: 50px;          
          .el-image{
            height: 80px;            
          }
          a{
            position: relative;
            display: block;
            height:80px;
            width: 222px;
            text-align: center;
            align-items: center;
            .el-icon-zoom-in{
            display: none;
            z-index: 20;
            width: 20px;
            height: 20px;
            top: 40%;
            left: 40%;
            position: absolute;
            font-size: 20px;
            color: white;
            }
            &:hover .el-icon-zoom-in{
              display: block;             
            }
            &::after{
              position: absolute;
              content: '';
              width: 0;
              height: 0;
              left: 50%;
              top: 50%;
              background-color: rgba(0, 0, 0, .5);
              opacity: 0;
              transition: all .4s;
            }
            &:hover{
              &::after{        
              width: 100%;
              height: 100%;
              left:0;
              top: 0;
              border: 1px solid gray;
              opacity: 1;
            }
            }
          }
        }
        &::after {
          position: absolute;
          content: "";
          height: 1px;
          width: 90%;
          left: 0;
          top: 25px;
          background-color: rgb(204, 200, 200);
        }
        .title {
          position: relative;
          padding: 0 10px;
          z-index: 5;
          margin: 15px auto;
          width: 110px;
          color: #103869;
          font-size: 22px;
          background: #cce1fa;
        }
      }
    }
  }
}
</style>