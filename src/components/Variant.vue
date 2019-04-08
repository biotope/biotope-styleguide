<template>
    <div class="styleGuide__variant">
        <div v-if="!markup">
          Loading Component...
        </div>
        <div v-if="markup">
            <h3 class="styleGuide__variantHeadline">{{variant.name}}</h3>
            <div class="styleGuide__variantDescription" v-if="variant.description" v-html="variant.description" />
            <div class="styleGuide__markup" v-if="!variant.externalLink" v-html="getGridMarkup(getGrid, markup)" />
      
            <div class="styleGuide__externalLink" v-if="variant.externalLink"><a :href="getExternalUrl()" target="_blank" rel="noopener">{{$t('details_code_externalLink')}}</a></div>
            <div class="styleGuide__codeSection" :class="{ 'is-active': show}" v-if="!variant.externalLink">
              <div class="styleGuide__toolbar">
                  <a href="javascript:" class="styleGuide__showCode" @click="show = !show">{{ $t('details_code_buttonText') }}</a>
                  <a href="javascript:"  class="styleGuide__copyCode" :class="currentCopyClass" v-if="show"
                    v-clipboard:copy="markup"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">{{ currentCopyText }}</a>
              </div>
               <div v-show="show" class="styleGuide__code">
                  <prism language="html">{{ markup }}</prism>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Prism from 'vue-prism-component'
import axios from 'axios'
export default {
  name: 'Variant',
  props: ['variant', 'component'],
  data() {
    return {
      item: this.variant,
      componentMarkup: '',
      show: false,
      currentCopyClass: '',
      currentCopyText: this.$t('details_code_copyCode')
    }
  },
  methods: {
    getExternalUrl() {
      return `${this.$store.getters.getUrlRoot}${this.component.name}/styleGuide/${this.variant.outputFileName}`;
    },
    getGridMarkup(column, content) {
      let markup = this.$store.getters['getGridGenerateCol'](column, content);
      markup = markup.replace(/src=\"/g, 'src="'+ this.$store.getters.getResourceUrl);
       this.$nextTick(() => {
           this.$parent.markupLoaded = this.$parent.markupLoaded+1;
      });
      return markup;
    },
    onCopy: function () {
      this.currentCopyClass = 'is-active';
      this.currentCopyText = this.$t('details_code_copyCode_success');
      setTimeout(() => {
         this.currentCopyClass = '';
        this.currentCopyText = this.$t('details_code_copyCode');
      }, 5000);
    },
    onError: function () {
      this.currentCopyText = this.$t('details_code_copyCode_error');
      setTimeout(() => {
        this.currentCopyText = this.$t('details_code_copyCode');
      }, 5000);
    }
  },
  created() {
    this.$store.dispatch('loadSelectedGrid', 12);
  },
  computed: {
    getGrid() {
      return this.$store.getters.getSelectedGrid;
    }
  },
  asyncComputed: {
    markup() {
      return axios
        .get(`${this.$store.getters.getUrlRoot}${this.component.name}/styleGuide/${this.variant.outputFileName}`)
        .then(response => {

          return response.data;
        });
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
    display: inline-block;
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
      transition: all .2s;
  }
  .accordion-fade-enter-active {
      max-height: 500px;
  }
  .accordion-fade-enter,
  .accordion-fade-leave-active {
      max-height: 0;
  }
  .accordion-fade-leave {
      max-height: 500px;
  } 
}
</style>
