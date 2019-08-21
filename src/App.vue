<template>
  <div id="app">
    <button @click="jiajia">+1</button>
    <button @click="jianjian">-1</button>
    <button @click="sbjia">+5</button>
    <div>{{$store.state.mycount}}</div>
      <div>conut的平方{{$store.getters.countpf}}</div> 
      <div>年龄大于20的{{$store.getters.dayu20}}</div> 
      <div>年龄大于20的人数{{$store.getters.dayu20length}}</div> 
      <div>年龄大于多少的人数{{$store.getters.dayu(30)}}</div>
  </div>
</template>

<script>
import hehe from "./components/hehe"
export default {
  components:{
    hehe
  },
  methods: {
    jiajia(){
      this.$store.commit("jia")
    },
    jianjian(){
      this.$store.commit("jian")
    },
    sbjia(){
      this.$store.commit("sbjia",5)
    }
  },
  computed: {
    
  },
}
</script>

<style>

</style>