/**
 * 文字数カウント
 */
 function countNumber() {
    text = document.getElementById("text");
    param = text.value;

    fetch('/operation_check/php/countNumber.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(param) 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log(result); 
        countNumberAnswer.innerText = result;
    });  
}

/**
 * 文字生成
 */
function createNumber() {
    textNo = document.getElementById("textNo");
    detaTyep = document.getElementById("detaTyep");
    paramTextNo = textNo.value;
    paramDetaTyep = detaTyep.value;

    fetch('/operation_check/php/createNumber.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(
            {
                'detaTyep': paramDetaTyep,
                'textNo': paramTextNo
            }), 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log(result); 
        createNumberAnswer.innerText = result;
    });  
}

/**
 * カンマ区切り
 */
function createComma() {
    textComma = document.getElementById("textComma");
    createNo = document.getElementById("createNo");
    paramComma = textComma.value;
    paramNo = createNo.value;

    fetch('/operation_check/php/createComma.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(
            {
                'textComma': paramComma,
                'number': paramNo
            }), 
    })
    .then(response => response.json())
    .then(result => {
        console.log(result); 
        createCommaAnswer.innerText = result;
    }); 

}

/**
 * 画像のリサイズ
 */
function fileup(e) {
    const img = document.getElementById('img');
    // ファイルの読込
    const reader = new FileReader();
    // 画像の読込
    const imgReader = new Image();
    // 変更したい縦×横
    width = document.getElementById("width");
    height = document.getElementById("height");
    paramWidth = width.value;
    paramHeight = height.value;

    reader.onloadend = () => {
      imgReader.onload = () => {

        // 拡張子の取得
        const imgType = imgReader.src.substring(5, imgReader.src.indexOf(';'));

        // 画像のリサイズ
        const canvas = document.createElement('canvas');
        canvas.width = paramWidth;
        canvas.height = paramHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imgReader,0,0,paramWidth,paramHeight);

        // 画像をブラウザに表示
        const imgData = canvas.toDataURL(imgType);
        img.src = imgData;
        
        // ダウンロード設定
        const dl = document.getElementById('download');
        dl.href = imgData;
        if (imgType == 'image/jpeg') dl.download = 'resize_img.jpeg';
        if (imgType == 'image/png') dl.download = 'resize_img.png';
        if (imgType == 'image/gif') dl.download = 'resize_img.gif';
        
      }
      imgReader.src = reader.result;
    }
    reader.readAsDataURL(e.files[0]);
  }

  /**
 * 文字数カウント
 */
 function countNumber() {
    text = document.getElementById("text");
    param = text.value;

    fetch('/php/countNumber.php', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(param) 
    })
    .then(response => response.json()) 
    .then(result => {
        console.log(result); 
        countNumberAnswer.innerText = result;
    });  
}



// 公開ソース

// /**
//  * 文字生成
//  */
// function createNumber() {
//     textNo = document.getElementById("textNo");
//     detaTyep = document.getElementById("detaTyep");
//     paramTextNo = textNo.value;
//     paramDetaTyep = detaTyep.value;

//     fetch('/php/createNumber.php', { 
//         method: 'POST', 
//         headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify(
//             {
//                 'detaTyep': paramDetaTyep,
//                 'textNo': paramTextNo
//             }), 
//     })
//     .then(response => response.json()) 
//     .then(result => {
//         console.log(result); 
//         createNumberAnswer.innerText = result;
//     });  
// }

// /**
//  * カンマ区切り
//  */
// function createComma() {
//     textComma = document.getElementById("textComma");
//     createNo = document.getElementById("createNo");
//     paramComma = textComma.value;
//     paramNo = createNo.value;

//     fetch('/php/createComma.php', { 
//         method: 'POST', 
//         headers: { 'Content-Type': 'application/json' }, 
//         body: JSON.stringify(
//             {
//                 'textComma': paramComma,
//                 'number': paramNo
//             }), 
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result); 
//         createCommaAnswer.innerText = result;
//     }); 

// }

// /**
//  * 画像のリサイズ
//  */
// function fileup(e) {
//     const img = document.getElementById('img');
//     // ファイルの読込
//     const reader = new FileReader();
//     // 画像の読込
//     const imgReader = new Image();
//     // 変更したい縦×横
//     width = document.getElementById("width");
//     height = document.getElementById("height");
//     paramWidth = width.value;
//     paramHeight = height.value;

//     reader.onloadend = () => {
//       imgReader.onload = () => {

//         // 拡張子の取得
//         const imgType = imgReader.src.substring(5, imgReader.src.indexOf(';'));

//         // 画像のリサイズ
//         const canvas = document.createElement('canvas');
//         canvas.width = paramWidth;
//         canvas.height = paramHeight;
//         const ctx = canvas.getContext('2d');
//         ctx.drawImage(imgReader,0,0,paramWidth,paramHeight);

//         // 画像をブラウザに表示
//         const imgData = canvas.toDataURL(imgType);
//         img.src = imgData;
        
//         // ダウンロード設定
//         const dl = document.getElementById('download');
//         dl.href = imgData;
//         if (imgType == 'image/jpeg') dl.download = 'resize_img.jpeg';
//         if (imgType == 'image/png') dl.download = 'resize_img.png';
//         if (imgType == 'image/gif') dl.download = 'resize_img.gif';
        
//       }
//       imgReader.src = reader.result;
//     }
//     reader.readAsDataURL(e.files[0]);
//   }