// ページ本体が読み込まれたタイミングで実行するコード
const subject = document.getElementById('subject');
const memo = document.getElementById('memo');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

save.addEventListener('click',
  (e) => {
    //[保存]ボタンのクリック時に実行するコード
    e.preventDefault();
    if (subject.validity.valid === false ||
      memo.validity.valid === false) {
        //件名、メモが入力されていない時に実行するコード
      window.alert('件名、メモはいずれも必須です。');
      return;
      }
  }, false
);

cancel.addEventListener('click',
  function () {
    //[キャンセル]ボタンのクリック時に実行するコード
    location.href = 'index.html';
  }, false
);