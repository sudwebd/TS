$(document).ready(function () {
    $(".ulio ul li").hover(function () {
        $(this).animate({ top: "30px" },200);
    });
    $(".ulio ul li").mouseout(function () {
        $(this).animate({ top: "50px" },200);

    });

});