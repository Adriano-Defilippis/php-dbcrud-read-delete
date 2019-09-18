<?php 

header('Content-type: application/json');

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

$query = "SELECT  pagamenti.id, 
                  pagamenti.status,
                  pagamenti.price
            FROM `pagamenti`
            WHERE pagamenti.id >= 100";

$res = $conn -> query($query);

$pagamenti = [];

if ($res && $res -> num_rows > 0) {
    
    while ($row = $res -> fetch_assoc()) {
        
        $pagamenti[] = $row;
    }
}

$conn->close();
echo json_encode($pagamenti);


?>