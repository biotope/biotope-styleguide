<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
    <h1>Component: {{ componentObject.componentName }}</h1>
    <p>{{ componentObject.description }}</p>
    <div class="componentDetails__variant" v-for="variant in componentObject.componentVariants">
      <h2>{{variant.name}}</h2>
      <p>{{variant.description}}</p>
      <iframe :src="variant.url" width="300" height="200"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'componentDetails',
  data() {
    return {
        componentObject: JSON.parse(this.$route.query.data)
    }
  }
}
</script>