<template>
	<div>
		<ul>
			<li v-for="(m, index) in 3" :key="index">
				<router-link 
					:to="{
						path: '/home/message/detail',
						query: {
							id: m,
							title: index
						}
					}"
				>
					{{m}}
				</router-link>&nbsp;&nbsp;
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name:'Message'
}
</script>