<?php
    header("Access-Control-Allow-Origin:*");
    require_once 'connect_bd.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        $sql = "SELECT pedido.nome, pedido.cidade, pedido.produto, pedido.quantidade, envio.empresa, envio.prazo FROM pedido
        left outer join matricula_pedido on pedido.id_pedido = matricula_pedido.id_pedido
        left outer join envio on envio.id_envio = matricula_pedido.id_envio;";
        
        $resultado = query02($sql);
        $pedidos = [];

        while($linha = mysqli_fetch_assoc($resultado)){
            $pedidos[] = $linha;
        }

        echo json_encode($pedidos);

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome = $_POST['nome'];
        $cidade = $_POST['cidade'];
        $produto = $_POST['produto'];
        $quantidade = $_POST['quantidade'];

        $sql = "INSERT INTO pedido VALUES (null, '$nome', '$cidade', '$produto', '$quantidade')";
        nonquery02($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'PUT'){
        echo json_encode(array("msg" => "Método PUT efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        echo json_encode(array("msg" => "Método DELETE efetuado"));
    } else {
        echo "Falha!";
    }
?>