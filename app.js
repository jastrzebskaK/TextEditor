function getEditor() {
    var editor = document.getElementById('iframe');

    return editor;
}

function enableEditMode () {
    var editor = getEditor();
    editor.contentDocument.designMode="on";
}

function execCmd(command) {
    text.document.execCommand(command, false, null)
}


function saveTxt() {
    var editor = getEditor();
    var contentTxt = editor.contentWindow.document.body.innerText;

    var blob = new Blob([contentTxt], {type:"text/plain;charset=utf-8"});
    saveAs(blob, "userText.txt");
} 


function saveJSON() {
    var editor = getEditor()
    var contentText = editor.contentWindow.document.body.innerHTML;

    var contentJSON = JSON.parse(`{ "text": "${contentText}" }`)

    var blob = new Blob([JSON.stringify(contentJSON)], {type:"application/JSON;charset=utf-8"});
    saveAs(blob, "userJSON.json");
}


function clearEverything() {
    var editor = getEditor();
    var editor = editor.contentWindow.document.body;
    
    editor.innerHTML = ""
}

