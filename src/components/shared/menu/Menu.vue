<template>
    <nav class="navbar">
      <ul class="nav-list">       
          <li class="nav-item" v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">{{rota.titulo}}</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {

    props: {
        rotas: {
            type: Array, 
            required: true
        }
    }
}
</script>

<style scoped>
.navbar{
    background: black;
    width: 100%;
    margin: 0;
    padding: 2px;
    font-size: 20px;
  }

  .nav-list{
    display: flex;
    justify-content: flex-end;
    padding: 1% 10%;
    
  }

  .nav-item{
    padding: 1% 2%;
    text-decoration: none;
  
  }

  .router-link-active{
    text-decoration: none;
    color:aliceblue
  }

</style>