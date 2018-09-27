import React, { Component } from 'react';
import { Layout, Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { onAutenticacao, onAtendimento } from '../store/login/action';

const FormItem = Form.Item;
const { Content } = Layout;

class FormLogin extends Component {

  state = {
    email: '',
    senha: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const usuario = this.props.onAutenticacao(fieldsValue);
        if(usuario.payload!==undefined && usuario.payload.redirecionar) {
          this.props.onAtendimento(usuario);
        }
        return;
      }
    });
  }

  validaCampoVazio = (e, campo) => {
    e.preventDefault();
    this.props.form.validateFields([campo], { force: true });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Layout>
          <div className="containerLogin">
            <Layout>
              <div className="bgColor">
                <Content>
                  <Form onSubmit={this.handleSubmit} layout="horizontal">

                    <FormItem layout="horizontal" className="tituloLogin">
                      <span>O sistema</span>
                    </FormItem>

                    <FormItem layout="horizontal" {...this.state.errorEmail} >
                      {getFieldDecorator('email', {
                        rules: [{
                          type: 'email', message: 'E-mail inválido',
                        },{
                          required: true,
                          message: 'E-mail não informado',
                        }],
                      })(
                        <Input placeholder="E-mail" onBlur={(e)=>{this.validaCampoVazio(e, 'email')}} />
                      )}
                    </FormItem>

                    <FormItem layout="horizontal">
                      {getFieldDecorator('senha', {
                        rules: [{
                          required: true,
                          message: 'Senha não informado',
                        }],
                      })(
                        <Input placeholder="Senha" type="password" onBlur={(e)=>{this.validaCampoVazio(e, 'senha')}} />
                      )}
                    </FormItem>
                    
                    <FormItem layout="horizontal" className="w100">
                      <Button type="primary" htmlType="submit">Entrar</Button>
                    </FormItem>
                  </Form>                
                </Content>
              </div>
            </Layout>
          </div>
        </Layout>
      </div>
      );
  };
}

FormLogin = Form.create()(FormLogin);

function mapStatetoProps(state){
	return { _usuario: state.autenticacao.usuario }
};

function mapDispachToProps(dispach) {
	return bindActionCreators({ onAutenticacao, onAtendimento }, dispach)
};

export default connect(mapStatetoProps, mapDispachToProps)(FormLogin);
