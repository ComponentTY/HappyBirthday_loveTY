var loveTyHeader = document.querySelector('.love-ty-header')
var i = 0
var str = 'Happy Birthday!'
function inputer () {
    if (i <= str.length) {
        var char = str.slice(0, i++)
        loveTyHeader.innerHTML = `<span class='love-ty-input'>${char}</span><span class='love-ty-cursor'> | </span>`
        timer = setTimeout('inputer()', 300)
    } else {
        document.querySelector('.love-ty-cursor').style.display = 'none'
    }
}
function disappear() {
    let cursor = document.querySelector('.love-ty-cursor');
    cursor.innerHTML = '';
    setTimeout(appear,500);
}
function appear() {
    let cursor = document.querySelector('.love-ty-cursor');
    cursor.innerHTML = '|';
    setTimeout(disappear,500);
}
inputer() // 开始写
disappear() // 光标 忽隐忽现