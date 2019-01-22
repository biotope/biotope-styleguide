<template>
    <div>
        <div v-if="isLoading">
        Loading Component...
        </div>
        <div v-if="!isLoading" class="styleGuide__variant">
            <h3>{{variant.name}}</h3>
            <p>{{variant.description}}</p>
              <div class="styleGuide__markup">
                <div class="row">
                  <div :class="getGrid">
                    <div v-html="componentMarkup" />
                  </div>
                </div>
              </div>
            <div class="styleGuide__codeSection" :class="{ 'is-active': show}">
              <div class="styleGuide__toolbar">
                <a href="javascript:" class="styleGuide__showCode" @click="show = !show">{{ $t('details_code_buttonText') }}</a>
              </div>
              <transition name="accordion-fade">
                 <div v-if="show" class="styleGuide__code">
                    <prism language="html">{{ componentMarkup }}</prism>
                 </div>
              </transition>
            </div>
        </div>
    </div>
</template>
<script>
import Prism from 'vue-prism-component'
import axios from 'axios'
export default {
  name: 'Variant',
  props: ['variant'],
  data() {
    return {
      isLoading: true,
      item: this.variant,
      componentMarkup: '',
      show: false
    }
  },
  created: function() {
      this.getMarkupOfComponent(this.variant.url);
  },
  computed: {
    getGrid() {
      return 'md-' + this.$store.getters.getSelectedGrid;
    }
  },
  methods: {
     getMarkupOfComponent: function(url) {
      axios
      .get(url)
      .then(response => {
        this.isLoading = false;
        this.componentMarkup = response.data;
        this.$nextTick(() => {
          this.$parent.markupLoaded = this.$parent.markupLoaded+1;
        })
      })
    }
  },
  components: {
    Prism
  }
}
</script>
<style lang="scss">
$variant-background-color: #F6F6F6;
$variant-border-color: #C5C5C5;
$styleGuilde-color-primary: #337ab7;

.styleGuide {

  &__codeSection {
    &.is-active {
      .styleGuide__code {
          &:after {
            transform: rotate(315deg);
            transition: transform .3s ease-in-out;
          }
      }
    }
  }

  &__showCode {
    position: relative;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 10px 15px 10px 10px;
    text-decoration: none;
 
      &:after {
        position: absolute;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.2em solid $styleGuilde-color-primary;
        border-top: 0.2em solid $styleGuilde-color-primary;
        transform: rotate(135deg);
        margin-left: 0.4em;
        transition: transform .3s ease-in-out;
      }
  }

  &__code {
    background-color: $variant-background-color;
    padding: 1px;
  }

  &__markup {
    padding: 15px;
    background-color: $variant-background-color;
  }

  &__toolbar {
    background-color: $variant-background-color;
    border-top: 1px solid $variant-border-color;
    border-bottom: 1px solid $variant-border-color;
  }

  .accordion-fade-enter-active,
  .accordion-fade-leave-active {
      transition: all .5s;
  }
  .accordion-fade-enter-active {
      max-height: 10000px;
      opacity: 1;
  }
  .accordion-fade-enter,
  .accordion-fade-leave-active {
      max-height: 0;
      opacity: 0;
  }
  .accordion-fade-leave {
      max-height: 10000px;
      opacity: 1;
  } 
}
</style>