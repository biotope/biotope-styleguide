<template>
  <div class="styleGuide">
    <ul class="styleGuide__category">
        <li v-for="category in categories" class="styleGuide__category" v-bind:class="{ 'is-active': (activeCategory === category)}"><a @click="setActiveCategory(category)" href="#">{{ category }}</a></li>
    </ul>
    <input type="search" v-model="searchString" placeholder="Suche...">
    <div class="styleGuide__sort">
        <span v-for="item in listOfSort">
            <button :disabled="isSortItemDisabled(item)" v-scroll-to="{ el: '#' + item}">{{item}}</button>
        </span>
    </div>
    <div :id="index" v-for="(componentList,index) in filteredComponentList">
        <h2>{{index}}</h2>
        <ul class="styleGuide__items">
            <li v-for="component in componentList" class="styleGuide__item">
                <router-link :to="{ name: 'componentDetails', params: { name: component.componentName }}">{{ component.componentName }}</router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'styleGuide',

  data () {
    return {
      sortedComponentList: {},
      activeListOfSort: [],
      categories: ['Alle'],
      activeCategory: 'Alle',
      listOfSort: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      searchString: ''
    }
  },

   created() {
    this.$http.get('componentList.json').then(response => {
      if(response.status === 200) {
        this.$parent.components = response.body;
        this.sortedComponentList = this.groupedContacts(response.body);
      } else {
        console.log('unable to load componentList.json');
      }
    })
  },

  computed: {
      filteredComponentList: function() {
        let currentObject = JSON.parse(JSON.stringify(this.sortedComponentList));
        let newObject = {};
        this.activeListOfSort = [];
        for(const sortArray in currentObject) {
            currentObject[sortArray].forEach((item) => {
                if(this.categories.indexOf(item.category) === -1) {
                    this.categories.push(item.category);
                }
                if(this.activeCategory === 'Alle' || this.activeCategory === item.category) {
                    if(item.componentName.toLowerCase().match(this.searchString.toLowerCase())) {
                        if (!newObject[sortArray]) {
                            this.activeListOfSort.push(sortArray);
                            newObject[sortArray] = [];
                        }
                        newObject[sortArray].push(item);
                    }
                }
            });
        }
        return newObject;
      }
  },

  methods: {
      setActiveCategory: function(categoryString) {
          this.activeCategory = categoryString;
      },
      isSortItemDisabled: function(item) {
          return !(this.activeListOfSort.indexOf(item) > -1);
      },
      groupedContacts: (componentsList) => {
        let groupedComponentList = {};
        for(const component in componentsList) {
            const firstLetter = component.charAt(0);
             if (!groupedComponentList[firstLetter]) {
                groupedComponentList[firstLetter] = [];
            }
            let entry = groupedComponentList[firstLetter];
            entry.push(componentsList[component]);
        }
        return groupedComponentList;
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

        &__category {
            &.is-active {
                a {
                    color: red;
                }
            }
        }

        &__sort {
           // margin-bottom: 3000px;
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