var tyBirButton = document.querySelector('.ty-bir-button')
var tyBirDelta = document.querySelector('.ty-bir-delta')
var tyBirText = document.querySelector('.ty-bir-text')
var flag = false
var i = 0
// var str = "小小月，你就是个大傻逼!!!,想打我？那你就点我一下啊"
var strObj = [
    {
        class: 'red',
        text: '王天月'
    },
    {
        class: '',
        text: '❤'
    },
    {
        class: 'red',
        text: '付文涛'
    }
]
tyBirButton.addEventListener('click', () => {
    tyBirDelta.classList.toggle('ty-dir-trans-rotate', true)
    if (tyBirDelta.classList.contains('ty-dir-trans-rotate')) {
        strObj.forEach(item => {
            inputer(tyBirText, item)
        })
    }
})

const inputer = (ele, item) => {
    console.log(item.text)
    if (i <= item.text.length) {
        let char = item.text.slice(0, i++)
        tyBirText.innerHTML += '<span class='+ item.class +'>' + item.text +'</span>' + '<br>'
        setTimeout(() => {
            inputer(ele,item)
        }, 50)
    } else {
        i = 0
    }
}