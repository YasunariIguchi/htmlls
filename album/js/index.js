// (1) ページ本体が読み込まれたタイミングで実行するコード
const result = document.getElementById('result');
if (navigator.geolocation) {
  //現在位置を取得するコード
  navigator.geolocation.getCurrentPosition(
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