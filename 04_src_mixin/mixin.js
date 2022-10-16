export const mixin = {
    methods: {
        showName () { // 如果组件内有同名变量,以组件内为准
          alert(this.name)
        }
      },
      mounted() { // 生命周期: 先执行 mixnin 的, 再执行组件内 
        console.log('hello, mixin');
      }
}
export const mixin2 = {
  data() {
    return {
      x: 'xxx' // 如果组件内有同名变量,以组件内为准
    }
  },
}