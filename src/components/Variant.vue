<template>
    <div>
        <div v-if="isLoading">
        Loading Component...
        
        </div>
        <div v-if="!isLoading">
            <div class="componentDetails__variant">
                <h2>{{variant.name}}</h2>
                <p>{{variant.description}}</p>
                <div v-html="componentMarkup" />
                <div class="componentDetails__code">
                    <prism language="html">{{ componentMarkup }}</prism>
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
      componentMarkup: ''
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