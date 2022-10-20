import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './style.css'

import { version } from 'vue'

console.log("vue的版本",version)

import App from './App.vue'

import router from "./router";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faHouseUser,faBookOpenReader,faUserTie} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret,faHouseUser,faBookOpenReader,faUserTie)

const app = createApp(App);

console.log("vue的版本",app)

app.use(router);
app.use(BootstrapVue3)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')