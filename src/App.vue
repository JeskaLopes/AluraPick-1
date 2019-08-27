<template>
  <div class="body">
    <menuNav :rotas = "routes"></menuNav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes }  from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'menuNav' : Menu
  },

  data() {

    return {

      routes
    }

  }

}
</script>

<style>

body{
  padding: 0;
  margin: 0;
}
  .body {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 100%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>