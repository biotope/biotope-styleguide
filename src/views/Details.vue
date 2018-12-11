<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
    <h1>Component: {{ getComponent.name }}</h1>
    <p>{{ getComponent.description }}</p>
    <div class="componentDetails__variant" v-for="variant in getComponent.biotope.componentVariants" :key="variant.name">
      <h2>{{variant.name}}</h2>
      <p>{{variant.description}}</p>
      <iframe class="componentDetails__iframe" :src="variant.url" width="100%" v-resize></iframe>
      <div class="componentDetails__code">
        <prism language="html" class="line-numbers">
           {{variant.hbs}}
        </prism>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  name: 'Details',
  data() {
    return {
    }
  },
  
  computed: {
    getComponent: function() {
      return this.$store.getters.getComponentList.find(obj => obj.name === this.$route.params.name);
    }
  },
  components: {
    Prism
  }
}
</script>

<style lang="scss">
.componentDetails {
  &__iframe {
    border: 0;
  }
}
</style>
