import React, { Component } from 'react';
import { Layout, Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export class FormularioLogin extends Component {

  constructor(){
    super();
    this.state = {login:'', senha:''} ; 
    this.setLogin = this.setLogin.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  loginSistema(evento){
    evento.preventDefault(); 
    if(this.state.login==="teste" && this.state.senha==="teste"){
      document.cookie = true;
      window.location.href = "http://localhost:3003/atendimentos";
    }
  }

  logoutSistema(evento){
    evento.preventDefault(); 
  }

  setLogin(evento){
    this.setState({login:evento.target.value});
  }

  setSenha(evento){
    this.setState({senha:evento.target.value});
  }

  componentDidMount(){

  }

  componentWillMount(){
    if((document.cookie.indexOf("true")===0)){
      window.location.href = "http://localhost:3003/atendimentos";
    }
  }

  render() {
    return (
      <div>
        <Layout>
          <div className="containerLogin">
            <Layout>
              <Header><span>The Sistema</span></Header>
              <Content>
                <form className="login-form" onSubmit={this.loginSistema.bind(this)} method="post">
                  <Input placeholder="E-mail" />
                  <Input placeholder="Senha" />
                </form>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </div>
        </Layout>
      </div>
      );
  };


}