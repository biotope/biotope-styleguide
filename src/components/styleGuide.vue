<template>
  <div class="styleGuide">
    <img v-if="logoUrl" class="styleGuide__logo" :src="logoUrl"/>
    <h1 v-if="projectName" class="styleGuide__headline">{{projectName}}</h1>
    <p v-if="customer" class="styleGuide__subheadline">{{customer}}</p>

    <h2>Filter by Component Variants</h2>


    <ul class="styleGuide__filters">
        <li v-for="variant in componentVariants" class="styleGuide__filter" v-on:click="onFilterByComponentVariant">{{variant}}</li>
    </ul>

    <h2>Components</h2>
    <ul class="styleGuide__items">
      <li v-for="component in componentList" class="styleGuide__item">
        <router-link :to="{ name: 'componentDetails', params: { name: component.componentName }, query: { data: component }}">{{ component.componentName }}</router-link>
        <p><span class="styleGuide__meta">Description:</span>{{ component.description }}</p>
        <p><span class="styleGuide__meta">Category:</span>{{ component.category }}</span></p>
        <p><span class="styleGuide__meta">Component Variants:</span><span v-for="variant in component.componentVariants">{{ variant }} </span></p>
        <p><span class="styleGuide__meta">Type:</span>{{ component.type}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'styleGuide',

  data () {
    return {
      componentList: {},
      projectName: 'Biotope',
      customer: 'Virtual Identity',
      logoUrl: 'https://avatars1.githubusercontent.com/u/34653144?s=200&v=4',
      componentVariants: [
          'fullsize',
          'blub',
          'sidebar'
      ]
    }
  },

   created() {
    this.$http.get('componentList.json').then(response => {
      if(response.status === 200) {
        this.componentList = response.body;
      } else {
        console.log('unable to load componentList.json');
      }
    })
  },

  methods: {
      onFilterByComponentVariant: function(event) {
          console.log('#####onFilterByComponentVariant');
          console.log(event.target);
/*
          if (event.target.classList.contains('styleGuide__filter--active')) {
            event.target.classList.remove('styleGuide__filter--active');
          } else {
            event.target.classList.add('styleGuide__filter--active');
          }
          */
      }
  }
}
</script>

<style lang="scss">
    /* styleGuide - layout */
    $styleGuide-max-width: 1280px;
    /* styleGuide - colors */
    $styleGuilde-color-primary: #337ab7;
    /* styleGuide - fonts */
    $styleGuide-font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    $styleGuide-font-color: #333;
     /* styleGuide - links*/
    $styleGuide-link-color: $styleGuilde-color-primary;
    /* styleGuide - meta infos */
    $styleGuide-meta-color: #ccc;
    $styleGuide-show-meta: true;
    .styleGuide {
        font-family: $styleGuide-font-family;
        color: $styleGuide-font-color;
        margin: 0 auto;
        max-width: $styleGuide-max-width;
        a {
            color: $styleGuide-link-color;
        }
        &__headline {
        }
        &__subheadline {
        }
        &__logo {
            max-width: 100px;
        }
        &__filters {
        }
        &__filter {
            &.styleGuide__filter--active {
                color: red;
            }
        }
        &__items {
            padding: 0;
        }
        &__item {
            padding: 0 0 40px;
            list-style-type: none;
        }
        &__meta {
            @if $styleGuide-show-meta {
                display: block;
            }@else{
                display: none;
            }
            color: $styleGuide-meta-color;
        }
    }
</style>