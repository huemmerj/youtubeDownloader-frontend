<template> 
  <div class="container-fluid">
    <div class="row">
      <div class="btn-group mr-2 mb-3" role="group" aria-label="First group">
        <button @click="setSingle" type="button" class="btn" :class="{ 'btn-primary': !playlist, 'btn-secondary': playlist}" >Einzeln</button>
        <button @click="setPlaylist" type="button" class="btn" :class="{ 'btn-primary': playlist, 'btn-secondary': !playlist} ">Playlist</button>
      </div>
      <choose-format v-model="format"/>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="url">URL</label>
        </div>
        <input id="url" class="form-control" v-model="url" placeholder="https://www.youtube.com/watch?v=6Lrmy8-p3BM" />
      </div>
      <div v-if="!playlist" class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="fileName">Name </label>
        </div>
        <input id="fileName" class="form-control" v-model="fileName"/>
      </div>
      <button class="btn btn-primary">Download</button>
    </div>
  </div>
</template>

<script>
import SelectChooseFormat from '@/components/Select-Choose-Format'
export default {
  name: 'Home',
  components: {
    "choose-format": SelectChooseFormat
  },
  computed: {
    filter: function () {
      if (format==="1") {
        return 'audioonly'
      } else {
        return ''
      }
    },
  },
  data () {
    return {
      format: '1',
      url: '',
      fileName: '',
      playlist: false
    }
  },
  methods: {
    setSingle() {
      this.playlist = false
    },
    setPlaylist() {
      this.playlist = true
    }
  }
};
</script>
