// (1) ページ本体が読み込まれたタイミングで実行するコード
let w_id;
const result = document.getElementById('result');
const stopwatch = document.getElementById('stopwatch');

stopwatch.addEventListener('click',
  (e) => {
    navigator.geolocation.clearWatch(w_id);
  }, false
);

if (navigator.geolocation) {
  //現在位置を取得するコード
  w_id = navigator.geolocation.watchPosition(
    (pos) => {
      //現在位置の取得に成功した時の処理
      msg = `緯度：${pos.coords.latitude}<br />
        経度：${pos.coords.longitude}<br />
        方角：${pos.coords.heading}`;
      result.innerHTML = msg;
    },
    (err) => {
      //現在位置の取得に失敗した時の処理
      const msgs = [
        '',
        'Geolocationの使用が許可されていません。',
        '位置情報を取得できません。',
        '位置情報の取得中にタイムアウトしました。'
      ];
      result.textContent = msgs[err.code];
    },
    {
      //位置情報取得のためのオプション
      timeout : 7000,
      maximumAge : 500,
      enableHighAccuracy : false
    }
  );
} else {
  window.alert('Geolocation APIに対応しているブラウザーでアクセスしてください。');
}