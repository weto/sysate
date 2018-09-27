import React, { Component } from 'react';
import find from "lodash/find";


export class Passageiro extends Component {

  constructor(){
  	super();

    this.state = this.setEstadoInicializaLista();
  	this.pesquisaTabelaTeste = this.pesquisaTabelaTeste.bind(this);
  	this.setEstadoInicializaLista = this.setEstadoInicializaLista.bind(this);
  }

  pesquisaTabelaTeste(campoPesquisaParametro){
  	if(campoPesquisaParametro==="") {
		this.setState(this.setEstadoInicializaLista());
  	}else{

	  	let json = {};
	  	json['tecnologia'] = campoPesquisaParametro;

	  	let resultado = find(this.state.tecnologias, json);
	  	if(resultado){
		  	this.setState({'tecnologias': [resultado]});
  		}else{
  			this.setState({'tecnologias': []});
  		}
  	}
  }

  setEstadoInicializaLista() {
  	let json = {tecnologias:[
      {id:'1', tecnologia:'webpack'},
      {id:'2', tecnologia:'Babel'},
      {id:'3', tecnologia:'React'}, 
      {id:'4', tecnologia:'JQuery'},
      {id:'5', tecnologia:'Lodash'}
    ]};
    return json;
  }

  render() {
    return (
    	<div className="listagemTecnologia">
    		<div className="containerPesquisa">
          <div className="lisTecnologia">
  			    <table>
  			      <thead>
  			        <tr>
  			          <th>Técnologias utilizadas</th>
  			        </tr>
  			      </thead>
  			      <tbody>
  			      	{
  					    this.state.tecnologias.map(function(tec){
  					      	return(
  						        <tr key={tec.id}>
  						        	<td>{tec.tecnologia}</td>
  						        </tr>
  					        );
  					    })
  					}
  			      </tbody>
  			    </table>
          </div>
		    </div>
		</div>
    );
  }
}