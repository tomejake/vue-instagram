<template>
<div>
    55
    <Post />
</div>
  
</template>

<script>
import Post from './Post.vue';

export default {
    name:'Container',
    component : {
        Post
    },
    props : {
        instaData : Array,
    }
}
</script>

<style>

</style>