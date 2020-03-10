<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelect01">Format</label>
    </div>
    <select :value="format" ref="format" class="custom-select" id="inputGroupSelect01" @input="updateFormat">
      <option selected value="1">Mp3(Audio)</option>
      <option value="2">Mp4(Video)</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelectChooseFormat',
  props: ['format'],
  methods: {
    updateFormat() {
      this.$emit('input', this.$refs.format.value)
    }
  }
});
</script>
