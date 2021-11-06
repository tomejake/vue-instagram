import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 30,
      likesState : false,
      more : {}
    }
  },
  mutations : {
    setMore(state, data){
      state.more = data;
    },
    nameChange(state) {
      state.name = 'park';
    },
    agePlus(state){
        state.age++;
    },
    likesToggle(state){
        if(!state.likesState){
            state.likes++;
            state.likesState = true;
        } else {
            state.likes--;
            state.likesState = false;
        }
    }
  },
  actions: {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data);
      })
    }
  }
});

export default store;