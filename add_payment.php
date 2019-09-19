<?php 

/* header('Content-type: application/json'); */

/* DEFINIAMO I PARAMETRI DI CONNESSIONE AL DATABASE */
$servername= 'localhost';
$username = 'root';
$password = 'root';
$dbname= 'hotel_bool';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn -> connect_error) {
    echo 'errore chiamata tabella pagamenti';
    var_dump($conn);
    die();
}

$price = $_GET['price'];
$status = $_GET['status'];

$query = "
            INSERT INTO pagamenti (status, price, prenotazione_id, pagante_id)
            VALUES
            ('" . $status . "', " . $price . ", 1, 1)
        ";



$res = $conn -> query($query);



$conn->close();
echo json_encode($pagamenti);


?>