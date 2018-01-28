"use strict";

// 使用する認証ID
const appid = "8005840f3ba344382138fa018249d977716af2751f19ec23";

const startMarker = "./picture/start.png";
const via1Marker = "./picture/via1.png";
const via2Marker = "./picture/via2.png";
const via3Marker = "./picture/via3.png";
const destinationMarker = "./picture/goal.png";
const resultMarker = "./picture/result.png";

const markerNameArray = ["start", "via1", "via2", "via3", "destination", "result"];

// 地図表示
const map = new mapboxgl.Map({
    container: "map",
    style: "./style.json",
    center: [139.7662, 35.6818],
    zoom: 15,
    minZoom: 5,
    maxZoom: 19,
    hash: true
});
map.showTileBoundaries = false;

// ルート検索(巡回無し)
document.getElementById("calcroute_button").addEventListener("click", () => {
    execCalcroute(false);
}, false);

// ルート検索(巡回あり)
document.getElementById("calcroute_travel_button").addEventListener("click", () => {
    execCalcroute(true);
}, false);

// ルート初期化
document.getElementById("calcroute_clear_button").addEventListener("click", () => {
    clearRouteInputForm();
    removeMarker();
    removeRouteLine();
}, false);

// 住所検索
document.getElementById("addr_button").addEventListener("click", () => {
    execSearch(document.getElementById("addr_or_zip").value, "address");
}, false);

// 郵便番号検索
document.getElementById("zip_button").addEventListener("click", () => {
    execSearch(document.getElementById("addr_or_zip").value, "zipCode");
}, false);

// 地図をクリックすると、その点の緯度経度を入力パラメータとして設定できるポップアップが表示される
let popup = false;
map.on("click", (event) => {
    const clickedLngLat = event.lngLat;
    if (popup) {
        popup.remove();
    }

    // クリックした点にポップアップを表示
    popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(clickedLngLat)
        .setHTML("<p id='popup_start' value='start'>出発地に設定</p>" +
            "<p id='popup_via1' value='via1'>経由地1に設定</p>" +
            "<p id='popup_via2' value='via2'>経由地2に設定</p>" +
            "<p id='popup_via3' value='via3'>経由地3に設定</p>" +
            "<p id='popup_destination' name='destination'>目的地に設定</p>")
        .addTo(map);

    // 地図上のクリックでポップアップが作成された後に、上記の各項目のクリックイベントを作成
    document.getElementById("popup_start").addEventListener("click", () => {
        setLngLatInInputForm("start", clickedLngLat);
    }, false);
    document.getElementById("popup_via1").addEventListener("click", () => {
        setLngLatInInputForm("via1", clickedLngLat);
    }, false);
    document.getElementById("popup_via2").addEventListener("click", () => {
        setLngLatInInputForm("via2", clickedLngLat);
    }, false);
    document.getElementById("popup_via3").addEventListener("click", () => {
        setLngLatInInputForm("via3", clickedLngLat);
    }, false);
    document.getElementById("popup_destination").addEventListener("click", () => {
        setLngLatInInputForm("destination", clickedLngLat);
    }, false);
});

/**
 * ルート検索実行
 * @param {boolean} travel
 */
function execCalcroute(travel) {
    fetchAccessKey((data) => {
        // 認証失敗時もレスポンスが200で返ってくるため、レスポンスの中を見て異常がないか確認する
        if (data.status === "success") {
            const viaPoints = [];
            const viaInputs = document.querySelectorAll(".via > input");
            for (const viaInput of viaInputs) {
                viaPoints.push(viaInput.value);
            }
            const calcrouteParameterValue = {
                start: document.getElementById("start").value,
                viaPoints,
                destination: document.getElementById("destination").value
            };
            getCalcrouteResponse(travel ? 1 : 0, data.key, calcrouteParameterValue, (data) => {
                // 検索失敗時もレスポンスが200で返ってくるため、レスポンスの中を見て異常がないか確認する
                if (data.status === "success") {
                    showCalcrouteResult(calcrouteParameterValue, data.shape);
                } else {
                    // 前の検索結果マーカーとルート線の削除
                    removeMarker();
                    removeRouteLine();
                    throw new Error(data.status);
                }
            });
        } else {
            throw new Error(data.status);
        }
    });
}

/**
 * 検索実行
 * @param {string} word
 * @param {string} mode
 */
function execSearch(word, mode) {
    fetchAccessKey((data) => {
        // 認証失敗時もレスポンスが200で返ってくるため、レスポンスの中を見て異常がないか確認する
        if (data.status === "success") {
            getSearchResponse(data.key, word, mode, (data) => {
                // 検索失敗時もレスポンスが200で返ってくるため、レスポンスの中を見て異常がないか確認する
                if (data.status === "success") {
                    showSearchResult(data.results);
                } else {
                    // 前の検索結果マーカーとルート線の削除
                    removeMarker();
                    removeRouteLine();
                    throw new Error(data.status);
                }
            });
        } else {
            throw new Error(data.status);
        }
    });
}

/**
 * ポップアップより緯度経度を入力フォームに入力する
 * @param value
 * @param lngLat
 */
function setLngLatInInputForm(value, lngLat) {
    document.getElementById(value).value = `${lngLat.lng},${lngLat.lat}`;
    popup.remove();
}

/**
 * アクセスキーを取得する
 * @param callback
 */
function fetchAccessKey(callback) {
    const nowDate = new Date();
    // dateにはyyyyMMddhhmmssを渡す
    const date = `${nowDate.getFullYear()}${(nowDate.getMonth() + 1)}${nowDate.getDate()}${nowDate.getHours()}${nowDate.getMinutes()}${nowDate.getSeconds()}`;
    const url = `https://api-auth-pre.mapfan.com/v1/auth?appid=${appid}&date=${date}&callback=callback`;
    executeUrl(url, callback);
}

/**
 * ルート検索実施
 * @param travel
 * @param key
 * @param paramValue
 * @param callback
 */
function getCalcrouteResponse(travel, key, paramValue, callback) {
    // URL作成
    let url = `http://api-route-pre.mapfan.com/v1/calcroute?key=${key}`;

    const start = paramValue.start;
    const viaPoints = paramValue.viaPoints;

    const viaArray = [];
    for (const viaPoint of viaPoints) {
        if (viaPoint) {
            viaArray.push(viaPoint);
        }
    }
    const via = viaArray.join("|");

    const destination = paramValue.destination;

    url += `&start=${encodeURIComponent(start)}&via=${encodeURIComponent(via)}&destination=${encodeURIComponent(destination)}&travel=${travel}&callback=callback`;

    // 実行、マーカーとルート線描画
    executeUrl(url, callback);
}

/**
 * 検索実施
 * @param key
 * @param word
 * @param mode
 * @param callback
 */
function getSearchResponse(key, word, mode, callback) {
    let url = "";
    // URL作成
    if (mode === "address") {
        url = `http://api-srch-pre.mapfan.com/v1/addr?key=${key}&addr=${encodeURIComponent(word)}&callback=callback`;
    } else if (mode === "zipCode") {
        url = `http://api-srch-pre.mapfan.com/v1/zip?key=${key}&zipcd=${encodeURIComponent(word)}&callback=callback`;
    }
    // 実行、マーカー描画
    executeUrl(url, callback);
}

/**
 * jsonp実行
 * @param url
 * @param callback
 */
function executeUrl(url, callback) {
    window.callback = callback;
    //scriptタグのsrcにリクエストURLを挿入して実行
    const script = document.createElement("script");
    script.src = url;

    document.body.appendChild(script);

    script.onerror = (err) => {
        console.log(`script error${err}`);
    };
}

/**
 * ルート結果表示
 * @param calcrouteParameterValue
 * @param shape
 */
function showCalcrouteResult(calcrouteParameterValue, shape) {
    // 前の検索結果マーカーとルート線の削除
    removeMarker();
    removeRouteLine();

    // マーカー描画
    const param = calcrouteParameterValue;

    const startLonLat = param.start.split(",", 2);
    const destinationLonLat = param.destination.split(",", 2);
    drawMarker("start", [startLonLat]);
    drawMarker("destination", [destinationLonLat]);

    for (let i = 0; i < param.viaPoints.length; i++) {
        drawMarker(`via${i+1}`, [convertToCoordinate(param.viaPoints[i])]);
    }

    // ルート線描画
    drawRouteLine(shape);
}

/**
 * coordinateに変換
 * @param point
 * @returns {*}
 */
function convertToCoordinate(point) {
    if (!point) {
        return [];
    }
    const coordinates = point.split(",", 2);

    return coordinates.length === 2 ? coordinates : [];
}

/**
 * 検索結果を表示
 * @param results
 */
function showSearchResult(results){
    // 前の検索結果マーカーとルート線の削除
    removeMarker();
    removeRouteLine();
    const resultLonLat = [];
    for (const result of results) {
        resultLonLat.push([result.lon, result.lat]);
    }
    drawMarker("result", resultLonLat);
}

/**
 * マーカー削除
 */
function removeMarker() {
    // マーカーの種類ごとにレイヤーを作成しているため、すべてのレイヤーに対して処理をしている。
    for (const markerName of markerNameArray) {
        if (map.getLayer(markerName)) {
            map.removeSource(markerName);
            map.removeLayer(markerName);
            map.removeImage(markerName);
        }
    }
}

/**
 * マーカー描画
 * @param addMarkerName
 * @param paramValues
 */
function drawMarker(addMarkerName, paramValues) {  // paramValueは、 [[lng1,lat1],[lng2,lat2]...]の形式
    // マーカーの設定
    const geojson = {
        "id": addMarkerName,
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": []
            }
        },
        "layout": {
            "icon-image": addMarkerName,
            "icon-size": 0.5,
            "icon-anchor": "bottom",
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    };

    // マーカーの設定に、緯度経度の情報をセット
    for (const paramValue of paramValues) {
        geojson.source.data.features.push({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": paramValue
            }
        });
    }

    // マーカーの名前から、マーカーの画像のパスをmarkerPathに設定
    let markerPath;
    switch (addMarkerName) {
        case "start":
            markerPath = startMarker;
            break;
        case "via1":
            markerPath = via1Marker;
            break;
        case "via2":
            markerPath = via2Marker;
            break;
        case "via3":
            markerPath = via3Marker;
            break;
        case "destination":
            markerPath = destinationMarker;
            break;
        case "result":
            markerPath = resultMarker;
            break;
        default:
            markerPath = resultMarker;
            break;
    }

    // マーカーの画像を読み込み、描画する
    map.loadImage(markerPath, (error, image) => {
        map.addImage(addMarkerName, image);
        map.addLayer(geojson);
    });
}

/**
 * ルート線削除
 */
function removeRouteLine() {
    if (map.getLayer("route")) {
        map.removeSource("route");
        map.removeLayer("route");
    }
}

/**
 * ルート線描画
 * @param shape
 */
function drawRouteLine(shapes) {
    const ar = [];

    // ルート線を描画する緯度経度の配列
    // shapesは、ルート線を描画するための緯度経度などが格納されている
    for (const shape of shapes) {
        for (const shapePoint of shape.shapePoints) {
            ar.push([shapePoint.lon, shapePoint.lat]);
        }
    }

    // ルート線のレイヤーを追加
    map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": ar
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#eb6ea5",
            "line-width": 8
        }
    });
}

/**
 * ルート検索の入力フォームを空にする
 */
function clearRouteInputForm() {
    document.getElementById("start").value = "";
    document.getElementById("via1").value = "";
    document.getElementById("via2").value = "";
    document.getElementById("via3").value = "";
    document.getElementById("destination").value = "";
}
