<template>
  <div class="search-thing">
    <van-search
      :value="searchVal"
      placeholder="横店电影城"
      show-action
      @search="onSearch($event)"
      @cancel="onCancel"
      @change='doInput($event)'
      :focus='true'
    />
    <!-- 搜索值为空显示历史和猜你想找 -->
    <div
      class="guess-want"
      v-if="searchVal.length==0"
    >
      <p>猜你想找</p>
      <ul class="hw-box ul">
        <li
          v-for="(n,i) in guess"
          :key="i"
        >{{n.name}}</li>

      </ul>
      <div class="history-search">
        <p class="hw-between hw-box"><span>历史搜索</span>
          <van-icon name="delete" />
        </p>
        <ul class="hw-box ul">
          <li>我的</li>
        </ul>
      </div>
    </div>
    <!--搜索值不为空的时候，显示搜索列表-->
    <div
      class="search-list"
      v-if="searchVal.length>0"
    >
      <ul>
        <li
          v-if="curSearchList.length>0"
          class="hw-box hw-between"
          v-for="(list,index) in curSearchList"
          :key="index"
        >
          <div class="l">
            <van-icon name="search" />
            <span>{{list.val}}</span>
          </div>
          <span>约{{list.num}}个结果</span>
        </li>
        <li v-if="curSearchList.length==0" class="hw-box hw-between border">
          <div class="l">
            <van-icon name="search" />
            <span>"{{searchVal}}"</span>
          </div>
          <van-icon name="arrow" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      // 测试搜索结果集
      searchAllList: [
        { id: "1", val: "我呀便当", num: "7" },
        { id: "2", val: "我家黑鱼馆", num: "5" },
        { id: "3", val: "我家酸菜鱼", num: "3" },
        { id: "4", val: "我家厨房", num: "1" },
        { id: "5", val: "我家吃铺", num: "1" },
        { id: "6", val: "我的店", num: "2" },
        { id: "7", val: "我爱水果", num: "3" },
        { id: "8", val: "我家美蛙鱼头", num: "1" },
        { id: "9", val: "我家黑鱼", num: "2" },
        { id: "10", val: "我的巧克力", num: "1" },
        { id: "11", val: "我的公寓", num: "1" },
        { id: "12", val: "我香我逸西餐厅", num: "1" }
      ],
      curSearchList: [], // 当前根据搜索关键词搜索到的列表
      // 猜你想找
      guess: [
        { goodId: "1", name: "北京欢乐谷" },
        { goodId: "2", name: "故宫博物院" },
        { goodId: "3", name: "颐和园" },
        { goodId: "4", name: "古北水镇" },
        { goodId: "5", name: "八达岭长城" },
        { goodId: "6", name: "北京海洋馆" }
      ],
      history: [
        { goodId: "6", name: "北京海洋馆" },
        { goodId: "3", name: "北京野生动物园" }
      ]
    };
  },
  methods: {
    doInput(e) {
      this.searchVal = e.mp.detail; //搜索的内容
      this.filterList();
    },
    // 关键字搜索 过滤函数
    filterList() {
      this.curSearchList = this.searchAllList.filter(
        (item, index) => item.val.indexOf(this.searchVal) != -1
      );
    },
    onSearch(e) {
       this.searchVal = e.mp.detail; //搜索的内容
    },
    onCancel() {}
  }
};
</script>
<style lang="less">
.van-search__action {
  color: #13d1be !important;
}
</style>

<style scoped lang='less'>
@theme-color: #13d1be;
.border {
  border-bottom:1px solid #f6f6f6;
}
.guess-want {
  padding: 2vw;
  p {
    font-size: 12px;
    color: #ccc;
    margin-bottom: 2vw;
  }
  .ul {
    flex-wrap: wrap;
    & > li {
      display: inline-block;
      padding: 2vw 3vw;
      margin-bottom: 2vw;
      background-color: #f6f6f6;
      margin-right: 2vw;
      font-size: 12px;
      border-radius: 3px;
    }
  }
}
.search-list > ul {
  padding: 4vw 2vw;
  .l {
    display: flex;
    van-icon {
      margin-right: 2vw;
      font-size: 16px;
    }
  }
  & > li {
    & > span {
      color: #ccc;
    }
    margin-bottom: 4vw;
  }
}
</style>