<template>
    <div>
        <div v-if="isLoading">
        Loading Component...
        
        </div>
        <div v-if="!isLoading">
            <div class="componentDetails__variant">
                <h2>{{variant.name}}</h2>
                <p>{{variant.description}}</p>
                <div class="componentDetails__markup">
                  <div v-html="componentMarkup" />
                </div>
                <div class="componentDetails__codeSection">
                  <div class="componentDetails__toolbar">
                    <button role="button" @click="show = !show">Code</button>
                  </div>
                  <transition name="accordion-fade">
                    <div v-if="show" class="componentDetails__code">
                      <prism language="html">{{ componentMarkup }}</prism>
                    </div>
                </transition>
              </div>
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
  methods: {
     getMarkupOfComponent: function(url) {
      axios
      .get(url)
      .then(response => {
        this.isLoading = false;
        this.componentMarkup = response.data;

      })
    }
  },
  components: {
    Prism
  }
}
</script>
<style lang="scss">

.componentDetails__markup {
  background-color: lightgray;
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
</style>