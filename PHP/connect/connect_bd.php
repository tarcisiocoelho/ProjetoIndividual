<?php

  //primeira conexão com comentarios

  function query($sql){
    $servername = 'localhost';
    $username   = 'root';
    $password   = '';
    $database   = 'the_pink_store';

    $conn = mysqli_connect($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $resultado;
  }

  function nonquery($sql){
    $servername = 'localhost';
    $username   = 'root';
    $password   = '';
    $database   = 'the_pink_store';

    $conn = mysqli_connect($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
  }

  //segunda conexão com pedidos

  function query02($sql){
    $servername = 'localhost';
    $username   = 'root';
    $password   = '';
    $database   = 'pedidos';

    $conn = mysqli_connect($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $resultado;
  }

  function nonquery02($sql){
    $servername = 'localhost';
    $username   = 'root';
    $password   = '';
    $database   = 'pedidos';

    $conn = mysqli_connect($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
  }
?>