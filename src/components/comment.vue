<template>
  <div id="Comment">
    <!-- 评论内容组件 -->
    <div class="comment-item">
      <div class="my-pic hw-ver-h hw-box">
        <img
          :src="comments.header"
          alt=""
        >
      </div>
      <div class="comment-content">
        <div class="author">
          <span class="author-user">{{comments.name}}</span>
          <span class="comment-time">{{comments.time}}</span>
        </div>
        <div>
          <p>{{comments.say}}</p>
          <ul>
            <li
              v-for="(img_item,i) in imgList"
              :key="i"
            ><img
                :src="img_item"
                alt=""
              ></li>
          </ul>
        </div>
        <div class="zan f-r hw-box hw-ver">
          <van-icon
            class="icon"
            name="like-o"
          />
          <span>2</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comments: {
      type: Object
    }
  },
  data() {
    return {
      imgList: []
    };
  },
  mounted() {
    this.imgList = this.comments.imgs;
  }
};
</script>
<style>
.van-icon-like-o {
  display: block !important;
}
</style>
<style scoped lang='less'>
.comment-item {
  display: flex;
  padding: 2vw;
  padding-right: 4vw;
  padding-bottom: 3vw;
  padding-left: 0;
  border-bottom: 1px solid #ddd8ce;
  .my-pic {
    flex: 20%;
    img {
      border-radius: 50%;
      margin-left: 3px;
      width: 35px;
      height: 35px;
    }
  }
  .comment-content {
    flex: 80%;
    .author {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      .author-user {
        color: powderblue;
        font-size: 15px;
        font-weight: 500;
      }
      .comment-time {
        font-size: 13px;
        color: #ccc;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 5px 10px 10px 0;
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
}
.zan {
  width: 40px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  .icon {
    display: block !important;
    margin-right: 4px;
  }
}
</style>