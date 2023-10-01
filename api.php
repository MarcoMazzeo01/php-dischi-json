<?php

include_once __DIR__ . '/data/dischi.php';

$json_list = json_encode($dischi);

echo $json_list;

header("Content-type: application/json;");
