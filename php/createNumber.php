<?php

    $raw = file_get_contents('php://input');
    $datas = json_decode($raw);
    $array = json_decode(json_encode($datas), true);

    switch ($array['detaTyep']) {

        case 'zenkaku':
            // 大文字
            $str = 'この文章はダミーです。';
            if(mb_strlen($str) < $array['textNo']) {
                // $strより生成したい文字数が多いい場合
                $difference = $array['textNo'] / mb_strlen($str);
                $str = str_repeat($str, ceil($difference));
                // error_log("str:".$str."\n"."difference:".ceil($difference)."\n", 3, 'debug2.txt');
            }

            $result = mb_substr($str, 0, $array['textNo'], 'UTF-8');
            break;

        case 'kana':
            // 大文字カタカナ
            $str = 'ダミーテキスト。';
            if(mb_strlen($str) < $array['textNo']) {
                // $strより生成したい文字数が多いい場合
                $difference = $array['textNo'] / mb_strlen($str);
                $str = str_repeat($str, ceil($difference));
            }
            $result = mb_substr($str, 0, $array['textNo'], 'UTF-8');
            break;
        
        case 'emoji':
            // 絵文字
            $str = '🙂👍🙃😊🙁🤣🤑🐦🐈‍⬛😔🐔🤤👀🍙🦒🥰🧡⚠️😗🤩🤗🤐👌🖖☝️🎃😪😝';
            if(mb_strlen($str) < $array['textNo']) {
                // $strより生成したい文字数が多いい場合
                $difference = $array['textNo'] / mb_strlen($str);
                $str = str_repeat($str, ceil($difference));
            }
            $result = mb_substr($str, 0, $array['textNo'], 'UTF-8');
            break;

        case 'hankaku':
            // 半角英数字
            $str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPUQRSTUVWXYZ';
            if(mb_strlen($str) < $array['textNo']) {
                // $strより生成したい文字数が多いい場合
                $difference = $array['textNo'] / mb_strlen($str);
                $str = str_repeat($str, ceil($difference));
            }
            $result = substr(str_shuffle($str), 0, $array['textNo']);         
            break;
        
        case 'baba':
            // 全角文字
            $str = '馬場＿動作確認ダミーデータ。';
            if(mb_strlen($str) < $array['textNo']) {
                // $strより生成したい文字数が多いい場合
                $difference = $array['textNo'] / mb_strlen($str);
                $str = str_repeat($str, ceil($difference));
            }
            $result = mb_substr($str, 0, $array['textNo'], 'UTF-8');
            break;  
    }

    error_log("result:".$result."\n", 3, 'debug2.txt');
    echo json_encode($result);