import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Produtos from './Components/Pages/Produtos';
import Contato from './Components/Pages/Contato';
import Lojas from './Components/Pages/Lojas'
import Home from './Components/Pages/Home';
import Pedidos from './Components/Pages/Pedidos';

export default function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/contato" component={Contato} />
                <Route path="/lojas" component={Lojas} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/home" component={Home} />
                <Route path="/pedidos" component={Pedidos} />
            </Switch>
        </BrowserRouter>
    );
}