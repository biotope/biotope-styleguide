<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
    <h1>Component: {{ componentObject.componentName }}</h1>
    <p>{{ componentObject.description }}</p>
    <div class="componentDetails__variant" v-for="variant in componentObject.componentVariants">
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
  name: 'componentDetails',
  data() {
    return {
<<<<<<< HEAD
        componentObject: this.$parent.components[this.$route.params.name]
=======
        componentObject: this.$parent.components.find((el) => el.componentName === this.$route.params.name)
>>>>>>> b8c6c4344526350bbc37b19d696612233333b822
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
