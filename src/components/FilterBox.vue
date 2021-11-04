<template>
<div :class="`${filter} filter-item`" :style="`background-image: url(${imageURL})`">
    <slot></slot>
    <button @click="fire">버튼</button>
</div> 
</template>

<script>
export default {
    name : 'FilterBox',
    props : {
        imageURL : String,
        filter : String
    },
    methods : {
        fire(){
            this.emitter.emit('name',this.filter);
        }
    }
}
</script>

<style>
.filter-item {
width: 100px;
height: 100px;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : black;
background-size: cover;
background-position : center;
}
</style>