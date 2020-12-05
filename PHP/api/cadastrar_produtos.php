<?php
    header("Access-Control-Allow-Origin:*");
    header("Content-type: aplication/json");
    $arr = array("nome" => $_POST['nome']);
    echo json_encode(arr);
?>