/**
 * Created by zlh on 2018.03.17.
 */
require.config({
    paths: {
        jquery: "jquery-3.3.1"
    }
})
define(function () {
    var dialog={
        open:function () {
            var dialogHtml="<div class='dialog-box'>"+
            "<div class='dialog-mask'></div>"+
                "<div class='dialog-container'>"+
                "<div class='dialog-header'>"+
                "<div class='dialog-title'>注册 </div>"+
                "<div class='dialog-btn' id='close'>[X] </div>"+
                "</div> <div class='dialog-content'></div>"+
                "</div></div>";
            // document.body.innerHTML+=dialogHtml;
            $("body").append(dialogHtml);
            $("#close").click(function () {
                $(".dialog-box").remove();
            });
        }
    }
    return dialog;
})