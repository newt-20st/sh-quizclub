function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function news() {
    try {
        var newsid = getParam('id');
        if (newsid === "" || newsid === null) {
            var newstext = document.getElementById('news-top');
            console.log('news-top');
            newstext.style.display = 'block';
        } else if (newsid === "all") {
            var newstext = document.getElementsByClassName('oneofnews');
            for (i = 0; i < newstext.length; i++) {
                newstext[i].style.display = 'block';
            }
        } else {
            var newstext = document.getElementById(newsid);
            console.log(newsid);
            titletext = newstext.getAttribute('title') + " - ニュース｜SHQC 栄東中高クイズ研究部";
            document.title = titletext;
            newstext.style.display = 'block';
        }
    } catch (e) {
        var newstext = document.getElementById('news-top');
        newstext.style.display = 'block';
        console.log(e);
    }
}