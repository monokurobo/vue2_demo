<template>
  <div id="root">
    <h1>{{msg}}</h1>
    <div class="todo-container">
			<div class="todo-wrap">
        <Search :addTodo="addTodo"></Search>
        <List :todos="todos" :changeTodo="changeTodo" :removeTodo="removeTodo"></List>
        <SelectAll :todos="todos" :changeAllTodos="changeAllTodos" :clearAllTodos="clearAllTodos"></SelectAll>
      </div>
    </div>
</div>
</template>

<script>
import Search from './components/Search'
import List from './components/List'
import SelectAll from './components/SelectAll'


export default {
  name: 'App',
  components: {
    Search,
    List,
    SelectAll
  },
  data () {
    return {
      msg: 'Hello, TODOLIST',
      todos: [
                {id: '001', title: '唱歌', isDone: false},
                {id: '002', title: '跳舞', isDone: true},
                {id: '003', title: '谈恋爱', isDone: false},
            ]
    }
  },
  methods: {
    //添加一个 todo
    addTodo(todo){
      this.todos.unshift(todo);
    },
    //勾选或取消勾选一个 todo
    changeTodo(id){
      this.todos.forEach(todo=>{
        if(todo.id == id) {
          todo.isDone = !todo.isDone
        }
      })
    },
    //删除一个 todo
    removeTodo(id){
      this.todos = this.todos.filter(todo=>todo.id !== id)
    },
    //全选或取消全选
    changeAllTodos(isDone){
      this.todos.forEach(todo=>todo.isDone = isDone)
    },
    //清除已完成的 todo
    clearAllTodos(){
      this.todos = this.todos.filter(todo=>!todo.isDone)
    }
  }
}
</script>


<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>

