const fnTextPopup = require("./custom/textPopup") 

// 这里编写自定义js脚本；将被静态引入到页面中
document.querySelector("#home-nav-button").style.display = "none"

fnTextPopup(['❤富强❤', '❤民主❤', '❤文明❤', '❤和谐❤', '❤自由❤', '❤平等❤', '❤公正❤', '❤法治❤', '❤爱国❤', '❤敬业❤', '❤诚信❤', '❤友善❤'])