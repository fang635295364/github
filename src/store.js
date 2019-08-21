import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mycount: 0,
    students: [
      {name:"s1s",age:10},
      {name:"s2s",age:20},
      {name:"s3s",age:30},
      {name:"s4s",age:40}
    ]
  },
  mutations: {
    jia(state) {
      state.mycount++
    },
    jian(state) {
      state.mycount--
    },
    sbjia(state, num) {
      state.mycount += num
    }
  },
  getters:{
    countpf(state){
      return state.mycount*state.mycount
    },
    dayu20(state){
      return  state.students.filter(stu=>stu.age>20)
    },
    dayu20length(state,getters){
      return  getters.dayu20.length
    },
    dayu(state,getters){
      return function (age) {
        return state.students.filter(stu => stu.age > age)
    }
    }
  },
  actions: {

  }
})
