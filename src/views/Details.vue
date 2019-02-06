<template>
   <div v-html="this.filteredComponentList"></div>
</template>

<script>

export default {
  name: 'Details',
  
  asyncComputed: {
    filteredComponentList: async function() {
      const componentList = await this.requestComponentMarkup();
      return componentList;
    }
  },
        
  methods: {
    requestComponentMarkup: async function() {
      try {
        const response = await fetch('/component/'+ this.$route.params.name);
        const json = await response.json();
        return json;
      } catch(e) {
        console.log(e);
        return '<h1>Hello Component</h1>';
      }
    },
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
