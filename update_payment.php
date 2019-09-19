<?php 

    header('Content-type: application/json');

    /* DEFINIAMO I PARAMETRI DI CONNESSIONE AL DATABASE */
    $servername= 'localhost';
    $username = 'root';
    $password = 'root';
    $dbname= 'hotel_bool';

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn -> connect_error) {
        
        echo "Errore connessione al server per la modifica";
        var_dump($conn);
        die();
    }


    $id = $_GET['id'];
    $status = $_GET['status'];

    $query = "
                UPDATE pagamenti
                SET status = '" . $status . "'
                WHERE id = " . $id . "
        ";

    $res = $conn -> query($query);

    $conn->close();
    echo json_encode($res);
?>