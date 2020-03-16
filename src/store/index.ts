import Vue from 'vue'
import Vuex from 'vuex'
import { IFIle } from '@/models/IFile'
import { IPlaylist } from '@/models/IPlaylist'

Vue.use(Vuex )

export default new Vuex.Store({
  state: {
    playlists: new Map<string, IFIle>(),
    files: new Map<string, IFIle>(),
  },
  mutations: {
    SOCKET_downloadFile(state: any, file: IFIle) {
      for (const [key, playlist] of state.playlists) {
        if ( key === file.playlistId ) {
          playlist.set(file.playlistId, file)
          return
        }
      }
      state.files.set(file.id, file)
    },
    SOCKET_downloadPlaylist(state: any, playlist: IPlaylist) {
      state.playlists.set(playlist.id, playlist)
    },
  },
  actions: {
  },
  modules: {
  },
})
