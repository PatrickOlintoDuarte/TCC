
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Componentes/auth/Login';
import TelaAtividade from '../TelaAtividade';

const Routes = () => {
    return (
        <Router>
            <Route path='/teste' component={Teste}/>
            <Route path='/login' component={Login}/>
            <Route path='/telainicial' component={TelaInicial}/>
            <Route path='/telaatividade' component={TelaAtividade}/>
        </Router>
    );
};

export default Routes;

