<template>
  <button @click="count++" class="btn btn-secondary">You clicked me {{ count }} times.</button>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>
