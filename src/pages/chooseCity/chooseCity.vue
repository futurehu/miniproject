<template>
  <div id="ChooseCity">
    <City
      @changeCity='changeCity'
      :cur_city='cur_city'
    ></City>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 导入封装组件
import City from "../../components/city";
export default {
  name: "ChooseCity",
  components: { City },
  data() {
    return {
      cur_city: ""
    };
  },
  computed: mapState([
    // 映射 this.curCity 为 store.state.curCity
    "curCity"
  ]),
  methods: {
    changeCity(city) {
      console.log("子组件传的", city);
      this.$store.commit("setCurCity",city)
      this.$backBeaforWin() //返回上一级
    }
  },
  mounted() {
    this.cur_city = this.curCity;
  }
};
</script>

<style scoped lang='less'>
#ChooseCity {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>