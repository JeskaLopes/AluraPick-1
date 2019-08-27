import Vue from 'vue'
import App from './App.vue'

// importando o módulo
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

// tem que vir entre chaves, porque não é default
import { routes } from './routes';
//quando a propriedade tem o mesmo nome do valor eu posso apenas chamar routes dentro da const

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
  /* routes: routes, */
  routes,
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
