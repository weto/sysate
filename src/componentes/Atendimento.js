import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onUsuarioAutenticado } from '../store/login/action';
import { ListagemAtendimento } from './ListagemAtendimento';
const { Header, Content } = Layout;

class Atendimento extends Component {

  state = {
    usuario: ''
  }

  componentDidMount() {
    const usuarioReturn = this.props.onUsuarioAutenticado(this);
    this.setState({ usuario: usuarioReturn.payload });
  }
  
  sair = (e) => {
    e.preventDefault();
    localStorage.setItem('usuario', '');
    window.location.href = window.location.origin;
  }

  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Row>
              <Col span={18}>
                <div className="logo">O Sistema</div>
                <div className="titulo">{localStorage.getItem('titulo')}</div>
              </Col>
              <Col span={6}>
                <div className="usuario">
                  <Row>
                    <Col span={2}>
                      <div className="avatar"><Icon type="user" theme="outlined" /></div>
                    </Col>
                    <Col span={18}>
                      <div className="nome_usuario">Olá, {this.state.usuario}</div>
                    </Col>
                    <Col span={2}>
                      <div className="sair"><Button type="primary" onClick={this.sair} >Sair</Button></div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Header>
          <Content>
            <div><ListagemAtendimento /></div>
          </Content>
        </Layout>
      </div>
    );
  }
}

function mapStatetoProps(state){
	return { _usuario: state.autenticacao.usuario }
};

function mapDispachToProps(dispach) {
	return bindActionCreators({ onUsuarioAutenticado }, dispach)
};

export default connect(mapStatetoProps, mapDispachToProps)(Atendimento);
