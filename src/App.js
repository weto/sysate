import React, {Component} from 'react';
import Atendimento from './componentes/Atendimento';
import {Router,Route,browserHistory} from 'react-router';
import FormLogin from './componentes/FormLogin';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={FormLogin} />
          <Route path="/atendimentos" component={Atendimento} />
      </Router>
    );
  }
}

export default App;
