<template>
  <div id="userComment">
    <div class="comment-tab">
      <span
        v-for="(tab,index) in comment_tab "
        :key="index"
        @click="clickTab(index)"
        :class="{'text-active':index==cur_index}"
      >{{tab}}</span>
    </div>
    <!-- 不同tab下的评论 -->
    <swiper :duration="500" style="height:calc(94vh)" :current='cur_index' @change="bindchange">
      <!-- 全部评论 -->
      <swiper-item>
        <scroll-view scroll-y scroll-top="0" style="height:calc(100vh)">
          <div class="comment-container" v-for="(val,index) in allComments" :key="index">
            <Comment :comments="val"></Comment>
          </div>
        </scroll-view>
      </swiper-item>
      <!-- 晒图评论 -->
      <swiper-item>
        <scroll-view scroll-y scroll-top="0" style="height:calc(100vh)">
          <div class="comment-container" v-for="(val,index) in imgComments" :key="index">
            <Comment :comments="val"></Comment>
          </div>
        </scroll-view>
      </swiper-item>
      <!-- 低分评论 -->
      <swiper-item>
        <scroll-view scroll-y scroll-top="0" style="height:calc(100vh)">
          <div class="comment-container" v-for="(val,index) in lowScroeComments" :key="index">
            <Comment :comments="val"></Comment>
          </div>
        </scroll-view>
      </swiper-item>
      <!-- 最新评论 -->
      <swiper-item>
        <scroll-view scroll-y scroll-top="0" style="height:calc(100vh)">
          <div class="comment-container" v-for="(val,index) in lastComments" :key="index">
            <Comment :comments="val"></Comment>
          </div>
        </scroll-view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Comment from "../../components/comment";
export default {
  name: "userComment",
  components: { Comment },
  data() {
    return {
      comment_tab: [],
      allComments: [
        {
          header:
            "https://img.meituan.net/avatar/855458f5c24ab19951f382ee99533ad981495.jpg@37w_37h_1e_1c",
          name: "AqU753874254",
          time: "2018-05-07",
          star: "4.0",
          say:
            "菜品很多，强烈推荐龙虾，超级棒！每次来都吃撑！很满意的一家自主餐！生日当天海送了蛋糕、服务员“代玉琳”美女，服务态度超级好，热情，人也长的美美哒，给她一个赞！ ",
          imgs: [
            "http://p0.meituan.net/shaitu/40b07a385f90bca838efa48a911bf491253024.jpg",
            "http://p0.meituan.net/shaitu/f6af829ff902040fb3225643b2775c1f111115.jpg",
            "http://p0.meituan.net/shaitu/e96132da9f76af022d6e521b2265ad70204304.jpg",
            "http://p0.meituan.net/shaitu/307d287b8d55f1d67dab188502a684ec158341.jpg"
          ]
        },
        {
          header:
            "https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
          name: "PPL546030823",
          time: "2018-05-06",
          star: "4.5",
          say:
            "环境很好，有昆明的夕阳相伴，谢谢美女服务员代玉琳的热忱服务，度过和朋友悠闲的晚餐时光🎈 #煎鹅肝# ",
          imgs: [
            "http://p0.meituan.net/400.0/shaitu/bc52b03f7f091d6711b8a1ec024a0e6a83730.jpg",
            "http://p0.meituan.net/400.0/shaitu/053247a6b8ede53824435f23196971d2124167.jpg",
            "http://p0.meituan.net/400.0/shaitu/0783b3f70ab47607593dcba906c7d570147806.jpg"
          ]
        },
        {
          header:
            "https://img.meituan.net/122.74/avatar/5311913bf65406ba020854e2436c9ca156391.jpg",
          name: "SWB34889218",
          time: "2018-04-18",
          star: "5.0",
          say:
            "每次来都吃的好撑！菜品超级多！肖亚萍和茶宏燕两个小姐姐超级热情，超级体贴！",
          imgs: []
        },
        {
          header:
            "https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
          name: "smsaikyo",
          time: "2019-03-1",
          star: "3.8",
          say: "真的不错呢【口味】【环境】【服务】",
          imgs: []
        },
        {
          header:
            "https://img.meituan.net/122.74/avatar/5e1702cffcb2045e5703569dfec6aa5743059.jpg",
          name: "Zjx983004122",
          time: "2018-04-12",
          star: "3.6",
          say:
            "菜品非常好！环境高大上！如果你爱你的姑娘就带她来索菲特锦厨国际餐厅吧！奥对了我真的很想给服务生李艺鑫六星好评！服务太到位了，像一家人一样！李艺鑫下次因为你的服务而来。",
          imgs: [
            "http://p0.meituan.net/400.0/shaitu/290aad74bf18e7cd1409a62d96bd2106178617.jpg"
          ]
        },
        {
          header:
            "https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
          name: "pny1980",
          time: "2018-04-10",
          star: "1.0",
          say:
            "菜品一般，团购就不给开发票，投诉到底我就不信了。最搞笑的就是用餐当中房顶漏水！",
          imgs: []
        }
      ],
      imgComments: [],
      lowScroeComments: [],
      lastComments: [],
      cur_index: 0 //默认高亮
    };
  },
  methods: {
    // 初始化不同的评论类型
    setComments() {
      this.imgComments = this.allComments.filter(item => {
        return item.imgs.length > 0;
      });
      this.lowScroeComments = this.allComments.filter(item => {
        //  item.star|0 评分取整
        return (item.star | 0) < 3;
      });
      // 最新评论 三天之内的
      this.lastComments = this.allComments.filter(item => {
        return this.compareTime(item.time);
      });
      // 初始化tab栏
      this.comment_tab[0] = `全部(${this.allComments.length})`;
      this.comment_tab[1] = `晒图(${this.imgComments.length})`;
      this.comment_tab[2] = `低分(${this.lowScroeComments.length})`;
      this.comment_tab[3] = `最新(${this.lastComments.length})`;
      // console.log('comment_tab',this.comment_tab);
    },
    compareTime(time) {
      const compare = new Date(time).getTime();
      const recently = 86400000 * 3; //定义三天之内
      return new Date().getTime() - compare <= recently; //返回bool
    },
    clickTab(curIndex) {
      this.cur_index = curIndex;
    },
    bindchange(e){
      console.log('索引改变',e);
      this.cur_index=e.target.current;
    }
  },
  mounted() {
    this.setComments();
  },
  onShow() {}
};
</script>

<style scoped lang='less'>
.text-active {
  color: aqua;
  border-bottom: 2px solid aqua;
}
.comment-tab {
  display: flex;
  padding: 0vw 3vw;
  border-bottom: 1px solid #ddd;
  span {
    display: block;
    flex: 1;
    text-align: center;
    padding: 2vw 0;
  }
}
</style>