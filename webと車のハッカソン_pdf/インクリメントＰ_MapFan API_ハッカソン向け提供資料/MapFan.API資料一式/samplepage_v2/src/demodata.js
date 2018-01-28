//var datailHeader = "<p><strong>◆説明</strong><br>";
//var srcHeader = "<div class='article'>";
//var srcFooter = "</div></p>";
var datailHeader = "<strong>◆説明</strong><br>";

var demoText = [

{
title: "1-1.地図表示",
sum: "<p>本サービスの基本となる認証処理と地図表示のコードが確認できます。</p>",
detail: "\
HTMLのBODYタグの初期処理 onload にて、認証リクエストの処理 auth メソッドを実行します。\
認証手続きが完了すると、上記 auth メソッドで指定されたコールバック関数 task_func を呼び出します。\
関数 task_func 内では、mapCreate メソッドにて、指定されたDIVタグ上に地図画像を作成します。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-1.地図表示】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    // 本サンプルページ読み出し時に本関数が呼ばれます。\n\
    window.onload = function() {\n\
\n\
      //### サーバ名設定 ###\n\
      // 利用する地図APIサーバ名を設定します。\n\
      // なお、このサンプルではテスト利用サーバー名を設定しています。\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
\n\
      //### 認証リクエスト処理 ###\n\
      // 認証APIの実行要求を行います。\n\
      // 第１パラメータには、お客様専用に発行した顧客IDを設定します。\n\
      // 第２パラメータには、認証手続き完了後に呼び出すコールバック関数を設定します。\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        // 認証手続き処理失敗時の処理コードをここに記述してください。\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      // 地図の作成条件を設定します。\n\
      // このサンプルでは地図初期の中心緯度経度とスケールを指定します。\n\
      // 詳細はMapOptionsクラスの仕様をご参照下さい。\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 16\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      // 地図作成処理を実行します。id='sample_map'のDIVタグ上に地図を生成します。\n\
      Mfapi.mapCreate('sample_map',options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_1.html"
},

{
title: "1-2.コントローラー非表示",
sum: "<p>スケールボタン、距離スケーラーを非表示にするコードが確認できます。</p>",
detail: "\
本サンプルでは、地図初期表示時にスケールボタンと距離スケーラーを非表示にしています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-2.コントローラー非表示】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 16,\n\
        scalerShown : false,          // スケーラーを非表示\n\
        zoomButtonShown : false       // ズームボタンを非表示\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_2.html"
},

{
title: "1-3.コントローラー設定（ズームスライダー）",
sum: "<p>ズームスライダーを表示するコードを確認することができます。</p>",
detail: "\
本サンプルでは、地図初期表示時にズームスライダーを表示し、ズームボタンは非表示にしています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-3.コントローラー設定（ズームスライダー）】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 16,\n\
        scaleSliderShown : true,   // スケールスライダーを表示\n\
        zoomButtonShown : false    // ズームボタンを非表示\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_3.html"
},

{
title: "1-4.コントローラー設定（ズームボタン）",
sum: "<p>ズームボタンの設定を変更するコードを確認することができます。</p>",
detail: "\
本サンプルでは、ズームボタン表示位置、ズームボタン色、ズームボタン不透明度を変更しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-4.コントローラー設定（ズームボタン）】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 16,\n\
        zoomButtonShown : true,                    // ズームボタン表示のON / OFF設定\n\
        zoomButtonColor : '#c9171e',               // ズームボタン色\n\
        zoomButtonTextColor : '#ffffff',           // ズームボタン文字色\n\
        zoomButtonOffset : {'x': 625, 'y': 5},     // ズームボタンの表示位置\n\
        zoomButtonOpacity : 1                      // ズームボタンの不透明度\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_4.html"
},

{
title: "1-5.コントローラー設定（距離スケーラー）",
sum: "<p>距離スケーラーの設定を変更するコードを確認することができます。</p>",
detail: "\
本サンプルでは、地図初期表示時に距離スケーラーの表示単位を「mi/ft (マイル/フィート) 」に変更しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-5.コントローラー設定（距離スケーラー）】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if (authStatus != 'success') {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition: new Mfapi.Util.LonLat(139.70030321482975, 35.68955994193983),\n\
        mapScale: 13,\n\
        zoomButtonShown : false,\n\
        scalerShown : true,                          // スケーラー表示のON / OFF設定\n\
        scalerType : Mfapi.Const.ScalerType.MI_FT,    // スケーラータイプに「mi/ft (マイル/フィート) 」表記を指定\n\
        scalerOffset : new Mfapi.Util.ScreenPoint(20, 5),\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map', options);\n\
    }\n\
  </script>\n\
</head>\n\
\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
\n\
</html>\n\
",
url: "./src/MfapiSample1_5.html"
},

{
title: "1-6.コントローラー設定（カスタムボタン）",
sum: "<p>地図上にカスタムボタンを設定したコードを確認することができます。</p>",
detail: "\
本サンプルでは、「中心に移動」ボタンを押すことで、固定の緯度経度に地図の中心が移動します。<br>\
「中心に移動」ボタンは、地図のDIVタグにBUTTONタグを追加することで実現しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-6.コントローラー設定（カスタムボタン）】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
\n\
    .mycustombtn {\n\
      font-size : 10pt;\n\
      font-family : 'sans-serif';\n\
      font-weight : normal;\n\
      border-radius: 2px;\n\
      display : \"block\";\n\
      margin : 1px;\n\
      padding: 4px;\n\
      text-decoration: none;\n\
      text-align: center;\n\
      line-height: 1.2em;\n\
      border : none;\n\
      background-color: royalblue;\n\
      color: white;\n\
      opacity : 0.8;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 15\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### カスタムボタン設定 ###\n\
\n\
      // 地図DIVの要素を取得します。\n\
      var eleMap = document.getElementById('sample_map');\n\
\n\
      // 「中心に移動」カスタムボタンを作成します。\n\
      var centerBtn = document.createElement('button');\n\
      centerBtn.innerHTML = '中心に移動';\n\
      centerBtn.id = 'center_map';\n\
      centerBtn.className = 'mycustombtn';\n\
      // 「中心に移動」ボタンをクリックした時に設定した座標を地図の中心座標に設定します。\n\
      centerBtn.addEventListener('click', function() {\n\
        Mfapi.Map.setCenterPosition(options.centerPosition);\n\
      });\n\
\n\
      // カスタムボタンを表示するカスタムコントーラーを作成します。\n\
      var customCtrl = document.createElement('div');\n\
      customCtrl.className = 'mycustomctrl';\n\
\n\
      // カスタムボタンをカスタムコントローラーに設定します。\n\
      customCtrl.appendChild(centerBtn);\n\
\n\
      // 地図DIVにカスタムコントローラーを設定します。\n\
      eleMap.appendChild(customCtrl);\n\
\n\
      // カスタムコントローラーの表示位置を設定します。\n\
      customCtrl.style.position = \"absolute\";\n\
      customCtrl.style.top = '10px';\n\
      customCtrl.style.left = Math.round(eleMap.getBoundingClientRect().width / 2 - customCtrl.getBoundingClientRect().width / 2)+'px';\n\
\n\
    }\n\
  </script>\n\
</head>\n\
\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
\n\
</html>\n\
",
url: "./src/MfapiSample1_6.html"
},

{
title: "1-7.コントローラー設定（カスタムボタン複数個）",
sum: "<p>地図上にカスタムボタンを設定したコードを確認することができます。</p>",
detail: "\
本サンプルでは、「中心を設定」ボタンを押すことで地図の中心座標を記憶します。「中心に移動」ボタンを押すことで記憶した座標に地図の中心が移動します。\
上記の２つのボタンは作成したDIVタグに追加し、地図のDIVタグに作成されたDIVタグを追加することで実現しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-7.コントローラー設定（カスタムボタン複数個）】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
    .mycustombtn {\n\
      font-size : 10pt;\n\
      font-family : 'sans-serif';\n\
      font-weight : normal;\n\
      border-radius: 2px;\n\
      display : \"block\";\n\
      margin : 1px;\n\
      padding: 4px;\n\
      text-decoration: none;\n\
      text-align: center;\n\
      line-height: 1.2em;\n\
      border : none;\n\
      background-color: royalblue;\n\
      color: white;\n\
      opacity : 0.8;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.70030321482975,35.68955994193983),\n\
        mapScale : 15\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### カスタムボタン設定 ###\n\
\n\
      // 地図DIVを取得します。\n\
      var eleMap = document.getElementById('sample_map');\n\
\n\
      // カスタムボタンを表示するカスタムコントーラーを作成します。\n\
      var customCtrl = document.createElement('div');\n\
      customCtrl.className = 'mycustomctrl';\n\
\n\
      // 地図中心座標を取得します。\n\
      var centerPosition = options.centerPosition;\n\
\n\
      // 「中心に移動」カスタムボタンを作成します。\n\
      var button = document.createElement('button');\n\
      button.innerHTML = '中心に移動';\n\
      button.id = 'center_map';\n\
      button.className = 'mycustombtn';\n\
      // 「中心に移動」ボタンをクリックした時に設定した座標を地図の中心座標に設定します。\n\
      button.addEventListener('click', function() {\n\
        Mfapi.Map.setCenterPosition(centerPosition);\n\
      });\n\
\n\
      // 「中心に移動」カスタムボタンをカスタムコントローラーに設定します。\n\
      customCtrl.appendChild(button);\n\
\n\
      // 「中心を設定」カスタムボタン作成します。\n\
      var button = document.createElement('button');\n\
      button.innerHTML = '中心を設定';\n\
      button.id = 'set_center';\n\
      button.className = 'mycustombtn';\n\
      // 「中心を設定」ボタンをクリックした時に地図の中心座標を保持します。\n\
      button.addEventListener('click', function() {\n\
        centerPosition = Mfapi.Map.getCenterPosition();\n\
      });\n\
\n\
      // 「中心を設定」カスタムボタンをカスタムコントローラーに設定します。\n\
      customCtrl.appendChild(button);\n\
\n\
      // 地図DIVにカスタムコントローラーを設定します。\n\
      eleMap.appendChild(customCtrl);\n\
\n\
      // カスタムボタンのスタイルを設定します。\n\
      customCtrl.style.position = \"absolute\";\n\
      customCtrl.style.top = '10px';\n\
      customCtrl.style.left = Math.round(eleMap.getBoundingClientRect().width / 2 - customCtrl.getBoundingClientRect().width / 2) + 'px';\n\
    }\n\
  </script>\n\
</head>\n\
\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
\n\
</html>\n\
",
url: "./src/MfapiSample1_7.html"
},

{
title: "1-8.地図操作",
sum: "<p>地図操作に関する各種コードが確認できます。</p>",
detail: "\
本サンプルでは、地図状態変化時に発行されるイベントを受け取って、中心緯度経度およびスケールを表示します。\
また、マウスやタップによる地図操作の許可・禁止制御の方法や、カーソルキーによる地図移動の操作を\
有効にする方法も、合わせて本サンプルにて確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-8.地図操作】</title>\n\
  <!--地図DIVのスタイル：\n\
    本サンプルではフォーカスが当たったときに枠線が出ないように、outlineをnoneとしています。-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 480px;\n\
      height: 280px;\n\
      margin: 5px;\n\
      padding: 0px;\n\
      outline: none;\n\
    }\n\
  </style>\n\
  <!--情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #info {\n\
      float: left;\n\
      margin: 2px;\n\
      padding: 2px;\n\
      background-color:#eeeeee;\n\
    }\n\
    .value1 {\n\
      width: 130px;\n\
    }\n\
    .value2 {\n\
      width: 36px;\n\
    }\n\
    #center_image {\n\
      width: 34px;\n\
      height: 30px;\n\
    }\n\
    #center_div {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 233px;\n\
      top: 135px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      // 地図操作の許可・禁止設定をtrueに設定します。指定なしの場合は、trueとなります。\n\
      // falseを指定した場合は、地図の操作が無効となります。\n\
      var options = {\n\
        mapOperationEnable: true,\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 12\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地図中心緯度経度変更時の処理 ###\n\
      function map_position_event(position) {\n\
        // 情報表示：中心緯度経度を右欄に表示します。\n\
        document.getElementById('lon').value = position.lon;\n\
        document.getElementById('lat').value = position.lat;\n\
      }\n\
\n\
      //### 地図スケール変更時の処理 ###\n\
      function map_scale_event(scale) {\n\
        // 情報表示：スケールを右欄に表示します。\n\
        document.getElementById('scale').value = scale;\n\
      }\n\
\n\
      //### 地図状態変更イベントのコールバック関数を設定 ###\n\
      Mfapi.Events.onChangedMapCenter = map_position_event;\n\
      Mfapi.Events.onChangedMapScale = map_scale_event;\n\
\n\
      //### 情報表示：初期の中心緯度経度、スケール、フォーカスを代入 ###\n\
      var scale = Mfapi.Map.getMapScale();\n\
      var position = Mfapi.Map.getCenterPosition();\n\
      document.getElementById('scale').value = scale;\n\
      document.getElementById('lon').value = position.lon;\n\
      document.getElementById('lat').value = position.lat;\n\
      document.getElementById('key-ctrl').value = 'off';\n\
    }\n\
    //### フォーカスの状態表示(on/off) ###\n\
    function onMapFocus() {\n\
      // 地図のfocusイベント発生時、右欄を更新します。\n\
      document.getElementById('key-ctrl').value = 'on';\n\
    }\n\
    function onMapBlur() {\n\
      // 地図のblurイベント発生時、右欄を更新します。\n\
      document.getElementById('key-ctrl').value = 'off';\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--\n\
      地図DIVタグ：地図画面にフォーカスがあたるようにtabindexを追記しています。\n\
      フォーカスされたイベント「focus」、「focusin」と\n\
      フォーカスが外れたイベント「blur」、「focusout」の\n\
      両方を指定しているためブラウザによっては２回イベントが発生します。\n\
  -->\n\
  <div id='sample_map' tabindex='1' onfocus='onMapFocus();' onfocusin='onMapFocus();' onblur='onMapBlur();' onfocusout='onMapBlur();'></div>\n\
  <!--情報表示DIVタグ-->\n\
  <div id='info'>\n\
    <p>経度(longitude)：<br>\n\
      <input type='text' id='lon' class='value1' tabindex='2' readonly></input></p>\n\
    <p>緯度(latitude)：<br>\n\
      <input type='text' id='lat' class='value1' tabindex='3' readonly></input></p>\n\
    <p>スケール：\n\
      <input type='text' id='scale' class='value2' tabindex='4' readonly></input></p>\n\
    <p>フォーカス：\n\
      <input type='text' id='key-ctrl' class='value2' tabindex='5' readonly></input></p>\n\
  </div>\n\
  <!--地図中心を示すパーツのDIVタグ-->\n\
  <div id='center_div'><img id='center_image' src='img/center.png'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_8.html"
},

{
title: "1-9.地図描画設定",
sum: "<p>地図のデザインやタイルサイズなどの設定方法の確認ができます。</p>",
detail: "\
本サンプルでは、地図のデザイン、ロゴ、言語(外国語地図は追加オプション)、タイルサイズの\
パラメータの設定方法が確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-9.地図描画設定】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      // 地図表示スタイル、地図ロゴマークアイコン表示設定、地図注記表示言語、タイルサイズを指定します。\n\
      var options = {\n\
        mapStyle: 'std_sp',  // 標準デザイン、注記サイズ大\n\
        logoSettings: 'on',  // ロゴマーク表示\n\
        language: 'ja',      // 日本語\n\
        tileSize: 512,       // 512pxのタイル画像を表示 (標準は256px)\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 12\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_9.html"
},

{
title: "1-10.地図2画面表示",
sum: "<p>iframeを利用して地図を二つ表示し、それぞれの地図を操作するコードが確認できます。</p>",
detail: "\
本サンプルでは、iframeを利用して地図を二つ表示し、それぞれの地図に対して\
中心地点設定、縮尺設定、マーカー追加、マーカー削除を行うコードが確認できます。<br>\
ただし地図ドラッグ移動中は連動せず、\
地図移動完了イベントまたは縮尺変更完了イベント発生時にもう片方の地図へ\
イベントを発生させる動作となります。<br>\
※ Chrome等、一部ブラウザではローカルPC上で正常動作しない場合があります。<br>\
　&nbsp;その際は別のブラウザでご確認いただくか、サーバ上にHTMLを配置してください。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【1-10.地図2画面表示】</title>\n\
  <!--iframeのスタイル-->\n\
  <style type=\"text/css\">\n\
    #map_ja {\n\
        margin : 0;\n\
        padding : 0;\n\
        width: 38%;\n\
        height: 278px;\n\
        float : left;\n\
        border-top : 2px solid #888;\n\
        border-bottom : 2px solid #888;\n\
        border-left : 2px solid #888;\n\
        border-right : 1px solid #888;\n\
    }\n\
    #map_en {\n\
        margin : 0;\n\
        padding : 0;\n\
        width: 38%;\n\
        height: 278px;\n\
        float : left;\n\
        border-top : 2px solid #888;\n\
        border-bottom : 2px solid #888;\n\
        border-left : 1px solid #888;\n\
        border-right : 2px solid #888;\n\
    }\n\
    #map_ctrl {\n\
        margin: 0 2px;\n\
        padding: 0;\n\
        width: 22%;\n\
        height: 282px;\n\
        float : left;\n\
        border : none;\n\
        background-color:#eee;\n\
    }\n\
    p {\n\
        font-size:12px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript'>\n\
\n\
    // 本サンプルは、iframeを左右2つ作成し、左側のiframeに日本語地図を表示させたHTML、\n\
    // 右側のiframeに英語地図を表示させたHTMLを指定しています。\n\
    // 親のHTMLから各iframe内のjs(Mfapi)を直接操作しています。\n\
    // 親と子(各iframe内のHTML)は、同一ドメイン上に配置する必要があります。\n\
    // 同一ドメイン上にない場合は、地図の表示やマウス操作は可能ですが、\n\
    // js(Mfapi)を呼び出すことはできません。\n\
\n\
    // 操作識別フラグ（操作中のiframeを判別するためのフラグ）を定義します。\n\
    var changeCenterFlg = false; // 地図座標変更\n\
    var changeScaleFlg = false;  // スケール変更\n\
\n\
    var counter = 0;      // フィーチャー識別子が重複しないためのカウンター\n\
\n\
    //### マーカー追加処理 ###\n\
    // 中心にマーカー設置ボタンを押下した際に呼ばれます。\n\
    function setMarker() {\n\
\n\
        //### 日本語地図にマーカー設置 ###\n\
\n\
        // 日本語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi1 = document.getElementById(\"map_ja\").contentWindow.Mfapi;\n\
\n\
        // 日本語地図にレイヤーが存在しない場合は追加します。\n\
        if (!Mfapi1.Map.MarkerLayer['layer']) {\n\
            Mfapi1.Map.addMarkerLayer(\"layer\");\n\
        }\n\
\n\
        // 日本語地図のマーカーの作成条件を設定します。\n\
        var map1markerOpt = {\n\
          position : Mfapi1.Map.getCenterPosition() // 地図の中心座標\n\
        };\n\
\n\
        // 日本語地図のマーカーレイヤーにマーカーを登録します。\n\
        Mfapi1.Map.MarkerLayer['layer'].addMarker(map1markerOpt, \"map_ja_\"+counter);\n\
\n\
\n\
        //### 英語地図にマーカー設置 ###\n\
\n\
        // 英語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi2 = document.getElementById(\"map_en\").contentWindow.Mfapi;\n\
\n\
        // 英語地図にレイヤーが存在しない場合は追加します。\n\
        if (!Mfapi2.Map.MarkerLayer['layer']) {\n\
            Mfapi2.Map.addMarkerLayer(\"layer\");\n\
        }\n\
\n\
        // 英語地図のマーカーの作成条件を設定します。\n\
        var map2markerOpt = {\n\
          position : Mfapi2.Map.getCenterPosition() // 地図の中心座標\n\
        };\n\
\n\
        // 英語地図のマーカーレイヤーにマーカーを登録します。\n\
        Mfapi2.Map.MarkerLayer['layer'].addMarker(map2markerOpt, \"map_en_\"+counter);\n\
\n\
        counter++;\n\
    }\n\
\n\
    //### マーカー表示リセット処理###\n\
    // マーカーリセットボタンを押した際に呼ばれます。\n\
    function resetMarker() {\n\
\n\
        //### 日本語地図のマーカーリセット ###\n\
\n\
        // 日本語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi1 = document.getElementById(\"map_ja\").contentWindow.Mfapi;\n\
\n\
        if (Mfapi1.Map.MarkerLayer['layer']) {\n\
            // 日本語地図からマーカーを表示しているレイヤーを削除します。\n\
            Mfapi1.Map.MarkerLayer['layer'].removeAll();\n\
        }\n\
\n\
        //### 英語地図のマーカーリセット ###\n\
\n\
        // 英語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi2 = document.getElementById(\"map_en\").contentWindow.Mfapi;\n\
\n\
        if (Mfapi2.Map.MarkerLayer['layer']) {\n\
            // 英語地図からマーカーを表示しているレイヤーを削除します。\n\
            Mfapi2.Map.MarkerLayer['layer'].removeAll();\n\
        }\n\
    }\n\
\n\
    //### 地図連動処理###\n\
    // 「地図を連動させる」チェックボックスをON/OFFした際に呼ばれます。\n\
    function mapLink(checked) {\n\
\n\
        //### iframe間での地図連動 ###\n\
\n\
        // 日本語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi1 = document.getElementById(\"map_ja\").contentWindow.Mfapi;\n\
\n\
        // 英語地図のiframeのIDを指定し、Mfapi情報を取得します。\n\
        var Mfapi2 = document.getElementById(\"map_en\").contentWindow.Mfapi;\n\
\n\
        // 地図座標変更通知イベントを初期化します。\n\
        Mfapi1.Events.onChangedMapCenter = null;\n\
        Mfapi2.Events.onChangedMapCenter = null;\n\
\n\
        // スケール変更通知イベントを初期化します。\n\
        Mfapi1.Events.onChangedMapScale = null;\n\
        Mfapi2.Events.onChangedMapScale = null;\n\
\n\
        if (checked) {\n\
            //「地図を連動させる」チェックボックスがONの場合、iframe間で地図を連動させます。\n\
\n\
            // 日本語地図の緯度経度とスケールを英語地図に設定します。\n\
            Mfapi2.Map.setCenterPosition(Mfapi1.Map.getCenterPosition(), Mfapi1.Map.getMapScale());\n\
\n\
            // 日本語地図の地図座標変更通知イベントのコールバック関数を設定します。\n\
            Mfapi1.Events.onChangedMapCenter = function(mapPosition) {\n\
\n\
                if (changeCenterFlg == false) {\n\
                    // 操作識別フラグをtrueに設定します。\n\
                    // 英語地図を操作した場合は以下の処理は呼ばれません。\n\
                    changeCenterFlg = true;\n\
\n\
                    // 日本語地図を操作中に以下の処理を行います。\n\
                    if (mapPosition) {\n\
                        // 英語地図の中心座標に日本語地図の中心座標を設定します。\n\
                        Mfapi2.Map.setCenterPosition(mapPosition);\n\
                    }\n\
\n\
                    // 操作識別フラグを初期化します。\n\
                    changeCenterFlg = false;\n\
                }\n\
            };\n\
\n\
            // 英語地図の地図座標変更通知イベントのコールバック関数を設定します。\n\
            Mfapi2.Events.onChangedMapCenter = function(mapPosition) {\n\
\n\
                if (changeCenterFlg == false) {\n\
                    // 操作識別フラグをtrueに設定します。\n\
                    // 日本語地図を操作した場合は以下の処理は呼ばれません。\n\
                    iframeIdMapMove = true;\n\
\n\
                    // 英語地図を操作中に以下の処理を行います。\n\
                    if (mapPosition) {\n\
                        // 日本語地図の中心座標に英語地図の中心座標を設定します。\n\
                        Mfapi1.Map.setCenterPosition(mapPosition);\n\
                    }\n\
\n\
                    // 操作識別フラグを初期化します。\n\
                    baseMoveMapFlg = false;\n\
                }\n\
            };\n\
\n\
            // 日本語地図の地図スケール変更イベントのコールバック関数を設定します。\n\
            Mfapi1.Events.onChangedMapScale = function(scale) {\n\
\n\
                if (changeScaleFlg == false) {\n\
                    // 操作識別フラグをtrueに設定します。\n\
                    // 英語地図を操作した場合は以下の処理は呼ばれません。\n\
                    changeScaleFlg = true;\n\
\n\
                    // 日本語地図を操作中に以下の処理を行います。\n\
                    if (scale) {\n\
                        // 英語地図の中心座標に日本語地図のスケールを設定します。\n\
                        Mfapi2.Map.setMapScale(scale);\n\
                    }\n\
\n\
                    // 操作識別フラグを初期化します。\n\
                    changeScaleFlg = false;\n\
                }\n\
            };\n\
\n\
            // 英語地図のスケール変更通知イベントのコールバック関数を設定します。\n\
            Mfapi2.Events.onChangedMapScale = function(scale) {\n\
\n\
                if (changeScaleFlg == false) {\n\
                    // 操作識別フラグをtrueに設定します。\n\
                    // 日本語地図を操作した場合は以下の処理は呼ばれません。\n\
                    changeScaleFlg = true;\n\
\n\
                    // 英語地図を操作中に以下の処理を行います。\n\
                    if (scale) {\n\
                        // 日本語地図の中心座標に英語地図のスケールを設定します。\n\
                        Mfapi1.Map.setMapScale(scale);\n\
                    }\n\
\n\
                    // 操作識別フラグを初期化します。\n\
                    changeScaleFlg = false;\n\
                }\n\
            };\n\
        }\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
    <!-- 地図を表示するHTMLファイルを用意し、iframeを利用して表示します -->\n\
    <!-- iframeのIDが異なれば、同一のHTMLファイルを指定することも可能です -->\n\
    <!-- 日本語を表示する地図 -->\n\
    <iframe src=\"MfapiSample1_10_ja.html\" id=\"map_ja\"></iframe>\n\
    <!-- 英語を表示する地図 -->\n\
    <iframe src=\"MfapiSample1_10_en.html\" id=\"map_en\"></iframe>\n\
    <div id=\"map_ctrl\">\n\
        <p><input type=\"checkbox\" id=\"linkage\" onchange=\"mapLink(this.checked)\">地図を連動させる</p>\n\
        <input type=\"button\" id=\"setmarker\" onclick=\"setMarker()\" value=\"中心にマーカー設置\">\n\
        <input type=\"button\" id=\"resetmarker\" onclick=\"resetMarker()\" value=\"マーカーリセット\">\n\
    </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_10.html"
},

{
title: "1-11.指定範囲が収まる地図縮尺取得・変更",
sum: "<p>指定範囲に収まる縮尺を取得するコードが確認できます。</p>",
detail: "\
本サンプルでは、地図上に表示されているマーカーが収まる縮尺を取得し、地図の縮尺を再設定しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>Mfapiサンプル【1-11.指定範囲が収まる地図縮尺取得・変更】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 地点リスト ###\n\
    // 表示座標、ポップアップ表示内容、ユーザー指定イメージパス、イメージサイズ、表示位置オフセットを設定します。\n\
    var pointData = [\n\
      { id: 'tokyo',\n\
        name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
        text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
        imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36 },\n\
      { id: 'shinbashi',\n\
        name: '新橋営業所', lon: 139.75821002138233, lat: 35.66657238126213,\n\
        text: '<div><b>新橋営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 10:00-19:00</div>',\n\
        markerType: 1 },\n\
      { id: 'toyosu',\n\
        name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
        text: '<div><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
        imageUrl:'./img/b.gif', width:48, height:48, x:-24, y:-30  },\n\
      { id: 'ariake',\n\
        name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
        text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
        markerType: 1 },\n\
      { id: 'shinagawa',\n\
        name: '品川営業所', lon: 139.73875357500563, lat: 35.62850770123775,\n\
        text: '<div><b>品川営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-19:00</div>',\n\
        markerType: 1 },\n\
      { id: 'shibuya',\n\
        name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
        text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
        markerType: 1 },\n\
      { id: 'shinjuku',\n\
        name: '新宿営業所', lon: 139.70090283767686, lat: 35.68851826791775,\n\
        text: '<div><b>新宿営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 ２４時間営業</div>',\n\
        markerType: 6 }\n\
    ];\n\
\n\
    //### 認証処理と地図API、経路APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      Mfapi.routeHost = 'api-route-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var mapOptions = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',mapOptions);\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### 指定範囲マーカー取得処理 ###\n\
      // 地点リストからマーカーとポップアップ生成し、緯度経度範囲を計算します。\n\
      var lon = [];\n\
      var lat = [];\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        //### ポップアップ作成処理 ###\n\
        var popUpId = 'popup_'+pointData[i].id; // ポップアップのフィーチャー識別子\n\
        // ポップアップの作成条件を設定します。\n\
        var popUpOptions = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          contentHtml : pointData[i].text,\n\
          visible : false\n\
        };\n\
        // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに登録します。\n\
        Mfapi.Features.createPopUp(popUpOptions, popUpId);\n\
\n\
        //### マーカー作成処理 ###\n\
\n\
        var markerId = 'marker_'+pointData[i].id; // マーカーのフィーチャー識別子\n\
        // マーカーの作成条件を設定します。\n\
        var markerOptions = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : popUpId  // 紐付けを行うポップアップのフィーチャー識別子を指定します。\n\
        };\n\
        if( pointData[i].imageUrl !== undefined ) {\n\
          // 地点リストにユーザ指定イメージパスが存在する場合、\n\
          // ユーザー指定イメージパス、イメージサイズ、表示位置、不透明度、回転角度を指定します。\n\
          markerOptions.imageUrl = pointData[i].imageUrl;\n\
          markerOptions.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
          markerOptions.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
          markerOptions.imageOpacity = 0.8;\n\
        } else {\n\
          // 作成条件にマーカータイプを指定します。\n\
          markerOptions.markerType = pointData[i].markerType;\n\
        }\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOptions, markerId);\n\
\n\
        // 各地点の緯度経度を設定します。\n\
        lon.push(pointData[i].lon);\n\
        lat.push(pointData[i].lat);\n\
\n\
      }\n\
\n\
      // 北東、南西の緯度経度を取得します。\n\
      var max = {'lon':Math.max.apply(null, lon), 'lat':Math.max.apply(null, lat)};\n\
      var min = {'lon':Math.min.apply(null, lon), 'lat':Math.min.apply(null, lat)};\n\
\n\
      // 地点が全て収まる地図縮尺を取得します。\n\
      var scale = Mfapi.Map.getScaleByRect(max.lat, max.lon, min.lat, min.lon);\n\
\n\
      // 地図の中心緯度経度とスケールを設定します。\n\
      Mfapi.Map.setCenterPosition({'lon':(max.lon+min.lon)/2,'lat':(max.lat+min.lat)/2},scale);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample1_11.html"
},

{
title: "2-1.マーカー作成",
sum: "<p>マーカー表示の基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、マーカーを地図上に表示しています。<br>\
地図を作成後、マーカーを表示するためのマーカーレイヤーをaddMarkerLayerメソッドで地図に追加します。\
次に、マーカーレイヤーのaddMarkerメソッドを実行します。このメソッドにより、マーカー生成とマーカーレイヤーへの登録が行われ、地図上にマーカーが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-1.マーカー作成】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
    .markerTitleContainer {\n\
      border : 1px solid darkgray;\n\
      border-radius: 2px;\n\
      background-color: white;\n\
      color: black;\n\
      padding: 2px;\n\
      box-shadow: 5px 2px 1px 1px rgba(0, 0, 0, 0.3);\n\
    }\n\
    .markerTitleLabel {\n\
      font-size : 9pt;\n\
      font-family : 'sans-serif';\n\
      font-weight : normal;\n\
      user-select : none;\n\
      cursor : default;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### マーカー作成処理 ###\n\
      var markerId = 'marker';   // マーカーのフィーチャー識別子\n\
      // マーカーの作成条件を設定します。\n\
      var markerOpt = {\n\
        position :  new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),  // 東京都庁\n\
      };\n\
\n\
      // マーカーレイヤーにマーカーを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_1.html"
},

{
title: "2-2.マーカー作成（任意のアイコン画像）",
sum: "<p>ユーザ指定のマーカーを表示するコードが確認できます。</p>",
detail: "\
本サンプルは、ユーザー指定のマーカー（画像）を地図上に表示することができます。\
マーカーレイヤーに追加する際に、マーカーの作成条件のimageURLに画像のURLを指定することで、地図上にユーザ指定のマーカーが表示されます。",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-2.マーカー作成（任意のアイコン画像）】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(138.88763711,36.2550671),\n\
        mapScale : 16\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### マーカー作成処理 ###\n\
\n\
      var markerId = \"marker\";    // マーカーのフィーチャー識別子\n\
      // マーカーの作成条件を設定します。\n\
      var markerOpt = {\n\
        imageUrl: \"img/b.gif\",               // ユーザー指定イメージパス\n\
        position :  options.centerPosition,  // 地図の中心座標\n\
      };\n\
      \n\
      // マーカーレイヤーにマーカーを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_2.html"
},

{
title: "2-3.マーカー非表示・削除",
sum: "<p>マーカーの表示、非表示、削除を行うコードが確認できます。</p>",
detail: "\
本サンプルは、マーカーの表示、非表示、削除ができます。地図上でクリックした地点にマーカーを追加しています。\
「マーカー非表示」ボタンでマーカーを非表示にします。「マーカー表示」ボタンでマーカーを表示します。「マーカー削除」ボタンで地図上からマーカーを削除します。\
地図上でクリックした地点にマーカーを作成しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-3.マーカー非表示・削除】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
      position: relative;\n\
    }\n\
    #floating-panel {\n\
       width: 120px;\n\
       height: 90px;\n\
       position: absolute;\n\
       right: 5px;\n\
       top: -170px;\n\
       bottom: 0;\n\
       margin: auto;\n\
       z-index: 5;\n\
       background-color: #fff;\n\
       padding: 5px;\n\
       border: 1px solid #999;\n\
       text-align: center;\n\
       font-family: 'Roboto','sans-serif';\n\
       line-height: 30px;\n\
     }\n\
     #floating-panel input {\n\
       width: 120px;\n\
     }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 地図をクリックした場合に処理が呼ばれます。\n\
      Mfapi.Events.onMapClick = function (screenPosition, mapPosition) {\n\
        // マーカーを追加します。\n\
        addMarker(mapPosition);\n\
      };\n\
      // 初期表示時にマーカーを追加します。\n\
      addMarker(options.centerPosition);\n\
    }\n\
\n\
    //### マーカー追加処理 ###\n\
    function addMarker(location) {\n\
      // マーカーが存在する場合は、件数を取得します。\n\
      var count = Mfapi.Features.Marker ? Object.keys(Mfapi.Features.Marker).length : 0;\n\
\n\
      //### マーカー作成処理 ###\n\
\n\
      // マーカーのフィーチャー識別子：重複しないように件数を指定しています。\n\
      var markerId = \"marker_\"+count;\n\
      // マーカーの作成条件を設定します。\n\
      var markerOpt = {\n\
        position :  location,                 // クリックした地点の緯度経度\n\
      };\n\
\n\
      // マーカーレイヤーにマーカーを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
    }\n\
\n\
    //### マーカー表示・非表示設定 ###\n\
    function setMapOnAll(isVisible) {\n\
      // 全てのマーカーを参照し、マーカーの表示 ON-OFFを更新します。\n\
      for (var key in Mfapi.Features.Marker) {\n\
        Mfapi.Features.Marker[key].setOptions({visible: isVisible});\n\
      }\n\
    }\n\
\n\
    //### マーカー非表示 ###\n\
    function clearMarkers() {\n\
      setMapOnAll(false);\n\
    }\n\
\n\
    //### マーカー表示 ###\n\
    function showMarkers() {\n\
      setMapOnAll(true);\n\
    }\n\
\n\
    //### マーカー削除 ###\n\
    function deleteMarkers() {\n\
      // マーカーを非表示にします。\n\
      clearMarkers();\n\
      // 全てのマーカーを参照し、マーカーを削除します。\n\
      for (var key in Mfapi.Features.Marker) {\n\
        Mfapi.Features.remove(key);\n\
      }\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'>\n\
    <div id=\"floating-panel\">\n\
      <input id=\"clearMarkers\" onclick=\"clearMarkers();\" type=button value=\"マーカー非表示\"><br>\n\
      <input id=\"showMarkers\" onclick=\"showMarkers();\" type=button value=\"マーカー表示\"><br>\n\
      <input id=\"deleteMarkers\" onclick=\"deleteMarkers();\" type=button value=\"マーカー削除\">\n\
    </div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_3.html"
},

{
title: "2-4.マーカー＋ポップアップ表示",
sum: "<p>ポップアップを表示するコードが確認できます。</p>",
detail: "\
本サンプルは、マーカーをクリックすることで、ポップアップを表示することができます。<br>\
ポップアップは、マーカーに紐付ける必要があるため、ポップアップ作成後、マーカーの作成条件のpopUpKeyにポップアップのフィーチャー識別子を指定しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-4.マーカー・ポップアップ表示】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      // ポップアップ一括非表示モードをポップアップ以外の場所をクリックした際にポップアップを非表示にする設定をします。\n\
      // ポップアップの単一表示モードを表示したポップアップ以外を非表示にする設定をします。\n\
      // ポップアップの表示タイミングをマーカーのクリックまたはタップイベント時にポップアップを表示する設定をします。\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 12,\n\
        hidePopUpOnMapClick : true,                                     // ポップアップ一括非表示モード\n\
        singlePopUp : true,                                             // ポップアップの単一表示モード\n\
        popUpDisplayMode : Mfapi.Const.PopUpDisplayMode.MODE_TOUCH_END  // ポップアップの表示タイミング\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地点リスト ###\n\
      var pointData = [\n\
        { name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
          text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36 },\n\
      ];\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### マーカー＋ポップアップ作成処理 ###\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        //### ポップアップ作成処理 ###\n\
\n\
        // ポップアップのフィーチャ識別子を重複させないため、インデックスを指定しています。\n\
        var popUpId = 'popup_'+i;\n\
        // ポップアップ作成条件に初期表示は表示OFFに指定しています。\n\
        var popUpOpt = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),  // ポップアップサイズ(指定しない場合はcontentHtmlの内容により大きさが決まります)\n\
          contentHtml : pointData[i].text,           // 表示コンテンツ\n\
          visible : false                            // 表示ON/OFF\n\
        };\n\
\n\
        // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに追加します。\n\
        Mfapi.Features.createPopUp(popUpOpt, popUpId);\n\
\n\
        //### マーカー作成処理 ###\n\
\n\
        // マーカーのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var markerId = 'marker_'+i;\n\
        // マーカー作成条件にポップアップのフィーチャー識別子を指定します。\n\
        var markerOpt = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : popUpId\n\
        };\n\
        // 地点リストに応じてマーカーの作成条件に設定値を追加します。\n\
        markerOpt.imageUrl = pointData[i].imageUrl;\n\
        markerOpt.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
        markerOpt.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
        markerOpt.imageOpacity = 0.8;\n\
\n\
        // マーカーレイヤーにマーカーを登録します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
      }\n\
\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_4.html"
},

{
title: "2-5.マーカー操作",
sum: "<p>マーカーオブジェクトを取得し、角度を変更するコードが確認できます。</p>",
detail: "\
本サンプルでは、マーカーを作成する際に角度を指定するパターンと作成後にオブジェクトを取得し角度を指定するパターンのコードが確認できます。<br>\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-5.マーカー操作】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地点リスト ###\n\
      var pointData = [\n\
        { name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
          text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/car.png', width:48, height:48, x:-24, y:-36, angle:20 },\n\
        { name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
          text: '<div><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/car.png', width:48, height:48, x:-24, y:-30 },\n\
        { name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
          text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
          imageUrl:'./img/car.png', width:48, height:48, x:-24, y:-30, angle:240 },\n\
        { name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
          text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
          imageUrl:'./img/car.png', width:48, height:48, x:-24, y:-36 },\n\
      ];\n\
\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーレイヤーを生成し、地図DIVに追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 地点リスト情報から、マーカーとポップアップを生成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        //### ポップアップ作成処理 ###\n\
\n\
        // ポップアップのフィーチャー識別子\n\
        // フィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var popUpId = 'popup_'+i;\n\
        // ポップアップ作成条件を生成します。\n\
        // 作成条件には、ポップアップの表示サイズと表示内容、初期表示時に非表示となるように指定しています。\n\
        var popUpOpt = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          contentHtml : pointData[i].text,\n\
          visible : false\n\
        };\n\
\n\
        // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに登録します。\n\
        Mfapi.Features.createPopUp(popUpOpt, popUpId);\n\
\n\
        //### マーカー作成処理 ###\n\
\n\
        // マーカーのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var markerId = 'marker_'+i;\n\
        // マーカー作成条件にポップアップのフィーチャー識別子を指定します。\n\
        var markerOpt = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : popUpId\n\
        };\n\
        // ユーザー指定イメージパス、イメージサイズ、表示位置、不透明度、回転角度を指定します。\n\
        markerOpt.imageUrl = pointData[i].imageUrl;\n\
        markerOpt.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
        markerOpt.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
        markerOpt.imageOpacity = 1;\n\
        if (pointData[i].angle) {\n\
          // 作成条件に角度を指定します。\n\
          markerOpt.angle = pointData[i].angle;\n\
        }\n\
\n\
        // マーカーレイヤーにマーカーを登録します。。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
      }\n\
\n\
      // マーカーのオブジェクトを取得し、角度を指定します。(マーカー生成後に変更しています)\n\
      var marker1 = Mfapi.Features.getObject('marker_1');\n\
      var addOpt1 = {\n\
          angle:315\n\
      }\n\
      marker1.setOptions(addOpt1);\n\
\n\
      var marker3 = Mfapi.Features.getObject('marker_3');\n\
      var addOpt3 = {\n\
          angle:150\n\
      }\n\
      marker3.setOptions(addOpt3)\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_5.html"
},

{
title: "2-6.地点リスト",
sum: "<p>地点リスト表示と地図との連携を行います。</p>",
detail: "<p>地点リスト表示と地図との連携を行います。</p>",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-6.地点リスト】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 460px;\n\
      height: 280px;\n\
      margin: 5px;\n\
      padding: 0px;\n\
    }\n\
  </style>\n\
  <!--地点リストDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #list {\n\
      float: left;\n\
      margin: 4px;\n\
      padding: 4px;\n\
      background-color:#eeeeee;\n\
    }\n\
    .item1 {\n\
      display: block;\n\
      floet: left;\n\
      width: 124px;\n\
      background-color: #aaaaaa;\n\
      padding: 4px;\n\
      margin: 4px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    var pointData;\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地点リスト ###\n\
      pointData = [\n\
        { name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
          text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36 },\n\
        { name: '新橋営業所', lon: 139.75821002138233, lat: 35.66657238126213,\n\
          text: '<div><b>新橋営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 10:00-19:00</div>',\n\
          markerType: 1 },\n\
        { name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
          text: '<div><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/b.gif', width:48, height:48, x:-24, y:-30  },\n\
        { name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
          text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
          markerType: 1 },\n\
        { name: '品川営業所', lon: 139.73875357500563, lat: 35.62850770123775,\n\
          text: '<div><b>品川営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-19:00</div>',\n\
          markerType: 1 },\n\
        { name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
          text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
          markerType: 1 },\n\
        { name: '新宿営業所', lon: 139.70090283767686, lat: 35.68851826791775,\n\
          text: '<div><b>新宿営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 ２４時間営業</div>',\n\
          markerType: 6 }\n\
      ];\n\
      //### マーカーレイヤー作成処理 ###\n\
      // マーカーとポップアップを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 地点リスト情報から、マーカーとポップアップを生成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
        //### ポップアップ作成処理 ###\n\
\n\
        // ポップアップのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var popUpId = 'popup_'+i;\n\
        // ポップアップの作成条件を設定します。\n\
        var popUpOpt = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          contentHtml : pointData[i].text,           // ポップアップのinnerHTML\n\
          visible : false                            // 表示ON/OFF。初期表示は表示OFFとなります。\n\
        };\n\
        // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに登録します。\n\
        Mfapi.Features.createPopUp(popUpOpt, popUpId);\n\
\n\
        //### マーカー作成処理 ###\n\
\n\
        // マーカーのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var markerId = 'marker_'+i;\n\
        // マーカーの作成条件を設定します。\n\
        var markerOpt = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : popUpId\n\
        };\n\
        if( pointData[i].imageUrl !== undefined ) {\n\
          markerOpt.imageUrl = pointData[i].imageUrl;\n\
          markerOpt.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
          markerOpt.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
          markerOpt.imageOpacity = 0.8;\n\
        } else {\n\
          markerOpt.markerType = pointData[i].markerType;\n\
        }\n\
        // マーカーレイヤーにマーカーを登録します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
\n\
        //### 地点リスト作成 ###\n\
        // 地点リストのラベルタグを生成し、クリック時に関数'selectItem'を呼ぶように設定します。\n\
        // ラベルのidは'label_n'とします。(nは通し番号0,1,2,..)\n\
        var text = document.createTextNode(pointData[i].name);\n\
        var label = document.createElement('label');\n\
        label.appendChild(text);\n\
        label.setAttribute('id', 'label_'+i);\n\
        label.setAttribute('class', 'item1');\n\
        label.setAttribute('onclick','selectItem(this.id)');\n\
        var divItem = document.createElement('div');\n\
        divItem.appendChild(label);\n\
        var divList = document.getElementById('list');\n\
        divList.appendChild(divItem);\n\
      }\n\
\n\
    }\n\
\n\
    var prevItemNumber = 0;\n\
\n\
    //### リスト選択時の処理 ###\n\
    function selectItem(id) {\n\
\n\
      // 選択済みの地点のラベル背景色を元に戻します。\n\
      document.getElementById('label_'+prevItemNumber).style.backgroundColor = '#aaaaaa';\n\
\n\
      // 選択済みの地点のマーカーに紐づくポップアップの表示をOFFにします。\n\
      Mfapi.Features.PopUp['popup_'+prevItemNumber].setVisible(false);\n\
\n\
      // 選択した地点のラベル背景色を変えます。\n\
      document.getElementById(id).style.backgroundColor = '#ff0000';\n\
\n\
      // 選択した地点の番号を取得します。\n\
      var itemNumber = parseInt(id.substr(6)); // 先頭６文字'label_'を除いた文字列を整数化\n\
\n\
      // 選択した地点のマーカーに紐づくポップアップの表示をONにします。\n\
      Mfapi.Features.PopUp['popup_'+itemNumber].setVisible(true);\n\
\n\
      // 選択した地点の緯度経度に地図を移動します。\n\
      var center = new Mfapi.Util.LonLat(pointData[itemNumber].lon, pointData[itemNumber].lat);\n\
      Mfapi.Map.setCenterPosition(center);\n\
\n\
      // 選択した地点の番号を保持します。\n\
      prevItemNumber = itemNumber;\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図を描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--地点リストDIVタグ-->\n\
  <div id='list'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_6.html"
},

{
title: "2-7.地図領域内のマーカー情報取得",
sum: "<p>指定した範囲のマーカーを取得するコードが確認できます。</p>",
detail: "\
本サンプルでは、指定した円の内側に存在するマーカーを距離順に取得し、右欄にマーカーのフィーチャー識別子を表示しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-7.地図領域内のマーカー情報取得】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 450px;\n\
      height: 280px;\n\
      margin: 5px;\n\
      padding: 0px;\n\
    }\n\
    #info {\n\
      float: left;\n\
      margin: 2px;\n\
      padding: 2px 1em 2px 0.5em;\n\
      background-color:#eeeeee;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      // ポップアップ一括非表示モード(hidePopUpOnMapClick)にtrueを設定します。\n\
      // ポップアップの単一表示モード(singlePopUp)にtrueを設定します。\n\
      // ポップアップの表示タイミング(popUpDisplayMode)に2を設定します。\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        mapScale : 11,\n\
        hidePopUpOnMapClick : true,\n\
        singlePopUp : true,\n\
        popUpDisplayMode : 2\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地点リスト ###\n\
      var pointData = [\n\
        { id: 'tokyo',\n\
          name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
          text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36 },\n\
        { id: 'shinbashi',\n\
          name: '新橋営業所', lon: 139.75821002138233, lat: 35.66657238126213,\n\
          text: '<div><b>新橋営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 10:00-19:00</div>',\n\
          markerType: 1 },\n\
        { id: 'toyosu',\n\
          name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
          text: '<div><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
          imageUrl:'./img/b.gif', width:48, height:48, x:-24, y:-30  },\n\
        { id:'ariake',\n\
          name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
          text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
          markerType: 1 },\n\
        { id: 'shinagawa',\n\
          name: '品川営業所', lon: 139.73875357500563, lat: 35.62850770123775,\n\
          text: '<div><b>品川営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-19:00</div>',\n\
          markerType: 1 },\n\
        { id: 'shibuya',\n\
          name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
          text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
          markerType: 1 },\n\
        { id:'shinjyuku',\n\
          name: '新宿営業所', lon: 139.70090283767686, lat: 35.68851826791775,\n\
          text: '<div><b>新宿営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 ２４時間営業</div>',\n\
          markerType: 6 }\n\
      ];\n\
\n\
      //### レイヤー追加 ###\n\
      // マーカーとポップアップを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
      // サークルを表示するためのジオメトリーレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### マーカー、ポップアップ作成処理 ###\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        //### ポップアップ作成処理 ###\n\
\n\
        // ポップアップのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var popUpId = 'popup_'+pointData[i].id;\n\
        // ポップアップ作成条件に初期表示は表示OFFに指定しています。\n\
        var popUpOpt = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          contentHtml : pointData[i].text,\n\
          visible : false\n\
        };\n\
\n\
        // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに登録します。\n\
        Mfapi.Features.createPopUp(popUpOpt, popUpId);\n\
\n\
        //### マーカー作成処理 ###\n\
\n\
        // マーカーのフィーチャー識別子を重複させないため、インデックスを指定しています。\n\
        var markerId = 'marker_'+pointData[i].id;\n\
        // マーカー作成条件にポップアップのフィーチャー識別子を指定します。\n\
        var markerOpt = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : popUpId\n\
        };\n\
        // 地点リストに応じてマーカーの作成条件に設定値を追加します。\n\
        if( pointData[i].imageUrl !== undefined ) {\n\
          // ユーザー指定イメージパス、イメージサイズ、表示位置、不透明度を指定します。\n\
          markerOpt.imageUrl = pointData[i].imageUrl;\n\
          markerOpt.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
          markerOpt.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
          markerOpt.imageOpacity = 0.8;\n\
        } else {\n\
          // ユーザ指定イメージパスがない場合に、マーカータイプを指定します。\n\
          markerOpt.markerType = pointData[i].markerType;\n\
        }\n\
\n\
        // マーカーレイヤーにマーカーを登録します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
\n\
      }\n\
\n\
      //### サークル作成 ###\n\
      // 領域と同じ大きさのサークルを作成します。\n\
\n\
      var circleId = 'circle'; // サークルのフィーチャー識別子\n\
\n\
      // サークルのの作成条件を設定します。\n\
      var circleOpt = {\n\
        position : options.centerPosition,\n\
        radius : 4000,\n\
        opacity : 0.3,\n\
      };\n\
\n\
      // ジオメトリレイヤーにサークルを登録します。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addCircle(circleOpt, circleId);\n\
\n\
      // 領域内のマーカーのフィーチャー識別子を取得します。\n\
      var rangeMarkers = Mfapi.Features.getMarkerInRange(options.centerPosition, circleOpt.radius);\n\
\n\
      // 左の情報表示エリアに領域内のマーカーフィーチャー識別子を表示します。\n\
      var info = document.getElementById('info');\n\
      info.innerHTML = 'サークル内のマーカー';\n\
      info.innerHTML += '<p><ul>';\n\
      for (var i = 0, len = rangeMarkers.length; i < len; i++) {\n\
        for (var key in Mfapi.Features.Marker) {\n\
          // マーカーのオブジェクト比較を行い、一致する場合は、情報エリアに追加します。\n\
          if (Mfapi.Features.Marker[key] === rangeMarkers[i].marker) {\n\
            info.innerHTML += \"<li>\"+key+\"</li>\";\n\
          }\n\
        }\n\
      }\n\
      info.innerHTML += '</ul></p>';\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
  <div id='info'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_7.html"
},

{
title: "2-8.ラベル作成",
sum: "<p>ラベルを表示する基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、ラベルを地図上に表示しています。\
地図を作成後、ラベルを表示するためのマーカーレイヤーをaddMarkerLayerメソッドで地図に追加します。\
次に、マーカーレイヤーのaddLabelメソッドを実行します。このメソッドにより、ラベル生成とマーカーレイヤーへの登録が行われ、地図上にラベルが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-8.ラベル表示】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
    .label {\n\
       margin: 0;\n\
       padding: 0 5px;\n\
       background-color: #fff;\n\
       border: 1px solid #000;\n\
     }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー追加 ###\n\
      // ラベルを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### ラベル作成処理 ###\n\
\n\
      var labelId = 'label_tokyost';  // ラベルのフィーチャー識別子\n\
      // ラベルの作成条件を設定します。\n\
      var labelOpt = {\n\
        position : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379), // 東京駅\n\
        offset : new Mfapi.Util.ScreenPoint(10, 10),    // 表示オフセット\n\
        contentHtml : '<p class=\"label\">東京駅</p>',    // ラベルのinnerHTML。枠はCSSで表示しています。\n\
        visible : true                                  // 表示ON/OFF\n\
      };\n\
\n\
      // マーカーレイヤーにラベルを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addLabel(labelOpt, labelId);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_8.html"
},

{
title: "2-9.ラベル非表示・削除",
sum: "<p>ラベルの表示、非表示、削除のコードが確認できます。</p>",
detail: "\
本サンプルは、ラベルの表示、非表示、削除ができます。地図上のクリックした地点にラベルを追加しています。\
「ラベル非表示」ボタンでラベルを非表示にします。「ラベル表示」ボタンでラベルを表示します。「ラベル削除」ボタンで地図上からラベルを削除します。\
地図上でクリックした地点にラベルを作成しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-9.ラベル非表示・削除】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
      position: relative;\n\
    }\n\
    #floating-panel {\n\
       width: 120px;\n\
       height: 90px;\n\
       position: absolute;\n\
       right: 5px;\n\
       top: -170px;\n\
       bottom: 0;\n\
       margin: auto;\n\
       z-index: 5;\n\
       background-color: #fff;\n\
       padding: 5px;\n\
       border: 1px solid #999;\n\
       text-align: center;\n\
       font-family: 'Roboto','sans-serif';\n\
       line-height: 30px;\n\
     }\n\
     #floating-panel input {\n\
       width: 120px;\n\
     }\n\
     .label {\n\
       margin: 0;\n\
       padding: 0 5px;\n\
       background-color: #fff;\n\
       border: 1px solid #000;\n\
     }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー追加 ###\n\
      // ラベルを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### ラベル作成処理 ###\n\
\n\
      var labelId = 'label_tokyo';   // ラベルのフィーチャー識別子\n\
      // ラベルの作成条件を設定します。\n\
      var labelOptions = {\n\
        position : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        offset : new Mfapi.Util.ScreenPoint(10, 10),\n\
        contentHtml : '<p class=\"label\">東京駅</p>',\n\
        visible : true\n\
      };\n\
      // マーカーレイヤーにラベルを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addLabel(labelOptions, labelId);\n\
\n\
      // 地図クリックイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMapClick = function (screenPosition, mapPosition) {\n\
        // ラベルを追加します。\n\
        addLabel(mapPosition);\n\
      };\n\
\n\
      //### ラベル追加処理 ###\n\
\n\
      // 地図上でクリック地点に緯度経度のラベルを追加します。\n\
      function addLabel(location) {\n\
        // ラベルのフィーチャー識別子を重複させないため、インデックスを作成します。\n\
        var index = (Mfapi.Features.Label ? Object.keys(Mfapi.Features.Label).length : 0) + 1;\n\
\n\
        //### ラベル作成処理 ###\n\
\n\
        var labelId = \"label_\" + index;  // ラベルのフィーチャー識別子\n\
        // ラベルの作成条件を設定します。\n\
        var labelOpt = {\n\
          position : location,\n\
          contentHtml : '<p class=\"label\">ラベル('+index+')</p>'\n\
        }\n\
        // マーカーレイヤーにラベルを登録します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addLabel(labelOpt, labelId);\n\
      }\n\
    }\n\
\n\
    //### ラベル表示・非表示設定 ###\n\
    function setMapOnAll(isVisible) {\n\
      // 全てのラベルを参照し、ラベルの表示 ON-OFFを更新します。\n\
      for (var key in Mfapi.Features.Label) {\n\
        Mfapi.Features.Label[key].setOptions({visible: isVisible});\n\
      }\n\
    }\n\
\n\
    //### ラベル非表示 ###\n\
    function clearLabels() {\n\
      setMapOnAll(false);\n\
    }\n\
\n\
    //### ラベル表示 ###\n\
    function showLabels() {\n\
      setMapOnAll(true);\n\
    }\n\
\n\
    //### ラベル削除 ###\n\
    function deleteLabels() {\n\
      // ラベルを非表示にします。\n\
      clearLabels();\n\
      // 全てのラベルを参照し、ラベルの削除処理をします。\n\
      for (var key in Mfapi.Features.Label) {\n\
        Mfapi.Features.remove(key);\n\
      }\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'>\n\
    <div id=\"floating-panel\">\n\
      <input id=\"clearLabels\" onclick=\"clearLabels();\" type=button value=\"ラベル非表示\"><br>\n\
      <input id=\"showLabels\" onclick=\"showLabels();\" type=button value=\"ラベル表示\"><br>\n\
      <input id=\"deleteLabels\" onclick=\"deleteLabels();\" type=button value=\"ラベル削除\">\n\
    </div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_9.html"
},

{
title: "2-10.ラベルとマーカーの関連付け",
sum: "<p>マーカーに紐付いたラベル表示を行う処理のコードが確認できます。</p>",
detail: "\
本サンプルは、マーカーに紐付いたラベルを表示しています。\
紐付けを行ったマーカーとラベルの間には、線が表示されます。\
ラベルは、マーカーと紐付けることができるため、マーカー作成後、ラベルの作成条件のmarkerKeyにマーカーのフィーチャー識別子を指定しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【2-10.ラベルとマーカーの関連付け】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
    .label {\n\
       margin: 0;\n\
       padding: 0 5px;\n\
       background-color: #fff;\n\
       border: 1px solid #000;\n\
     }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###-\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### マーカーレイヤー追加 ###\n\
      // マーカーとラベルを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### マーカー作成処理 ###\n\
\n\
      var markerId = 'marker_tokyo'; // マーカーのフィーチャー識別子\n\
      // マーカーの作成条件を設定します。\n\
      var markerOpt = {\n\
        position : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
      };\n\
      // マーカーレイヤーにマーカーを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
\n\
      //### ラベル作成処理 ###\n\
\n\
      var labelId = 'label_tokyo'; // ラベルのフィーチャー識別子\n\
      // ラベルの作成条件を設定します。\n\
      var labelOpt = {\n\
        markerKey : markerId,      // ラベルと紐付けを行うマーカーのフィーチャー識別子\n\
        position : new Mfapi.Util.LonLat(139.7672311841094, 35.68119593467379),\n\
        offset : new Mfapi.Util.ScreenPoint(10, 20),\n\
        contentHtml : '<p class=\"label\">東京駅</p>',\n\
        visible : true\n\
      };\n\
\n\
      // マーカーレイヤーにラベルを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addLabel(labelOpt, labelId);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample2_10.html"
},

{
title: "3-1.サークル作成",
sum: "<p>サークルを表示する基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、サークルを地図上に表示します。\
地図を作成後、サークルを表示するためのジオメトリレイヤーをaddGeometoryLayerメソッドで地図に追加します。\
次に、ジオメトリレイヤーのaddCircleメソッドを実行します。このメソッドにより、サークル生成とジオメトリレイヤーへの登録が行われ、地図上にサークルが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-1.図形表示】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // ポイントを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### サークル作成処理 ###\n\
      var circleId = 'circle1';   // サークルのフィーチャー識別子\n\
      // サークルの作成条件を設定します。\n\
      var circleOpt = {\n\
        edgeColor : '#ff0000',   // 枠線の色\n\
        edgeWidth : 4,           // 枠線の幅\n\
        fillColor : '#00ff00',   // 塗り色\n\
        opacity : 0.5,           // 不透明度\n\
        position :  new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),  // 東京駅\n\
        radius : 1600,           // 半径\n\
        visible : true           // 表示状態\n\
      };\n\
\n\
      // ジオメトリーレイヤーにサークルを登録します。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addCircle(circleOpt, circleId);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_1.html"
},

{
title: "3-2.ポリゴン作成",
sum: "<p>ポリゴンを表示する基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、ポリゴンを地図上に表示します。\
地図を作成後、ポリゴンを表示するためのジオメトリレイヤーをaddGeometoryLayerメソッドで地図に追加します。\
次に、ジオメトリレイヤーのaddPolygonメソッドを実行します。このメソッドにより、ポリゴン生成とジオメトリレイヤーへの登録が行われ、地図上にポリゴンが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-2.ポリゴン作成】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // ポリゴンを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### ポリゴン作成処理 ###\n\
      var polygonId = 'polygon1';         // ポリゴンのフィーチャー識別子\n\
\n\
      // 矩形の緯度経度を設定します。\n\
      var setPoly = {\n\
        north : 139.76926374856686,\n\
        south : 139.7647576374216,\n\
        east : 35.683323139617755,\n\
        west : 35.67908776419846\n\
      };\n\
      // ポリゴンの作成条件を設定します。\n\
      var polygonOpt = {\n\
        edgeColor : '#0000ff',     // 線の色\n\
        edgeWidth : 4,             // 線の幅\n\
        fillColor : '#0044ff',     // 線の色\n\
        opacity : 0.8,             // 不透明度\n\
        positions : [\n\
          new Mfapi.Util.LonLat(setPoly.north, setPoly.east),\n\
          new Mfapi.Util.LonLat(setPoly.north, setPoly.west),\n\
          new Mfapi.Util.LonLat(setPoly.south, setPoly.west),\n\
          new Mfapi.Util.LonLat(setPoly.south, setPoly.east)\n\
        ],\n\
        visible : true             // 表示ON/OFF\n\
      };\n\
\n\
      // ジオメトリーレイヤーにポリゴンを登録します。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolygon(polygonOpt, polygonId);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_2.html"
},

{
title: "3-3.ポリライン作成",
sum: "<p>ポリラインを表示する基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、ポリラインを地図上に表示します。\
地図を作成後、ポリラインを表示するためのジオメトリレイヤーをaddGeometoryLayerメソッドで地図に追加します。\
次に、ジオメトリレイヤーのaddPolylineメソッドを実行します。このメソッドにより、ポリライン生成とジオメトリレイヤーへの登録が行われ、地図上にポリラインが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-3.ポリライン作成】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // ポリラインを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### ポリライン作成処理 ###\n\
      var polylineId = 'polyline1';     // ポリラインのフィーチャー識別子\n\
\n\
      // ポリラインの作成条件を設定します。\n\
      var polylineOpt = {\n\
        lineColor : '#0000ff', // 線の色\n\
        lineWidth : 4,         // 線の幅\n\
        opacity : 0.8,         // 不透明度\n\
        positions : [\n\
          new Mfapi.Util.LonLat(139.70090283767686,35.68851826791775),  // 新宿駅\n\
          new Mfapi.Util.LonLat(139.7108740987224,35.72992490706989),   // 池袋駅\n\
          new Mfapi.Util.LonLat(139.77649106403516,35.713413463237565), // 上野駅\n\
          new Mfapi.Util.LonLat(139.8166571438273,35.718386818767186),  // 曳舟駅\n\
          new Mfapi.Util.LonLat(139.826947289596,35.69723830373342),    // 亀戸駅\n\
          new Mfapi.Util.LonLat(139.77311565279877,35.69837872503799)   // 秋葉原駅\n\
        ],\n\
        visible : true         // 表示ON/OFF\n\
      };\n\
\n\
      // ジオメトリーレイヤーにポリラインを登録します\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolyline(polylineOpt, polylineId);\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_3.html"
},

{
title: "3-4.ポイント作成",
sum: "<p>ポイントを表示する基本的なコードが確認できます。</p>",
detail: "\
本サンプルは、ポイントを地図上に表示します。\
地図を作成後、ポイントを表示するためのジオメトリレイヤーをaddGeometoryLayerメソッドで地図に追加します。\
次に、ジオメトリレイヤーのaddPointメソッドを実行します。このメソッドにより、ポイント生成とジオメトリレイヤーへの登録が行われ、地図上にポイントが表示されます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-4.ポイント作成】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // ポイントを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### ポイント作成処理 ###\n\
      var pointIdPrefix = 'point_';      // ポイントのフィーチャー識別子のプレフィックス\n\
\n\
      // ポイントの作成条件を設定します。\n\
      var pointOpt = {\n\
        edgeColor : '#ff0000', // 枠線の色\n\
        edgeWidth : 1,         // 枠線の幅\n\
        fillColor : '#ff0000', // 塗り色\n\
        opacity : 0.8,         // 不透明度\n\
        positions : null,      // 緯度経度※作成時に後述のpointsから取得します\n\
        width : 10,            // 点幅\n\
        visible : true         // 表示状態\n\
      };\n\
      // ポイント位置情報を設定します。\n\
      var points = [\n\
        new Mfapi.Util.LonLat(139.7006928036672,35.68961425420631),    // 新宿駅\n\
        new Mfapi.Util.LonLat(139.69745031099612,35.700751497234926),  // 大久保駅\n\
        new Mfapi.Util.LonLat(139.68493810396686,35.706241989984754),  // 東中野駅\n\
        new Mfapi.Util.LonLat(139.66573110323358,35.70580811283242),   // 中野駅\n\
        new Mfapi.Util.LonLat(139.64944234591596,35.70530453629846),   // 高円寺駅\n\
        new Mfapi.Util.LonLat(139.63572850925237,35.70494035144415),   // 阿佐ヶ谷駅\n\
        new Mfapi.Util.LonLat(139.6203838895091,35.70450646720755)     // 荻窪駅\n\
      ];\n\
\n\
      // ジオメトリーレイヤーにポイントを登録します。\n\
      for (var i=0,len=points.length; i < len; i++) {\n\
        pointOpt.position = points[i];\n\
        var pointId = pointIdPrefix + (i + 1);\n\
        Mfapi.Map.GeometryLayer['gLayer'].addPoint(pointOpt,pointId);\n\
      }\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_4.html"
},

{
title: "3-5.図形非表示・削除",
sum: "<p>図形の表示、非表示、削除を行う処理のコードが確認できます。</p>",
detail: "\
本サンプルは、ポリラインの表示、非表示、削除ができます。\
「ポリライン非表示」ボタンでポリラインを非表示にします。「ポリライン表示」ボタンでポリラインを表示します。「ポリライン削除」ボタンで地図上からポリラインを削除します。\
\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-5.図形非表示・削除】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
      position: relative;\n\
    }\n\
    #floating-panel {\n\
       width: 120px;\n\
       height: 90px;\n\
       position: absolute;\n\
       right: 5px;\n\
       top: -170px;\n\
       bottom: 0;\n\
       margin: auto;\n\
       z-index: 5;\n\
       background-color: #fff;\n\
       padding: 5px;\n\
       border: 1px solid #999;\n\
       text-align: center;\n\
       font-family: 'Roboto','sans-serif';\n\
       line-height: 30px;\n\
     }\n\
     #floating-panel input {\n\
       width: 120px;\n\
     }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // ポリラインを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### ポリライン作成処理 ###\n\
      var polylineId = 'polyline1';    // ポリラインのフィーチャー識別子\n\
      // ポリラインの作成条件を設定します。\n\
      var polylineOptions = {\n\
        lineWidth : 10,               // 線の幅\n\
        lineColor : '#00ff00',        // 線の色\n\
        opacity : 0.8,                // 不透明度\n\
        positions : [\n\
          new Mfapi.Util.LonLat(139.75821002138233,35.66657238126213),  // 新橋駅\n\
          new Mfapi.Util.LonLat(139.7959191978587,35.655211407306176),  // 豊洲駅\n\
          new Mfapi.Util.LonLat(139.79315890678254,35.63467955160454),  // 有明駅\n\
          new Mfapi.Util.LonLat(139.73875357500563,35.62850770123775),  // 品川駅\n\
          new Mfapi.Util.LonLat(139.70134957426947,35.65864567145413)   // 渋谷駅\n\
        ],\n\
        visible : true                // 表示ON/OFF\n\
      };\n\
\n\
      // ジオメトリーレイヤーにポリラインを登録します。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolyline(polylineOptions, polylineId);\n\
\n\
    }\n\
\n\
    //### ポリライン表示・非表示設定 ###\n\
    function setMapOnAll(isVisible) {\n\
      // 全てのポリラインを参照し、ポリラインの表示ON-OFFを更新します。\n\
      for (var key in Mfapi.Features.Polyline) {\n\
        Mfapi.Features.Polyline[key].setOptions({visible: isVisible});\n\
      }\n\
    }\n\
\n\
    //### ポリライン非表示 ###\n\
    function clearPolyline() {\n\
      setMapOnAll(false);\n\
    }\n\
\n\
    //### ポリライン表示 ###\n\
    function showPolyline() {\n\
      setMapOnAll(true);\n\
    }\n\
\n\
    //### ポリライン削除 ###\n\
    function deletePolyline() {\n\
      // ポリラインを非表示にします。\n\
      clearPolyline();\n\
      // 全てのポリラインを参照し、ポリラインを削除します。\n\
      for (var key in Mfapi.Features.Polyline) {\n\
        Mfapi.Features.remove(key);\n\
      }\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'>\n\
    <div id=\"floating-panel\">\n\
      <input id=\"clearPolyline\" onclick=\"clearPolyline();\" type=button value=\"ポリライン非表示\"><br>\n\
      <input id=\"showPolyline\" onclick=\"showPolyline();\" type=button value=\"ポリライン表示\"><br>\n\
      <input id=\"deletePolyline\" onclick=\"deletePolyline();\" type=button value=\"ポリライン削除\">\n\
    </div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_5.html"
},

{
title: "3-6.図形操作",
sum: "<p>図形の表示ON/OFF制御や属性変更のコードが確認できます。</p>",
detail: "\
本サンプルでは、サークル、ポリゴン、ポリライン、ポイントの図形の表示ON/OFFをチェックボックスで制御するコードと、\
サークルの半径(m)、ポリゴンの塗り色、ポリラインの線の幅(px)、、ポイントの点幅(px)を書き換えるコードが確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-6.図形操作】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 450px;\n\
      height: 280px;\n\
      margin: 5px;\n\
      padding: 0px;\n\
    }\n\
  </style>\n\
  <!--情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #info {\n\
      float: left;\n\
      margin: 2px;\n\
      padding: 2px;\n\
      background-color:#eeeeee;\n\
    }\n\
    .indent1 {\n\
      margin-left: 1.2em;\n\
    }\n\
    .value1 {\n\
      width: 60px;\n\
    }\n\
    .button1 {\n\
      width: 40px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### ジオメトリーレイヤー作成処理 ###\n\
      // 各図形を表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### 図形オブジェクト作成 ###\n\
\n\
      // サークルの作成条件を設定します。\n\
      var circleOpt = {\n\
        edgeColor : '#ff0000',     // 枠線の色\n\
        edgeWidth : 4,             // 枠線の幅\n\
        fillColor : '#00ff00',     // 塗り色\n\
        opacity : 0.5,             // 不透明度\n\
        position :  new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),  // 東京駅\n\
        radius : 1600,             // 半径\n\
        visible : true             // 表示ON/OFF\n\
      };\n\
      // ポリゴンの作成条件を設定します。\n\
      var polygonOpt = {\n\
        edgeColor : '#ff00ff',     // 枠線の色\n\
        edgeWidth : 4,             // 枠線の幅\n\
        fillColor : '#00ff00',     // 塗り色\n\
        opacity : 0.5,             // 不透明度\n\
        positions : [\n\
           new Mfapi.Util.LonLat(139.75821002138233,35.66657238126213),  // 新橋駅\n\
           new Mfapi.Util.LonLat(139.7959191978587,35.655211407306176),  // 豊洲駅\n\
           new Mfapi.Util.LonLat(139.79315890678254,35.63467955160454),  // 有明駅\n\
           new Mfapi.Util.LonLat(139.73875357500563,35.62850770123775),  // 品川駅\n\
           new Mfapi.Util.LonLat(139.70134957426947,35.65864567145413)   // 渋谷駅\n\
          ],\n\
        visible : true             // 表示ON/OFF\n\
      };\n\
      // ポリラインの作成条件を設定します。\n\
      var polylineOpt = {\n\
        lineColor : '#0000ff',     // 線の色\n\
        lineWidth : 4,             // 線の幅\n\
        opacity : 0.8,             // 不透明度\n\
        positions : [\n\
            new Mfapi.Util.LonLat(139.70090283767686,35.68851826791775),  // 新宿駅\n\
            new Mfapi.Util.LonLat(139.7108740987224,35.72992490706989),   // 池袋駅\n\
            new Mfapi.Util.LonLat(139.77649106403516,35.713413463237565), // 上野駅\n\
            new Mfapi.Util.LonLat(139.8166571438273,35.718386818767186),  // 曳舟駅\n\
            new Mfapi.Util.LonLat(139.826947289596,35.69723830373342),    // 亀戸駅\n\
            new Mfapi.Util.LonLat(139.77311565279877,35.69837872503799)   // 秋葉原駅\n\
          ],\n\
        visible : true             // 表示ON/OFF\n\
      };\n\
      // ポイント作成条件(緯度経度以外)\n\
      var pointOpt = {\n\
        edgeColor : '#ff0000',     // 枠線の色\n\
        edgeWidth : 1,             // 枠線の幅\n\
        fillColor : '#ff0000',     // 塗り色\n\
        opacity : 0.8,             // 不透明度\n\
        positions : null,          // 緯度経度※作成時に後述のpointsから取得する\n\
        width : 10,                // 点幅\n\
        visible : true             // 表示ON/OFF\n\
      };\n\
      // ポイント緯度経度\n\
      var points = [\n\
        new Mfapi.Util.LonLat(139.7006928036672,35.68961425420631),    // 新宿駅\n\
        new Mfapi.Util.LonLat(139.69745031099612,35.700751497234926),  // 大久保駅\n\
        new Mfapi.Util.LonLat(139.68493810396686,35.706241989984754),  // 東中野駅\n\
        new Mfapi.Util.LonLat(139.66573110323358,35.70580811283242),   // 中野駅\n\
        new Mfapi.Util.LonLat(139.64944234591596,35.70530453629846),   // 高円寺駅\n\
        new Mfapi.Util.LonLat(139.63572850925237,35.70494035144415),   // 阿佐ヶ谷駅\n\
        new Mfapi.Util.LonLat(139.6203838895091,35.70450646720755)     // 荻窪駅\n\
      ];\n\
\n\
      // ジオメトリーレイヤーに各図形を登録します。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addCircle(circleOpt,'circle');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolygon(polygonOpt,'polygon');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolyline(polylineOpt,'polyline');\n\
      for (var i=0,len=points.length; i < len; i++) {\n\
        pointOpt.position = points[i];\n\
        Mfapi.Map.GeometryLayer['gLayer'].addPoint(pointOpt,'point_'+(i+1));\n\
      }\n\
\n\
      //### 表示ON/OFFチェックボックスの初期状態の設定 ###\n\
      document.getElementById('chkDispCircle').checked = true;\n\
      document.getElementById('chkDispPolygon').checked = true;\n\
      document.getElementById('chkDispPolyline').checked = true;\n\
      document.getElementById('chkDispPoint').checked = true;\n\
\n\
      //### 属性入力テキストボックスの初期状態の設定(半径、塗色、線幅、点幅) ###\n\
      document.getElementById('txtCircleRadius').value = circleOpt.radius;\n\
      document.getElementById('txtPolygonFillColor').value = polygonOpt.fillColor;\n\
      document.getElementById('txtPolylineLineWidth').value = polylineOpt.lineWidth;\n\
      document.getElementById('txtPointWidth').value = pointOpt.width;\n\
    }\n\
\n\
    //### サークルの表示ON/OFF制御 ###\n\
    function chkCircle(status) {\n\
\n\
      // チェックボックスの状態をオブジェクト側に反映します。\n\
      Mfapi.Features.Circle['circle'].setVisible(status);\n\
    }\n\
\n\
    //### ポリゴンの表示ON/OFF制御 ###\n\
    function chkPolygon(status) {\n\
\n\
      // チェックボックスの状態をオブジェクト側に反映します。\n\
      Mfapi.Features.Polygon['polygon'].setVisible(status);\n\
    }\n\
\n\
    //### ポリラインの表示ON/OFF制御 ###\n\
    function chkPolyline(status) {\n\
\n\
      // チェックボックスの状態をオブジェクト側に反映します。\n\
      Mfapi.Features.Polyline['polyline'].setVisible(status);\n\
    }\n\
\n\
    //### ポイントの表示ON/OFF制御 ###\n\
    function chkPoint(status) {\n\
\n\
      for (var featureId in Mfapi.Features.Point) {\n\
        // チェックボックスの状態をオブジェクト側に反映します。\n\
        Mfapi.Features.Point[featureId].setVisible(status);\n\
      }\n\
\n\
    }\n\
\n\
    //### サークル：半径の更新 ###\n\
    // 図形オブジェクトの各属性値を更新します。\n\
    // フィーチャーIDから図形オブジェクトを取得し、作成条件を更新します。\n\
    // この方法は図形オブジェクト、マーカー、付帯オブジェクトにて利用できます。\n\
    function updateCircle() {\n\
\n\
      // フィーチャーIDから図形オブジェクトを取得します。\n\
      var feature = Mfapi.Features.getObject('circle');\n\
\n\
      // 変更する値を設定します。\n\
      var updateOpt = {\n\
         'radius': parseInt(document.getElementById('txtCircleRadius').value),\n\
         'visible': true\n\
      };\n\
\n\
      // 作成条件を更新します。\n\
      feature.setOptions(updateOpt);\n\
\n\
      // チェックボックスの状態を表示ONとします。\n\
      document.getElementById('chkDispCircle').checked = true;\n\
    }\n\
\n\
    //### ポリゴン：塗色の更新 ###\n\
    // フィーチャーIDから図形オブジェクトを取得し、現在設定中の作成条件を取得します。\n\
    // 設定中の作成条件を新しい値に変更し、作成条件を更新します。\n\
    // この方法は図形オブジェクト、マーカー、付帯オブジェクトにて利用できます。\n\
    function updatePolygon() {\n\
\n\
      // フィーチャーIDからポリゴンを取得します。\n\
      var feature = Mfapi.Features.getObject('polygon');\n\
\n\
      // 設定中の作成条件を取得し、値を更新します。\n\
      var updateOpt = feature.getOptions();\n\
      updateOpt.fillColor = document.getElementById('txtPolygonFillColor').value;\n\
      updateOpt.visible = true;\n\
\n\
      // 作成条件を更新します。\n\
      Mfapi.Features.Polygon['polygon'].setOptions(updateOpt);\n\
\n\
      // チェックボックスの状態を表示ONとします。\n\
      document.getElementById('chkDispPolygon').checked = true;\n\
    }\n\
\n\
    //### ポリライン：線幅の更新 ###\n\
    // フィーチャークラスに格納されているフィーチャーIDを直接参照し作成条件を更新します。\n\
    // この方法は図形オブジェクト、マーカー、付帯オブジェクトにて利用できます。\n\
    function updatePolyline() {\n\
\n\
      // 変更する値を設定します。\n\
      var updateOpt = {\n\
         'lineWidth': parseInt(document.getElementById('txtPolylineLineWidth').value),\n\
         'visible': true\n\
      };\n\
\n\
      // 作成条件を設定します。\n\
      Mfapi.Features.Polyline['polyline'].setOptions(updateOpt);\n\
\n\
      // チェックボックスの状態を表示ONとします。\n\
      document.getElementById('chkDispPolyline').checked = true;\n\
    }\n\
\n\
    //### ポイント：点幅の更新 ###\n\
    function updatePoint() {\n\
\n\
      // テキストボックスから属性値を取得します。\n\
      var width = parseInt(document.getElementById('txtPointWidth').value);\n\
      //### 各ポイント取得 ###\n\
      for (var featureId in Mfapi.Features.Point) {\n\
          // 変更する値を設定します。\n\
          var updateOpt = {\n\
             'width': width,\n\
             'visible':true\n\
          };\n\
          // 作成条件を設定します。\n\
          Mfapi.Features.Point[featureId].setOptions(updateOpt);\n\
      }\n\
      // チェックボックスの状態を表示ONとします。\n\
      document.getElementById('chkDispPoint').checked = true;\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--情報表示DIVタグ-->\n\
  <div id='info'>\n\
    <p>\n\
      <input type=\"checkbox\" id='chkDispCircle' onclick='chkCircle(this.checked)'>サークル<br>\n\
      <span class='indent1'>半径<input type='text' id='txtCircleRadius' class='value1'>\n\
      <input type='button' class='button1' value='更新' onclick='updateCircle()'>\n\
    </p>\n\
    <p>\n\
      <input type=\"checkbox\" id='chkDispPolygon' onclick='chkPolygon(this.checked)'>ポリゴン<br>\n\
      <span class='indent1'>塗色<input type='text' id='txtPolygonFillColor' class='value1'>\n\
      <input type='button' class='button1' value='更新' onclick='updatePolygon()'>\n\
    </p>\n\
    <p>\n\
      <input type=\"checkbox\" id='chkDispPolyline' onclick='chkPolyline(this.checked)'>ポリライン<br>\n\
      <span class='indent1'>線幅<input type='text' id='txtPolylineLineWidth' class='value1'>\n\
      <input type='button' class='button1' value='更新' onclick='updatePolyline()'>\n\
    </p>\n\
    <p>\n\
      <input type=\"checkbox\" id='chkDispPoint' onclick='chkPoint(this.checked)'>ポイント<br>\n\
      <span class='indent1'>点幅<input type='text' id='txtPointWidth' class='value1'>\n\
      <input type='button' class='button1' value='更新' onclick='updatePoint()'>\n\
    </p>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_6.html"
},

{
title: "3-7.マウスクリックでポリライン作成",
sum: "<p>地図をクリックした地点にマーカーとポリラインを表示するコードが確認できます。</p>",
detail: "\
本サンプルでは、地図上でクリックした地点にマーカーを表示させ、クリックした地点を結んだポリラインを表示しています。また、表示されたマーカーをクリックすることでポップアップを表示しています。\
\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【3-7.マウスクリックでポリライン作成】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 14\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### レイヤー作成処理 ###\n\
      // ポリラインを表示するためのジオメトリレイヤーを作成します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
      // マーカーを表示するためのマーカーレイヤーを作成します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // 地図クリック通知イベントにコールバック関数を設定します。\n\
      Mfapi.Events.onMapClick = onMapClickFunc;\n\
    }\n\
\n\
    var counter = 0;                 // フィーチャー識別子を一意にするためのカウンター\n\
    var beforerClickMapPos;          // クリックした緯度経度を保持する変数\n\
    var polylineId = \"polyline\";     // ポリラインのフィーチャー識別子\n\
\n\
    //### 地図クリックイベントのコールバック関数 ###\n\
    function onMapClickFunc (screenPos, mapPos) {\n\
\n\
      var popUpId = 'pop_'+counter;         // ポップアップのフィーチャー識別子\n\
      var markerId = 'marker_'+counter;     // マーカーのフィーチャー識別子\n\
      var polylineId = \"polyline\";          // ポリラインのフィーチャー識別子\n\
\n\
      //### ポップアップ作成処理 ###\n\
\n\
      // ポップアップの作成条件を設定します。\n\
      var popUpOpt = {contentHtml: markerId, visible: false}; // ポップアップにマーカーのフィーチャー識別子を表示します。\n\
      //### ポップアップ作成 ###\n\
      // ポップアップをマーカーと紐付けるため、ポップアップをFeaturesクラスに追加します。\n\
      Mfapi.Features.createPopUp(popUpOpt, popUpId);\n\
\n\
      // ### マーカー作成処理 ###\n\
\n\
      // マーカーの作成条件を設定します。\n\
      // 紐付けるポップアップのフィーチャー識別子を指定しています。\n\
      var markerOpt = {position : mapPos, popUpKey : popUpId};\n\
      // マーカーレイヤーにマーカーを登録します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOpt, markerId);\n\
\n\
      //### ポリライン作成・更新処理 ###\n\
\n\
      // １回目の地図クリックイベントは、ポリラインを作成しません。\n\
      // ２回目の地図クリックイベントは、ポリライン作成処理を行います。\n\
      // ３回目以降の地図クリックイベントは、すでに存在するポリラインにクリックした座標を追加し、ポリライン更新処理を行います。\n\
      \n\
      if (counter == 0) {\n\
         \n\
      } else if (counter == 1) {\n\
\n\
        //### ポリライン作成処理 ###\n\
\n\
        // ポリラインの作成条件を設定します。\n\
        // 前回クリックした緯度経度と、今回クリックした緯度経度を結ぶポリラインを作成します。\n\
        var polylineOpt = {positions:[beforerClickMapPos, mapPos]};\n\
        // ジオメトリーレイヤーにポリラインを登録します。\n\
        Mfapi.Map.GeometryLayer['gLayer'].addPolyline(polylineOpt, polylineId);\n\
\n\
      } else {\n\
\n\
        //### ポリライン更新処理 ###\n\
\n\
        // ポリラインのオブジェクトを取得します。\n\
        var polyline = Mfapi.Features.getObject(polylineId);\n\
        // ポリラインから座標情報を取得し、クリックした座標を末尾に追加します。\n\
        var points = polyline.getPositions().concat(mapPos);\n\
        // ポリラインに新しい緯度経度を設定します。\n\
        polyline.setOptions({positions:points});\n\
\n\
      }\n\
\n\
      // ポリラインを引くためにクリックした緯度経度を保持します。\n\
      beforerClickMapPos = mapPos;\n\
      counter++;\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample3_7.html"
},

{
title: "4-1.ルート描画",
sum: "<p>ルート検索およびルート描画機能のコードが確認できます。</p>",
detail: "\
本サンプルでは、ルート検索の出発地、経由地、目的地を指定して、ルート検索および地図上に\
ルート描画を行うルート関連の基本的な処理のコードが確認できます。また、プルダウンメニューでポリラインタイプおよび\
マーカータイプを選択すると、描画条件を変更して、ルート描画のみ再実行するコードも確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>Mfapiサンプル【4-1.ルート描画】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 460px;\n\
      height: 252px;\n\
      margin: 10px;\n\
      padding: 0px;\n\
    }\n\
  </style>\n\
  <!--地点リストDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #list {\n\
      float: left;\n\
      margin: 4px;\n\
      padding: 4px;\n\
      background-color:#eeeeee;\n\
    }\n\
    .item1 {\n\
      display: block;\n\
      floet: left;\n\
      width: 124px;\n\
      background-color: #aaaaaa;\n\
      padding: 2px;\n\
      margin: 2px;\n\
    }\n\
  </style>\n\
  <!--ルート関連のDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #type_bar {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 262px;\n\
      left: 2px;\n\
      width: 646px;\n\
      height: 26px;\n\
      background-color:#cccccc;\n\
    }\n\
    #loading {\n\
      margin: 0px;\n\
      position: absolute;\n\
      top: 0px;\n\
      left: 0px;\n\
      width: 100%;\n\
      height: 100%;\n\
      z-index: 5000001;\n\
      visibility : hidden;\n\
      background-color: rgba(0,0,0,0.2);\n\
      filter:progid:DXImageTransform.Microsoft.Gradient(\n\
       GradientType=0,StartColorStr=#22000000,EndColorStr=#22000000);\n\
    }\n\
    #loading_title {\n\
      padding-top: 20px;\n\
      text-align: center;\n\
      position: absolute;\n\
      top: 40px;\n\
      left:120px;\n\
      width: 240px;\n\
      height: 60px;\n\
      color: black;\n\
      background-color: white;\n\
    }\n\
    .item2 {\n\
      margin: 3px;\n\
      float: left;\n\
    }\n\
    .item3 {\n\
      margin: 1px;\n\
      float: left;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 地点リスト ###\n\
    var pointData = [\n\
      { name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
        text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
        imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36 },\n\
      { name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
        text: '<div><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
        imageUrl:'./img/b.gif', width:48, height:48, x:-24, y:-30  },\n\
      { name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
        text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
        markerType: 1 },\n\
      { name: '品川営業所', lon: 139.73875357500563, lat: 35.62850770123775,\n\
        text: '<div><b>品川営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-19:00</div>',\n\
        markerType: 1 },\n\
      { name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
        text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
        markerType: 1 },\n\
      { name: '新宿営業所', lon: 139.70090283767686, lat: 35.68851826791775,\n\
        text: '<div><b>新宿営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 ２４時間営業</div>',\n\
        markerType: 6 }\n\
    ];\n\
\n\
    //### 前操作で選択した地点リストのアイテム番号 ###\n\
    var prevItemNumber = 0;\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ルートAPIサーバを設定します。\n\
      Mfapi.routeHost = 'api-route-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーとジオメトリーレイヤーを追加します。\n\
      // ジオメトリーレイヤーは経路描画用です。\n\
      // マーカーレイヤーは地点マーカーとルートの出発地、経由地、目的地マーカーで共有します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 地点リストをもとにマーカーとポップアップを生成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
        var id1 = 'popup#'+i;\n\
        var opt1 = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          contentHtml : pointData[i].text,\n\
          visible : false\n\
        };\n\
        Mfapi.Features.createPopUp(opt1, id1);\n\
        var id2 = 'marker#'+i;\n\
        var opt2 = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : id1\n\
        };\n\
        if( pointData[i].imageUrl !== undefined ) {\n\
          opt2.imageUrl = pointData[i].imageUrl;\n\
          opt2.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
          opt2.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
          opt2.imageOpacity = 0.8;\n\
        } else {\n\
          opt2.markerType = pointData[i].markerType;\n\
        }\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(opt2, id2);\n\
        var text = document.createTextNode(pointData[i].name);\n\
        var label = document.createElement('label');\n\
          label.appendChild(text);\n\
          label.setAttribute('id', 'label#'+i);\n\
          label.setAttribute('class', 'item1');\n\
          label.setAttribute('onclick','selectItem(this.id)');\n\
        var divItem = document.createElement('div');\n\
          divItem.appendChild(label);\n\
        var divList = document.getElementById('list');\n\
          divList.appendChild(divItem);\n\
      }\n\
\n\
      // 検索中画面を表示します。\n\
      document.getElementById('loading').style.visibility = 'visible';\n\
\n\
      // タイプ選択のプルダウンメニューの選択肢を生成します。\n\
      var polylineTypeOptions = [\n\
        { name:'グリーン／標準サイズ',   value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_GREEN},\n\
        { name:'イエロー／標準サイズ',   value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_YELLOW},\n\
        { name:'ブルー／標準サイズ',     value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_BLUE},\n\
        { name:'レッド／標準サイズ',     value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_RED},\n\
        { name:'モノクロ／標準サイズ',   value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_MONOCHROME},\n\
        { name:'ＲＰＧ風／標準サイズ',   value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_MAP_RPG},\n\
        { name:'古地図風／標準サイズ',   value:Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_MAP_ANTIQUE},\n\
        { name:'グリーン／大きいサイズ', value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_COLOR_GREEN},\n\
        { name:'イエロー／大きいサイズ', value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_COLOR_YELLOW},\n\
        { name:'ブルー／大きいサイズ',   value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_COLOR_BLUE},\n\
        { name:'レッド／大きいサイズ',   value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_COLOR_RED},\n\
        { name:'モノクロ／大きいサイズ', value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_COLOR_MONOCHROME},\n\
        { name:'ＲＰＧ風／大きいサイズ', value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_MAP_RPG},\n\
        { name:'古地図風／大きいサイズ', value:Mfapi.Const.DrawPolylineType.BIG_ROUTE_MAP_ANTIQUE}\n\
      ];\n\
      for( var i=0; i<polylineTypeOptions.length; i++ ) {\n\
        var option = document.createElement('option');\n\
        option.setAttribute('value', polylineTypeOptions[i].value);\n\
        option.innerHTML = polylineTypeOptions[i].name;\n\
        document.getElementById('select_polyline_type').appendChild(option);\n\
      }\n\
      var markerTypeOptions = [\n\
        { name:'標準デザイン／標準サイズ',   value:Mfapi.Const.DrawMarkerType.STANDARD_ROUTE},\n\
        { name:'標準デザイン／大きいサイズ', value:Mfapi.Const.DrawMarkerType.BIG_ROUTE},\n\
        { name:'ＲＰＧ風／標準サイズ',       value:Mfapi.Const.DrawMarkerType.STANDARD_ROUTE_MAP_RPG},\n\
        { name:'ＲＰＧ風／大きいサイズ',     value:Mfapi.Const.DrawMarkerType.BIG_ROUTE_MAP_RPG},\n\
        { name:'古地図風／標準サイズ',       value:Mfapi.Const.DrawMarkerType.STANDARD_ROUTE_MAP_ANTIQUE},\n\
        { name:'古地図風／大きいサイズ',     value:Mfapi.Const.DrawMarkerType.BIG_ROUTE_MAP_ANTIQUE}\n\
      ];\n\
      for( var i=0; i<markerTypeOptions.length; i++ ) {\n\
        var option = document.createElement('option');\n\
        option.setAttribute('value', markerTypeOptions[i].value);\n\
        option.innerHTML = markerTypeOptions[i].name;\n\
        document.getElementById('select_marker_type').appendChild(option);\n\
      }\n\
\n\
      // タイプ選択の選択状態を初期化します。\n\
      document.getElementById('select_polyline_type').selectedIndex = 0;\n\
      document.getElementById('select_marker_type').selectedIndex = 0;\n\
\n\
      //### ルート検索条件\"optCalc\"の作成 ###\n\
      // 本サンプルでは、７件ある地点リストのうち、１番目を出発地、２番目～６番目を経由地、\n\
      // ７番目を目的地として設定します。なお、経由地は配列に格納してから設定します。\n\
      var viaPoints = [];\n\
      for(var loop=0; loop<pointData.length-2; loop++)\n\
        viaPoints[loop] = new Mfapi.Util.LonLat(pointData[loop+1].lon,pointData[loop+1].lat);\n\
      var optCalc = {\n\
        start : new Mfapi.Util.LonLat(pointData[0].lon,pointData[0].lat),\n\
        via : viaPoints,\n\
        destination : new Mfapi.Util.LonLat(pointData[pointData.length-1].lon,pointData[pointData.length-1].lat)\n\
      };\n\
\n\
      //### 経路描画条件\"optDraw\"の作成 ###\n\
      // 経路(ルートのポリライン)描画用のレイヤーIDと、出発地、目的地、経由地のマーカーを\n\
      // 表示用のレイヤーIDを指定します。ここでは各描画タイプの指定を省略しているため、デフォルト\n\
      // の描画タイプが適用されます。\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer',\n\
        markerLayerId : 'mLayer'\n\
      };\n\
\n\
      //### ルート検索＆描画要求のメソッド実行 ###\n\
      Mfapi.Route.requestRouteCalcAndDraw('route_sample',optCalc,optDraw,route_calc_and_draw_completed);\n\
    }\n\
\n\
    //### アイテム選択時の処理 ###\n\
    function selectItem(id) {\n\
      document.getElementById('label#'+prevItemNumber).style.backgroundColor = '#aaaaaa';\n\
      Mfapi.Features.PopUp['popup#'+prevItemNumber].setVisible(false);\n\
      document.getElementById(id).style.backgroundColor = '#ff0000';\n\
      var itemNumber = parseInt(id.substr(6)); // 先頭６文字'label#'を除いた文字列を整数化\n\
      Mfapi.Features.PopUp['popup#'+itemNumber].setVisible(true);\n\
      var center = new Mfapi.Util.LonLat(pointData[itemNumber].lon, pointData[itemNumber].lat);\n\
      Mfapi.Map.setCenterPosition(center);\n\
      prevItemNumber = itemNumber;\n\
    }\n\
\n\
    //### ルート検索＆描画終了時の処理 ###\n\
    // ルート検索＆経路描画処理終了時に実行します。\n\
    // 検索中画面を表示OFFにします。また、ルート検索に失敗した場合、エラーを警告画面にて表示します。\n\
    function route_calc_and_draw_completed(result_routeId) {\n\
\n\
      // 検索中画面の非表示にします。\n\
      document.getElementById('loading').style.visibility = 'hidden';\n\
\n\
      // エラー判定と警告表示を行います。\n\
      if(Mfapi.Route.RteInfo[result_routeId].calcData.status != 'success' ) {\n\
        window.alert(\"ルート検索に失敗しました。\\n\" + Mfapi.Route.RteInfo[result_routeId].calcData.status);\n\
      }\n\
    }\n\
\n\
    //### ルート再描画処理 ###\n\
    // プルダウンメニューのタイプ選択の状態が変化したときに実行します。\n\
    // 選択した各描画タイプをもとに描画データを再作成します。\n\
    function doRedraw() {\n\
\n\
      //### ルートデータ(検索結果のデータ)の存在確認 ###\n\
      // 存在しない場合は処理を中止します。\n\
      if(!Mfapi.Route.isUsed('route_sample')) return;\n\
      if(Mfapi.Route.RteInfo['route_sample'].calcData == null ) return;\n\
\n\
      //### 描画データの削除 ###\n\
      Mfapi.Route.removeRteDrawObjects('route_sample');\n\
\n\
      //### 経路描画条件\"optDraw\"の作成 ###\n\
      // 各レイヤーIDの指定に加え、ユーザがプルダウンメニューで選択した各描画タイプを指定します。\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer',\n\
        markerLayerId : 'mLayer',\n\
        drawPolylineType : document.getElementById('select_polyline_type').value,\n\
        drawMarkerType : document.getElementById('select_marker_type').value\n\
      };\n\
\n\
      //### 経路描画要求のメソッド実行 ###\n\
      // 本メソッド終了後の処理は特に無いため、コールバック関数の指定は省略します。\n\
      Mfapi.Route.requestRouteDraw('route_sample',optDraw);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--地点リストDIVタグ-->\n\
  <div id='list'></div>\n\
  <!--タイプ設定バーDIVタグ-->\n\
  <div id='type_bar'>\n\
    <label class=\"item2\">ポリライン：</label>\n\
    <form class=\"item3\"><select id=\"select_polyline_type\" onchange=\"doRedraw()\"></select></form>\n\
    <label class=\"item2\">マーカー：</label>\n\
    <form class=\"item3\"><select id=\"select_marker_type\" onchange=\"doRedraw()\"></select></form>\n\
  </div>\n\
  <!--検索中画面DIVタグ-->\n\
  <div id=\"loading\">\n\
    <div id=\"loading_title\">ルート検索＆描画処理中<img src=\"img/loader.gif\"></img></div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample4_1.html"
},

{
title: "4-2.ルート地点設定と案内表示",
sum: "<p>出発地、目的地の設定UIと案内表示のコードが確認できます。</p>",
detail: "\
本サンプルでは、出発地設定、および目的地設定ボタンを押すと、地図中心に出発地、および目的地のマーカーを登録します。\
計算実行ボタンを押すと、ルート検索、地図上のルート描画、および案内表示を行います。案内表示の案内地点の項目をクリックすると、\
該当緯度経度に地図が移動する機能も盛り込んでいます。<br>\
ルート描画処理の後、ルート全体が画面に収まる緯度経度と縮尺に変更します。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【4-2.ルート地点設定と案内表示】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      position: absolute;\n\
      top: 4px;\n\
      left: 4px;\n\
      width: 380px;\n\
      height: 256px;\n\
    }\n\
    #center_image {\n\
      width: 34px;\n\
      height: 30px;\n\
    }\n\
    #center_div {\n\
      z-index: 5000000;\n\
      position: absolute;\n\
      left: 177px;\n\
      top: 117px;\n\
      pointer-events: none;\n\
    }\n\
  </style>\n\
  <!--ルート関連のDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #positions_bar {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 264px;\n\
      left: 0px;\n\
      width: 380px;\n\
      height: 24px;\n\
      background-color:#cccccc;\n\
    }\n\
    #info_window {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 2px;\n\
      left: 390px;\n\
      width: 218px;\n\
      height: 256px;\n\
      background-color:#cccccc;\n\
    }\n\
    #operation_bar {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 264px;\n\
      left: 390px;\n\
      width: 218px;\n\
      height: 24px;\n\
      background-color:#cccccc;\n\
    }\n\
    #result_text {\n\
      padding: 0px;\n\
      position: absolute;\n\
      top: 0px;\n\
      left: 0px;\n\
      width: 214px;\n\
      height: 252px;\n\
      overflow-y: scroll;\n\
    }\n\
    #loading {\n\
      margin: 0px;\n\
      position: absolute;\n\
      top: 0px;\n\
      left: 0px;\n\
      width: 100%;\n\
      height: 100%;\n\
      z-index: 5000001;\n\
      visibility : hidden;\n\
      background-color: rgba(0,0,0,0.2);\n\
      filter:progid:DXImageTransform.Microsoft.Gradient(\n\
       GradientType=0,StartColorStr=#22000000,EndColorStr=#22000000);\n\
    }\n\
    #loading_title {\n\
      padding-top: 20px;\n\
      text-align: center;\n\
      position: absolute;\n\
      top: 40px;\n\
      left:120px;\n\
      width: 240px;\n\
      height: 60px;\n\
      color: black;\n\
      background-color: white;\n\
    }\n\
    .info_box {\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 2px;\n\
      left: 2px;\n\
      width: 214px;\n\
      height: 252px;\n\
      background-color:#dddddd;\n\
    }\n\
    .item1 {\n\
      margin: 0px;\n\
      padding: 0px;\n\
    }\n\
    .item2 {\n\
      margin-left: 2px;\n\
      float: left;\n\
    }\n\
    .item3 {\n\
      margin: 0px;\n\
      padding: 0px;\n\
      color: blue;\n\
      text-decoration: underline;\n\
      cursor: pointer;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 前操作で選択した案内リストのDIVタグのID ###\n\
    var prevGuideId = '';\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ルートAPIサーバを設定します。\n\
      Mfapi.routeHost = 'api-route-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーとジオメトリーレイヤーを追加します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 初期表示処理を行います。\n\
      initScreen();\n\
    }\n\
\n\
    //### 出発地、目的地設定処理 ###\n\
    function setPoint(type) {\n\
      if(type=='s')\n\
        createPointMarker('start_marker',0);\n\
      else if(type=='d')\n\
        createPointMarker('destination_marker',50);\n\
    }\n\
\n\
    //### ルート検索＆描画要求処理 ###\n\
    // 検索実行ボタンを押したときに実行します。\n\
    // 各UIのアクティブ制御、検索条件、描画条件の作成などを行った後、\n\
    // ルート検索＆描画要求のメソッドを実行します。\n\
    function doCalcAndDraw() {\n\
\n\
      // 全てのボタンを非アクティブにします。\n\
      document.getElementById('calc').disabled=true;\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('start').disabled=true;\n\
      document.getElementById('destination').disabled=true;\n\
\n\
      // 出発地、目的地の設定チェックを行います。\n\
      // 設定されていない場合、警告を出し、ボタンのアクティブ制御を戻して中断します。\n\
      if( Mfapi.Features.getObjectType('start_marker') == -1 ) {\n\
        window.alert(\"出発地が設定されていません。\");\n\
        document.getElementById('calc').disabled=false;\n\
        document.getElementById('back').disabled=true;\n\
        document.getElementById('start').disabled=false;\n\
        document.getElementById('destination').disabled=false;\n\
        return;\n\
      }\n\
      if( Mfapi.Features.getObjectType('destination_marker') == -1 ) {\n\
        window.alert(\"目的地が設定されていません。\");\n\
        document.getElementById('calc').disabled=false;\n\
        document.getElementById('back').disabled=true;\n\
        document.getElementById('start').disabled=false;\n\
        document.getElementById('destination').disabled=false;\n\
        return;\n\
      }\n\
\n\
      // リセットボタンを非アクティブにします。\n\
      document.getElementById('reset').disabled=true;\n\
\n\
      // 検索中画面を表示します。\n\
      document.getElementById('loading').style.visibility = 'visible';\n\
\n\
      //### ルート検索条件\"optCalc\"の作成 ###\n\
      // 出発地、目的地の地点マーカーの座標を利用して、条件を作成します。\n\
      var optCalc = {\n\
        start : Mfapi.Features.Marker['start_marker'].getPosition(),\n\
        destination : Mfapi.Features.Marker['destination_marker'].getPosition()\n\
      };\n\
\n\
      //### 経路描画条件\"optDraw\"の作成 ###\n\
      // 経路描画用のジオメトリーレイヤーIDのみを指定します。\n\
      // 経路描画でのマーカー描画は行わないため、マーカーレイヤーIDの指定は省略します。\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer'\n\
      };\n\
\n\
      //### ルート検索＆経路描画要求のメソッド実行 ###\n\
      // 処理終了後に呼ばれるコールバック関数として\"route_calc_and_draw_completed\"を指定します。\n\
      Mfapi.Route.requestRouteCalcAndDraw('route_sample',optCalc,optDraw,route_calc_and_draw_completed);\n\
    }\n\
\n\
    //### ルート検索＆経路描画終了時の処理 ###\n\
    // ルート検索＆経路描画処理終了時に実行します。\n\
    // ルート検索に成功した場合、検索結果から作成した案内テキストのDIVタグを、失敗した場合、エラーとなります。\n\
    // 情報テキストのDIVタグを、\"result_text\"のDIVタグに追加します。\n\
    // その後、情報窓の表示制御や戻るボタンのアクティブ制御などを行います。\n\
    function route_calc_and_draw_completed(result_routeId) {\n\
\n\
      // 経路進行の方向のコード値別に案内テキストを定義します。\n\
      // 本サンプルでは「未設定」、「道なり」の場合は、案内を出さないようにしています。\n\
      var DIRECTION_GUIDANCE = [\n\
        '', '', '直進', '右斜め', '右斜め', '右折', '右斜め後ろ', '右斜め後ろ',\n\
        'Ｕターン', '左斜め後ろ', '左斜め後ろ', '左折', '左斜め', '左斜め' ];\n\
\n\
      // ルート検索結果を取得します。\n\
      var calcData = Mfapi.Route.RteInfo[result_routeId].calcData;\n\
\n\
      //### 結果テキスト追加：ルート検索成功時 ###\n\
      if(calcData.status=='success') {\n\
\n\
        // ルート全体が表示させるようにします。\n\
        Mfapi.Route.fitRoute(result_routeId);\n\
\n\
        // 検索結果サマリー情報を取得し、テキストを作成します。\n\
        var summary = calcData.summary;\n\
        addTextDiv('result_text','ルート検索結果：','item1');\n\
        addTextDiv('result_text','　距離　'+parseInt(summary.totalDistance)+'m','item1');\n\
        addTextDiv('result_text','　時間　'+parseInt(summary.totalTravelTime)+'秒','item1');\n\
        addTextDiv('result_text','　料金　'+parseInt(summary.totalToll.toll)+'円','item1');\n\
        addTextDiv('result_text','--------------------','item1');\n\
\n\
        // 検索結果案内情報(案内区間単位)を取得し、テキストを作成します。\n\
        var guide = calcData.guide;\n\
        var index=1;\n\
        for(var i=0; i<guide.length; i++) {\n\
          var infoText='';\n\
\n\
          // 誘導ポイント(誘導区間のタイプ)を取得します。\n\
          var guideType=guide[i].type;\n\
\n\
          switch (guideType) {\n\
\n\
            //### 誘導ポイント＝出発地の場合 ###\n\
            case 1:\n\
              infoText = '['+index+']'+'出発地';\n\
              break;\n\
\n\
            //### 誘導ポイント＝目的地の場合 ###\n\
            case 2:\n\
              infoText = '['+index+']'+'目的地';\n\
              break;\n\
\n\
            //### 誘導ポイント＝案内ポイントの場合 ###\n\
            case 0:\n\
              // 案内情報の有無を確認します。\n\
              if(guide[i].guideInfo === undefined) break;\n\
\n\
              // 案内情報の各項目を取得します。\n\
              var direction = DIRECTION_GUIDANCE[guide[i].guideInfo.guideDirection];\n\
              var detailInfo = getDetailInfo(guide[i].guideInfo);\n\
              var detailName = getDetailName(guide[i].guideInfo);\n\
              var highwayFacilityName = getHighwayFacilityName(guide[i].guideInfo);\n\
              var toll = getToll(guide[i].guideInfo);\n\
              var tollFacilityName = getTollFacilityName(guide[i].guideInfo);\n\
              var crossingName = getCrossingName(guide[i].guideInfo);\n\
\n\
              // 案内テキストを作成します。\n\
              var guideText = '';\n\
\n\
              //## ①料金情報 ##\n\
              if(toll!='') {\n\
                // 料金所施設名称がある場合：料金施設名称と料金\n\
                if(tollFacilityName!='')\n\
                  guideText = tollFacilityName+' 料金：'+toll+'円';\n\
                // 料金所施設名称がない場合：料金のみ\n\
                else\n\
                  guideText =' 料金：'+toll+'円';\n\
                // 経路進行方向情報がある場合：経路進行方向テキストを追記\n\
                if(direction!='')\n\
                  guideText += ' ' + direction;\n\
\n\
              //## ②誘導詳細情報 ##\n\
              } else if(detailInfo!='') {\n\
                // 誘導詳細情報の名称(テキスト)情報がある場合：テキスト名称と詳細誘導情報\n\
                if(detailName!='')\n\
                  guideText = detailName+' '+detailInfo;\n\
                // 誘導詳細情報の名称(テキスト)情報がない場合：詳細誘導情報のみ\n\
                else\n\
                  guideText = detailInfo;\n\
                // 経路進行方向情報がある場合：経路進行方向テキストを追記\n\
                if(direction!='')\n\
                  guideText += ' ' + direction;\n\
\n\
              //## ③高速道路施設名称 ##\n\
              // 高速道路施設名称と経路進行方向情報がある場合：高速道路施設名称と経路進行方向テキスト\n\
              } else if(highwayFacilityName!=''&&direction!='') {\n\
                guideText = highwayFacilityName + ' ' + direction;\n\
\n\
              //## ④交差点名称 ##\n\
              // 交差点名称と経路の進行方向情報がある場合：交差点名称と経路進行方向テキスト\n\
              } else if(crossingName!=''&&direction!='') {\n\
                guideText = crossingName + ' ' + direction;\n\
\n\
              //## ⑤経路進行方向 ##\n\
              // 経路進行方向情報のみある場合：経路進行方向テキスト\n\
              } else if(direction!='') {\n\
                guideText = direction;\n\
              }\n\
\n\
              //## 案内テキスト格納 ##\n\
              if(guideText!='')\n\
                infoText = '['+index+']'+guideText;\n\
\n\
              break;\n\
          }\n\
          //### テキスト作成 ###\n\
          // 案内テキストに何か格納されていた場合のみ、同テキストを格納したDIVタグを作成します。\n\
          // 追加するタブのクリック(タップ)で、地図移動できるようにします。\n\
          // 移動座標は、誘導データ下の緯度経度データの先頭値を設定します。\n\
          if(infoText!='') {\n\
            var move = guide[i].guidePoints[0];\n\
            addTextDiv('result_text',infoText,'item3','guide'+index,move);\n\
            index++;\n\
          }\n\
        }\n\
        // 選択状態をリセットします。\n\
        prevGuideId = '';\n\
\n\
      //### 結果テキスト追加：ルート検索失敗時 ###\n\
      } else {\n\
         addTextDiv('result_text','ルート検索エラー：','item1');\n\
         addTextDiv('result_text',calcData.status,'item1');\n\
      }\n\
\n\
      // 情報窓に結果を表示します。\n\
      document.getElementById('explain').style.visibility = 'hidden';\n\
      document.getElementById('result').style.visibility = 'visible';\n\
\n\
      // 検索中画面を非表示にします。\n\
      document.getElementById('loading').style.visibility = 'hidden';\n\
\n\
      // 戻るボタンをアクティブにします。\n\
      document.getElementById('back').disabled=false;\n\
\n\
      // リセットボタンをアクティブにします。\n\
      document.getElementById('reset').disabled=false;\n\
    }\n\
\n\
    //### 戻るボタンの処理 ###\n\
    // 戻るボタンが押されたときに実行します。\n\
    // ルートデータを削除して、経路表示をoffにした後、情報窓も説明文表示に切り替えます。\n\
    function doBack() {\n\
\n\
      // ルートデータを全件削除します。\n\
      // データ削除時に関連するマーカー、ポリラインも削除されます。\n\
      Mfapi.Route.removeRteInfo('route_sample');\n\
\n\
      // 結果テキストのDIVをリセットします。\n\
      recretateDiv('result_text','result');\n\
\n\
      // 情報窓に説明文を表示します。\n\
      document.getElementById('explain').style.visibility = 'visible';\n\
      document.getElementById('result').style.visibility = 'hidden';\n\
\n\
      // 各種ボタンのアクティブ制御を行います。\n\
      // 戻るボタン以外をアクティブにします。\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('calc').disabled=false;\n\
      document.getElementById('start').disabled=false;\n\
      document.getElementById('destination').disabled=false;\n\
    }\n\
\n\
    //### リセットボタンの処理 ###\n\
    // リセットボタンが押されたときに実行します。\n\
    // ルートデータを削除して、経路表示をoffにした後、情報窓も説明文表示に切り替えます。\n\
    function doReset() {\n\
\n\
      // ルートデータを全件削除します。\n\
      Mfapi.Route.removeRteInfo('route_sample');\n\
\n\
      // 出発地、目的地のマーカーを削除します。\n\
      if( Mfapi.Features.getObjectType('start_marker') != -1 ) {\n\
        Mfapi.Features.remove('start_marker');\n\
      }\n\
      if( Mfapi.Features.getObjectType('destination_marker') != -1 ) {\n\
        Mfapi.Features.remove('destination_marker');\n\
      }\n\
\n\
      // 画面を初期化します。\n\
      initScreen();\n\
    }\n\
\n\
    //### 画面初期化処理 ###\n\
    function initScreen() {\n\
\n\
      // 初期時は説明文を表示します。\n\
      document.getElementById('explain').style.visibility = 'visible';\n\
      document.getElementById('result').style.visibility = 'hidden';\n\
\n\
      // 結果テキストのリセット処理を実行します。\n\
      recretateDiv('result_text','result');\n\
\n\
      // 戻るボタン以外をアクティブにします。(リセットボタンは常時アクティブのままとなります。)\n\
      document.getElementById('start').disabled=false;\n\
      document.getElementById('destination').disabled=false;\n\
      document.getElementById('calc').disabled=false;\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('reset').disabled=false;\n\
\n\
      // 検索中画面を非表示にします。\n\
      document.getElementById('loading').style.visibility = 'hidden';\n\
    }\n\
\n\
    //### DIVタグのリセット処理 ###\n\
    // '親DIVタグ'(parentId)の下にある'子DIVタグ'(targetId)を一度削除して、再追加します。\n\
    function recretateDiv(targetId,parentId) {\n\
      var div = document.getElementById(targetId);\n\
      if( div )\n\
        document.getElementById(parentId).removeChild(div);\n\
      var new_div = document.createElement('div');\n\
      new_div.setAttribute('id', targetId);\n\
      document.getElementById(parentId).appendChild(new_div);\n\
    }\n\
\n\
    //### 地点マーカー作成処理 ###\n\
    // 指定されたマーカーID(marker_id)の地点マーカーを'mLayer'の上に登録します。\n\
    // 座標は地図中心座標を適用します。\n\
    // マーカー画像は'./img/route_points.png'を使用し、位置(cx,0)から50px×50pxの画像を\n\
    // 切り出して、適用します。また、オフセット(-25px,-49px)とします。\n\
    // なお、既に指定されたIDのマーカーがある場合、削除し、再作成します。\n\
    function createPointMarker(marker_id,cx) {\n\
      if( Mfapi.Features.getObjectType(marker_id) != -1 )\n\
        Mfapi.Features.remove(marker_id);\n\
      var optMarker = {\n\
        position: Mfapi.Map.getCenterPosition(),\n\
        imageUrl: './img/route_points.png',\n\
        cuttingPoint: { x: cx, y: 0 },\n\
        imageSize : { width: 50, height: 50 },\n\
        imageOffset : { x: -25, y: -49 }\n\
      };\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(optMarker,marker_id);\n\
    }\n\
\n\
    //### 料金情報取得処理 ###\n\
    function getToll(guideInfo) {\n\
      if(guideInfo.guideToll === undefined) return '';\n\
      return guideInfo.guideToll.toll;\n\
    }\n\
\n\
    //### 料金所施設名称取得処理 ###\n\
    function getTollFacilityName(guideInfo) {\n\
      if(guideInfo.guideToll === undefined) return '';\n\
      return guideInfo.guideToll.name;\n\
    }\n\
\n\
    //### 誘導詳細情報取得処理 ###\n\
    function getDetailInfo(guideInfo) {\n\
      if(guideInfo.guideDetail === undefined) return '';\n\
      switch (guideInfo.guideDetail.code) {\n\
        case 32: return '入口';\n\
        case 33: return '出口';\n\
        case 34: return ''; // SA/PAは案内対象から除外\n\
        case 48: return 'フェリーターミナル';\n\
        default: return '';\n\
      }\n\
    }\n\
\n\
    //### 誘導詳細名称情報取得処理 ###\n\
    function getDetailName(guideInfo) {\n\
      if(guideInfo.guideDetail === undefined) return '';\n\
      return guideInfo.guideDetail.name;\n\
    }\n\
\n\
    //### 有料道路施設名称取得処理 ###\n\
    function getHighwayFacilityName(guideInfo) {\n\
      if(guideInfo.guideHighway === undefined) return '';\n\
      if(guideInfo.guideHighway.facilities === undefined) return '';\n\
      return guideInfo.guideHighway.facilities[0].name;\n\
    }\n\
\n\
    //### 交差点名称取得処理 ###\n\
    function getCrossingName(guideInfo) {\n\
      if(guideInfo.guideCrossing === undefined) return '';\n\
      return guideInfo.guideCrossing.name;\n\
    }\n\
\n\
    //### テキストDIV追加汎用処理 ###\n\
    // \"parentId\"で指定されたDIVタグに\"text\"で指定されたテキストのDIVタグを追加します。\n\
    // \"css_class\"が指定された場合、クラスとして適用します。\n\
    // \"id\"が指定された場合、idとして適用します。\n\
    // \"move\"が指定された場合、クリック時に地図移動処理\"moveMap\"を呼ぶようにします。\n\
    function addTextDiv(parentId,text,css_class,id,move) {\n\
      var textNode = document.createTextNode(text);\n\
      var label = document.createElement('label');\n\
      label.appendChild(textNode);\n\
      if(css_class!='')\n\
        label.setAttribute('class', css_class);\n\
      if(id!=null) {\n\
        if(id!='')\n\
          label.setAttribute('id', id);\n\
      }\n\
      if(move!=null) {\n\
        label.setAttribute('onclick','moveMap('+move.lon+','+move.lat+',this)');\n\
      }\n\
      var div = document.createElement('div');\n\
      div.appendChild(label);\n\
      document.getElementById(parentId).appendChild(div);\n\
    }\n\
\n\
    //### 地図移動処理 ###\n\
    // \"lon\",\"lat\"で指定した緯度経度に地図を移動します。\n\
    // また、\"element\"で指定されたタグの色を青から赤に変更し、前操作で選択したタグを青に変更します。\n\
    function moveMap(lon,lat,element) {\n\
\n\
      // 地図を移動します\n\
      Mfapi.Map.setCenterPosition(new Mfapi.Util.LonLat(lon,lat));\n\
\n\
      // 選択したラベルの色を赤に変更します。\n\
      element.style.color='red';\n\
\n\
      // 前操作で選択したラベルの色を青に戻します。\n\
      if(prevGuideId!='')\n\
        document.getElementById(prevGuideId).style.color='blue';\n\
      prevGuideId=element.getAttribute('id');\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--地図中心を示すパーツのDIVタグ-->\n\
  <div id='center_div'><img id='center_image' src='img/center.png'></div>\n\
  <!--地点設定バーDIVタグ-->\n\
  <div id='positions_bar'>\n\
    <input type=\"button\" class=\"item2\" value=\"出発地設定\" id=\"start\" onclick=\"setPoint('s');\">\n\
    <input type=\"button\" class=\"item2\" value=\"目的地設定\" id=\"destination\" onclick=\"setPoint('d');\">\n\
  </div>\n\
  <!--情報窓DIVタグ-->\n\
  <div id='info_window'>\n\
    <div id='explain' class=\"info_box\">\n\
      <label>出発地、目的地を設定したら、検索実行ボタンを押してください。</label>\n\
    </div>\n\
    <div id='result' class=\"info_box\"></div>\n\
  </div>\n\
  <!--操作バーDIVタグ-->\n\
  <div id='operation_bar'>\n\
    <input type=\"button\" class=\"item2\" value=\"検索実行\" id=\"calc\" onclick=\"doCalcAndDraw();\">\n\
    <input type=\"button\" class=\"item2\" value=\"戻る\" id=\"back\" onclick=\"doBack();\">\n\
    <input type=\"button\" class=\"item2\" value=\"リセット\" id=\"reset\" onclick=\"doReset();\">\n\
  </div>\n\
  <!--検索中画面DIVタグ-->\n\
  <div id=\"loading\">\n\
    <div id=\"loading_title\">ルート検索＆描画処理中<img src=\"img/loader.gif\"></img></div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample4_2.html"
},

{
title: "4-3.ルート検索条件設定",
sum: "<p>複数の検索条件（有料道路利用等）のルートを同時に表示するコードが確認できます。</p>",
detail: "\
本サンプルでは、出発地、目的地設定後、計算実行ボタンを押すと、３つの計算条件でルート検索および地図上のルート描画を行います。\
検索条件別にルート結果の表示ON/OFFをチェックボックスで制御するコードも確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【4-3.ルート検索条件設定】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      position: absolute;\n\
      top: 4px;\n\
      left: 4px;\n\
      width: 380px;\n\
      height: 256px;\n\
    }\n\
    #center_image {\n\
      width: 34px;\n\
      height: 30px;\n\
    }\n\
    #center_div {\n\
      z-index: 5000000;\n\
      position: absolute;\n\
      left: 177px;\n\
      top: 117px;\n\
      pointer-events: none;\n\
    }\n\
  </style>\n\
  <!--ルート関連のDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #positions_bar {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 264px;\n\
      left: 0px;\n\
      width: 380px;\n\
      height: 24px;\n\
      background-color:#cccccc;\n\
    }\n\
    #info_window {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 2px;\n\
      left: 390px;\n\
      width: 218px;\n\
      height: 256px;\n\
      background-color:#cccccc;\n\
    }\n\
    #operation_bar {\n\
      margin: 2px;\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 264px;\n\
      left: 390px;\n\
      width: 218px;\n\
      height: 24px;\n\
      background-color:#cccccc;\n\
    }\n\
    #loading {\n\
      margin: 0px;\n\
      position: absolute;\n\
      top: 0px;\n\
      left: 0px;\n\
      width: 100%;\n\
      height: 100%;\n\
      z-index: 5000001;\n\
      visibility : hidden;\n\
      background-color: rgba(0,0,0,0.2);\n\
      filter:progid:DXImageTransform.Microsoft.Gradient(\n\
       GradientType=0,StartColorStr=#22000000,EndColorStr=#22000000);\n\
    }\n\
    #loading_title {\n\
      padding-top: 20px;\n\
      text-align: center;\n\
      position: absolute;\n\
      top: 40px;\n\
      left:120px;\n\
      width: 240px;\n\
      height: 60px;\n\
      color: black;\n\
      background-color: white;\n\
    }\n\
    .info_box {\n\
      padding: 2px;\n\
      position: absolute;\n\
      top: 2px;\n\
      left: 2px;\n\
      width: 214px;\n\
      height: 252px;\n\
      background-color:#dddddd;\n\
    }\n\
    .item1 {\n\
      padding: 2px;\n\
    }\n\
    .item2 {\n\
      margin-left: 2px;\n\
      float: left;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ルートAPIサーバを設定します。\n\
      Mfapi.routeHost = 'api-route-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーとジオメトリーレイヤーを追加します。\n\
      // ケース１，２，３それぞれで別のジオメトリーレイヤーを追加します。\n\
      // ケース１→２→３の優先順位で表示するように、3→2→1の順番で登録します。\n\
      Mfapi.Map.addGeometryLayer('gLayer3');\n\
      Mfapi.Map.addGeometryLayer('gLayer2');\n\
      Mfapi.Map.addGeometryLayer('gLayer1');\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 初期表示処理を行います。\n\
      initScreen();\n\
    }\n\
\n\
    //### 出発地、目的地設定処理 ###\n\
    function setPoint(type) {\n\
      if(type=='s')\n\
        createPointMarker('start_marker',0);\n\
      else if(type=='d')\n\
        createPointMarker('destination_marker',50);\n\
    }\n\
\n\
    //### ルート検索＆描画要求処理 ###\n\
    // 検索実行ボタンを押したときに実行します。\n\
    // ３つの条件の処理を以下の流れで実施します。\n\
    //   ①doCalcAndDraw()：ケース１の検索＆描画要求\n\
    //   ②route_calc_and_draw_completed1()：ケース２の検索＆描画要求\n\
    //   ③route_calc_and_draw_completed2()：ケース３の検索＆描画要求\n\
    //   ④route_calc_and_draw_completed3()：経路表示ON-OFF操作画面の表示\n\
    // ※３ケース同時にルート検索＆描画要求処理メソッドを実行すると、非同期に処理され、描画の\n\
    // 　実行順が不定になります。\n\
    // 　ここでは、標準のケース１が一番最初に表示されるように、上記処理の流れで実行しています。\n\
    function doCalcAndDraw() {\n\
\n\
      // 各種ボタンのアクティブ制御をおこないます。\n\
      document.getElementById('calc').disabled=true;\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('start').disabled=true;\n\
      document.getElementById('destination').disabled=true;\n\
\n\
      // 出発地、目的地の設定チェックを行います。\n\
      if( Mfapi.Features.getObjectType('start_marker') == -1 ) {\n\
        window.alert(\"出発地が設定されていません。\");\n\
        document.getElementById('calc').disabled=false;\n\
        document.getElementById('back').disabled=true;\n\
        document.getElementById('start').disabled=false;\n\
        document.getElementById('destination').disabled=false;\n\
        return;\n\
      }\n\
      if( Mfapi.Features.getObjectType('destination_marker') == -1 ) {\n\
        window.alert(\"目的地が設定されていません。\");\n\
        document.getElementById('calc').disabled=false;\n\
        document.getElementById('back').disabled=true;\n\
        document.getElementById('start').disabled=false;\n\
        document.getElementById('destination').disabled=false;\n\
        return;\n\
      }\n\
\n\
      // リセットボタンを非アクティブにします。\n\
      document.getElementById('reset').disabled=true;\n\
\n\
      // 検索中画面を表示します。\n\
      document.getElementById('loading').style.visibility = 'visible';\n\
\n\
      //### ケース１：ルート検索条件\"optCalc\"の作成 ###\n\
      // 条件：検索優先条件=標準、有料道路使用条件=標準\n\
      var optCalc = {\n\
        start : Mfapi.Features.Marker['start_marker'].getPosition(),\n\
        destination : Mfapi.Features.Marker['destination_marker'].getPosition(),\n\
        priority : 0,\n\
        tollway : 0\n\
      };\n\
\n\
      //### ケース１：経路描画条件\"optDraw\"の作成 ###\n\
      // 条件：レイヤー'gLayer1'、ポリラインタイプ設定=グリーン\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer1',\n\
        drawPolylineType : Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_GREEN\n\
      };\n\
\n\
      //### ケース１：ルート検索＆経路描画要求のメソッド実行 ###\n\
      Mfapi.Route.requestRouteCalcAndDraw('route-1',optCalc,optDraw,route_calc_and_draw_completed1);\n\
    }\n\
\n\
    //### ケース１：ルート検索＆経路描画終了時の処理 ###\n\
    function route_calc_and_draw_completed1(result_routeId) {\n\
\n\
      //### ケース２：ルート検索条件\"optCalc\"の作成 ###\n\
      // 条件：検索優先条件=標準、有料道路使用条件=優先\n\
      var optCalc = {\n\
        start : Mfapi.Features.Marker['start_marker'].getPosition(),\n\
        destination : Mfapi.Features.Marker['destination_marker'].getPosition(),\n\
        priority : 0,\n\
        tollway : 1\n\
      };\n\
\n\
      //### ケース２：経路描画条件\"optDraw\"の作成 ###\n\
      // 条件：レイヤー'gLayer2'、ポリラインタイプ設定=イエロー\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer2',\n\
        drawPolylineType : Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_YELLOW\n\
      };\n\
\n\
      //### ケース２：ルート検索＆経路描画要求のメソッド実行 ###\n\
      Mfapi.Route.requestRouteCalcAndDraw('route-2',optCalc,optDraw,route_calc_and_draw_completed2);\n\
    }\n\
\n\
    //### ケース２：ルート検索＆経路描画終了時の処理 ###\n\
    function route_calc_and_draw_completed2(result_routeId) {\n\
\n\
      //### ケース３：ルート検索条件\"optCalc\"の作成 ###\n\
      // 条件：検索優先条件=標準、有料道路使用条件=優先\n\
      var optCalc = {\n\
        start : Mfapi.Features.Marker['start_marker'].getPosition(),\n\
        destination : Mfapi.Features.Marker['destination_marker'].getPosition(),\n\
        priority : 1,\n\
        tollway : 0\n\
      };\n\
\n\
      //### ケース３：経路描画条件\"optDraw\"の作成 ###\n\
      // 条件：レイヤー'gLayer3'、ポリラインタイプ設定=ブルー\n\
      var optDraw = {\n\
        geometryLayerId : 'gLayer3',\n\
        drawPolylineType :  Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_BLUE\n\
      };\n\
\n\
      //### ケース３：ルート検索＆経路描画要求のメソッド実行 ###\n\
      Mfapi.Route.requestRouteCalcAndDraw('route-3',optCalc,optDraw,route_calc_and_draw_completed3);\n\
    }\n\
\n\
    //### ケース３：ルート検索＆経路描画終了時の処理 ###\n\
    function route_calc_and_draw_completed3(result_routeId) {\n\
\n\
      //### 情報窓：経路表示ON-OFF操作画面表示 ###\n\
      document.getElementById('explain').style.visibility = 'hidden';\n\
      document.getElementById('visibility_ctrl').style.visibility = 'visible';\n\
      document.getElementById('cond1').checked='checked';\n\
      document.getElementById('cond2').checked='checked';\n\
      document.getElementById('cond3').checked='checked';\n\
\n\
      // 検索中画面を非表示にします。\n\
      document.getElementById('loading').style.visibility = 'hidden';\n\
\n\
      // 戻るボタンをアクティブにします。\n\
      document.getElementById('back').disabled=false;\n\
\n\
      // リセットボタンをアクティブにします。\n\
      document.getElementById('reset').disabled=false;\n\
    }\n\
\n\
    //### 戻るボタンの処理 ###\n\
    function doBack() {\n\
\n\
      // ルートデータを全件削除します。\n\
      Mfapi.Route.removeAllRteInfo();\n\
\n\
      // 情報窓に説明文を表示します。\n\
      document.getElementById('explain').style.visibility = 'visible';\n\
      document.getElementById('visibility_ctrl').style.visibility = 'hidden';\n\
\n\
      // 各種ボタンのアクティブ制御を行います。\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('calc').disabled=false;\n\
      document.getElementById('start').disabled=false;\n\
      document.getElementById('destination').disabled=false;\n\
    }\n\
\n\
    //### リセットボタンの処理 ###\n\
    function doReset() {\n\
\n\
      // ルートデータを全件削除します。\n\
      Mfapi.Route.removeAllRteInfo();\n\
\n\
      // 出発地、目的地のマーカーを削除します。\n\
      if( Mfapi.Features.getObjectType('start_marker') != -1 ) {\n\
        Mfapi.Features.remove('start_marker');\n\
      }\n\
      if( Mfapi.Features.getObjectType('destination_marker') != -1 ) {\n\
        Mfapi.Features.remove('destination_marker');\n\
      }\n\
\n\
      // 画面を初期化します。\n\
      initScreen();\n\
    }\n\
\n\
    //### 経路ポリライン表示状態切り替え時の処理 ###\n\
    // 情報窓の各ケースのチェックボックスの状態が変更されたときに実行します。\n\
    function changeVisibility(elem,route_id) {\n\
      // 該当ルートの表示条件に反映します。\n\
      Mfapi.Route.setVisible(route_id, elem.checked);\n\
    }\n\
\n\
    //### 画面初期化処理 ###\n\
    function initScreen() {\n\
\n\
      // 初期時は説明文を表示します。\n\
      document.getElementById('explain').style.visibility = 'visible';\n\
      document.getElementById('visibility_ctrl').style.visibility = 'hidden';\n\
\n\
      // 戻るボタン以外をアクティブにします。(リセットボタンは常時アクティブのままとなります。)\n\
      document.getElementById('start').disabled=false;\n\
      document.getElementById('destination').disabled=false;\n\
      document.getElementById('calc').disabled=false;\n\
      document.getElementById('back').disabled=true;\n\
      document.getElementById('reset').disabled=false;\n\
\n\
      // 検索中画面を非表示にします。\n\
      document.getElementById('loading').style.visibility = 'hidden';\n\
   }\n\
\n\
    //### DIVタグのリセット処理 ###\n\
    function recretateDiv(targetId,parentId) {\n\
      var div = document.getElementById(targetId);\n\
      if( div )\n\
        document.getElementById(parentId).removeChild(div);\n\
      var new_div = document.createElement('div');\n\
      new_div.setAttribute('id', targetId);\n\
      document.getElementById(parentId).appendChild(new_div);\n\
    }\n\
\n\
    //### 地点マーカー作成処理 ###\n\
    function createPointMarker(marker_id,cx) {\n\
      if( Mfapi.Features.getObjectType(marker_id) != -1 )\n\
        Mfapi.Features.remove(marker_id);\n\
      var optMarker = {\n\
        position: Mfapi.Map.getCenterPosition(),\n\
        imageUrl: './img/route_points.png',\n\
        cuttingPoint: { x: cx, y: 0 },\n\
        imageSize : { width: 50, height: 50 },\n\
        imageOffset : { x: -25, y: -49 }\n\
      };\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(optMarker,marker_id);\n\
    }\n\
\n\
    //### ラベル追加汎用処理 ###\n\
    function addLabel(parentId,text,css_class,id,move) {\n\
      var textNode = document.createTextNode(text);\n\
      var label = document.createElement('label');\n\
      label.appendChild(textNode);\n\
      if(css_class!='')\n\
        label.setAttribute('class', css_class);\n\
      if(id!=null) {\n\
        if(id!='')\n\
          label.setAttribute('id', id);\n\
      }\n\
      var div = document.createElement('div');\n\
      if(move!=null) {\n\
        label.setAttribute('onclick','moveMap('+move.lon+','+move.lat+',this)');\n\
      }\n\
      div.appendChild(label);\n\
      document.getElementById(parentId).appendChild(div);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--地図中心を示すパーツのDIVタグ-->\n\
  <div id='center_div'><img id='center_image' src='img/center.png'></div>\n\
  <!--条件設定バーDIVタグ-->\n\
  <div id='positions_bar'>\n\
    <input type=\"button\" class=\"item2\" value=\"出発地設定\" id=\"start\" onclick=\"setPoint('s');\">\n\
    <input type=\"button\" class=\"item2\" value=\"目的地設定\" id=\"destination\" onclick=\"setPoint('d');\">\n\
  </div>\n\
  <!--情報窓DIVタグ-->\n\
  <div id='info_window'>\n\
    <div id='explain' class=\"info_box\">\n\
      <label>出発地、目的地を設定したら、検索実行ボタンを押してください。</label>\n\
    </div>\n\
    <div id='visibility_ctrl' class=\"info_box\">\n\
      <table>\n\
        <tr><th colspan=\"4\">ルート検索結果：</th></tr>\n\
        <tr><td><input type=\"checkbox\" id=\"cond1\" onclick=\"changeVisibility(this,'route-1')\"></td>\n\
          <td>①</td><td><img src=\"img/green_line.png\"></td><td>標準</td></tr>\n\
        <tr><td><input type=\"checkbox\" id=\"cond2\" onclick=\"changeVisibility(this,'route-2')\"></td>\n\
          <td>②</td><td><img src=\"img/yellow_line.png\"></td><td>有料道路優先</td></tr>\n\
        <tr><td><input type=\"checkbox\" id=\"cond3\" onclick=\"changeVisibility(this,'route-3')\"></td>\n\
          <td>③</td><td><img src=\"img/blue_line.png\"></td><td>距離優先</td></tr>\n\
      </table>\n\
    </div>\n\
  </div>\n\
  <!--操作バーDIVタグ-->\n\
  <div id='operation_bar'>\n\
    <input type=\"button\" class=\"item2\" value=\"検索実行\" id=\"calc\" onclick=\"doCalcAndDraw();\">\n\
    <input type=\"button\" class=\"item2\" value=\"戻る\" id=\"back\" onclick=\"doBack();\">\n\
    <input type=\"button\" class=\"item2\" value=\"リセット\" id=\"reset\" onclick=\"doReset();\">\n\
  </div>\n\
  <!--検索中画面DIVタグ-->\n\
  <div id=\"loading\">\n\
    <div id=\"loading_title\">ルート検索＆描画処理中<img src=\"img/loader.gif\"></img></div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample4_3.html"
},

{
title: "5-1.地図クリック",
sum: "<p>地図上で左ボタンをクリックしたときに発生するイベントを使ったコードが確認できます。</p>",
detail: "\
本サンプルでは、地図クリックイベント機能を用いて、地図上を直接クリックしてマーカーを追加する\
機能を実現しています。また、地図クリックイベントのパラメータを表示しています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-1.地図クリック】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 410px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <!--情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #info_window {\n\
      float: left;\n\
      width: 245px;\n\
      height: 280px;\n\
      background-color:#cccccc;\n\
      margin-left: 5px;\n\
    }\n\
    .divA {\n\
      padding: 0px;\n\
      margin: 5px;\n\
    }\n\
    .desc {\n\
      font-size: 12pt;\n\
      font-family: sans-serif;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    var clickCounter = 0;\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7472311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーとジオメトリーレイヤーを追加します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // 地図クリックイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMapClick = mapClick;\n\
\n\
      // 画面を初期化します。\n\
      initScreen();\n\
    }\n\
\n\
    //### 地図クリックイベントのコールバック関数 ###\n\
    function mapClick(screenPosition, mapPosition) {\n\
\n\
      clickCounter++;\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(\n\
          {\n\
              position : mapPosition\n\
          }\n\
          , \"markerId\" + clickCounter\n\
      );\n\
\n\
      document.getElementById('clickInfoDesc').innerHTML\n\
        = ('[screenPosition]<br>'\n\
            + ' x:{x} y:{y}<br>'\n\
            + '<br>'\n\
            + '[mapPosition]<br>'\n\
            + ' 経度:{lon}<br>'\n\
            + ' 緯度:{lat}<br>'\n\
            + '<br>'\n\
          ).replace(\"{x}\", screenPosition.x+\"\")\n\
           .replace(\"{y}\", screenPosition.y+\"\")\n\
           .replace(\"{lon}\", mapPosition.lon+\"\")\n\
           .replace(\"{lat}\", mapPosition.lat+\"\")\n\
      ;\n\
    }\n\
\n\
    //### 画面初期化処理 ###\n\
    function initScreen() {\n\
      document.getElementById('clickInfoDesc').innerHTML='';\n\
   }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図描画対象となるDIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--情報表示DIVタグ-->\n\
  <div id='info_window'>\n\
    <div class='divA'>\n\
      <p class='item1'>\n\
        <label id='clickInfoDesc' class='desc'></label>\n\
      </p>\n\
    </div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_1.html"
},

{
title: "5-2.地図移動開始・終了イベント",
sum: "<p>地図移動開始時、または地図移動終了時のイベントを取得し、任意のメソッドを実行するコードが確認できます。</p>",
detail: "\
本サンプルでは、地図移動開始時のイベントを取得し、ポップアップを一括非表示にするメソッドの実行、および地図移動終了時のイベントを取得し、ポップアップを再度表示するコードが確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-2.地図移動開始・終了イベント】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    var visiblePopUpList = [];\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      //### 地点リスト ###\n\
      var pointData = [\n\
        { name: '東京本社ビル', lon: 139.7672311841094, lat: 35.68119593467379,\n\
          text: '<div><b>東京本社ビル</b><br>tel 03-XXXX-XXXX</div>',\n\
          popUpType: 2, imageUrl:'./img/a.gif', width:48, height:48, x:-24, y:-36, popUpVisible: false },\n\
        { name: '新橋営業所', lon: 139.75821002138233, lat: 35.66657238126213,\n\
          text: '<div><b>新橋営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 10:00-19:00</div>',\n\
          popUpType: 1, markerType: 1, popUpVisible: false },\n\
        { name: '豊洲配送事業所', lon: 139.7959191978587, lat: 35.655211407306176,\n\
          text: '<div\"><b>豊洲配送事業所</b><br>tel 03-XXXX-XXXX</div>',\n\
          popUpType: 2, imageUrl:'./img/b.gif', width:48, height:48, x:-24, y:-30, popUpVisible: true },\n\
        { name: '有明駅営業所', lon: 139.79315890678254, lat: 35.63467955160454,\n\
          text: '<div><b>有明駅営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 11:00-21:00</div>',\n\
          popUpType: 1, markerType: 1, popUpVisible: false },\n\
        { name: '品川営業所', lon: 139.73875357500563, lat: 35.62850770123775,\n\
          text: '<div><b>品川営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-19:00</div>',\n\
          popUpType: 1, markerType: 1, popUpVisible: true },\n\
        { name: '渋谷営業所', lon: 139.70134957426947, lat: 35.65864567145413,\n\
          text: '<div><b>渋谷営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 8:00-21:00</div>',\n\
          popUpType: 1, markerType: 1, popUpVisible: true },\n\
        { name: '新宿営業所', lon: 139.70090283767686, lat: 35.68851826791775,\n\
          text: '<div><b>新宿営業所</b><br>tel 03-XXXX-XXXX<br>営業時間 ２４時間営業</div>',\n\
          popUpType: 1, markerType: 6, popUpVisible: false }\n\
      ];\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // マーカーとポップアップ作成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        // ポップアップのフィーチャー識別子作成および条件を設定します。\n\
        var id1 = 'popup_'+i;\n\
        var opt1 = {\n\
          size : new Mfapi.Util.ScreenSize(180,80),\n\
          popUpType : pointData[i].popUpType,\n\
          contentHtml : pointData[i].text,\n\
          visible : pointData[i].popUpVisible\n\
        };\n\
\n\
        // ポップアップを作成します。\n\
        Mfapi.Features.createPopUp(opt1, id1);\n\
\n\
        // マーカーのフィーチャー識別子作成および条件を設定します。\n\
        var id2 = 'marker_'+i;\n\
        var opt2 = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          popUpKey : id1\n\
        };\n\
        if( pointData[i].imageUrl !== undefined ) {\n\
          opt2.imageUrl = pointData[i].imageUrl;\n\
          opt2.imageSize = new Mfapi.Util.ScreenSize(pointData[i].width, pointData[i].height);\n\
          opt2.imageOffset = new Mfapi.Util.ScreenPoint(pointData[i].x, pointData[i].y);\n\
          opt2.imageOpacity = 0.8;\n\
        } else {\n\
          opt2.markerType = pointData[i].markerType;\n\
        }\n\
\n\
        // マーカーを作成し、レイヤーに追加します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(opt2, id2);\n\
      }\n\
\n\
      // 地図移動開始イベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMapMoveStart = mapMoveStart;\n\
\n\
      // 地図移動終了イベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMapMoveEnd = mapMoveEnd;\n\
\n\
    }\n\
\n\
    //### 地図移動開始イベントのコールバック関数 ###\n\
    function mapMoveStart(){\n\
      // 地図移動開始時に表示中のポップアップの識別子を格納します。\n\
      // 地図移動終了時に配列に格納されている識別子のポップアップのみ表示させます。\n\
      // 識別子格納後、ポップアップ一括非表示処理メソッドを呼び出します。\n\
      visiblePopUpList = [];\n\
      var popUp = Mfapi.Features.PopUp;\n\
      if (popUp) {\n\
        for (var popUpKey in popUp) {\n\
          // ポップアップの表示状態を取得します。\n\
          // ポップアップの場合のみdivのIDがポップアップ作成時に設定したフィーチャー識別子となります。\n\
          // ポップアップが非表示の時はstyleのdisplay値が'none'となりますので、'none'以外のものをリストに格納します。\n\
          var popUpDiv = document.getElementById(popUpKey);\n\
          if (!popUpDiv) continue;\n\
          if (popUpDiv.style.display != 'none') {\n\
            visiblePopUpList.push(popUpKey);\n\
          }\n\
        }\n\
      }\n\
      Mfapi.Map.hidePopUpAll();\n\
    }\n\
\n\
    //### 地図移動終了イベントのコールバック関数 ###\n\
    // 地図移動開始イベントで表示されているポップアップの識別子リスト(visiblePopUpList)に格納された識別子を表示させます。\n\
    function mapMoveEnd(){\n\
      var len = visiblePopUpList.length;\n\
      var popUp = Mfapi.Features.PopUp;\n\
      if (popUp) {\n\
        for (var i=0; i<len; i++) {\n\
          if (!popUp[visiblePopUpList[i]]) continue;\n\
          popUp[visiblePopUpList[i]].setVisible(true);\n\
        }\n\
      }\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_2.html"
},

{
title: "5-3.地図縮尺変更イベント",
sum: "<p>地図の縮尺を変更したときに発生するイベントを使ったコードが確認できます。</p>",
detail: "\
本サンプルでは、地図縮尺変更イベント機能を用いて、地図の縮尺を変更すると、縮尺を表示するコードが確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-3.地図縮尺変更イベント】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
  #sample_map {\n\
    width: 660px;\n\
    height: 280px;\n\
  }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      var shinjukuStation = {lon: 139.70030321482975, lat:35.68955994193983};\n\
      var targetLonLat = shinjukuStation;\n\
\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : targetLonLat,\n\
        mapScale : 12\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーを追加します。\n\
      var markerLayerId = \"mlaryer1\";\n\
      Mfapi.Map.addMarkerLayer(markerLayerId);\n\
      var markerLayer = Mfapi.Map.MarkerLayer[markerLayerId];\n\
\n\
      // ポップアップを作成します。\n\
      var popupId = \"p1\";\n\
      Mfapi.Features.createPopUp(\n\
          {\n\
            contentHtml : \"スケールを変更してください。\"\n\
          }\n\
          , popupId\n\
      );\n\
      var popup = Mfapi.Features.getObject(popupId);\n\
\n\
      // マーカーを作成します。\n\
      var markerId = \"m1\";\n\
      markerLayer.addMarker(\n\
          {\n\
              position : options.centerPosition\n\
              , popUpKey : popupId\n\
          }\n\
          , markerId\n\
      );\n\
\n\
      // 地図縮尺変更イベントのコールバック関数を設定します。\n\
      Mfapi.Events.onChangedMapScale = function(scale) {\n\
        popup.setOptions({\n\
          contentHtml : \"スケールが「\" + scale + \"」に変更されました。\",\n\
          visible : true\n\
        });\n\
      };\n\
\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_3.html"
},

{
title: "5-4.マウスムーブイベント",
sum: "<p>地図上でマウスを移動させたときに発生するイベントを使ったコードが確認できます。</p>",
detail: "\
本サンプルでは、マウスムーブイベント機能を用いて、マウスカーソルが指した地点の緯度経度をリアルタイムに表示する機能を実現しています。<br>\
なお、マウスムーブイベント機能を利用する場合は、\
Mfapi.Events.setEnableToUseMapMouseMoveEvent(true)を実行する必要があります。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-4.マウスムーブイベント】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
  #sample_map {\n\
    width: 660px;\n\
    height: 280px;\n\
  }\n\
  </style>\n\
  <!--緯度経度情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #lonlat_info {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 150px;\n\
      top: 245px;\n\
      height: 18px;\n\
    }\n\
    .lonlat_value {\n\
      width: 280px;\n\
      background-color: #eeeeee;\n\
      font-family: monospace;\n\
      font-size: 10pt;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        mapOperationEnable: true,\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 12\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // 地図マウスムーブイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMapMouseMove = mapMouseMove;\n\
      Mfapi.Events.setEnableToUseMapMouseMoveEvent(true);\n\
\n\
    }\n\
\n\
    //### 地図マウスムーブイベントのコールバック関数 ###\n\
    function mapMouseMove(screenPosition,mapPosition) {\n\
      // 緯度経度のフォーマット処理の関数を定義します。\n\
      var formatDegree = function(value) {\n\
        return value.toFixed(8);\n\
      };\n\
      // 緯度経度を表示します。\n\
      document.getElementById('lonlat').value\n\
          = '経度:{lon} 緯度:{lat}'\n\
            .replace('{lon}', formatDegree(mapPosition.lon))\n\
            .replace('{lat}', formatDegree(mapPosition.lat))\n\
      ;\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
  <!--経度緯度情報表示DIVタグ-->\n\
  <div id='lonlat_info'>\n\
    <p><input type='text' id='lonlat' class='lonlat_value' readonly></p>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_4.html"
},

{
title: "5-5.マーカークリック",
sum: "<p>マーカー上で左ボタンをクリックしたときに発生するイベントを使ったコードが確認できます。</p>",
detail: "\
本サンプルでは、マーカークリックイベント機能を用いて、マーカー上をクリックしたら、オリジナルデザインの\
ポップアップを表示する機能を実現しています。\
また、指定した緯度経度に地図を少しずつスクロールする処理のコードも確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-5.マーカークリック】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      position: absolute;\n\
      left: 0px;\n\
      top: 0px;\n\
      width: 660px;\n\
      height: 280px;\n\
      margin: 0px;\n\
    }\n\
    #popup_base {\n\
      margin: 0px;\n\
      position: absolute;\n\
      top: 0px;\n\
      left: 0px;\n\
      width: 660px;\n\
      height: 280px;\n\
      z-index: 5000001;\n\
      visibility : hidden;\n\
      background-color: rgba(0,0,0,0.4);\n\
      filter:progid:DXImageTransform.Microsoft.Gradient(\n\
       GradientType=0,StartColorStr=#44000000,EndColorStr=#44000000);\n\
    }\n\
    #popup {\n\
      position: absolute;\n\
      left: 170px;\n\
      top: 20px;\n\
      width: 320px;\n\
      height: 160px;\n\
      margin: 0px;\n\
    }\n\
    .popup_content {\n\
      position: absolute;\n\
      padding: 30px;\n\
      left: 0px;\n\
      top: 0px;\n\
      margin: 0px;\n\
    }\n\
    .item1 {\n\
      position: absolute;\n\
      left: 10px;\n\
      top: 10px;\n\
      color: white;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 地点リスト ###\n\
    var pointData = [\n\
      { name: '東京駅', lon: 139.7672311841094, lat: 35.68119593467379,\n\
        text:'とうきょうえき が クリックされた！' },\n\
      { name: '新橋駅', lon: 139.75821002138233, lat: 35.66657238126213,\n\
        text:'しんばしえき が クリックされた！' },\n\
      { name: '豊洲駅', lon: 139.7959191978587, lat: 35.655211407306176,\n\
        text:'とよすえき が クリックされた！' },\n\
      { name: '有明駅', lon: 139.79315890678254, lat: 35.63467955160454,\n\
        text:'ありあけえき が クリックされた！' },\n\
      { name: '品川駅', lon: 139.73875357500563, lat: 35.62850770123775,\n\
        text:'しながわえき が クリックされた！' },\n\
      { name: '渋谷駅', lon: 139.70134957426947, lat: 35.65864567145413,\n\
        text:'しぶやえき が クリックされた！' },\n\
      { name: '新宿駅', lon: 139.70090283767686, lat: 35.68851826791775,\n\
        text:'しんじゅくえき が クリックされた！' }\n\
    ];\n\
\n\
    //### ポップアップの表示位置に関する定義 ###\n\
    // 本サンプルでは、ポップアップ表示時、ポップアップが画面中心付近で、その下にマーカーが表示される\n\
    // ように地図を移動します。このとき、マーカーの緯度経度を基準として、地図中心座標の上方向にシフト\n\
    // する量をピクセル値で指定します。\n\
    var mapX0 = 330;  // 地図DIVタグの中心座標X値\n\
    var mapY0 = 140;  // 地図DIVタグの中心座標Y値\n\
    var mapOffsetY = 60;  // 表示位置下オフセット量\n\
\n\
    //### 地図座標移動のアニメ効果に関する定義 ###\n\
    // 本サンプルでは、現在地から指定された緯度経度に徐々にスクロールする関数\"smoothMovePosition\"\n\
    // を用意します。ここで定義するパラメータによって、コマ数や表示速度を指定します。\n\
    var posArrayCount = 10;  // 移動コマ数\n\
    var deltaTime = 10;  // １コマあたりの時間。単位はms。\n\
\n\
    //### マーカーに関する定義 ###\n\
    var iconSizeX = 84, iconSizeY = 100;  // マーカー画像のサイズ\n\
    var iconOffsetX = -42, iconOffsetY = -92;  // マーカー画像のオフセット\n\
    var iconImageUrl = './img/c.png';  // マーカー画像のURL\n\
\n\
    //### その他変数 ###\n\
    var popupShow = false;  // ポップアップ表示の状態変数\n\
    var posArray = [];  // 地図座標移動のアニメ効果における座標配列\n\
    var callbackForMovPos = null;  // 地図座標移動のアニメ効果で使うコールバック関数\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        mapStyle : 'rpg_pc',\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // マーカーを作成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
\n\
        // マーカー　フィーチャー識別子作成および条件を設定します。\n\
        var id = 'marker#'+i;\n\
        var opt = {\n\
          position : new Mfapi.Util.LonLat(pointData[i].lon, pointData[i].lat),\n\
          imageUrl : iconImageUrl,\n\
          imageSize : new Mfapi.Util.ScreenSize(iconSizeX, iconSizeY),\n\
          imageOffset : new Mfapi.Util.ScreenPoint(iconOffsetX, iconOffsetY),\n\
          imageOpacity : 1.0\n\
        };\n\
\n\
        // マーカーを作成しレイヤーに追加します。\n\
        Mfapi.Map.MarkerLayer['mLayer'].addMarker(opt, id);\n\
      }\n\
\n\
      // マーカークリックイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMarkerClick = markerClick;\n\
\n\
      // 地図クリックイベントのコールバック関数を設定します。\n\
      //\n\
      // ポップアップを消す処理のInternet Explorer向けの対策です。\n\
      // (解説)\n\
      // 　ポップアップが表示されるとき、下記優先順位で表示しています。\n\
      // 　　①ポップアップコンテンツ(ID=popup_contentのDIVタグ)\n\
      // 　　②ポップアップ画像(IMAGEタグ)\n\
      // 　　③ポップアップベース(ID=popup_baseのDIVタグ。黒い半透明の地図と同じ大きさの矩形)\n\
      // 　　④地図(ID=sample_mapのDIVタグ)\n\
      // 　　　→①、②は③の子階層に属しているため、③、④より上に表示します。\n\
      // 　　　　①は②と同階層ですが、HTMLファイル上、②の後に記述されているため、②より上に表示します。\n\
      // 　　　　③は④と同階層ですが、z-indexを設定して、④より上に表示されるようにしています。\n\
      // 　　　　なお、HTMLファイル上は③のほうが④より後に記述されています。\n\
      // 　これに対し、以下のイベント登録を実施します。(下方のDIVの記述参照）\n\
      // 　　DIVタグ③：マウスダウン検出でポップアップを消す関数hidePopupを呼びます。\n\
      // 　この実装によって、ポップアップ表示後、黒い半透明部分とその子階層のポップアップ自身上で\n\
      // 　マウスダウンを検出したら、ポップアップが消える仕様を実現しています。\n\
      // 　しかし、Internet Explorer8等では、同一階層に複数DIVが存在している場合は、\n\
      // 　z-indexで指定した表示優先順位が考慮されず、HTMLファイル上で最初に記述されているDIVが\n\
      //   マウスイベントを先に取得する動作となります。そのため、③にイベントが伝播しない問題あります。\n\
      //   そこで、④でマウスダウンの代わりにクリックイベント時に関数hidePopupを呼ぶようにしています。\n\
      Mfapi.Events.onMapClick = hidePopup;\n\
\n\
    }\n\
\n\
    //### マーカークリックイベントのコールバック関数 ###\n\
    function markerClick(screenPosition,mapPosition,featureId,directAction) {\n\
\n\
      // ポップアップを消す処理のInternet Explorer向けの対策です。\n\
      if(popupShow==true) {\n\
        hidePopup();\n\
        return;\n\
      }\n\
\n\
      // クリックされたマーカーの番号を取得します。\n\
      var i = parseInt(featureId.substr(7,featureId.length-7));\n\
\n\
      // ポップアップで表示するテキストを設定します。\n\
      document.getElementById('popup_label').innerHTML=pointData[i].text;\n\
\n\
      //### スクロール後の地図中心緯度経度の計算 ###\n\
      // マーカーが画面中心から｢offsetPopupY｣ピクセル分下に表示することを前提に、中心緯度経度を計算します。\n\
      // 　①地図中心の緯度経度を取得\n\
      // 　②画像中心のスクリーン座標から｢offsetPopupY｣ピクセル分オフセットした座標を緯度経度に変換\n\
      // 　③①、②の結果から緯度方向の差分を計算\n\
      // 　④該当マーカーの座標を取得\n\
      // 　⑤④の座標から③の値分オフセットした緯度経度を計算\n\
      var mapPoint0 = Mfapi.Map.getCenterPosition();\n\
      var mapPoint1 = Mfapi.Map.getLonLatFromScreenPosition(new Mfapi.Util.ScreenPoint(mapX0,mapY0+mapOffsetY));\n\
      var deltaLat = mapPoint1.lat - mapPoint0.lat;\n\
      var markerPoint = Mfapi.Features.Marker[featureId].getPosition();\n\
      var newMapPoint = new Mfapi.Util.LonLat(markerPoint.lon,markerPoint.lat-deltaLat);\n\
\n\
      // 地図スクロールアニメ処理の呼び出します。\n\
      // アニメ処理が完了したら呼び出すコールバック関数として\"showPopup\"(ポップアップ表示処理)を指定します。\n\
      smoothMovePosition(newMapPoint,showPopup);\n\
    }\n\
\n\
    //### ポップアップ表示処理 ###\n\
    function showPopup() {\n\
      if( popupShow == false ) {\n\
        document.getElementById('popup_base').style.visibility = 'visible';\n\
        popupShow = true;\n\
      }\n\
    }\n\
\n\
    //### ポップアップ非表示処理 ###\n\
    function hidePopup() {\n\
      if( popupShow == true ) {\n\
        document.getElementById('popup_base').style.visibility = 'hidden';\n\
        popupShow = false;\n\
      }\n\
    }\n\
\n\
    //### 地図スクロールアニメ処理 ###\n\
    // タイマー機能を使って、指定された緯度経度に少しずつ移動する機能です。\n\
    // この関数では補間点を計算して、タイマーで処理を繰り返す移動処理を呼び出します。\n\
    function smoothMovePosition(newPos,callback) {\n\
\n\
      // 現在の緯度経度を取得します。\n\
      var oldPos = Mfapi.Map.getCenterPosition();\n\
\n\
      // 指定された緯度経度と現在の緯度経度を比較します。\n\
      // ピクセル単位で移動量がゼロの場合、指定されたコールバック関数を呼び出します。\n\
      var newScreenPos = Mfapi.Map.getScreenPositionFromLonLat(newPos);\n\
      var oldScreenPos = Mfapi.Map.getScreenPositionFromLonLat(oldPos);\n\
      if( parseInt(newScreenPos.x) == parseInt(oldScreenPos.x)\n\
       && parseInt(newScreenPos.y) == parseInt(oldScreenPos.y) ) {\n\
        callback();\n\
      }\n\
\n\
      // 補間点を計算します。\n\
      for( var i=0; i<posArrayCount; i++) {\n\
        posArray[i] = new Mfapi.Util.LonLat(\n\
          oldPos.lon+(i+1)/posArrayCount*(newPos.lon-oldPos.lon),\n\
          oldPos.lat+(i+1)/posArrayCount*(newPos.lat-oldPos.lat));\n\
      }\n\
\n\
      // コールバック関数を変数に格納します。\n\
      callbackForMovPos = callback;\n\
\n\
      // 地図移動処理の呼び出します。\n\
      moveTimerFunc(0);\n\
    }\n\
\n\
    //### 地図移動処理 ###\n\
    function moveTimerFunc(index) {\n\
\n\
      // 地図中心緯度経度の移動とインデックス更新を行います。\n\
      Mfapi.Map.setCenterPosition(posArray[index++]);\n\
\n\
      // 移動処理が全て完了したら、指定されたコールバック関数を呼び出します。\n\
      if(index>=posArray.length) {\n\
        if( callbackForMovPos!= null )\n\
          callbackForMovPos();\n\
\n\
      // 移動処理が完了してなければ、再度タイマー処理で、本処理を呼び出します。\n\
      } else {\n\
        var funcText = \"moveTimerFunc(\"+index+\")\";\n\
        setTimeout(funcText, deltaTime);\n\
      }\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
  <div id='popup_base' onmousedown='hidePopup();'>\n\
    <div id='popup'>\n\
      <div><img src='img/d.png'></div>\n\
      <div id='popup_content'><label id='popup_label' class='item1' /></div>\n\
    </div>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_5.html"
},

{
title: "5-6.マーカー移動（マウス操作）",
sum: "<p>マウス操作によるマーカー移動のサンプルコードが確認できます。</p>",
detail: "\
ドラッグ＆ドロップによる移動操作で、マーカーの座標を更新することができます。\
また、移動操作中、マーカーを画面の枠付近に移動すると、地図がスクロールするようになっています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-6.マーカー移動（マウス操作）】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      position: absolute;\n\
      left: 10px;\n\
      top: 10px;\n\
      width: 640px;\n\
      height: 260px;\n\
      margin: 0px;\n\
    }\n\
    #face_layer {\n\
      position: absolute;\n\
      top: 10px;\n\
      left: 10px;\n\
      width: 640px;\n\
      height: 260px;\n\
      margin: 0px;\n\
      z-index: 5000001;\n\
      display: none;\n\
      background-color: #808080;\n\
      opacity: 0.2;\n\
      filter: alpha(opacity=20);\n\
    }\n\
    #moving_marker {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 0px;\n\
      top: 0px;\n\
      display: none;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### マーカー移動（マウス操作）###\n\
    // 処理フロー解説：\n\
    //   ①地図のマーカーレイヤーに、全マーカーを登録します。\n\
    //   ②マーカーのクリックを検出したら、対象マーカーを地図のマーカーレイヤーから削除し、地図全体を\n\
    //     覆う\"face_layer\"タグと移動中のマーカーを示す\"moving_marker\"タグを表示します。\n\
    //   ③\"face_layer\"タグ上でマウスムーブイベントを検出したら、\"moving_marker\"タグを移動させます。\n\
    //     このとき、地図画面枠付近にきたら、地図がスクロールする処理を有効にします。\n\
    //   ④\"face_layer\"タグ上でマウスアップイベントを検出したら、\"face_layer\"タグと\"moving_marker\"タグ\n\
    //     を非表示とした後、緯度経度を更新して、地図のマーカーレイヤーに再登録します。\n\
\n\
    //### 地点リスト ###\n\
    var pointData = [\n\
      { name: '東京駅', lon: 139.7672311841094, lat: 35.68119593467379 },\n\
      { name: '新橋駅', lon: 139.75821002138233, lat: 35.66657238126213 },\n\
      { name: '豊洲駅', lon: 139.7959191978587, lat: 35.655211407306176 },\n\
      { name: '有明駅', lon: 139.79315890678254, lat: 35.63467955160454 },\n\
      { name: '品川駅', lon: 139.73875357500563, lat: 35.62850770123775 },\n\
      { name: '渋谷駅', lon: 139.70134957426947, lat: 35.65864567145413 },\n\
      { name: '新宿駅', lon: 139.70090283767686, lat: 35.68851826791775 }\n\
    ];\n\
\n\
    //### マーカーに関する定義 ###\n\
    var markerSizeX = 84, markerSizeY = 100;  // マーカー画像のサイズ\n\
    var markerOffsetX = -43, markerOffsetY = -91;  // マーカー画像のオフセット\n\
    var markerImageUrl = './img/c.png';  // マーカー画像のURL\n\
\n\
    //### マーカードラッグに関する共通変数 ###\n\
    var dragFlag = false;  // ドラッグモードフラグ\n\
    var dragOffsetX, dragOffsetY;  // ドラッグ開始時のマーカー上でのオフセット座標\n\
    var dragObj = null;  // ドラッグ時に表示するDIVオブジェクト\n\
    var faceLayerObj = null;  // フェイスレイヤーDIVオブジェクト(ドラッグ時に地図を覆う半透明のDIV)\n\
    var prevPointerX, prevPointerY;  // カーソル座標の保存値\n\
    var targetIndex = -1; // 移動対象のマーカーの識別番号(識別子の番号部分)\n\
    var targetMarkerPos = null;  // 移動対象のマーカータップ時のスクリーン座標\n\
\n\
    //### マーカーの移動範囲および地図スクロールに関する定義 ###\n\
    var mapWidth = 640, mapHeight = 260;  // 地図DIVタグのサイズ\n\
    var pointerXMin = -markerOffsetX;  // ポインターX最小値\n\
    var pointerXMax = mapWidth-1-markerSizeX-markerOffsetX;  // ポインターX最大値\n\
    var pointerYMin = -markerOffsetY;  // ポインターY最小値\n\
    var pointerYMax = mapHeight-1-markerSizeY-markerOffsetY;  // ポインターY最大値\n\
    var mapScrollIntevalTime = 100;  // 地図スクロールの処理間隔（単位:ms）\n\
    var mapScrollEdgeX = 0.1;  // スクロール枠水平方向の範囲定数(0.1ならば、画面の左右10%が枠部分となる)\n\
    var mapScrollEdgeY = 0.1;  // スクロール枠垂直方向の範囲定数(0.1ならば、画面の上下10%が枠部分となる)\n\
    var mapScrollDeltaX = 20;  // １回の処理での水平方向のスクロール量(単位:ピクセル)\n\
    var mapScrollDeltaY = 20;  // １回の処理での垂直方向のスクロール量(単位:ピクセル)\n\
\n\
    //### 地図スクロールに関する共通変数 ###\n\
    var mapScrollDx=0, mapScrollDy=0;  // スクロール移動方向(=-1/0/+1)\n\
    var intervalId=null;  // タイマー処理のID\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        mapStyle : 'rpg_pc',\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // マーカーを作成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
        addMarker(i);\n\
      }\n\
\n\
      // マーカーポインタースタートイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMarkerPointerStart = markerPointerStart;\n\
\n\
      // ドラッグ時のマーカー、フェイスレイヤーのDIVオブジェクトを取得します。\n\
      faceLayerObj = document.getElementById('face_layer');\n\
      dragObj = document.getElementById(\"moving_marker\");\n\
\n\
      // フェイスレイヤーDIVタグのイベントハンドラーを設定します。\n\
      // ポインターイベントが使える場合はポインターイベントを、それ以外はマウスイベントを使います。\n\
      if(navigator.msPointerEnabled) {\n\
        faceLayerObj.onpointermove=faceLayerPointerMove;\n\
        faceLayerObj.onpointerup=faceLayerPointerEnd;\n\
      } else {\n\
        faceLayerObj.onmousemove=faceLayerPointerMove;\n\
        faceLayerObj.onmouseup=faceLayerPointerEnd;\n\
      }\n\
    }\n\
\n\
    //### マーカーポインタースタートイベントのコールバック関数 ###\n\
    function markerPointerStart(screenPosition,mapPosition,featureId,directAction,buttonType) {\n\
\n\
      // 左ボタン以外の場合、本処理を実施しません。\n\
      if(buttonType!='left') return;\n\
\n\
      // ドラッグモードフラグを有効にします。\n\
      dragFlag = true;\n\
\n\
      // フェイスレイヤーを表示します。\n\
      faceLayerObj.style.display='block';\n\
\n\
      // 選択したマーカーの識別番号(識別子の数値部分)を保存します。\n\
      targetIndex = parseInt(featureId.substr(7));\n\
\n\
      // 選択したマーカーの緯度経度(ピンの先部分)を取得し、スクリーン座標に変換します。\n\
      targetMarkerPos = Mfapi.Map.getScreenPositionFromLonLat(Mfapi.Features.Marker[featureId].getPosition());\n\
\n\
      // 選択したマーカーを、一旦、Mfapiのマーカーレイヤーから削除します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].removeFeature(featureId);\n\
\n\
      // ドラッグ中に表示するマーカー左上のスクリーン座標を設定します。\n\
      dragObj.style.left = (targetMarkerPos.x +markerOffsetX +parseInt(faceLayerObj.offsetLeft)) +'px';\n\
      dragObj.style.top = (targetMarkerPos.y +markerOffsetY +parseInt(faceLayerObj.offsetTop)) +'px';\n\
\n\
      // ドラッグ中に表示するマーカーを表示します。\n\
      dragObj.style.display='block';\n\
\n\
      // マーカー左上座標とポインターのカーソル座標の差分を保存します。\n\
      dragOffsetX = screenPosition.x - targetMarkerPos.x;\n\
      dragOffsetY = screenPosition.y - targetMarkerPos.y;\n\
\n\
      // ポインターのカーソル座標を保存します。\n\
      prevPointerX = screenPosition.x;\n\
      prevPointerY = screenPosition.y;\n\
    }\n\
\n\
    //### フェイスレイヤー　ポインタームーブ(マウスムーブ)のイベントハンドラー ###\n\
    function faceLayerPointerMove(objEvent) {\n\
\n\
      //### Internet Explorer対応(イベント情報がwindow.eventで渡される場合を考慮) ###\n\
      objEvent = objEvent || window.event;\n\
\n\
      // ドラッグモードフラグ無効時の処理を行います。(例外対応)\n\
      if(!dragFlag) {\n\
        stopMapScroll();\n\
        return false;\n\
      }\n\
\n\
      // ポインターのカーソル座標を計算します。\n\
      var pointerX = calcPointerX(objEvent);\n\
      var pointerY = calcPointerY(objEvent);\n\
\n\
      // ドラッグ中に表示するマーカー左上のスクリーン座標を設定します。\n\
      var dragObjX = parseInt(dragObj.offsetLeft) + pointerX - prevPointerX;\n\
      var dragObjY = parseInt(dragObj.offsetTop) + pointerY - prevPointerY;\n\
      dragObj.style.left = dragObjX + \"px\";\n\
      dragObj.style.top = dragObjY + \"px\";\n\
\n\
      // 地図スクロール制御処理を呼びます。\n\
      mapScrollCtrl(dragObjX,dragObjY);\n\
\n\
      // ポインターのカーソル座標を保存します。\n\
      prevPointerX = pointerX;\n\
      prevPointerY = pointerY;\n\
\n\
      return false;\n\
    }\n\
\n\
    //### フェイスレイヤー　ポインターエンド(マウスアップ)のイベントハンドラー ###\n\
    function faceLayerPointerEnd(objEvent){\n\
\n\
      //### Internet Explorer対応(イベント情報がwindow.eventで渡される場合を考慮) ###\n\
      objEvent = objEvent || window.event;\n\
\n\
      // ドラッグモードフラグ無効時の処理を行います。(例外対応)\n\
      if(!dragFlag) {\n\
        stopMapScroll();\n\
        return false;\n\
      }\n\
\n\
      // ポインターのカーソル座標を計算します。\n\
      var pointerX = calcPointerX(objEvent);\n\
      var pointerY = calcPointerY(objEvent);\n\
\n\
      // フェイスレイヤーを非表示にします。\n\
      faceLayerObj.style.display='none';\n\
\n\
      // ドラッグ中に表示するマーカーを非表示にします。\n\
      dragObj.style.display='none';\n\
\n\
      // マーカーの緯度経度(ピンの先部分)を計算し、地点データを更新します。\n\
      var markerScreenPos = new Mfapi.Util.ScreenPoint( pointerX-dragOffsetX, pointerY-dragOffsetY );\n\
      var markerMapPos = Mfapi.Map.getLonLatFromScreenPosition( markerScreenPos );\n\
      pointData[targetIndex].lon = markerMapPos.lon;\n\
      pointData[targetIndex].lat = markerMapPos.lat;\n\
\n\
      // マーカーを追加します。\n\
      addMarker(targetIndex);\n\
\n\
      // 地図スクロールを停止します。\n\
      stopMapScroll();\n\
\n\
      // ドラッグモードフラグを無効にします。\n\
      dragFlag = false;\n\
\n\
      return false;\n\
    }\n\
\n\
    //### 地図スクロール制御処理 ###\n\
    // ドラッグしているマーカーが地図の｢枠｣付近にいる場合、地図をスクロールさせる機能です。\n\
    // 枠付近と判断した場合、スクロール方向をmapScrollDx,mapScrollDyに設定します。\n\
    // mapScrollDx,mapScrollDyがゼロでない場合、タイマーでスクロール処理を繰り返します。\n\
    function mapScrollCtrl(dragObjX,dragObjY) {\n\
\n\
      // 水平方向のスクロール判定を行います。\n\
      if( dragObjX < mapWidth * mapScrollEdgeX ) mapScrollDx = -1;\n\
      else if( dragObjX +markerSizeX > mapWidth *(1-mapScrollEdgeX)) mapScrollDx = +1;\n\
      else mapScrollDx = 0;\n\
\n\
      // 垂直方向のスクロール判定を行います。\n\
      if( dragObjY < mapHeight * mapScrollEdgeY ) mapScrollDy = -1;\n\
      else if( dragObjY +markerSizeY > mapHeight *(1-mapScrollEdgeY)) mapScrollDy = +1;\n\
      else mapScrollDy = 0;\n\
\n\
      // スクロール処理を行います。\n\
      if( mapScrollDx!=0 || mapScrollDy!=0 ) {\n\
\n\
        if(intervalId==null) {\n\
          intervalId = window.setInterval( function () {\n\
            var center = new Mfapi.Util.ScreenPoint(\n\
              mapWidth/2+mapScrollDx*mapScrollDeltaX, mapHeight/2+mapScrollDy*mapScrollDeltaY );\n\
            Mfapi.Map.setCenterPosition( Mfapi.Map.getLonLatFromScreenPosition(center) );\n\
          }, mapScrollIntevalTime );\n\
        }\n\
\n\
      } else {\n\
        stopMapScroll();\n\
      }\n\
    }\n\
\n\
    //### 地図スクロール停止処理 ###\n\
    function stopMapScroll() {\n\
      // タイマーを無効にします。\n\
      if(intervalId!=null) {\n\
        window.clearInterval(intervalId);\n\
        intervalId = null;\n\
      }\n\
      // スクロール方向の変数をリセットします。\n\
      mapScrollDx=0;\n\
      mapScrollDy=0;\n\
    }\n\
\n\
    //### ポインタースクリーン座標Xの計算 ###\n\
    function calcPointerX(objEvent) {\n\
\n\
      // イベントパラメータから座標を計算します。\n\
      var pointerX = parseInt(objEvent.clientX)-parseInt(faceLayerObj.offsetLeft);\n\
\n\
      // 地図の範囲外の場合、最小値または最大値を設定します。\n\
      if( pointerX <= pointerXMin+dragOffsetX ) pointerX = pointerXMin+dragOffsetX;\n\
      if( pointerX >= pointerXMax+dragOffsetX ) pointerX = pointerXMax+dragOffsetX;\n\
\n\
      return pointerX;\n\
    }\n\
\n\
    //### ポインタースクリーン座標Yの計算 ###\n\
    function calcPointerY(objEvent) {\n\
\n\
      // イベントパラメータから座標を計算します。\n\
      var pointerY = parseInt(objEvent.clientY)-parseInt(faceLayerObj.offsetTop);\n\
\n\
      // 地図の範囲外の場合、最小値または最大値を設定します。\n\
      if( pointerY <= pointerYMin+dragOffsetY ) pointerY = pointerYMin+dragOffsetY;\n\
      if( pointerY >= pointerYMax+dragOffsetY ) pointerY = pointerYMax+dragOffsetY;\n\
\n\
      return pointerY;\n\
    }\n\
\n\
    //### マーカー追加処理 ###\n\
    function addMarker(index) {\n\
\n\
      // マーカー　フィーチャー識別子作成および条件を設定します。\n\
      var id = 'marker#'+index;\n\
      var opt = {\n\
        position : new Mfapi.Util.LonLat(pointData[index].lon, pointData[index].lat),\n\
        imageUrl : markerImageUrl,\n\
        imageSize : new Mfapi.Util.ScreenSize(markerSizeX, markerSizeY),\n\
        imageOffset : new Mfapi.Util.ScreenPoint(markerOffsetX, markerOffsetY),\n\
        imageOpacity : 0.7\n\
      };\n\
\n\
      // マーカーを作成しレイヤーに追加します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(opt, id);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='face_layer'></div>\n\
  <div id='sample_map'></div>\n\
  <img src='img/c.png' id='moving_marker' ondragstart=\"return false\">\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_6.html"
},

{
title: "5-7.マーカー移動（タッチ操作）",
sum: "<p>タッチ操作によるマーカー移動のサンプルコードが確認できます。</p>",
detail: "\
iOS/Android OSのスマートフォンおよびタブレットにて、マーカーをタップして対象の透明度が\
変わったことを確認後、再びタッチ＆スライドする操作によりマーカーの座標を更新することができます。\
また、移動操作中、マーカーを画面の枠付近に移動すると、地図がスクロールするようになっています。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-7.マーカー移動（タッチ操作）】</title>\n\
  <style type=\"text/css\">\n\
    body, html {\n\
      overflow: hidden;\n\
      height: 100%;\n\
    }\n\
    #sample_map {\n\
      position: absolute;\n\
      left: 10px;\n\
      top: 10px;\n\
      width: 640px;\n\
      height: 260px;\n\
      margin: 0px;\n\
    }\n\
    #face_layer {\n\
      position: absolute;\n\
      top: 10px;\n\
      left: 10px;\n\
      width: 640px;\n\
      height: 260px;\n\
      margin: 0px;\n\
      z-index: 5000001;\n\
      display: none;\n\
      background-color: #808080;\n\
      opacity: 0.2;\n\
      filter: alpha(opacity=20);\n\
      -webkit-touch-callout:none;\n\
      -webkit-user-select:none;\n\
    }\n\
    #moving_marker {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 0px;\n\
      top: 0px;\n\
      display: none;\n\
      -webkit-touch-callout:none;\n\
      -webkit-user-select:none;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### マーカー移動（タッチ操作）###\n\
    // 処理フロー解説：\n\
    //   ①地図のマーカーレイヤーに、全マーカーを登録します。\n\
    //   ②マーカーのタップを検出したら、対象マーカーを地図のマーカーレイヤーから削除し、地図全体を覆う\n\
    //     \"face_layer\"タグと移動中のマーカーを示す\"moving_marker\"タグを表示します。\n\
    //   ③\"face_layer\"タグ上でタッチスタートイベントを検出し、それが\"moving_marker\"タグの表示範囲外の\n\
    //     場合、\"face_layer\"タグと\"moving_marker\"タグを非表示として、緯度経度を更新して、地図のマー\n\
    //     カーレイヤーに同じ位置で再登録します。\n\
    //   ④\"face_layer\"タグ上でタッチムーブイベントを検出したら、\"moving_marker\"タグを移動させます。\n\
    //     このとき、地図画面枠付近にきたら、地図がスクロールする処理を有効にします。\n\
    //   ⑤\"face_layer\"タグ上でタッチエンドイベントを検出したら、\"face_layer\"タグと\"moving_marker\"タグ\n\
    //     を非表示とした後、緯度経度を更新して、地図のマーカーレイヤーに再登録します。\n\
\n\
    //### 地点リスト ###\n\
    var pointData = [\n\
      { name: '東京駅', lon: 139.7672311841094, lat: 35.68119593467379 },\n\
      { name: '新橋駅', lon: 139.75821002138233, lat: 35.66657238126213 },\n\
      { name: '豊洲駅', lon: 139.7959191978587, lat: 35.655211407306176 },\n\
      { name: '有明駅', lon: 139.79315890678254, lat: 35.63467955160454 },\n\
      { name: '品川駅', lon: 139.73875357500563, lat: 35.62850770123775 },\n\
      { name: '渋谷駅', lon: 139.70134957426947, lat: 35.65864567145413 },\n\
      { name: '新宿駅', lon: 139.70090283767686, lat: 35.68851826791775 }\n\
    ];\n\
\n\
    //### マーカーに関する定義 ###\n\
    var markerSizeX = 84, markerSizeY = 100;  // マーカー画像のサイズ\n\
    var markerOffsetX = -43, markerOffsetY = -91;  // マーカー画像のオフセット\n\
    var markerImageUrl = './img/c.png';  // マーカー画像のURL\n\
\n\
    //### マーカードラッグに関する共通変数 ###\n\
    var dragFlag = false;  // ドラッグモードフラグ\n\
    var dragOffsetX, dragOffsetY;  // ドラッグ開始時のマーカー上でのオフセット座標\n\
    var dragObj = null;  // ドラッグ時に表示するDIVオブジェクト\n\
    var faceLayerObj = null;  // フェイスレイヤーDIVオブジェクト(ドラッグ時に地図を覆う半透明のDIV)\n\
    var prevPointerX, prevPointerY;  // カーソル座標の保存値\n\
    var targetIndex = 0; // 移動対象のマーカーの識別番号(識別子の番号部分)\n\
    var targetMarkerPos = null;  // 移動対象のマーカータップ時のスクリーン座標\n\
\n\
    //### マーカーの移動範囲および地図スクロールに関する定義 ###\n\
    var mapWidth = 640, mapHeight = 260;  // 地図DIVタグのサイズ\n\
    var pointerXMin = -markerOffsetX;  // ポインターX最小値\n\
    var pointerXMax = mapWidth-1-markerSizeX-markerOffsetX;  // ポインターX最大値\n\
    var pointerYMin = -markerOffsetY;  // ポインターY最小値\n\
    var pointerYMax = mapHeight-1-markerSizeY-markerOffsetY;  // ポインターY最大値\n\
    var mapScrollIntevalTime = 100;  // 地図スクロールの処理間隔（単位:ms）\n\
    var mapScrollEdgeX = 0.1;  // スクロール枠水平方向の範囲定数(0.1ならば、画面の左右10%が枠部分となる)\n\
    var mapScrollEdgeY = 0.1;  // スクロール枠垂直方向の範囲定数(0.1ならば、画面の上下10%が枠部分となる)\n\
    var mapScrollDeltaX = 20;  // １回の処理での水平方向のスクロール量(単位:ピクセル)\n\
    var mapScrollDeltaY = 20;  // １回の処理での垂直方向のスクロール量(単位:ピクセル)\n\
\n\
    //### 地図スクロールに関する共通変数 ###\n\
    var mapScrollDx=0, mapScrollDy=0;  // スクロール移動方向(=-1/0/+1)\n\
    var intervalId=null;  // タイマー処理のID\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        mapStyle : 'rpg_pc',\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.66119593467379),\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      // マーカーを作成します。\n\
      for( var i=0; i<pointData.length; i++ ) {\n\
        addMarker(i);\n\
      }\n\
\n\
      // マーカーポインタースタートイベントのコールバック関数を設定します。\n\
      Mfapi.Events.onMarkerPointerStart = markerPointerStart;\n\
\n\
      // ドラッグ時のマーカー、フェイスレイヤーのDIVオブジェクトを取得します。\n\
      faceLayerObj = document.getElementById('face_layer');\n\
      dragObj = document.getElementById(\"moving_marker\");\n\
\n\
      // フェイスレイヤーDIVタグのイベントハンドラーを設定します。\n\
      faceLayerObj.ontouchstart=faceLayerPointerStart;\n\
      faceLayerObj.ontouchmove=faceLayerPointerMove;\n\
      faceLayerObj.ontouchend=faceLayerPointerEnd;\n\
    }\n\
\n\
    //### マーカーポインタースタートイベントのコールバック関数 ###\n\
    function markerPointerStart(screenPosition,mapPosition,featureId,directAction,buttonType) {\n\
\n\
      // フェイスレイヤーを表示します。\n\
      faceLayerObj.style.display='block';\n\
\n\
      // 選択したマーカーの識別番号(識別子の数値部分)を保存します。\n\
      targetIndex = parseInt(featureId.substr(7));\n\
\n\
      // 選択したマーカーの緯度経度(ピンの先部分)を取得し、スクリーン座標に変換します。\n\
      targetMarkerPos = Mfapi.Map.getScreenPositionFromLonLat(Mfapi.Features.Marker[featureId].getPosition());\n\
\n\
      // 選択したマーカーを、一旦、Mfapiのマーカーレイヤーから削除します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].removeFeature(featureId);\n\
\n\
      // ドラッグ中に表示するマーカー左上のスクリーン座標を設定します。\n\
      dragObj.style.left = (targetMarkerPos.x +markerOffsetX +parseInt(faceLayerObj.offsetLeft)) +'px';\n\
      dragObj.style.top = (targetMarkerPos.y +markerOffsetY +parseInt(faceLayerObj.offsetTop)) +'px';\n\
\n\
      // ドラッグ中に表示するマーカーを表示します。\n\
      dragObj.style.display='block';\n\
    }\n\
\n\
    //### フェイスレイヤー　ポインタースタート(タッチスタート)のイベントハンドラー ###\n\
    function faceLayerPointerStart(objEvent) {\n\
\n\
      // タッチイベントを取得します。\n\
      if(objEvent.changedTouches!==undefined && objEvent.changedTouches.length>=1)\n\
        objEvent=objEvent.changedTouches.item(0);\n\
      else if(objEvent.touches!==undefined && objEvent.touches.length>=1)\n\
        objEvent=objEvent.touches.item(0);\n\
      else\n\
        return false;\n\
\n\
      if(dragFlag==false) {\n\
        // ポインターの座標情報を取得します。\n\
        var pointerX = parseInt(objEvent.clientX)-parseInt(faceLayerObj.offsetLeft);\n\
        var pointerY = parseInt(objEvent.clientY)-parseInt(faceLayerObj.offsetTop);\n\
\n\
        // マーカーの座標範囲を計算します。\n\
        var markerXmin = parseInt(dragObj.style.left)-parseInt(faceLayerObj.offsetLeft);\n\
        var markerYmin = parseInt(dragObj.style.top)-parseInt(faceLayerObj.offsetTop);\n\
        var markerXmax = markerXmin + markerSizeX -1;\n\
        var markerYmax = markerYmin + markerSizeX -1;\n\
\n\
        // マーカー内のタップでの処理を行います。\n\
        if(pointerX>=markerXmin && pointerX<=markerXmax && pointerY>=markerYmin && pointerY<=markerYmax ) {\n\
\n\
          // ドラッグモードフラグを有効にします。\n\
          dragFlag = true;\n\
\n\
          // マーカー左上座標とポインターのカーソル座標と差分を保存します。\n\
          dragOffsetX = pointerX - targetMarkerPos.x;\n\
          dragOffsetY = pointerY - targetMarkerPos.y;\n\
\n\
          // ポインターのカーソル座標を保存します。\n\
          prevPointerX = pointerX;\n\
          prevPointerY = pointerY;\n\
\n\
        // マーカー内のタップ以外の処理を行います。(元に戻す処理)\n\
        } else {\n\
\n\
          // フェイスレイヤーを非表示にします。\n\
          faceLayerObj.style.display='none';\n\
\n\
          // ドラッグ中に表示するマーカーを非表示にします。\n\
          dragObj.style.display='none';\n\
\n\
          // マーカーを追加します。\n\
          addMarker(targetIndex);\n\
        }\n\
      }\n\
      return false;\n\
    }\n\
\n\
    //### フェイスレイヤー　ポインタームーブ(タッチムーブ)のイベントハンドラー ###\n\
    function faceLayerPointerMove(objEvent) {\n\
\n\
      // タッチイベントを取得します。\n\
      if(objEvent.changedTouches!==undefined && objEvent.changedTouches.length>=1)\n\
        objEvent=objEvent.changedTouches.item(0);\n\
      else if(objEvent.touches!==undefined && objEvent.touches.length>=1)\n\
        objEvent=objEvent.touches.item(0);\n\
      else\n\
        return false;\n\
\n\
      // ドラッグモードフラグ無効時の処理を行います。(例外対応)\n\
      if(!dragFlag) {\n\
        stopMapScroll();\n\
        return false;\n\
      }\n\
\n\
      // ポインターのカーソル座標を計算します。\n\
      var pointerX = calcPointerX(objEvent);\n\
      var pointerY = calcPointerY(objEvent);\n\
\n\
      // ドラッグ中に表示するマーカー左上のスクリーン座標を設定します。\n\
      var dragObjX = parseInt(dragObj.offsetLeft) + pointerX - prevPointerX;\n\
      var dragObjY = parseInt(dragObj.offsetTop) + pointerY - prevPointerY;\n\
      dragObj.style.left = dragObjX + \"px\";\n\
      dragObj.style.top = dragObjY + \"px\";\n\
\n\
      // 地図スクロール制御処理を呼びます。\n\
      mapScrollCtrl(dragObjX,dragObjY);\n\
\n\
      // ポインターのカーソル座標を保存します。\n\
      prevPointerX = pointerX;\n\
      prevPointerY = pointerY;\n\
\n\
      return false;\n\
    }\n\
\n\
    //### フェイスレイヤー　ポインターエンド(タッチエンドアップ)のイベントハンドラー ###\n\
    function faceLayerPointerEnd(objEvent){\n\
\n\
      // タッチイベントを取得します。\n\
      if(objEvent.changedTouches!==undefined && objEvent.changedTouches.length>=1)\n\
        objEvent=objEvent.changedTouches.item(0);\n\
      else if(objEvent.touches!==undefined && objEvent.touches.length>=1)\n\
        objEvent=objEvent.touches.item(0);\n\
      else\n\
        return false;\n\
\n\
      // ドラッグモードフラグ無効時の処理を行います。(例外対応)\n\
      if(!dragFlag) {\n\
        stopMapScroll();\n\
        return false;\n\
      }\n\
\n\
      // ポインターのカーソル座標を計算します。\n\
      var pointerX = calcPointerX(objEvent);\n\
      var pointerY = calcPointerY(objEvent);\n\
\n\
      // フェイスレイヤーを非表示にします。\n\
      faceLayerObj.style.display='none';\n\
\n\
      // ドラッグ中に表示するマーカーを非表示にします。\n\
      dragObj.style.display='none';\n\
\n\
      // マーカーの緯度経度(ピンの先部分)を計算し、地点データを更新します。\n\
      var markerScreenPos = new Mfapi.Util.ScreenPoint( pointerX-dragOffsetX, pointerY-dragOffsetY );\n\
      var markerMapPos = Mfapi.Map.getLonLatFromScreenPosition( markerScreenPos );\n\
      pointData[targetIndex].lon = markerMapPos.lon;\n\
      pointData[targetIndex].lat = markerMapPos.lat;\n\
\n\
      // マーカーを追加します。\n\
      addMarker(targetIndex);\n\
\n\
      // 地図スクロールを停止します。\n\
      stopMapScroll();\n\
\n\
      // ドラッグモードフラグを無効にします。\n\
      dragFlag = false;\n\
\n\
      return false;\n\
    }\n\
\n\
    //### 地図スクロール制御処理 ###\n\
    // ドラッグしているマーカーが地図の｢枠｣付近にいる場合、地図をスクロールさせる機能です。\n\
    // 枠付近と判断した場合、スクロール方向をmapScrollDx,mapScrollDyに設定します。\n\
    // mapScrollDx,mapScrollDyがゼロでない場合、タイマーでスクロール処理を繰り返します。\n\
    function mapScrollCtrl(dragObjX,dragObjY) {\n\
\n\
      // 水平方向のスクロール判定を行います。\n\
      if( dragObjX < mapWidth * mapScrollEdgeX ) mapScrollDx = -1;\n\
      else if( dragObjX +markerSizeX > mapWidth *(1-mapScrollEdgeX)) mapScrollDx = +1;\n\
      else mapScrollDx = 0;\n\
\n\
      // 垂直方向のスクロール判定を行います。\n\
      if( dragObjY < mapHeight * mapScrollEdgeY ) mapScrollDy = -1;\n\
      else if( dragObjY +markerSizeY > mapHeight *(1-mapScrollEdgeY)) mapScrollDy = +1;\n\
      else mapScrollDy = 0;\n\
\n\
      // スクロール処理を行います。\n\
      if( mapScrollDx!=0 || mapScrollDy!=0 ) {\n\
\n\
        if(intervalId==null) {\n\
          intervalId = window.setInterval( function () {\n\
            var center = new Mfapi.Util.ScreenPoint(\n\
              mapWidth/2+mapScrollDx*mapScrollDeltaX, mapHeight/2+mapScrollDy*mapScrollDeltaY );\n\
            Mfapi.Map.setCenterPosition( Mfapi.Map.getLonLatFromScreenPosition(center) );\n\
          }, mapScrollIntevalTime );\n\
        }\n\
\n\
      } else {\n\
        stopMapScroll();\n\
      }\n\
    }\n\
\n\
    //### 地図スクロール停止処理 ###\n\
    function stopMapScroll() {\n\
      // タイマーを無効にします。\n\
      if(intervalId!=null) {\n\
        window.clearInterval(intervalId);\n\
        intervalId = null;\n\
      }\n\
      // スクロール方向の変数をリセットします。\n\
      mapScrollDx=0;\n\
      mapScrollDy=0;\n\
    }\n\
\n\
    //### ポインタースクリーン座標Xの計算 ###\n\
    function calcPointerX(objEvent) {\n\
\n\
      // イベントパラメータから座標を計算します。\n\
      var pointerX = parseInt(objEvent.clientX)-parseInt(faceLayerObj.offsetLeft);\n\
\n\
      // 地図の範囲外の場合、最小値または最大値を設定します。\n\
      if( pointerX <= pointerXMin+dragOffsetX ) pointerX = pointerXMin+dragOffsetX;\n\
      if( pointerX >= pointerXMax+dragOffsetX ) pointerX = pointerXMax+dragOffsetX;\n\
\n\
      return pointerX;\n\
    }\n\
\n\
    //### ポインタースクリーン座標Yの計算 ###\n\
    function calcPointerY(objEvent) {\n\
\n\
      // イベントパラメータから座標を計算します。\n\
      var pointerY = parseInt(objEvent.clientY)-parseInt(faceLayerObj.offsetTop);\n\
\n\
      // 地図の範囲外の場合、最小値または最大値を設定します。\n\
      if( pointerY <= pointerYMin+dragOffsetY ) pointerY = pointerYMin+dragOffsetY;\n\
      if( pointerY >= pointerYMax+dragOffsetY ) pointerY = pointerYMax+dragOffsetY;\n\
\n\
      return pointerY;\n\
    }\n\
\n\
    //### マーカー追加処理 ###\n\
    function addMarker(index) {\n\
\n\
      // マーカー　フィーチャー識別子作成および条件を設定します。\n\
      var id = 'marker#'+index;\n\
      var opt = {\n\
        position : new Mfapi.Util.LonLat(pointData[index].lon, pointData[index].lat),\n\
        imageUrl : markerImageUrl,\n\
        imageSize : new Mfapi.Util.ScreenSize(markerSizeX, markerSizeY),\n\
        imageOffset : new Mfapi.Util.ScreenPoint(markerOffsetX, markerOffsetY),\n\
        imageOpacity : 0.7\n\
      };\n\
\n\
      // マーカーを作成しレイヤーに追加します。\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(opt, id);\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='face_layer'></div>\n\
  <div id='sample_map'></div>\n\
  <img src='img/c.png' id='moving_marker' ondragstart=\"return false\">\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_7.html"
},

{
title: "5-8.図形クリック",
sum: "<p>図形上でクリックしたときに発生するイベントを使ったコードが確認できます。</p>",
detail: "\
本サンプルでは、図形のクリックイベント機能を用いて、\
クリックした図形のフィーチャー識別子をラベルで表示する機能を実現しています。<br>\
また、「ラベル削除」ボタンを押すことで、ラベルを削除します。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【5-8.図形クリック】</title>\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
    .labelStyle {\n\
      color:black;\n\
      border:solid 1px #000000;\n\
      background-color:white;\n\
    }\n\
    .mycustombtn {\n\
      font-size : 10pt;\n\
      font-family : 'sans-serif';\n\
      font-weight : normal;\n\
      border-radius: 2px;\n\
      display : \"block\";\n\
      margin : 1px;\n\
      padding: 4px;\n\
      text-decoration: none;\n\
      text-align: center;\n\
      line-height: 1.2em;\n\
      border : none;\n\
      background-color: royalblue;\n\
      color: white;\n\
      opacity : 0.8;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 11\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // ジオメトリーレイヤーを追加します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### サークル　条件設定 ###\n\
      // サークルオブジェクト object#1 用の作成条件 opt1 を作成します。\n\
      // 詳細はCircleOptionsクラスの仕様をご参照下さい。\n\
      var opt1 = {\n\
        edgeColor : '#ff0000', // 枠線の色\n\
        edgeWidth : 4, // 枠線の幅\n\
        fillColor : '#00ff00', // 塗り色\n\
        opacity : 0.5, // 不透明度\n\
        position :  new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),  // 東京駅\n\
        radius : 1600, // 半径\n\
        visible : true // 表示状態\n\
      };\n\
\n\
      //### ポリゴン　条件設定 ###\n\
      // ポリゴンオブジェクト object#2 用の作成条件 opt2 を作成します。\n\
      // 詳細はPolygonOptionsクラスの仕様をご参照下さい。\n\
      var opt2 = {\n\
        edgeColor : '#ff00ff', // 枠線の色\n\
        edgeWidth : 4,         // 枠線の幅\n\
        fillColor : '#00ff00', // 塗り色\n\
        opacity : 0.5,         // 不透明度\n\
        positions : [\n\
           new Mfapi.Util.LonLat(139.75821002138233,35.66657238126213),  // 新橋駅\n\
           new Mfapi.Util.LonLat(139.7959191978587,35.655211407306176),  // 豊洲駅\n\
           new Mfapi.Util.LonLat(139.79315890678254,35.63467955160454),  // 有明駅\n\
           new Mfapi.Util.LonLat(139.73875357500563,35.62850770123775),  // 品川駅\n\
           new Mfapi.Util.LonLat(139.70134957426947,35.65864567145413)   // 渋谷駅\n\
          ],\n\
        visible : true // 表示状態\n\
      };\n\
\n\
      //### ポリライン　条件設定 ###\n\
      // ポリラインオブジェクト object#3 用の作成条件 opt3 を作成します。\n\
      // 詳細はPolylineOptionsクラスの仕様をご参照下さい。\n\
      var opt3 = {\n\
        lineColor : '#0000ff', // 線の色\n\
        lineWidth : 4,         // 線の幅\n\
        opacity : 0.8,         // 不透明度\n\
        positions : [\n\
            new Mfapi.Util.LonLat(139.70090283767686,35.68851826791775),   // 新宿駅\n\
            new Mfapi.Util.LonLat(139.7108740987224,35.72992490706989),    // 池袋駅\n\
            new Mfapi.Util.LonLat(139.77649106403516,35.713413463237565),  // 上野駅\n\
            new Mfapi.Util.LonLat(139.8166571438273,35.718386818767186),   // 曳舟駅\n\
            new Mfapi.Util.LonLat(139.826947289596,35.69723830373342),     // 亀戸駅\n\
            new Mfapi.Util.LonLat(139.77311565279877,35.69837872503799)    // 秋葉原駅\n\
          ],\n\
        visible : true // 表示状態\n\
      };\n\
\n\
      //### ポイント　条件設定 ###\n\
      // ポイントオブジェクト object#4 用の作成条件 opt4 を作成します。\n\
      // 詳細はPointOptionsクラスの仕様をご参照下さい。\n\
      var opt4 = {\n\
        edgeColor : '#ff0000', // 枠線の色\n\
        edgeWidth : 1,         // 枠線の幅\n\
        fillColor : '#ff0000', // 塗り色\n\
        opacity : 0.8,         // 不透明度\n\
        positions : null,      // 緯度経度※作成時に後述のpointsから取得する\n\
        width : 10,            // 点幅\n\
        visible : true         // 表示状態\n\
      };\n\
      // ポイント緯度経度\n\
      var points = [\n\
        {position : new Mfapi.Util.LonLat(139.7006928036672,35.68961425420631), name: 'POINT_JB10'},    // 新宿駅\n\
        {position : new Mfapi.Util.LonLat(139.69745031099612,35.700751497234926), name: 'POINT_JB09'},  // 大久保駅\n\
        {position : new Mfapi.Util.LonLat(139.68493810396686,35.706241989984754), name: 'POINT_JB08'},  // 東中野駅\n\
        {position : new Mfapi.Util.LonLat(139.66573110323358,35.70580811283242), name: 'POINT_JB07'},   // 中野駅\n\
        {position : new Mfapi.Util.LonLat(139.64944234591596,35.70530453629846), name: 'POINT_JB06'},   // 高円寺駅\n\
        {position : new Mfapi.Util.LonLat(139.63572850925237,35.70494035144415), name: 'POINT_JB05'},   // 阿佐ヶ谷駅\n\
        {position : new Mfapi.Util.LonLat(139.6203838895091,35.70450646720755), name: 'POINT_JB04'}     // 荻窪駅\n\
      ];\n\
\n\
      // オブジェクトを作成し、ジオメトリーレイヤーへの登録を行います。\n\
      Mfapi.Map.GeometryLayer['gLayer'].addCircle(opt1,'CIRCLE');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolygon(opt2,'POLYGON');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolyline(opt3,'POLYLINE');\n\
      for (var i=0,len=points.length; i < len; i++) {\n\
        opt4.position = points[i].position;\n\
        Mfapi.Map.GeometryLayer['gLayer'].addPoint(opt4, points[i].name);\n\
      }\n\
\n\
      // 図形クリックのコールバック関数を設定します。\n\
      Mfapi.Events.onFeatureClick = featureClick;\n\
      \n\
      //### カスタムボタン ###\n\
      var eleMap = document.getElementById('sample_map');\n\
      \n\
      // カスタムボタンを表示するカスタムコントーラーを作成します。\n\
      var customCtrl = document.createElement('div');\n\
      customCtrl.className = 'mycustomctrl';\n\
\n\
      // 「ラベル削除」カスタムボタン作成します。\n\
      var button = document.createElement('button');\n\
      button.innerHTML = 'ラベル削除';\n\
      button.id = 'delete_label';\n\
      button.className = 'mycustombtn';\n\
      // 「ラベル削除」ボタンをクリックした時に地図の中心座標を保持します。\n\
      button.addEventListener('click', function() {\n\
        for(var key in Mfapi.Features.Label) {\n\
          Mfapi.Features.remove(key);\n\
        }\n\
      });\n\
\n\
      // 「ラベル削除」カスタムボタンをカスタムコントローラーに設定します。\n\
      customCtrl.appendChild(button);\n\
\n\
      // 地図DIVにカスタムコントローラーを設定します。\n\
      eleMap.appendChild(customCtrl);\n\
\n\
      // カスタムボタンのスタイルを設定します。\n\
      customCtrl.style.position = \"absolute\";\n\
      customCtrl.style.top = '10px';\n\
      customCtrl.style.left = Math.round(eleMap.getBoundingClientRect().width / 2 - customCtrl.getBoundingClientRect().width / 2) + 'px';\n\
\n\
    }\n\
\n\
    //### 図形クリックイベントのコールバック関数 ###\n\
    function featureClick(screenPosition, mapPosition, featureId) {\n\
      // 以下の選択図形内のクリックした緯度経度にラベルを作成します。\n\
      var objType = Mfapi.Features.getObjectType(featureId);\n\
      switch (objType) {\n\
        case Mfapi.Const.ObjectType.CIRCLE:\n\
        case Mfapi.Const.ObjectType.POLYGON:\n\
        case Mfapi.Const.ObjectType.POLYLINE:\n\
        case Mfapi.Const.ObjectType.POINT:\n\
          // マーカーとの紐付けがないラベルを作成します。\n\
          var labelId = 'label_'+featureId;\n\
          var labelOpt = {\n\
            position : mapPosition,\n\
            contentHtml : '<div class=labelStyle><span>'+featureId+'</span></div>',\n\
            visible : true\n\
          };\n\
\n\
          // オブジェクトを作成し、マーカーレイヤーへの登録を行います。\n\
          // ラベルが既に図形に対して表示されている場合は削除し、追加します。\n\
          if (Mfapi.Features.getObjectType(labelId) != -1) {\n\
              Mfapi.Features.remove(labelId);\n\
          }\n\
          Mfapi.Map.MarkerLayer['mLayer'].addLabel(labelOpt, labelId);\n\
          break;\n\
      }\n\
\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample5_8.html"
},

{
title: "6-1.「おもてなしマップ」表示",
sum: "<p>観光案内向け地図デザイン「おもてなしマップ」を表示するコードが確認できます。</p>",
detail: "\
本サンプルでは、カラーユニバーサルデザインに配慮した推奨設定を使用して、地図表示/マーカー表示/ルート描画を行うコードが確認できます。<br>\
「おもてなしマップ」および推奨設定の詳細は、別紙「MapFanAPI_おもてなしマップご利用案内」をご覧ください。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【6-1.「おもてなしマップ」表示】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      width: 660px;\n\
      height: 280px;\n\
    }\n\
  </style>\n\
  <!--地図中心を示すパーツのアイコン画像とDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #center_image {\n\
      width: 34px;\n\
      height: 30px;\n\
    }\n\
    #center_div {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 321px;\n\
      top: 133px;\n\
      pointer-events: none;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ルートAPIサーバを設定します。\n\
      Mfapi.routeHost = 'api-route-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
\n\
      //### 地図作成条件の設定 ###\n\
      // \"mapstyle\"は地図表示スタイルを指定するプロパティです。\n\
      // \"mapstyle\"にカラーユニバーサルデザインに対応した設定値「'tourism_pc'」を設定します。\n\
      // 詳細は別紙「地図デザイン設定方法と表示イメージ」の仕様をご参照下さい。\n\
      var options = {\n\
        mapStyle       : 'tourism_pc',\n\
        logoSettings   : 'off',\n\
        lang           : 'ja',\n\
        centerPosition : new Mfapi.Util.LonLat(139.69782652169118,35.69313060143928),\n\
        mapScale       : 16\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // ジオメトリーレイヤーを追加します。\n\
      Mfapi.Map.addGeometryLayer('gLayer');\n\
\n\
      //### サークル　条件設定 ###\n\
      // \"edgeColor\"はサークルの枠線の色を指定するプロパティです。\n\
      // \"edgeColor\"にカラーユニバーサルデザインに対応した設定値「#606060：グレー」を設定します。\n\
      // \"fillColor\"はサークルの塗り色を指定するプロパティです。\n\
      // \"fillColor\"にカラーユニバーサルデザインに対応した設定値「#777777：グレー」を設定します。\n\
      // 詳細は別紙「MapFanAPI_おもてなしマップご利用案内」の仕様をご参照下さい。\n\
      var circleOptions = {\n\
        edgeColor : '#606060', // 枠線の色\n\
        edgeWidth : '2',       // 枠線の幅\n\
        fillColor : '#777777', // 塗り色\n\
        opacity   : '0.5',     // 不透明度\n\
        position  : new Mfapi.Util.LonLat(139.69183625107152,35.69215748858982),\n\
        radius    : 120,       // 半径\n\
        visible   : true       // 表示状態\n\
      };\n\
\n\
      //### ポリライン　条件設定 ###\n\
      // \"lineColor\"はポリラインの線の色を指定するプロパティです。\n\
      // \"lineColor\"にカラーユニバーサルデザインに対応した設定値「#000000：黒」を設定します。\n\
      // 詳細は別紙「MapFanAPI_おもてなしマップご利用案内」の仕様をご参照下さい。\n\
      var polylineOptions = {\n\
        lineColor : '#000000', // 線の色\n\
        lineWidth : '2',       // 線の幅\n\
        opacity   : 1,         // 不透明度\n\
        positions : [\n\
                       new Mfapi.Util.LonLat(139.6933848251336,35.69130359092341),\n\
                       new Mfapi.Util.LonLat(139.6933848251336,35.69301138625623),\n\
                       new Mfapi.Util.LonLat(139.69443625107152,35.69215748858982),\n\
                       new Mfapi.Util.LonLat(139.69548767700945,35.69301138625623),\n\
                       new Mfapi.Util.LonLat(139.69548767700945,35.69130359092341)\n\
                    ],\n\
        visible   : true       // 表示状態\n\
      };\n\
\n\
      //### ポリゴン　条件設定 ###\n\
      // \"edgeColor\"はポリゴンの枠線の色を指定するプロパティです。\n\
      // \"edgeColor\"にカラーユニバーサルデザインに対応した設定値「#606060：グレー」を設定します。\n\
      // \"fillColor\"はポリゴンの塗り色を指定するプロパティです。\n\
      // \"fillColor\"にカラーユニバーサルデザインに対応した設定値「#777777：グレー」を設定します。\n\
      // 詳細は別紙「MapFanAPI_おもてなしマップご利用案内」の仕様をご参照下さい。\n\
      var polygonOptions = {\n\
        edgeColor : '#606060', // 枠線の色\n\
        edgeWidth : '2',       // 枠線の幅\n\
        fillColor : '#777777', // 塗り色\n\
        opacity   : 0.5,       // 不透明度\n\
        positions : [\n\
                       new Mfapi.Util.LonLat(139.69703625107152,35.69301138625623),\n\
                       new Mfapi.Util.LonLat(139.69794681264398,35.69258443742302),\n\
                       new Mfapi.Util.LonLat(139.69794681264398,35.69173053975662),\n\
                       new Mfapi.Util.LonLat(139.69703625107152,35.69130359092341),\n\
                       new Mfapi.Util.LonLat(139.69612568949907,35.69173053975662),\n\
                       new Mfapi.Util.LonLat(139.69612568949907,35.69258443742302),\n\
                       new Mfapi.Util.LonLat(139.69703625107152,35.69301138625623)\n\
                    ],\n\
        visible   : true       // 表示状態\n\
      };\n\
\n\
      Mfapi.Map.GeometryLayer['gLayer'].addCircle(circleOptions, 'circle#1');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolyline(polylineOptions, 'polyline#1');\n\
      Mfapi.Map.GeometryLayer['gLayer'].addPolygon(polygonOptions, 'polygon#1');\n\
\n\
      // マーカーレイヤーを追加します。\n\
      Mfapi.Map.addMarkerLayer('mLayer');\n\
\n\
      //### マーカー　フィーチャー識別子作成および条件設定 ###\n\
      // \"imageUrl\"はユーザー指定イメージパスを指定するプロパティです。\n\
      // \"imageUrl\"にカラーユニバーサルデザインに対応した設定値「./img/pin_cud1.png」を設定します。\n\
      // 詳細は別紙「MapFanAPI_おもてなしマップご利用案内」の仕様をご参照下さい。\n\
      var markerId = 'marker#1';\n\
      var markerOptions = {\n\
        position   : new Mfapi.Util.LonLat(139.7022137995307,35.693399845417765),\n\
        imageUrl   : './img/pin_cud1.png',\n\
        imageSize  : new Mfapi.Util.ScreenSize(31,37),\n\
        imageOffset: new Mfapi.Util.ScreenPoint(-16, -34)\n\
      };\n\
\n\
      Mfapi.Map.MarkerLayer['mLayer'].addMarker(markerOptions, markerId);\n\
\n\
      // ルートを描画します。\n\
      var routeId = 'route1';\n\
\n\
      var rteCalcOptions = {\n\
        start       : new Mfapi.Util.LonLat(139.692305587146767,35.69462305393875),\n\
        via         : [new Mfapi.Util.LonLat(139.69615709913361,35.69347678961987)],\n\
        destination : new Mfapi.Util.LonLat(139.6988151539445,35.693702766741)\n\
      };\n\
\n\
      //### 経路描画条件\"rteDrawOptions\"の作成 ###\n\
      // \"drawMarkerType\"はルートのマーカー描画タイプを指定するプロパティです。\n\
      // \"drawMarkerType\"にカラーユニバーサルデザインに対応した設定値「STANDARD_ROUTE：標準デザインの標準サイズ」を設定します。\n\
      // \"drawPolylineType\"はルートのポリライン描画タイプを指定するプロパティです。\n\
      // \"drawPolylineType\"にカラーユニバーサルデザインに対応した設定値「STANDARD_ROUTE_COLOR_GREEN：グリーンの標準サイズ」を設定します。\n\
      // 詳細は別紙「MapFanAPI_おもてなしマップご利用案内」の仕様をご参照下さい。\n\
      var rteDrawOptions = {\n\
        drawMarkerType   : Mfapi.Const.DrawMarkerType.STANDARD_ROUTE,\n\
        drawPolylineType : Mfapi.Const.DrawPolylineType.STANDARD_ROUTE_COLOR_GREEN,\n\
        geometryLayerId : 'gLayer',\n\
        markerLayerId : 'mLayer'\n\
      };\n\
\n\
      var func = function(id) {\n\
      };\n\
\n\
      Mfapi.Route.requestRouteCalcAndDraw(routeId,rteCalcOptions,rteDrawOptions,func);\n\
\n\
    }\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--地図DIVタグ-->\n\
  <div id='sample_map'></div>\n\
  <!--地図中心を示すパーツのDIVタグ-->\n\
  <div id='center_div'><img id='center_image' src='img/center.png'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample6_1.html"
},

{
title: "6-2.現在地住所表示",
sum: "<p>住所逆引き検索APIサービスを利用した地図中心付近の住所表示を行うコードが確認できます。</p>",
detail: "\
本サンプルでは、1-8.地図操作をベースに、地図座標の移動を検出したら、JSONPの仕組みを使って、住所逆引き検索APIを実行し、\
地図中心付近の住所表示をリアルタイムに行う機能を追加したコードが確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【6-2.現在地住所表示】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #sample_map {\n\
      float: left;\n\
      width: 480px;\n\
      height: 280px;\n\
      margin: 5px;\n\
      padding: 0px;\n\
      outline: none;\n\
    }\n\
  </style>\n\
  <!--情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #info {\n\
      float: left;\n\
      margin: 2px;\n\
      padding: 4px;\n\
      background-color:#eeeeee;\n\
    }\n\
    .value1 {\n\
      width: 130px;\n\
    }\n\
    .value2 {\n\
      width: 36px;\n\
    }\n\
  </style>\n\
  <!--地図中心を示すパーツのアイコン画像とDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #center_image {\n\
      width: 34px;\n\
      height: 30px;\n\
    }\n\
    #center_div {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 233px;\n\
      top: 135px;\n\
      pointer-events: none;\n\
    }\n\
  </style>\n\
  <!--住所情報表示DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
    #address_info {\n\
      position: absolute;\n\
      z-index: 5000000;\n\
      left: 80px;\n\
      top: 245px;\n\
      width: 260px;\n\
      height: 18px;\n\
    }\n\
    .value3 {\n\
      width: 250px;\n\
      background-color: #eeeeee;\n\
    }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    //### 検索サーバーのホスト名 ###\n\
    var srchHost = 'api-srch-pre.mapfan.com';\n\
\n\
    //### 最新のAPI要求受付時刻 ###\n\
    // 住所逆引きAPI実行要求を受け付けた最新の時刻が上書きで記録されます。\n\
    var latestReqTime = 0;\n\
\n\
    //### 最新のAPI要求受付緯度経度 ###\n\
    // 住所逆引きAPI実行要求を受け付けた最新の緯度経度が上書きで記録されます。\n\
    var latestReqPosition = new Mfapi.Util.LonLat(0,0);\n\
\n\
    //### API要求キュー配列 ###\n\
    // 住所逆引きAPI実行要求を受け付けると、緯度、経度、要求受付時刻のプロパティからなるオブジェクト\n\
    // を追加します。\n\
    // 住所逆引きAPIの実行が開始されると、該当オブジェクトを削除します。\n\
    var queArray = [];\n\
\n\
    //### API実行対象の要求受付時刻 ###\n\
    // 住所逆引きAPI実行中は、同API実行要求の受け付け時刻が格納されます。\n\
    // 住所逆引きAPIが実行していないときは、0が格納されます。\n\
    var apiTargetReqTime = 0;\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        mapScale : 12\n\
      };\n\
\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate('sample_map',options);\n\
\n\
      // 各種イベントのコールバック関数を設定します。\n\
      Mfapi.Events.onChangedMapCenter = map_position_event;\n\
      Mfapi.Events.onChangedMapScale = map_scale_event;\n\
\n\
      // 初期表示処理を行います。\n\
      var scale = Mfapi.Map.getMapScale();\n\
      var position = Mfapi.Map.getCenterPosition();\n\
      document.getElementById('scale').value = scale;\n\
      document.getElementById('lon').value = position.lon;\n\
      document.getElementById('lat').value = position.lat;\n\
      document.getElementById('key-ctrl').value = 'off';\n\
      document.getElementById('address').value = '';\n\
    }\n\
\n\
    //### 地図onfocusイベントハンドラー ###\n\
    // 地図のDIVにフォーカスされたときに呼ばれます。\n\
    function onMapFocus() {\n\
      document.getElementById('key-ctrl').value = 'on';\n\
    }\n\
    //### 地図onblurイベントハンドラー ###\n\
    // 地図のDIVからフォーカスが外れたときに呼ばれます。\n\
    function onMapBlur() {\n\
      document.getElementById('key-ctrl').value = 'off';\n\
    }\n\
\n\
    //### 地図縮尺変更イベントのコールバック関数 ###\n\
    function map_scale_event(scale) {\n\
      document.getElementById('scale').value = scale;\n\
    }\n\
\n\
    //### 地図中心緯度経度変更イベントのコールバック関数 ###\n\
    function map_position_event(position) {\n\
\n\
      document.getElementById('lon').value = position.lon;\n\
      document.getElementById('lat').value = position.lat;\n\
\n\
      // 地図移動チェック処理のタイマーを設定します。\n\
      var method = \"checkMoving(\"+position.lon+\",\"+position.lat+\");\";\n\
      window.setTimeout(method, 100);\n\
    }\n\
\n\
    //### 地図移動チェック処理 ###\n\
    // 地図移動イベントから0.1秒後に呼ばれます。\n\
    // 地図移動が停止していることを確認したら、API要求処理を実行します。\n\
    function checkMoving(prevPositionLon,prevPositionLat) {\n\
\n\
      // 現在の地図中心緯度経度を取得します。\n\
      var currentPosition = Mfapi.Map.getCenterPosition();\n\
\n\
      // 地図移動イベントがあったときの緯度経度と現在の緯度経度が異なる場合、移動中と判断します。\n\
      // 移動中と判断した場合、本処理を中止します。(＝移動していないと判断されると、後続のAPI要求処理を実行します。)\n\
      if( prevPositionLon != currentPosition.lon || prevPositionLat != currentPosition.lat)\n\
        return;\n\
\n\
      // 最新のAPI要求を受け付けた緯度経度と、現時点の地図中心点緯度経度とを照合します。\n\
      // 前回と同じ要求の場合は、本処理を中止します。\n\
      if( latestReqPosition.lon == currentPosition.lon && latestReqPosition.lat == currentPosition.lat)\n\
        return;\n\
\n\
      // 最新のAPI要求を受け付けた時刻を更新します。\n\
      var currentDate = new Date();\n\
      latestReqTime = currentDate.valueOf();\n\
\n\
      // 最新のAPI要求を受け付けた緯度経度を更新します。\n\
      latestReqPosition = currentPosition;\n\
\n\
      // キューの最後に緯度経度と要求時刻を入れたデータを追加します。\n\
      var queData = { lon:latestReqPosition.lon, lat:latestReqPosition.lat, reqTime:latestReqTime };\n\
      queArray.push(queData);\n\
\n\
      // API実行を要求します。\n\
      requestAPI();\n\
    }\n\
\n\
    //### API要求処理 ###\n\
    // API要求受付時か、APIが完了後もキューがたまっている場合に呼ばれます。\n\
    // APIが実行中でないときのみ、JSONPスクリプトを作成して、APIを実行します。\n\
    function requestAPI() {\n\
\n\
      // API実行中の場合、この先の処理を実施しません。\n\
      if(apiTargetReqTime!=0) return;\n\
\n\
      // キューがたまっていない場合、この先の処理を実施しません。\n\
      // (通常、この関数が呼ばれるとき、キューは１件以上ありますが、異常時の対応のために実施します)\n\
      if(queArray.length==0) return;\n\
\n\
      // キューにたまっている一番古い(先頭の)データを取得し削除します。\n\
      var queData = queArray.shift();\n\
\n\
      // APIターゲットの要求受付時刻を設定します。\n\
      apiTargetReqTime = queData.reqTime;\n\
\n\
      // API要求のURLを作成します。\n\
      var apiname = '/v1/addrname';\n\
      var param1 = 'key=' + encodeURIComponent(Mfapi.getAuthAccessKey());\n\
      var param2 = 'lonlat='+queData.lon+\",\"+queData.lat;\n\
      var param3 = 'callback=addressWrite';\n\
      var protocol = window.location.protocol;\n\
      if( protocol != 'https:' ) protocol = 'http:';\n\
      var reqUrl = protocol + '//' + srchHost + apiname + '?' + param1 + '&' + param2 + '&' + param3;\n\
\n\
      // APIを実行します。(JSONPのスクリプト作成)\n\
      var scrpJsonp = document.createElement('script');\n\
      scrpJsonp.setAttribute('type', 'text/javascript');\n\
      scrpJsonp.setAttribute('charset', 'utf-8');\n\
      scrpJsonp.setAttribute('id', 'addr'+apiTargetReqTime);\n\
      scrpJsonp.setAttribute('src', reqUrl);\n\
      var head = document.getElementsByTagName('head').item(0);\n\
      head.appendChild(scrpJsonp);\n\
    }\n\
\n\
    //### 住所検索逆引きAPIのコールバック関数 ###\n\
    // 現在地表示を更新して、JSONPのスクリプトタグを削除します。\n\
    function addressWrite(data) {\n\
\n\
      // 現在地表示を更新します。\n\
      // APIターゲットの要求受付時刻が、要求受付時刻のときのみ表示を更新します。\n\
      if(apiTargetReqTime == latestReqTime) {\n\
        if( data.status == 'success' ) {\n\
          document.getElementById('address').value = data.address;\n\
        } else if ( data.status.slice(0,8) == '[I00001]' ) {\n\
          document.getElementById('address').value = '（住所データがありません）';\n\
        } else {\n\
          document.getElementById('address').value = 'エラー '+data.status;\n\
        }\n\
      }\n\
\n\
      // JSONPスクリプトタグを削除します。\n\
      var head = document.getElementsByTagName('head').item(0);\n\
      if(document.getElementById('addr'+apiTargetReqTime)!=null) {\n\
        head.removeChild(document.getElementById('addr'+apiTargetReqTime));\n\
      }\n\
\n\
      // APIターゲットの要求受付時刻をリセットします。\n\
      apiTargetReqTime=0;\n\
\n\
      // キューにリクエストがたまっている場合、API要求処理を呼び出します。\n\
      if(queArray.length>0)\n\
        requestAPI();\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <!--\n\
      地図DIVタグ：地図画面にフォーカスがあたるようにtabindexを追記しています。\n\
      フォーカスされたイベント「focus」、「focusin」と\n\
      フォーカスが外れたイベント「blur」、「focusout」の\n\
      両方を指定しているためブラウザによっては２回イベントが発生します。\n\
  -->\n\
  <div id='sample_map' tabindex='1' onfocus='onMapFocus();' onfocusin='onMapFocus();' onblur='onMapBlur();' onfocusout='onMapBlur();'></div>\n\
  <!--情報表示DIVタグ-->\n\
  <div id='info'>\n\
    <p>経度(longitude)：<br>\n\
      <input type='text' id='lon' class='value1' tabindex='2' readonly></input></p>\n\
    <p>緯度(latitude)：<br>\n\
      <input type='text' id='lat' class='value1' tabindex='3' readonly></input></p>\n\
    <p>スケール：\n\
      <input type='text' id='scale' class='value2' tabindex='4' readonly></input></p>\n\
    <p>フォーカス：\n\
      <input type='text' id='key-ctrl' class='value2' tabindex='5' readonly></input></p>\n\
  </div>\n\
  <!--地図中心を示すパーツのDIVタグ-->\n\
  <div id='center_div'><img id='center_image' src='img/center.png'></div>\n\
  <!--住所情報表示DIVタグ-->\n\
  <div id='address_info'>\n\
    <p><input type='text' id='address' class='value3' readonly></input></p>\n\
  </div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample6_2.html"
},

{
title: "6-3.地図領域サイズ・緯度経度取得",
sum: "<p>地図を表示している領域の幅と高さと四隅の緯度経度を取得するコードが確認できます。</p>",
detail: "\
本サンプルでは、地図を表示している領域の幅と高さを中央に表示し、\
左上、左下、右上、右下の緯度経度を表示するコードが確認できます。<br>\
また、地図移動終了イベントや地図縮尺変更イベントを用いて四隅の緯度経度を表示するコードも確認できます。\
",
srcRaw: "<!DOCTYPE html>\n\
<html>\n\
<head>\n\
  <meta http-equiv='content-type' content='text/html; charset=utf-8' />\n\
  <title>MFAPIサンプル【6-3.地図領域サイズ・緯度経度取得】</title>\n\
  <!--地図DIVのスタイル-->\n\
  <style type=\"text/css\">\n\
  #sample_map {\n\
    width: 660px;\n\
    height: 280px;\n\
  }\n\
  </style>\n\
  <!--幅、高さ、座標を表示するDIVのスタイル-->\n\
  <style type=\"text/css\">\n\
  .DivInfoLabelClass {\n\
    font-family: monospace;\n\
    font-size: 10pt;\n\
    background-color: #e0e0e0;\n\
    border: 1px solid #c0c0c0;\n\
    padding: 5px;\n\
  }\n\
  .DivInfoLabelClass pre {\n\
    margin: 0px;\n\
    font-family: \"ＭＳ ゴシック\", monospace;\n\
    font-size: 10pt;\n\
    line-height: 10pt;\n\
  }\n\
  </style>\n\
  <script type='text/javascript' src='http://api-auth-pre.mapfan.com/v2/jslib/js/map/mfjsapi'></script>\n\
  <script type='text/javascript' src='./appid.js'></script>\n\
  <script type='text/javascript'>\n\
\n\
    var mapId = 'sample_map';\n\
\n\
    //### 認証処理と地図APIサーバ設定 ###\n\
    window.onload = function() {\n\
      Mfapi.mapHost = 'api-map-pre.mapfan.com';\n\
      // ※ appidはお客様の認証ＩＤを設定してください。\n\
      Mfapi.auth(appid, task_func);\n\
    }\n\
\n\
    //### 認証後コールバック関数 ###\n\
    function task_func(authStatus) {\n\
      //### 認証結果確認 ###\n\
      if( authStatus != 'success' ) {\n\
        return;\n\
      }\n\
      //### 地図作成条件の設定 ###\n\
      var options = {\n\
        centerPosition : new Mfapi.Util.LonLat(139.7672311841094,35.68119593467379),\n\
        scalerShown : false,\n\
        zoomButtonShown : false,\n\
        mapScale : 12\n\
      };\n\
      //### 地図作成処理 ###\n\
      Mfapi.mapCreate(mapId,options);\n\
\n\
      // 各種イベントのコールバック関数を設定します。\n\
      Mfapi.Events.onChangedMapScale = changedHandler;\n\
      Mfapi.Events.onMapMoveEnd = changedHandler;\n\
\n\
      // 地図領域サイズ、緯度経度を表示するラベルを追加します。\n\
      createLabelElements();\n\
\n\
      // 初期表示処理を行います。\n\
      changedHandler();\n\
    }\n\
\n\
    //### 幅、高さ、四隅の座標を表示するラベル作成処理 ###\n\
    function createLabelElements() {\n\
      var divMap = document.getElementById(mapId);\n\
\n\
      // 中央に地図領域サイズを表示するラベルを配置します。\n\
      (function() {\n\
        var ele = document.createElement('div');\n\
        var eleSize = {w: 60, h: 25};\n\
        ele.id = 'divMapSizeLabel';\n\
        ele.className = 'DivInfoLabelClass';\n\
        ele.style.position = 'absolute';\n\
        ele.style.width = eleSize.w + 'px';\n\
        ele.style.height = eleSize.h + 'px';\n\
        ele.style.left = Math.round(divMap.clientWidth / 2 - eleSize.w / 2) + 'px';\n\
        ele.style.top = Math.round(divMap.clientHeight / 2 - eleSize.h / 2) + 'px';\n\
        divMap.appendChild(ele);\n\
      })();\n\
\n\
      // 四隅に緯度経度を表示するラベルを配置します。\n\
      eleLonLatDivs = [\n\
        {\n\
           id: \"divTopLeftLabel\",\n\
           top:\"10px\",\n\
           left:\"10px\",\n\
        },\n\
        {\n\
           id: \"divTopRightLabel\",\n\
           top:\"10px\",\n\
           left:(divMap.clientWidth-180)+\"px\",\n\
        },\n\
        {\n\
           id: \"divBottomRightLabel\",\n\
           top:(divMap.clientHeight-65)+\"px\",\n\
           left:(divMap.clientWidth-180)+\"px\",\n\
        },\n\
        {\n\
           id: \"divBottomLeftLabel\",\n\
           top:(divMap.clientHeight-65)+\"px\",\n\
           left:\"10px\",\n\
        },\n\
      ];\n\
      eleLonLatDivs.forEach(function(eleLonLatDiv){\n\
        var ele = document.createElement('div');\n\
        var eleSize = {w: 170, h: 40};\n\
        ele.id = eleLonLatDiv.id;\n\
        ele.className = 'DivInfoLabelClass';\n\
        ele.style.position = 'absolute';\n\
        ele.style.width = eleSize.w + 'px';\n\
        ele.style.height = eleSize.h + 'px';\n\
        ele.style.left = eleLonLatDiv.left;\n\
        ele.style.top = eleLonLatDiv.top;\n\
        divMap.appendChild(ele);\n\
      });\n\
\n\
    }\n\
\n\
    //### 地図縮尺変更、地図移動イベントのコールバック関数 ###\n\
    function changedHandler() {\n\
        // 地図サイズを取得します。\n\
        var mapW = document.getElementById(mapId).clientWidth;\n\
        var mapH = document.getElementById(mapId).clientHeight;\n\
\n\
        // 地図の矩形を取得します。(ピクセル位置)\n\
        var topLeft = new Mfapi.Util.ScreenPoint(0, 0);\n\
        var bottomRight = new Mfapi.Util.ScreenPoint(mapW, mapH);\n\
\n\
        // 緯度経度を取得します。\n\
        var lonlatTopLeft = Mfapi.Map.getLonLatFromScreenPosition(topLeft);\n\
        var lonlatBottomRight = Mfapi.Map.getLonLatFromScreenPosition(bottomRight);\n\
\n\
        // ラベルに出力します。\n\
        document.getElementById('divMapSizeLabel').innerHTML\n\
            = '<pre>幅:{w}\\n高さ:{h}</pre>'\n\
              .replace('{w}', mapW)\n\
              .replace('{h}', mapH)\n\
        ;\n\
\n\
        document.getElementById('divTopLeftLabel').innerHTML\n\
            = '<pre>左上:\\n経度:{lon}\\n緯度:{lat}</pre>'\n\
              .replace('{lon}', lonlatTopLeft.lon)\n\
              .replace('{lat}', lonlatTopLeft.lat)\n\
        ;\n\
        document.getElementById('divTopRightLabel').innerHTML\n\
            = '<pre>右上:\\n経度:{lon}\\n緯度:{lat}</pre>'\n\
              .replace('{lon}', lonlatBottomRight.lon)\n\
              .replace('{lat}', lonlatTopLeft.lat)\n\
        ;\n\
        document.getElementById('divBottomRightLabel').innerHTML\n\
            = '<pre>右下:\\n経度:{lon}\\n緯度:{lat}</pre>'\n\
              .replace('{lon}', lonlatBottomRight.lon)\n\
              .replace('{lat}', lonlatBottomRight.lat)\n\
        ;\n\
        document.getElementById('divBottomLeftLabel').innerHTML\n\
            = '<pre>左下:\\n経度:{lon}\\n緯度:{lat}</pre>'\n\
              .replace('{lon}', lonlatTopLeft.lon)\n\
              .replace('{lat}', lonlatBottomRight.lat)\n\
        ;\n\
\n\
    }\n\
\n\
  </script>\n\
</head>\n\
<body>\n\
  <div id='sample_map'></div>\n\
</body>\n\
</html>\n\
",
url: "./src/MfapiSample6_3.html"
},


];

