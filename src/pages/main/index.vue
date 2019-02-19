<template>
  <div>
    <header>
      <div class="text">平台总店</div>
      <div class="input">
        <icon
          type="search"
          size="15"
        />
        <span>搜索您需要的产品</span>
      </div>
    </header>
    <div class="swiper_container">
      <swiper
        class="swiper"
        indicator-dots="true"
        interval="5000"
        duration="1000"
        indicator-active-color='#ff4777'
      >
        <block
          v-for="(item, index) in imgUrls"
          :index="index"
          :key="index"
        >
          <swiper-item>
            <image
              :src="item"
              class="slide-image"
              mode="aspectFill"
            />
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="cate">
      <div>
        <img
          src="./images/1.png"
          alt=""
          srcset=""
        >
        <span>热门推荐</span>
      </div>
      <div>
        <img
          src="./images/2.png"
          alt=""
          srcset=""
        >
        <span>1折专区</span>
      </div>
      <div>
        <img
          src="./images/3.png"
          alt=""
          srcset=""
        >
        <span>商户入驻</span>
      </div>
      <div>
        <img
          src="./images/4.png"
          alt=""
          srcset=""
        >
        <span>合作商户</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="beauty-teach">
      <scroll-view
        scroll-x='true'
        style="white-space: nowrap; display: flex"
      >
        <view>
          <img src="./images/block1.png">
        </view>
        <view>
          <img src="./images/block2.png">
        </view>
        <view>
          <img src="./images/block3.png">
        </view>
      </scroll-view>
      <div class="line"></div>
    </div>
    <div class="cheap-title">
      <div>
        <view>
          <div class="before"></div>
          <img
            src="./images/cheap.png"
            alt=""
          >
          <div class="after"></div>
        </view>
        <span>最新特价商品</span>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      imgUrls: [
        require("./images/banner1.png"),
        "http://n.sinaimg.cn/news/transform/181/w550h431/20180620/Iz1c-hefphqk1822984.jpg"
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../main/logs";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
              console.log('res',res);
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped lang='less'>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
header {
  display: flex;
  padding: 2vw;
  .text {
    flex: 30%;
    color: #ff4777;
    .center();
    font-size: 34rpx;
  }
  & > .input {
    icon {
      padding-right: 2vw;
    }
    display: flex;
    align-items: center;
    border-radius: 6rpx;
    color: #eee;
    padding: 2vw;
    flex: 70%;
    background-color: #ccc;
    font-size: 24rpx;
  }
}
swiper {
  image {
    width: 100%;
    height: 100%;
  }
}
// 分类部分
.cate {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2vw;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 10vw;
    height: 10vw;
  }
  span {
    margin-top: 6rpx;
    font-size: 30rpx;
  }
}
.line {
  width: 100%;
  height: 3vw;
  background-color: #ccc;
}
.beauty-teach {
  view {
    display: inline-block;
  }
  img {
    padding: 2vw;
    padding-bottom: 0;
    box-sizing: border-box;
    height: 35vw;
    width: 50vw;
    display: block;
  }
}
.cheap-title {
  padding: 3vw;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  img {
    width: 20vw;
    height: 6vw;
  }
  view {
    position: relative;
  }
  span {
    font-size: 28rpx;
  }
  .before,
  .after {
    position: absolute;
    top: 50%;
    left: -11vw;
    transform: translateY(-50%);
    display: block;
    width: 8vw;
    height: 5rpx;
    background-color: #ccc;
  }
  .after {
    left: 23vw;
  }
}
</style>
