import {useEffect, useState} from 'react';
import ComplePedidos from './ComplePedidos';
import './Pedidos.css';

export default function Pedidos(){

    const [pedidos, setPedidos] = useState([])

    const envioPedido = async (evento) => {
        const url = "http://localhost/PHP/connect/insert_pedidos.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
        
    }

    useEffect(() => {
        async function atualizarPedido(){
            const url = "http://localhost/PHP/connect/insert_pedidos.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }

        atualizarPedido();
    }, [])
    return(
        <div className="container formulario">
            <h3 className="text-center display-4">Cadastre seu produto</h3>
            <form onSubmit={envioPedido}> 
                <div className="form-group">
                    <label for="text">Nome</label>
                    <input type="text" className="form-control" name="nome" id="nome"></input>
                </div>
                <div className="form-group">
                    <label for="text">Cidade</label>
                    <input type="text" className="form-control" name="cidade" id="cidade"></input>
                </div>
                <div className="form-group">
                    <label for="text">Nome Produto</label>
                    <input type="text" className="form-control" name="produto" id="nome_produto"></input>
                </div>

                <div className="form-group">
                    <label for="text">Quantidade</label>
                    <input type="number" className="form-control" name="quantidade" id="quantidade"></input>
                </div>
                <input className="btn btn-primary" type="submit" name="enviar" value="Enviar" />
            </form>

            <div className="row">
                <table className="table table-striped mt-4 text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Cidade</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Qtd</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Prazo</th>
                    </tr>
                </thead>
                    {pedidos && pedidos.map(pedido => <ComplePedidos key={pedido.id_pedido} id_pedido={pedido.id_pedido} nome={pedido.nome} cidade={pedido.cidade} produto={pedido.produto} quantidade={pedido.quantidade} empresa={pedido.empresa} prazo={pedido.prazo}/>)} 
                </table>
            </div>
        </div>
        
    );
}