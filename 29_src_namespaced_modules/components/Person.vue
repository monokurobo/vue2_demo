<template>
    <div>
        <h1>人员列表</h1>
        <h3>列表中第一个人的名字是:{{firstPersonName}}</h3>
        <input name="" id="" v-model="name"/>
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addRedom">添加一个随机的人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from "nanoid";
import {mapMutations, mapState} from "vuex"
export default {
    name: 'Person',
    data() {
        return {
            name: '',
        }
    },
    computed: {
        ...mapState('PersonStore',['personList']),
        firstPersonName(){
            return this.$store.getters['PersonStore/firstPersonName']
        },
        
    },
    methods: {
        ...mapMutations('PersonStore',['ADD_PERSON']),
        add() {
            this.$store.commit('PersonStore/ADD_PERSON',{id: nanoid(),name: this.name})
            this.name = ''
        },
        addWang(){
            this.$store.dispatch('PersonStore/addPersonWang',{id: nanoid(),name: this.name})
            this.name = ''
        },
        addRedom(){
            this.$store.dispatch('PersonStore/addPersonServer')
            this.name = ''
        }
    }
}
</script>

<style>

</style>