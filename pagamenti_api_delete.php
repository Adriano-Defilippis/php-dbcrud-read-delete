<?php 

header('Content-type: application/json');

/* DEFINIAMO I PARAMETRI DI CONNESSIONE AL DATABASE */
$servername= 'localhost';
$username = 'root';
$password = 'root';
$dbname= 'hotel_bool';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn -> connect_error) {
    echo 'errore connessione con il server';
    var_dump($conn);
    die();
}



?>