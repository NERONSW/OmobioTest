<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';


$data = json_decode(file_get_contents("php://input"));

$data = $jsonobj['username'];
$data = $jsonobj['password'];

$query  = "SELECT * FROM user WHERE unername = '$username'";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) == 1){
    while ($row = mysqli_fetch_assoc($result)) {
        if (password_verify($password, $row['password'])) {
            $_SESSION['id'] = $row['id'];
            $_SESSION['username'] = $row['fullname'];
            $msg = "User Login Successful";
            break;            
        }else{
                $msg = "Invalid password";
        }
    }
}else{
    $msg = "User Not found";
}


