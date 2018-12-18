<template>
   <div>
      <span v-if="!isReady">Loading...</span>
      <div>
         <router-view />
      </div>
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