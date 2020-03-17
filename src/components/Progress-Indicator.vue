<template>
  <div>
  <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs" id="bologna-list" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" href="#downloads" data-toggle="tab" aria-selected="true">Downloads</a>
          </li>

          <li class="nav-item" :key="indexPlaylist" v-for="(playlist, indexPlaylist) in playlists">
            <a class="nav-link" :href="'#playlist'+playlist.id" data-toggle="tab" aria-selected="false">{{ playlist.title }}</a>
          </li>

        </ul>
      </div>
      <div class="card-body">
        
        <div class="tab-content mt-3">
          <div class="tab-pane" id="downloads">
            <progress-item :key="index" v-for="(file, index) in files" :file="file" />
          </div>
          <div :key="playlistIndex" v-for="(playlist, playlistIndex) in playlists" class="tab-pane" :id="'playlist'+playlist.id">
            <progress-item :key="playlistFileIndex" v-for="(playlistFile, playlistFileIndex) in playlist.data" :file="playlistFile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressItem from './Progress-item.vue'
export default {
  components: {
    'progress-item': ProgressItem,
  },
  computed: mapGetters({
    files: 'getFiles',
    playlists: 'getPlaylists'
  })
}
</script>

<style>

</style>