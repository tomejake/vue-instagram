import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 30,
      likesState : false,
    }
  },
  mutations : {
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
  }
});

export default store;