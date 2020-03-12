import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playlists: [],
    files: [],
  },
  mutations: {
    SOCKET_downloadFile(state, file) {
      const playlist: any = state.playlists.find((p: any) => {
        return p.id === file.playlistId
      })
      if (playlist) {
        let hasFile = playlist.files.find((f: any) => {
          return f.id === file.id
        })
        if (hasFile) {
          hasFile = file
        }
      } else {
        let hasFile = state.files.find((f: any) => {
          return f.id === file.id
        })
        if (hasFile) {
          hasFile = file
        } else {
          // @ts-ignore
          state.files.push(file)
        }
      }
    },
  },
  actions: {
  },
  modules: {
  },
})
