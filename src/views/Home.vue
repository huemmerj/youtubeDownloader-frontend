<template>
  <div class="home">
    <choose-format/>
  </div>
</template>

<script>
import SelectChooseFormat from '@/components/Select-Choose-Format'
export default {
  name: 'Home',
  components: {
    "choose-format": SelectChooseFormat
  }
};
</script>
