<template>
	<div>
		<ul>
			<li v-for="(m, index) in 3" :key="index">
				<!-- params -->
				<!-- <router-link :to="`/home/message/detail/${m}/${index}`">{{m}}</router-link> -->
				<router-link 
					:to="{
						name: 'detail', // params 这里不能用 path
						params: {
							id: m,
							title: index
						}
					}"
				>
					{{m}}
				</router-link>

				<!-- query -->
				<!-- <router-link 
					:to="{
						// path: '/home/message/detail', //path, name 都可以使用
						name: 'detail',
						query: {
							id: m,
							title: index
						}
					}"
				>
					{{m}}
				</router-link> -->
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