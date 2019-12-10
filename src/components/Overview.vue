<template>
  <div class="styleGuide__overview">
    <div class="styleGuide__filter">
      <ul class="styleGuide__category">
        <li class="styleGuide__categoryItem" v-bind:class="{ 'is-active': (activeCategory === '')}">
          <a @click="setActiveCategory()" href="#">{{ $t('overview_category_all') }}</a>
        </li>
        <li
          v-for="category in categories"
          class="styleGuide__categoryItem"
          v-bind:class="{ 'is-active': (activeCategory === category)}"
          :key="category"
        >
          <a @click="setActiveCategory(category)" href="#">{{ category }}</a>
        </li>
      </ul>
      <div class="styleGuide__searchWrapper">
        <input
          class="styleGuide__search"
          type="search"
          v-model="searchString"
          autofocus
          :placeholder="$t('overview_search_placeholder')"
        />
      </div>
    </div>
    <ul class="styleGuide__sort">
      <li class="styleGuide__sortItem" v-for="item in listOfSort.slice(0, 16)" :key="item">
        <button
          :disabled="isSortItemDisabled(item)"
          v-scroll-to="{ el: '#styleGide-' + item}"
        >{{item}}</button>
      </li>
      <li class="styleGuide__sortItem" v-for="item in listOfSort.slice(16, 26)" :key="item">
        <button
          :disabled="isSortItemDisabled(item)"
          v-scroll-to="{ el: '#styleGide-' + item}"
        >{{item}}</button>
      </li>
    </ul>
    <div
      :id="'styleGuide-' + index"
      v-for="(componentList,index) in filteredComponentList"
      :key="index"
    >
      <h3 class="styleGuide__letter">{{index}}</h3>
      <ul class="styleGuide__items">
        <li v-for="component in componentList" class="styleGuide__item" :key="component.name">
          <router-link
            :to="{ name: 'details', params: { name: component.name }}"
          >{{ component.keywords[0] }}</router-link>
        </li>
      </ul>
    </div>
    <div
      v-if="Object.getOwnPropertyNames(filteredComponentList).length == 0"
      class="styleGuide__noResult"
    >{{ $t('overview_noResults') }}</div>
  </div>
</template>

<script>
export default {
  name: "styleGuide",

  data() {
    return {
      activeListOfSort: [],
      categories: [],
      activeCategory: "",
      listOfSort: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      searchString: ""
    };
  },
  computed: {
    filteredComponentList: function() {
      const matches = (searchString, packageJsonItem) =>
        packageJsonItem.name.toLowerCase().match(searchString.toLowerCase()) ||
        (packageJsonItem.keywords || []).some(tag =>
          tag.toLowerCase().match(searchString.toLowerCase())
        );

      let currentObject = this.groupComponents(
        this.$store.getters.getComponentList
      );

      let newObject = {};
      let activeListOfSort = [];
      let categories = this.categories;
      for (const sortArray in currentObject) {
        currentObject[sortArray].forEach(item => {
          if (categories.indexOf(item.category) === -1) {
            categories.push(item.category);
          }
          if (
            this.activeCategory === "" ||
            this.activeCategory === item.category
          ) {
            if (matches(this.searchString, item)) {
              if (!newObject[sortArray]) {
                activeListOfSort.push(sortArray);
                newObject[sortArray] = [];
              }
              newObject[sortArray].push(item);
            }
          }
        });
      }
      this.setactiveListOfSort(activeListOfSort);
      this.setCategories(categories);
      let sorted = Object.keys(newObject)
        .sort()
        .reduce(
          (acc, key) => ({
            ...acc,
            [key]: newObject[key].sort(function(a, b) {
              if (a.keywords[0] < b.keywords[0]) return -1;
              if (a.keywords[0] > b.keywords[0]) return 1;
              return 0;
            })
          }),
          {}
        );
      return sorted;
    }
  },

  methods: {
    setactiveListOfSort: function(newActiveListOfSort) {
      this.activeListOfSort = newActiveListOfSort;
    },

    setCategories: function(newCategories) {
      this.categories = newCategories;
    },

    setActiveCategory: function(categoryString) {
      this.activeCategory = categoryString || "";
    },

    isSortItemDisabled: function(item) {
      return !(this.activeListOfSort.indexOf(item) > -1);
    },

    groupComponents: function(componentsList) {
      let groupedComponentList = {};
      componentsList.forEach(component => {
        const firstLetter = component.keywords[0].charAt(0).toUpperCase();
        if (!groupedComponentList[firstLetter]) {
          groupedComponentList[firstLetter] = [];
        }
        groupedComponentList[firstLetter].push(component);
      });
      return groupedComponentList;
    }
  }
};
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

.styleGuide {
  font-family: $styleGuide-font-family;
  color: $styleGuide-font-color;
  margin: 0 auto;
  max-width: $styleGuide-max-width;

  a {
    color: $styleGuide-link-color;
  }

  &__category {
    padding: 20px 0;
  }
  &__categoryItem {
    display: inline-block;
    padding: 0 15px;

    &:first-of-type {
      padding: 0 15px 0 0;
    }

    &:last-of-type {
      padding: 0 0 0 15px;
    }

    &.is-active a {
      color: #000;
      cursor: default;
      text-decoration: none;
    }
  }

  &__search {
    margin: 10px 0;
    padding: 5px;
    width: 100%;
  }

  &__sort {
    list-style-type: none;
    text-align: left;
  }
  &__sortItem {
    display: block;

    button {
      background: none !important;
      border: none;
      padding: 0 !important;
      font: inherit;
      cursor: pointer;
      text-decoration: underline;
    }

    button[disabled] {
      cursor: default;
      text-decoration: none;
    }
  }

  &__letter {
    border-bottom: 1px solid gray;
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

    a {
      display: block;
    }
    &:first-letter {
      text-transform: capitalize;
    }
  }
}
</style>