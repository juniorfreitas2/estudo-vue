  // The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import {Time} from './time'
import _ from 'lodash';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
      order:{
        keys:['pontos', 'gm', 'gs'],
        sort:['desc', 'desc', 'asc']
      },
      colunas:['nome','pontos','gm','gs','saldo'],
  	times:[
  		new Time('São paulo',''),
        new Time('Corinthians',''),
        new Time('Flamengo',''),
        new Time('Gremio',''),
        new Time('Inte','')
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
	},
  view: 'tabela'
  },
methods:{
    fimJogo(){
        let timeAdversario = this.novoJogo.fora.time;
        let gols = +this.novoJogo.casa.gols; // o + converte pra inteiro
        let golsAdversario = +this.novoJogo.fora.gols;
        this.novoJogo.casa.time.fimJogo(timeAdversario,gols, golsAdversario);
        this.view = 'tabela';
    },
    createNovoJogo(){
        let indexCasa = Math.floor(Math.random() * 5),
             indexFora = Math.floor(Math.random() * 5);

        this.novoJogo.casa.time = this.times[indexCasa];
        this.novoJogo.casa.gols = 0;

        this.novoJogo.fora.time = this.times[indexFora];
        this.novoJogo.fora.gols = 0;
        this.view = 'formNovoJogo';
    },
    sortByColum(colum){
        this.order.keys = colum;
        this.order.sort = this.order.sort == 'desc'? 'asc' : 'desc';
    }
},
filters:{
    saldo(time){
        return time.gm - time.gs;
    },
    ucWords(value){
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
},
computed:{
        timesFiltered(){
            return _.orderBy(this.times, this.order.keys, this.order.sort);
        }
}


})
