<template>
  <div class="display">
                                <!--aqui o @ é usado como atalho do v-on-->
    <h2 class="display-title"  @dblclick="visivel = !visivel"> {{ title}}</h2>
    <transition name = "display-fade">
      <div class="display-content" v-show="visivel">
      <slot></slot>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  //exportando a propriedade para ser usada como atributo no componente
  props:['title'],

  data(){
    return {
        visivel: true
    }
  }
}
</script>

<style scoped>

/* O SCOPED SERVE PARA QUE O ESTILO SEJA APLICADO APENAS A ESSE COMPONENTE */

   .display {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .display .display-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  *{
    box-shadow: 5px 5px 5px;
  }

  .display-fade, .display-fade-leave-active {
  opacity: 0
}

.display-fade-active, .display-fade-leave-active {
  transition: opacity .4s
}
</style>

/* 
CLASSES CRIADAS AUTOMATICAMENTE PELO COMPONENTE TRANSITION
display-fade-enter // antes do elemento ser incluído ou removido, o estado atual
display-fade-enter-active // quando o elemento esta sendo incluído
display-fade-leave-active // quando o elemento esta sendo removido
 */