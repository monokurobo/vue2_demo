<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.isDone" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.isDone"/> -->
			<span v-show="!todo.isEdit">{{todo.title}}</span>
			<input type="text" 
			:value="todo.title" 
			v-show="todo.isEdit"
			ref="editInput"
			@blur="handleBlur(todo,$event)"
			/>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
	</li>
</template>

<script>
import pubsub from "pubsub-js"
    export default {
        name: 'Item',
        props: ['todo'],
        data() {
            return {
            }
        },
        methods: {
            handleCheck(id) {
				this.$bus.$emit('changeTodo',id)
            },
            handleDelete(id){
                if(confirm('确认删除吗?')){
					pubsub.publish('removeTodo',id)
                }
            },
			handleEdit(todo){
				if(todo.hasOwnProperty('isEdit')){
					todo.isEdit = true
				}else{
					this.$set(todo,'isEdit',true)
				}
				// dom更新后再执行
				this.$nextTick(()=>{
					this.$refs.editInput.focus()
				})
			},
			handleBlur(todo,e){
				todo.isEdit = false
				if(!e.target.value.trim()) {
					alert('输入不能为空')
					return
				}
				this.$bus.$emit('updateTodo', todo.id, e.target.value)
			}
        },
    }
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}

</style>