<template>
<div>
    <!-- 포스팅 화면 -->
    <div v-if="step == 0">
        <Post v-for="(d,i) in data" :key="i" :data="data[i]"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
        <div class="upload-image" :style="`background-image : url(${imageURL})`"></div>
        <div class="filters">
            <FilterBox :imageURL="imageURL" v-for="(filter,i) in filters" :key="i" :filter="filter" >
                {{filter}}
            </FilterBox>
        </div>
    </div>    

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
        <div class="upload-image" :style="`background-image: url(${imageURL})`"></div>
        <div class="write">
            <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
        </div>
    </div>
</div>
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'

export default {
    name : 'Container',
    data(){
        return{
            filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
            "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
            "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    components: {
    Post,
    FilterBox
    },
    props : {
        data : Object,
        step : Number,
        imageURL : String
    }
}
</script>

<style>
.upload-image{
width: 100%;
height: 350px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>