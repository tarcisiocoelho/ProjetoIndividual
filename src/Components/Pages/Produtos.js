import {useState, useEffect} from 'react';
import Produto from '../Produto/index';
import Footer from '../Footer/Footer';
import './style.css';

export default function Produtos(){

const [produtos, setProdutos]= useState([]);
useEffect(async () =>{
    const resposta = await fetch("http://localhost/PHP/api/produtos.php");
    const dados    = await resposta.json();
    setProdutos(dados);
    
}, []);

    return(
    <div className="container-fluid border">
        <div className="row">
            <div className="col-md-3 col-lg-2 col-xs-12">
                <nav className="text-center styleNavVertical">
                <ul className="list-group">
                    <li className="list-group-item mt-3">
                        <p className="lead">CATEGORIA</p>
                    </li>
                    <li className="list-group-item">
                        <p className="nav-link">Todos</p> 
                    </li>
                    <li className="list-group-item">
                        <p className="nav-link">Impressora</p>
                    </li>
                    <li className="list-group-item">
                        <p className="nav-link">Fogão</p>
                    </li>
                    <li className="list-group-item">
                        <p className="nav-link">Televisão</p>
                    </li>
                    <li className="list-group-item">
                        <p className="nav-link">Microondas</p>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="col-md-9 col-lg-9 col-xs-12 d-flex quebrar text-center" id="categoria">
                {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} preco={item.preco} preco_final={item.preco_final}/>)}
            </div>
        </div>
            <Footer />
    </div>
    );
}