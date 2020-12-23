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
        memories: (state) => state.memories,
        memory: (state) => (memoryId: number) => state.memories.find((memory) => memory.id === memoryId)
    },
    mutations: {
      ADD_MEMORY: (state, memoryData) => {
        const newMemory = {
          id: state.memories.length + 1,
          ...memoryData
        }
        state.memories.unshift(newMemory) 
      } 
    },
    actions: {
      addMemory: (context, memoryData) => {
        context.commit('ADD_MEMORY', memoryData)
      }
    } 
})

export default store; 