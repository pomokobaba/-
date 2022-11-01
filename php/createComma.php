<?php

    $raw = file_get_contents('php://input');
    $datas = json_decode($raw);
    $arrayData = json_decode(json_encode($datas), true);

    // number分文字の生成
    for ($i = 1; $i <= $arrayData['number']; $i++) {
        $text[$i] = $arrayData['textComma']. $i;
    }
    
    // カンマ区切りにする
    $result = implode(',', $text);

    // js\test.jsにjson形で返す
    echo json_encode($result);