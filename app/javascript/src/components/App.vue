<template>
  <div class="m-5">
    <h5 class="test">Vue</h5>
    <button-counter></button-counter>
  </div>
</template>

<script>
  import ButtonCounter from "@/src/components/ButtonCounter.vue"

  export default {
    data() {
      return {}
    },
    components: {
      ButtonCounter
    }
  }
</script>
