function save_options() {
    var wordTranslate = document.getElementById('word_translate').checked;
    var exampleTranslate = document.getElementById('example_translate').checked;
    var hideNotes = document.getElementById('hide_notes').checked;
    var useBaiduCollins = document.getElementById('use_baidu_collins').checked;
    var googleImage = document.getElementById('google_image').checked;
    var wolframalpha  = document.getElementById('wolframalpha').checked;
    var enableShortcut  = document.getElementById('enable_shortcut').checked;
    var baiduImage = document.getElementById('baidu_image').checked;
    chrome.storage.sync.set({
        wordTranslate: wordTranslate,
        exampleTranslate: exampleTranslate,
        hideNotes: hideNotes,
        useBaiduCollins: useBaiduCollins,
        googleImage: googleImage,
        wolframalpha: wolframalpha,
        enableShortcut: enableShortcut,
        baiduImage: baiduImage
    }, function () {
        var status = document.getElementById('status');
        status.textContent = '选项保存成功';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        wordTranslate: true,
        exampleTranslate: true,
        hideNotes: false,
        useBaiduCollins: true,
        googleImage: true,
        wolframalpha: false,
        enableShortcut: true,
        baiduImage: true
    }, function (items) {
        document.getElementById('word_translate').checked = items.wordTranslate;
        document.getElementById('example_translate').checked = items.exampleTranslate;
        document.getElementById('hide_notes').checked = items.hideNotes;
        document.getElementById('use_baidu_collins').checked = items.useBaiduCollins;
        document.getElementById('google_image').checked = items.googleImage;
        document.getElementById('wolframalpha').checked = items.wolframalpha;
        document.getElementById('enable_shortcut').checked = items.enableShortcut;
        document.getElementById('baidu_image').checked = items.baiduImage;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
