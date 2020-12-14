import { createStore } from 'vuex'

const store = createStore({
    state: {
        memories: [
            {
              id: 1,
              title: "Sample 1",
              image:
                "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1024-80.jpg",
              description: "Description 1",
            },
            {
              id: 2,
              title: "Sample 2",
              image:
                "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1024-80.jpg",
              description: "Description 2",
            },
            {
              id: 3,
              title: "Sample 3",
              image:
                "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-1024-80.jpg",
              description: "Description 3",
            },
          ]
    },
    getters: {
        memories (state) {
          return state.memories;
        }
      } 
})

export default store; 