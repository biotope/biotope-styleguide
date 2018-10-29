<template>
  <div class="styleGuide">
    <ul>
      <li v-for="jsonch in myjson">
        <a :href="jsonch.biotope.url">{{ jsonch.biotope.componentName }}</a>
      </li> 
    </ul>
  </div>
</template>

<script>
import json from '../../componentList.json'
export default {
  name: 'styleGuide',
  data () {
    return {
      myjson: json,
      componentList: JSON.stringify(this.$parent.$options.propsData.componentList)[0]
    }
  }
}
</script>

<style lang="scss">
</style>
