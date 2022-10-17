<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
    name: 'Category',
    props: ['title'],
    data(){
      return {
            games: ['a', 'b', 'c', 'd', 'e', 'f'],
        }
    },
}
</script>

<style>
.category{
    background-color: aqua;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
</style>