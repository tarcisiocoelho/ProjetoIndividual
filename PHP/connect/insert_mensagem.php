<?php
    header("Access-Control-Allow-Origin:*");
    require_once 'connect_bd.php';
    
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        echo json_encode(array("msg" => "Método GET Efetuado"));

    } else if($_SERVER['REQUEST_METHOD'] === 'POST'){

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];

        $sql = "INSERT INTO comentarios VALUES (null, '$nome', '$email', '$mensagem')";
        nonquery($sql);
        echo json_encode(array("msg" => "Método POST Efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'PUT'){
        echo json_encode(array("msg" => "Método PUT efetuado"));

    } elseif($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        echo json_encode(array("msg" => "Método DELETE efetuado"));
    } else {
        echo "Falha!";
    }
?>