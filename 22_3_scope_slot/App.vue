<template>
  <div class="container">
    <Category title="游戏">
      <template scope="data">
        <ul>
          <li v-for="(item,index) in data.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="data">
        <ol>
          <li v-for="(item,index) in data.games" :key="index">{{item}}</li>
      </ol>
      </template>

    </Category>
    <Category title="游戏">
      <template slot-scope={games}>
        <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
    name: "App",
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