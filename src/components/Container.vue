<template>
<div>
    <Post v-for="(d,i) in data" :key="i" :data="data[i]"/>
</div>
</template>

<script>
import Post from './Post.vue'

export default {
    name : 'Container',
    components: {
    Post
    },
    props : {
        data : Object
    }
}
</script>

<style>

</style>