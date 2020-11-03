var button = document.getElementById('menuButtonId');
button.addEventListener('click', () => {
    var obj = document.getElementById('grobalNavi');
    //要素にclass="cs3"が含まれていれば削除、含まれなければ追加する
    obj.classList.toggle('openingMenu');
    obj.classList.toggle('closingMenu');
    var top = document.querySelector('.topline');
    var center = document.querySelector('.centerline');
    var bottom = document.querySelector('.bottomline');
    top.classList.toggle('active');
    center.classList.toggle('active');
    bottom.classList.toggle('active');
});

// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// チェックした時の挙動
btn.addEventListener("change", () => {
    if (btn.checked == true) {
        // ダークモード
        document.body.classList.add("dark-theme");
    } else {
        // ライトモード
        document.body.classList.remove("dark-theme");
    }
});

$('input[type=checkbox]').change(function() {
    counter = 0;
    clicked = $(this).data('index');
    $('input[type=checkbox]').each(function() {
        if ($(this)[0].checked) {
            counter++;
        }
    });
    if (counter == 3) {
        toDisable = clicked;
        while (toDisable == clicked) {
            toDisable = Math.round(Math.random() * 2);
        }
        $("input:eq(" + toDisable + ")")[0].checked = false;
    }
});