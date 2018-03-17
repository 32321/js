/**
 * Created by zlh on 2018.03.17.
 */
require.config({
        paths: {
            jquery: "jquery-3.3.1"
        }
    })

require(["dialog","jquery"],function (dialog) {
    $("#btn").click(function () {
        dialog.open();
    })
})
