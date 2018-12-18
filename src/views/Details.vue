<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
    <h1>Component: {{ getComponent.name }}</h1>
    <p>{{ getComponent.description }}</p>
    <div class="componentDetails__variant" v-for="variant in getComponent.biotope.componentVariants" :key="variant.name">
      <h2>{{variant.name}}</h2>
      <p>{{variant.description}}</p>
      <div v-html="getMarkupOfComponent(variant.url)" />
      <div class="componentDetails__code">
        <prism language="html">
           {{ getMarkupOfComponent(variant.url) }}
        </prism>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'
import axios from 'axios'

export default {
  name: 'Details',
  data() {
    return {
     
    }
  },
  
  computed: {
    getComponent() {
      return this.$store.getters.getComponentByName(this.$route.params.name);
    }
  },



  methods: {
    getMarkupOfComponent(url) {
      console.log(url)
      axios
      .get(url)
      .then(response => {
         return response.data
      })
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
