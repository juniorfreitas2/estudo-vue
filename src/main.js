// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
  	times:[
  		{nome:'São paulo',gm: 0,gs:0, saldo:''},
		{nome:'Corinthians',gm: 0,gs:0, saldo:''},
		{nome:'Flamengo',gm: 0,gs:0, saldo:''},
		{nome:'Gremio',gm: 0,gs:0, saldo:''},
		{nome:'Inter',gm: 0,gs:0, saldo:''}
  	],
  	novoJogo: {
	    casa: {
	        time: null,
	        gols: 0
	    },
	    fora: {
	        time: null,
	        gols: 0
	    },
	}
  },
  
  created() {
    let indexCasa = Math.floor(Math.random() * 5),
         indexFora = Math.floor(Math.random() * 5);

    this.novoJogo.casa.time = this.times[indexCasa];
    this.novoJogo.casa.gols = 0;

    this.novoJogo.fora.time = this.times[indexFora];
    this.novoJogo.fora.gols = 0;

}
  	

})

