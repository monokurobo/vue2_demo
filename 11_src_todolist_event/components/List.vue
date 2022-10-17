<template>
  	<ul class="todo-main">
		<Item 
			v-for="todo in todos"
			:key="todo.id" 
			:todo="todo" 
			:changeTodo="changeTodo"
			:deleteTodo="deleteTodo"
            :removeTodo="removeTodo"
		/>
	</ul>
</template>

<script>
import Item from '../components/Item'
export default {
    name: 'List',
    props:['todos','changeTodo','removeTodo'],
    components: {
        Item
    },
    methods:{
        checkTodo(todo) {},
        deleteTodo(todo) {}
    }
}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>