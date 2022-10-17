<template>
		<ul class="todo-main">
			<transition-group name="todo" appear>
				<Item 
					v-for="todo in todos"
					:key="todo.id" 
					:todo="todo" 
				/>
			</transition-group>
		</ul>
</template>

<script>
import Item from '../components/Item'
export default {
    name: 'List',
    props:['todos'],
    components: {
        Item
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
.todo-enter-active{
  animation: identifier 1s
}
.todo-leave-active{
  animation: identifier 1s reverse
}
@keyframes identifier {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>