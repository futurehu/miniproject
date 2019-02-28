<template>
  <div id="City">
    <scroll-view
      :scroll-into-view="toView"
      :scroll-y="true"
      :scroll-with-animation="true"
      style="height:100vh"
    >
      <div class="current-city bar-grey">
        <img
          src="../../static/images/loc4.png"
          alt=""
        >
        <span>当前定位城市</span>
      </div>
      <div class="local-city add-weight">
        {{cur_city}}
      </div>
      <div class="no-limitCity bar-grey">
        <ul>
          <li>不限城市</li>
          <li>全国</li>
        </ul>
      </div>
      <div class="hot-city bar-grey">
        <ul>
          <li>热门城市</li>
          <li>
            <span
              v-for="(hotItem,index) in hot_list"
              :key="index"
            >{{hotItem.area_name}}</span>

          </li>
        </ul>
      </div>
      <div class="city-list">
        <div
          v-for="(item,index) in allList"
          :key="index"
        >
          <div
            class="tag"
            :id="item.initials"
          >{{item.initials}}</div>
          <div class="detail-city">
            <ul>
              <li
                v-for="(city_list,i) in item.list"
                :key="i"
                @click="clickCity(city_list.area_name)"
              >{{city_list.area_name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </scroll-view>
    <!-- fixed 部分 -->
    <div class="word-fix">
      <ul>
        <li
          v-for="(item,i) in allList"
          :key="i"
        ><span
            @click="clickWord(i,$event)"
            :data-opt='item.initials'
          >{{item.initials}}</span></li>
        <!--  :class="{textActive:i==checkIndex}" -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {
    cur_city: {
      type: String
    }
  },
  data() {
    return {
      city_url: "/v2.0/area/index",
      allList: [],
      checkIndex: "", //默认第一个高亮
      hot_list: [], //热门城市
      toView: ""
    };
  },
  // 页面加载时触发。
  onLoad() {
    this.toView = "";
    this.getCity();
  },
  methods: {
    clickWord(curIndex, e) {
      // 获取标签元素上自定义的 data-opt 属性的值
      let target = e.currentTarget.dataset.opt;
      this.toView = target;
      this.checkIndex = curIndex;
    },
    clickCity(city) {
      console.log("choseCity", city);
      this.$emit("changeCity", city);
    },
    async getCity() {
      // console.log('this.toView',this.toView);
      let res = await this.$http(this.city_url, "post");
      this.allList = res.result;
      this.hot_list = res.hot;
    }
  }
};
</script>

<style scoped lang='less'>
.textActive {
  background-color: skyblue;
  border-radius: 2px;
  color: white;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.current-city {
  display: flex;
  align-items: center;
  padding: 3vw 2vw;
  & > img {
    vertical-align: middle;
    // width: 5vw;
    width: 18px;
    height: 18px;
  }
}
.local-city {
  padding: 3vw 2vw;
  background-color: #fff;
}
.add-weight {
  font-weight: 600;
}
.no-limitCity > ul,
.hot-city > ul {
  li:first-of-type {
    padding: 3vw 2vw;
  }
  li:last-of-type {
    .local-city();
  }
}
.hot-city > ul {
  li:last-of-type {
    span {
      display: inline-block;
      padding: 2vw 3vw;
      background-color: #f6f6f6;
      margin-right: 2vw;
      font-size: 14px;
      border-radius: 2px;
    }
  }
}
.tag {
  .local-city();
  background-color: #f6f6f6;
  padding-left: 3vw;
}
.detail-city > ul {
  background-color: #fff;
}
.detail-city > ul {
  li {
    padding: 3vw;
    padding-left: 3vw;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin-left: 2vw;
  }
}
// 字母列表样式
.word-fix {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 14px;
  height: 100%;
  top: 0;
  right: 3vw;
  ul > li {
    font-size: 14px;
    line-height: 17px;
    padding: 2px 0;
    color: #202224;
    text-align: center;
    span {
      display: block;
      padding: 0 2px;
    }
  }
}
</style>