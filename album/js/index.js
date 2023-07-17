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
    }
  );
} else {
  window.alert('Geolocation APIに対応しているブラウザーでアクセスしてください。');
}