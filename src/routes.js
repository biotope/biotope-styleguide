import Vue from 'vue'
import Router from 'vue-router'
import StyleGuide from './components/styleGuide.vue'
import ComponentDetails from './components/componentDetails.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', 
            name: 'stleGuide',
            component: StyleGuide
        },
        {
            path: '/componentDetails/:name', 
            name: 'componentDetails',
            component: ComponentDetails
        }
    ]
})