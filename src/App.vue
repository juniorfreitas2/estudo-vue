  <script>
  import App from './main.js'
  </script>

  <div id="app">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  
  	<table class='table table-striped'>
  		<thead>
		  <tr>
		    <td>Nome</td>
		    <td>Gols Marcados</td>
		    <td>Gols Sofridos</td>
		    <td>Saldo</td>
		  </tr> 
		 </thead>
		 <tbody>
		 	<tr v-for='time in times'>
		 		<td>{{time.nome}}</td>
		 	</tr>
		 </tbody>
  	</table>

  </div>
  	<div id="app-3">
  	<p v-if="seen">Now you see me</p>
	</div>


