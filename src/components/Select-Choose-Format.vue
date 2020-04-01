<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Format</label>
    </div>
    <select :value="format" ref="format" class="custom-select" id="inputGroupSelect01" @input="updateFormat">
      <option selected value="mp3">Mp3(Audio)</option>
      <option value="mp4">Mp4(Video)</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelectChooseFormat',
  props: {
    format: {
      required: false,
      default: function () {
        return 'mp3'
      }
    },
  },
  methods: {
    updateFormat() {
      // @ts-ignore
      this.$emit('input', this.$refs.format.value)
    }
  }
});
</script>
