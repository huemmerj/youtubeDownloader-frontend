<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Format</label>
    </div>
    <select v-model="format"class="custom-select" id="inputGroupSelect01">
      <option value="1">Mp3(Audio)</option>
      <option value="2">Mp4(Video)</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelectChooseFormat',
  props: {
    format: Boolean,
  },
});
</script>
