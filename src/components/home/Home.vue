<template>
    <div>
    <!-- <h1 v-text = titulo></h1>  UMA MANEIRA DE FAZER INTERPOLAÇÃO SEM CHAVES-->
    <h1 class="header-title">{{titulo}}</h1>
      <!--v-on é uma diretiva de vue que controla algo (e também é um tipo de data binding), no caso :input, definindo que o evento v-on vai alterar o atributo filt de data com o valor inserido em seu target no caso o input-->  
     <input type="search" class="filt" v-on:input="filt = $event.target.value" placeholder="Filtre pelo título da foto">
      <div>
        <ul class="pictures-list">
        <li class="pictures-list-item" v-for = "foto of fotosComFiltro">
          <!--:title foi definido em props do componente display-->
          <display :title="foto.titulo">
            <responsiveImg :url="foto.url" :titulo="foto.titulo"/>
            <!--Aqui a imagem não funciona sem a tag slot propria do vue no display.vue, pois ele pega tudo o que está em display.vue e troca pelo existente no app.vue-->
            <!-- <img class="responsive-display-image" :src="foto.url" :alt="foto.titulo"> -->
            <!-- Aqui ou eu uso v-bind antes do atributo da tag, ou eu utilizo o atalho : antes do atributo para fazer o data () binding SEM USAR OS {{}} -->
             <!-- <meu-botao rotulo="remover" tipo="button" @click.native="remove(foto)"/> -->
             <!-- Para fazer o click do botão funcionar, é preciso chamar o botão nativo do componente -->
            <meu-botao 
                  rotulo="remover" 
                  tipo="button" 
                  :confirmacao="true" 
                  @botaoAtivado="remove(foto)"
                  estilo="perigo"/>
          </display>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
//importando o componente display 
import Display from '../shared/display/Display.vue'
import responsiveImage from '../shared/responsive-image/responsiveImage.vue'
import Botao from '../shared/botao/Botao.vue';

export default {
  //utilizando o componente display em nossa aplicação dando um apelido a ele 
  components: {
    'display' : Display,
    'responsiveImg' : responsiveImage,
    'meu-botao': Botao
  },

  methods: {

      remove(foto) {
         if(confirm('Confirma?')) {
             alert(foto.titulo);
         }
    }
  },

  data() {
    return{
      titulo: 'AluraPick :3',
      fotos: [],
      filt: ""
    }
  },
  //computed serve para aplicar blocos de lógica em tempo real ao nosso código
  //sendo chamado de computed propriety ele vira uma propriedade na sua view por debaixo dos panos
  computed: {

    fotosComFiltro() {
        //aqui eu coloco o javascript que vai condizer com meu filtro
      if(this.filt){
        let exp = new RegExp(this.filt.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }
      else{
        return this.fotos;
      }
    }

  },

  created(){

    //MANEIRA CORRETA

    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));

    //PRIMEIRA MANEIRA DE SE FAZER UMA REQUISIÇÃO (o moço da alura disse que não é comum atribuir a chamada em uma variável e em uma promisse)
    /* let promisse = this.$http.get('http://localhost:3000/v1/fotos');
    promisse // VARIÁVEL PROMISSE RETORNADA
    // CONVERTENDO A RESPONSA EM JSON EM PRIMEIRO LUGAR
    .then(res => res.json())
    // então fotos(resposta convertida em json), defina this.fotos(propriedade atribuida em data NÃO PODE ALTERAR O NOME E FICAR DIFERENTE DA PROPRIEDADE) com os valores de fotos(a resposta dada e convertida em json)
    // a função then recebe dois parametros, o que acontece se der certo, virgula, o que acontece se algo der errado
    .then(fotos => this.fotos = fotos , err => console.log(err)); */
  }
}
</script>

<style>
  

  .header-title{
    text-align: center;
  }

  .pictures-list{
    list-style: none;
  }

 
  .pictures-list .pictures-list-item{
    display: inline-block;
  }

  .filt {
    display: block;
    width: 100%;
    padding: 1%;
    font-size: 18px;
    text-align: center;
    box-shadow: 5px 5px 5px;
  }

</style>
