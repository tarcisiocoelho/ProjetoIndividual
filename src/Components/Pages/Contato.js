import './Contato.css';

export default function Contato(){
    const controleEnvio = async (evento) => {
        

        const url = "http://localhost/PHP/connect/insert_mensagem.php";
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados
        };

        const resposta  = await fetch(url, cabecalho);
        const resultado = await resposta.json();
        console.log(resultado);
    }

    return(
        <div className="container mt-4 contato">
        <h3 className="text-center display-4">Envie sua mensagem!!</h3>
        <form onSubmit={controleEnvio}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome" id="nome"></input>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email"></input>
            </div>
            <div className="form-group">
                <label>Digite sua mensagem</label>
                <textarea class="form-control" name="mensagem" id="mensagem"/>
                <button className="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
        </form>
            <p className="text-center display-4">ou nos encontre nas redes</p>
            <div className="d-flex text-center mt-5">   
                <div className="hover">
                    <img src={require('../Img/redesocial/email.png').default} alt="" />
                    <img src={require('../Img/redesocial/facebook.png').default} alt=""/>
                    <img src={require('../Img/redesocial/instagram.png').default} alt=""/>
                    <img src={require('../Img/redesocial/twitter.png').default} alt=""/>
                </div>
            </div>
        </div>        
    );
}