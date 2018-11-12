<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
    <h1>Component: {{ componentObject.componentName }}</h1>
    <p>{{ componentObject.description }}</p>
    <iframe :src="componentObject.url" width="300" height="200"></iframe>
  </div>
</template>

<script>
import json from '../../componentList.json'
export default {
  name: 'componentDetails',
  data() {
    return {
    
        componentObject: this.$route.params.name
    }
  }
}
</script>