<template>
    <div>
        <h1>人员列表</h1>
        <input name="" id="" v-model="name"/>
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import {mapState} from "vuex"
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        }
    },
    computed: {
        ...mapState(['personList'])
    },
    methods: {
        add() {
            this.$store.commit('ADD_PERSON',{id: nanoid(),name: this.name})
        }
    }
}
</script>

<style>

</style>