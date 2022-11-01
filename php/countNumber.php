<?php

    $raw = file_get_contents('php://input');
    $data = json_decode($raw);
    
    // 文字のカウント
    $result = mb_strlen($data, 'utf8');

   error_log("result:".$result."\n", 3, 'debug2.txt');
   echo json_encode($result);

    