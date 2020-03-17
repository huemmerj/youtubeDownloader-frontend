import Vue from 'vue'
import Vuex from 'vuex'
import { IFIle } from '@/models/IFile'
import { IPlaylist } from '@/models/IPlaylist'

Vue.use(Vuex )

export default new Vuex.Store({
  state: {
    files: {},
    playlists: {},
  },
  getters: {
    getFiles: (state: any) => {
      return state.files
    },
    getPlaylists: (state: any) => {
      const playlists = JSON.parse(JSON.stringify(Object.values(state.playlists)))
      playlists.map((playlist: any) => playlist.data = [])
      const fileValues = Object.values(state.files)
      const playlistValues = Object.values(state.playlists)
      for (const [i, file] of fileValues.entries()) {
        // @ts-ignore
        const index = playlistValues.map((playlist) => playlist.id).indexOf(file.playlistId)
        if (index !== -1) {
          // @ts-ignore
          playlists[index].data.push(file)
        }
      }
      return playlists
    },
  },
  mutations: {
    downloadFile(state: any, file: IFIle) {
      Vue.set(state.files, file.id, file)
    },
    downloadPlaylist(state: any, playlist: IPlaylist) {
      Vue.set(state.playlists, playlist.id, playlist)
      for (const file of playlist.files) {
        Vue.set(state.files, file.id, file)
      }
    },
  },
  actions: {
    SOCKET_downloadFile(context, file: IFIle) {
      context.commit('downloadFile', file)
    },
    SOCKET_downloadPlaylist(context, playlist: IPlaylist) {
      context.commit('downloadPlaylist', playlist)
    },
  },
  modules: {
  },
})
