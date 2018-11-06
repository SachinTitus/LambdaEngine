let inputBox = document.getElementById('lambdainput');

inputBox.onkeyup = function() {
    let string = inputBox.value;
    document.getElementById('lambdaresult').innerHTML = string.replace(/ld/g, "<span class='lambdaSymbol'>λ</span>");

};