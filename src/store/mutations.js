// import * as types from './mutation-types'
const mutations ={
  	 /**
	  * state:当前状态树
	  * curCity: 提交matations时传的参数
	  */
  setCurCity(state, curCity){
    state.curCity = curCity
    console.log('改变城市',state.curCity);
  }
}
export default mutations