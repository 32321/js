/**
 * Created by zlh on 2018.03.17.
 */
require.config({
    paths: {
        jquery: "jquery-3.3.1"
    }
})
define(["jquery","test"],function ($,test) {
    test.con();
    var dialog={
        open:function ($content) {
            var defaultSetting={
                width:"600px",
                height:"600px",
                content:"登录成功!!!"
            }
            $.extend(defaultSetting,$content);
            var dialogHtml="<div class='dialog-box'>"+
            "<div class='dialog-mask'></div>"+
                "<div class='dialog-container'>"+
                "<div class='dialog-header'>"+
                "<div class='dialog-title'>注册 </div>"+
                "<div class='dialog-btn' id='close'>[X] </div>"+
                "</div> <div class='dialog-content'></div>"+
                "</div></div>";
            $("body").append(dialogHtml);
            $(".dialog-container").css("width",defaultSetting.width);
            $(".dialog-container").css("height",defaultSetting.height);
            if(defaultSetting.content.indexOf(".html")!==-1){
                console.log(defaultSetting.content);
                $(".dialog-content").load("js/input.html");//为啥？哦因为引入input.html
                                            //的是上一级目录的index.html
            }else {
                console.log(defaultSetting.content);
                $(".dialog-content").text(defaultSetting.content);
            }
            $("#close").click(function () {
                $(".dialog-box").remove();
            });
        }
    }
    return dialog;
})