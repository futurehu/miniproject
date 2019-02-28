<template>
  <div id="group-buy">
    <div class="img">
      <image
        :src='indexImg[1]'
        @click="previewImage(indexImg)"
      >
        <div class="descri hw-col hw-box">
          <span>{{mainTitle}}</span>
          <span>{{subTitle}}</span>
        </div>
      </image>
    </div>
    <!-- 立即抢购 -->
    <div class="buy">
      <ul>
        <li class="clearfix hw-box hw-between">
          <div class="price hw-box">
            <span class="yuan">9.9元</span>
            <span class="doorPrice">门市价：18元 </span>
          </div>
          <a class="buy-btn">立即抢购</a>
        </li>
      </ul>
    </div>
    <div class="reduce hw-box hw-ver-v">
      <i>减</i>
      <span>商家新客首购立减10元，每人限购1张</span>
    </div>
    <div class="tui clearfix">
      <ul>
        <li>
          <i class="iconfont icon-tui"></i>
          <span>支持随时退款</span>
        </li>
        <li>
          <i class="iconfont icon-duigou"></i>
          <span>支持过期自动退</span>
        </li>
        <li>
          <i class="iconfont icon-yishou"></i>
          <span>已售1750</span>
        </li>
      </ul>
    </div>
    <!-- 评论开始 -->
    <div class="comment">
      <div
        class="comment-top hw-box hw-between hw-ver-v"
        @click="$openWin('/pages/userComment/userComment')"
      >
        <span>★★★★★★ 4.2</span>
        <span class="f-r">9246人评价 ></span>
      </div>
      <div class="comment-bottom">
        <a
          href="javascript:;"
          v-for="(tag,i) in labels"
          :key="i"
        >
          <span>
            {{tag.name}}{{tag.num}}
          </span>
        </a>
      </div>
    </div>
    <!-- 商家详情 -->
    <div class="shopInfo ">
      <div class="shopInfo-top">
        <span>商家信息</span>
      </div>
      <div class="shopInfo-bottom clearfix">
        <div class="shopInfo-bottom-l f-l">

          <span class="hw-box hw-ver-v">
            <i class="iconfont icon-local"></i>
            <span class="near">离我最近</span>
          </span>
        </div>
        <div
          class="shopInfo-bottom-r f-r"
          id="phone"
          @click="clickCall()"
        >
          <i class="iconfont icon-dianhua "></i>
        </div>
      </div>
    </div>
    <div class="taocan shopInfo">
      <div class="shopInfo-top">
        <span>套餐</span>
      </div>
      <div
        class="shopInfo-top clearfix"
        id="row"
      >
        <span>单人自助餐全天价</span>
        <span>1位</span>
        <span>59元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupBuy",
  data() {
    return {
      indexImg: [
        "http://p1.meituan.net/deal/10b1ddef5ec55c2a7a146ce29f0a385f175163.jpg",
        "http://p0.meituan.net/deal/522fd16a9b25479496188b59476d1b941062402.jpg"
      ],
      mainTitle: "索菲特大酒店锦厨国际餐厅自助餐",
      subTitle: "单人自助晚餐",
      nowPrice: "308",
      normalPrice: "398",
      labels: [
        { name: "海鲜棒", num: "202", type: "1" },
        { name: "回头客", num: "97", type: "1" },
        { name: "干净卫生", num: "40", type: "1" },
        { name: "上菜快", num: "22", type: "1" },
        { name: "不推荐", num: "29", type: "0" },
        { name: "家庭聚餐", num: "13", type: "0" },
        { name: "朋友聚餐", num: "9", type: "0" },
        { name: "闺蜜聚会", num: "5", type: "0" },
        { name: "现做现卖", num: "4", type: "0" },
        { name: "请客", num: "4", type: "0" }
      ],
      sellerName: "索菲特大酒店锦厨国际餐厅自助餐",
      sellAdress: "西山区环城南路777号昆明索菲特大酒店49楼",
      package: {
        packageName: "单人自助晚餐",
        notes: [
          "单人自助晚餐：周一至周四18:00-21:00",
          "餐厅预定入口: https://tableplus.accorplus.com?vc=KweeZeenRestaurantAccorASE1187",
          "锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。",
          "我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。",
          "更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)",
          "温馨提示：儿童按身高收费，具体是0-110cm儿童免费；110cm-140cm儿童半价；140cm以上的全价。 另：如遇特殊活动时，需根据店里实际情况按实际价格补差价。"
        ]
      },
      purchaseInfo: {
        validityDate: "2016.2.5 至 2018.6.14",
        unavailableDate: "周五至周日",
        rules: [
          "提前2天预订，周末及节假日提前2天以上预订。预订电话：0871-68639888转锦厨国际餐厅",
          "锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。",
          "我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。",
          "更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)",
          "部分菜品因时令原因有所不同，请以店内当日实际供应为准",
          "提供免费WiFi",
          "停车位收费标准：免费停车"
        ]
      },
      commentsNum: 6,
      comments: [
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
        }
      ]
    };
  },
  methods: {
    // 预览图片api
    previewImage(imgArr, curIndex = 0) {
      wx.previewImage({
        current: imgArr[0], // 当前显示图片的http链接
        urls: imgArr // 需要预览的图片http链接列表
      });
    },
    // 显示操作菜单
    clickCall() {
      // 打电话
      wx.makePhoneCall({
        phoneNumber: "0371-55518989"
      });
    }
  }
};
</script>

<style scoped lang='less'>
#group-buy {
  background-color: #f0efed;
}
.img {
  position: relative;
  image {
    display: block;
    width: 100%;
    height: 200px;
    .descri {
      position: absolute;
      bottom: 10px;
      left: 20px;
      color: white;
      & > span:first-of-type {
        font-size: 18px;
        padding-bottom: 4px;
        font-weight: 700;
      }
    }
  }
}
.buy {
  background-color: #fff;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd8ce;
}

.buy .buy-btn {
  float: right;
  width: 130px;
  height: 40px;
  color: white;
  background-color: #f90;
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  border-radius: 4px;
  margin-left: 30px;
}

.buy .yuan {
  color: #06c1ae;
  font-size: 20px;
  float: left;
  padding-right: 15px;
}

.buy span {
  margin-top: 10px;
}
.buy {
  .doorPrice {
    font-size: 16px;
    margin-top: 20px;
    color: #ccc;
  }
}
.reduce {
  font-size: 13px;
  padding: 15px;
  background-color: #fff;
  height: 15px;
  border-bottom: 1px solid #ddd8ce;
  line-height: 15px;
  color: #333;
}

.reduce i {
  text-align: center;
  width: 13px;
  height: 13px;
  background-color: #f90;
  border-radius: 4px;
  font-style: normal;
  color: white;
  padding: 4px;
  margin-right: 3px;
}

.tui {
  background-color: #fff;
  padding: 15px;
}

.tui li {
  display: flex;
  align-items: center;
  float: left;
  width: 50%;
  color: #6bbd00;
  font-size: 16px;
}

.tui i {
  vertical-align: middle;
  font-size: 15px;
  margin-right: 4px;
}

.tui ul > li:nth-last-of-type(1) {
  margin-top: 10px;
  color: grey;
}

.comment {
  margin: 10px 0;
}

.comment > .comment-top {
  font-size: 16px;
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd8ce;
}

.comment span:first-of-type {
  color: #fa952f;
}

.comment span:last-of-type {
  // line-height: 10px;
  color: #999;
}

.comment .comment-bottom {
  background-color: #fff;
  padding: 10px;
}

.comment .comment-bottom a:nth-of-type(2n) {
  border: 1px solid #acacac;
}

.comment .comment-bottom a:nth-of-type(2n + 1) {
  border: 1px solid #fa952f;
}

.comment .comment-bottom a {
  margin-right: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  padding: 4px 10px;
  display: inline-block;
  background-color: #fff;
  border-radius: 4px;
}
// 商家部分
.shopInfo .shopInfo-top {
  font-size: 16px;
  background-color: #fff;
  padding: 10px 8px;
  border-bottom: 1px solid #ddd8ce;
}
.shopInfo .shopInfo-bottom {
  margin-bottom: 10px;
  line-height: 15px;
  padding: 15px 10px;
  background-color: #fff;
}

.shopInfo .shopInfo-bottom span,
.shopInfo .shopInfo-bottom i {
  font-size: 16px;
}

.shopInfo .shopInfo-bottom .near {
  color: #fa952f;
}

.shopInfo .shopInfo-bottom p {
  font-size: 15px;
}

.shopInfo .shopInfo-bottom .shopInfo-bottom-r {
  border-left: 1px solid #ddd8ce;
  text-align: center;
  height: 55px;
  line-height: 55px;
  color: #06c1ae;
  width: 25%;
}

.shopInfo .shopInfo-bottom .shopInfo-bottom-r i {
  font-size: 18px;
}
.taocan #row {
  border-bottom: 1px solid #ddd8ce;
  padding: 8px 10px;
  padding-right: 0;
}

.taocan #row span {
  text-align: left;
  height: 15px;
  line-height: 15px;
  box-sizing: border-box;
  float: left;
  border-right: 1px solid #ccc;
}

.taocan #row span:nth-of-type(1) {
  width: 50%;
}

.taocan #row span:nth-of-type(2) {
  width: 25%;
  padding-left: 10px;
}

.taocan #row span:nth-of-type(3) {
  width: 25%;
  padding-left: 10px;
}

.taocan::after {
  padding: 0.2rem;
  content: "备注";
  display: block;
  height: 10px;
  background-color: #f0f0f0;
  line-height: 10px;
  text-align: center;
}
</style>