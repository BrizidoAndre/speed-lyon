<?php

ini_set('upload_max_filesize', '10M');
ini_set('post_max_size', '10M');

phpinfo();

if($_FILES["file"]) {
    $file = $_FILES["file"];
    $file_info = pathinfo($file["name"]);

    $dir = "./files/";
    if(!is_dir($dir)) {
        mkdir($dir);
    }

    move_uploaded_file($file["tmp_name"], $dir . time() . "." . $file_info["extension"]);

    echo json_encode(["message" => "success", "file_name" => "./files/" . time() . "." . $file_info["extension"]]);
} else {
    echo json_encode(["message" => "fail"]);
}