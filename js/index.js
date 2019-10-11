var tyBirButton = document.querySelector('.ty-bir-button')
var tyBirDelta = document.querySelector('.ty-bir-delta')
var tyBirText = document.querySelector('.ty-bir-text')
var tyBirText1 = document.querySelector('.ty-bir-text1')
var button = document.querySelector('.ty-surprise')
var flag = false
var i = 0
// var str = "小小月，你就是个大傻逼!!!,想打我？那你就点我一下啊"
var str = '王天月 ❤ 付文涛'
var str1 = '这是一个简单的礼物，但是有我对你的爱哦，小小月，爸爸爱你...'
tyBirButton.addEventListener('click', () => {
    tyBirDelta.classList.toggle('ty-dir-trans-rotate', true)
    if (tyBirDelta.classList.contains('ty-dir-trans-rotate')) {
        inputter(tyBirText, str)
    }
})
var timer1, timer2
function inputter (ele, obj) {
    if (i <= obj.length) {
        let char = obj.slice(0, i++)
        ele.innerHTML = char + `<span class='under'>_</span>`
        timer1 = setTimeout(() => {
            inputter(ele, obj)
        }, 100)
    } else {
        timer1 = null
        i = 0
        document.querySelector('.under').style.display = 'none'
        inputter2(tyBirText1, str1)
    }
}
// ES5 普通函数
function inputter2 (ele, obj) {
    if (i <= obj.length) {
        // 字符串截取 slice(start, end)  例： '123123'.slice(0,1) => '1'
        let char = obj.slice(0, i++)
        ele.innerHTML = char + `<span class='under'>_</span>`
        setTimeout(() => {
            inputter2(ele, obj)
        }, 100)
    } else {
        console.log(document.querySelector('.under'))
        document.querySelectorAll('.under')[1].style.display = 'none'
        timer2 = null
        i = 0
    }
}
// 点击惊喜触发
// ES6 箭头函数
button.onclick = () => {
    // 弹框显示出来，背景变黑，时间轴走一走
    document.querySelector('.ty-shadow').style.display = 'block'
}
document.querySelector('.ty-btn').onclick = () => {
    document.querySelector('.ty-btn').style.display = 'none'
    document.querySelector('.ty-text').style.display = 'block'
    setTimeout(() => {
        location.href='/birthday.html'
    }, 2000)
}