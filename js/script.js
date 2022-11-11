const {createApp } = Vue;

//console.log(axios);

createApp({

  data(){
    return{
      title: 'Ajax Game',
      giocatoreA: 0,
      giocatoreB: 0,
      isLoaded: false
    }
  },
  methods:{
    getApi(){

      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then( risultato => {
        console.log('Fine chiamata axios', risultato.data);
        this.giocatoreA = risultato.data.response
      })
      .catch( errore => {
        this.title = errore.code
        console.log(errore.code);
      })

      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then( risultato => {
        console.log('Fine chiamata axios', risultato.data);
        this.giocatoreB = risultato.data.response
        this.isLoaded = true;
      })
      .catch( errore => {
        this.title = errore.code
        console.log(errore.code);
      })

    },
    getResult(){
      let result;
      if(this.giocatoreA > this.giocatoreB){
        result = "Vince A";
      }else if(this.giocatoreA < this.giocatoreB){
        result = "Vince B";
      }else{
        result = "PARI";
      }
      return result;
    }
      
  },
  mounted(){
    
    this.getApi();
    console.log('LOG SCRITTO DOPO AXIOS');
  }

}).mount('#app');