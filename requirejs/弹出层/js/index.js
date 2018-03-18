/**
 * Created by zlh on 2018.03.17.
 */
require.config({
        paths: {
            jquery: "jquery-3.3.1"
        }
    })

require(["dialog","jquery"],function (dialog,$) {
    var $content={
        width:"500px",
        height:"200px",
        content:"input.html"
    }
    $("#btn").click(function () {
        dialog.open();
    })
    $("#btn1").click(function () {
        dialog.open($content);
    })
})
