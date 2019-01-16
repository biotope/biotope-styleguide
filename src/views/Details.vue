<template>
   <div class="stlyeGuide__details">
    <router-link class="stlyeGuide__link" to="/">Back to Overview</router-link>
     <h1 class="stlyeGuide__h1">{{ getComponent.name }}</h1>
     <p class="stlyeGuide__tags" v-if="getComponent.biotope.tags.length > 0">Tags:
       <span class="stlyeGuide__tag" v-for="tag in getComponent.biotope.tags" :key="tag">{{tag}}</span>
      </p>
    <div class="stlyeGuide__grid">
      <div class="stlyeGuide__col stlyeGuide__col--50">
        <p class="stlyeGuide__description">{{ getComponent.description }}</p>
      </div>
      <div class="stlyeGuide__col stlyeGuide__col--50">
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
  data() {
    return {
      markupLoaded: 0
    }
  },
  watch: {
    markupLoaded: function(value) {
      if(this.getComponent.biotope.componentVariants.length === value) {
         const event = document.createEvent('Event');
        event.initEvent('styleGuide-markupLoaded', true, true);
        window.dispatchEvent(event);
      }
    }
  },
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
.stlyeGuide {

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
}
</style>
