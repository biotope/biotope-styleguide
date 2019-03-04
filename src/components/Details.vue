<template>
   <div v-if="component" class="styleGuide__details">
    <router-link class="styleGuide__goBackLink" to="/">
      <span>{{ $t('details_backToOverview') }}</span>
    </router-link>
     <h1 class="styleGuide__h1">{{ component.name }}</h1>
     <p class="styleGuide__tags" v-if="component.keywords.length > 0">{{ $t('details_tags') }}:
       <span class="styleGuide__tag" v-for="tag in component.keywords" :key="tag">{{tag}}</span>
      </p>
    <div class="styleGuide__grid">
      <div class="styleGuide__col styleGuide__col--50">
        <p class="styleGuide__description" v-html="component.description"></p>
      </div>
      <div class="styleGuide__col styleGuide__col--50">
         <grid-option :grid-options="component.biotope.grid.allowedColumns" />
      </div>
    </div>
    <h2 class="styleGuide__variantsHeadline">{{ $t('details_variants') }}</h2>
    <div class="styleGuide__variants">
      <Variant v-for="variant in component.biotope.componentVariants" :variant="variant" :key="variant" :component="component" />
    </div>
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
      if(this.component && this.component.biotope.componentVariants.length === value) {
         const event = document.createEvent('Event');
        event.initEvent('styleGuide-markupLoaded', true, true);
        window.dispatchEvent(event);
      }
    }
  },

  computed: {
    component() {
      const componentPackage = this.$store.getters.getComponentByName(this.$route.params.name);
      if(!componentPackage) {
        this.$store.dispatch('loadComponentDetails', this.$route.params.name);
      }
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
.styleGuide {

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

  &__tag + &__tag:before {
    content: ", ";
  }
}
</style>
