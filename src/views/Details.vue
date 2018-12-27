<template>
   <div class="componentDetails">
    <router-link to="/">Back to Overview</router-link>
     <h1>{{ getComponent.name }}</h1>
    <div class="componentDetails__grid">
      <div class="componentDetails__col componentDetails__col--50">
        <p>{{ getComponent.description }}</p>
      </div>
      <div class="componentDetails__col componentDetails__col--50">
         <h2>Layout Optionen</h2>
         <grid-option :grid-options="getComponent.biotope.allowedInGrid" />
      </div>
    </div>
    <Variant v-for="variant in getComponent.biotope.componentVariants" :variant="variant" :key="variant" />
  </div>
</template>

<script>
import Variant from './../components/Variant.vue'
import GridOption from './../components/GridOption.vue'


export default {
  name: 'Details',
  computed: {
    getComponent() {
      return this.$store.getters.getComponentByName(this.$route.params.name);
    }
  },
  components: {
    Variant,
    GridOption
  }
}
</script>

<style lang="scss">
.componentDetails {

  &__grid {
  display: block;

  @media (min-width: 768px) {
      display: flex;
  }
  
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }

  &__col {
    flex: 1;

    &--50 {
      width: 100%;
      padding: 0 10% 0 0;
      @media (min-width: 768px) {
        width: 50%;
        flex: none;
      }
    }
  }


  &__info {
    width: 100%;
  }
}
</style>
