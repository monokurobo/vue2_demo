<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="" alt="img">
      <a slot="footer" href="">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>

    <Category title="美食">
      <video slot="center" controls src=""></video>
      <template v-slot:footer>
        <a slot="footer" href="">更多美食</a>
        <a slot="footer" href="">更多美食</a>
        <a slot="footer" href="">更多美食</a>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
    name: "App",
    data(){
      return {
            games: ['a', 'b', 'c', 'd', 'e', 'f'],
            books: ['1','2','3','4','5','6']
        }
    },
    components: { Category }
}
</script>

<style>
.container{
  display: flex;
  flex-direction: row;
  align-items: row;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>