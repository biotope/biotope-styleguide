<template>
   <div class="styleGuide">
      <span v-if="!isReady">Loading...</span>
      <router-view  v-if="isReady" />
   </div>
</template>

<script>
export default {
  computed: {
     isReady: function() {
        return this.$store.getters.getComponentList.length > 0
     }
  },
  mounted () {
     this.$store.dispatch('loadComponentList');
   }
}
</script>