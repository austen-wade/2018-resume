import Vue from 'vue';
import Resume from './Resume.vue';
import './normalize.css';

new Vue({
    render: h => h( Resume )
}).$mount( '#app' )