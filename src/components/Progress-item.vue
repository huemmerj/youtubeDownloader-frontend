<template>
  <div>
    <div class="card mb-3">
      <div class="card-header">
        {{ file.title }}
      </div>
      <div v-if="file.status === 0" class="card-body" />
      <div v-if="file.status === 1" class="card-body bg-warning" />
      <div v-if="file.status === 2" class="card-body bg-success">
      </div>
    </div>
  </div>
</template>

<script>
import { IFile } from '../models/IFile'
export default {
  props: {
    file: IFile,
  }
}
</script>

<style>

</style>