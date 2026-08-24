<?php

$data = imagecreatefromwebp('./dog.webp');
$pixelSize = $_GET['cell_size'] ?? 50;
imagefilter($data, IMG_FILTER_PIXELATE, $pixelSize);
header('Content-type: image/png');
imagepng($data);
