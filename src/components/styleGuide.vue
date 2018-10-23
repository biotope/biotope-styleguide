<template>
  <div class="styleGuide">
    <ul>
      <li v-for="component in componentList">{{component.package.biotope.componentName}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'styleGuide',
  data () {
    return {
      componentList: JSON.parse(this.$parent.$options.propsData.componentList)[0]
     };
  }
}
</script>

<style lang="scss">
</style>
