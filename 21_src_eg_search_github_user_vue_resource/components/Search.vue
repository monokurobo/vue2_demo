<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword"/>
        <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
export default {
    name:'Search',
    data () {
        return {
            keyword: ''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('recievedUsersDate', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            })
            this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                res => {
                    this.$bus.$emit('recievedUsersDate', {
                        isLoading: false,
                        errMsg: '',
                        users: res.data.items
                    })
                },
                err => {
                    this.$bus.$emit('recievedUsersDate', {
                        isLoading: false,
                        errMsg: err.message,
                        users: []
                    })
                })
        }
    }
}
</script>

<style>

</style>