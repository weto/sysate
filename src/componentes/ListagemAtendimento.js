import React, { Component } from 'react';
import { Table, Button } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id'
}, {
  title: 'Passageiro',
  dataIndex: 'passageiro',
  key: 'passageiro',
}, {
  title: 'Origem',
  dataIndex: 'origem',
  key: 'origem',
}, {
  title: 'Destino',
  key: 'destino',
  dataIndex: 'destino',
}, {
  title: 'Horario',
  key: 'horario',
  dataIndex: 'horario',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <Button type="primary" >Confirmado</Button>
  ),
}];

const data = [{
  id: '1',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '2',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '3',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '4',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '5',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '6',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '7',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '8',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '9',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '10',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
},{
  id: '11',
  passageiro: 'João da Silva',
  origem: 'Av. Antonio Gomes, 312',
  destino: 'rua dos Pinheiros, 133',
  horario: '01/09/2018 ás 13:00'
}];

export class ListagemAtendimento extends Component {
  render() {
    return (
			<div className="listagemAtendimentos">
				<Table columns={columns} dataSource={data} />
			</div>
		);
  }
}