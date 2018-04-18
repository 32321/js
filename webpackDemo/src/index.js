import css from './css/style.css'

var a=0;
setTimeout(function(){
    var path=require("path");
    console.log(path.resolve());
},1000)
document.getElementById("a").style.backgroundColor="red";