
$(document).ready(function () { 
$(".container .row .first1").hover(function () {
    $(".first1").animate({ top: "120px" },300);
    $(".first2").animate({ top: "20px" },400);
    $(".first3").animate({ top: "60px" },500);

});
$(".container .row .first1").mouseout(function () {
    $(".first1").animate({ top: "150px" });
    $(".first2").animate({ top: "50px" });
    $(".first3").animate({ top: "90px" });

});
$(".container .row .second1").hover(function () {
    $(".second1").animate({ top: "10px" }, 300);
    $(".second2").animate({ top: "210px" }, 400);
    $(".second3").animate({ top: "270px" }, 500);

});
$(".container .row .second1").mouseout(function () {
    $(".second1").animate({ top: "40px" });
    $(".second2").animate({ top: "240px" });
    $(".second3").animate({ top: "300px" });

});
$(".container .row .third1").hover(function () {
    $(".third1").animate({ top: "330px" }, 300);
    $(".third2").animate({ top: "480px" }, 400);
    $(".third3").animate({ top: "520px" }, 500);

});
$(".container .row .third1").mouseout(function () {
    $(".third1").animate({ top: "360px" });
    $(".third2").animate({ top: "510px" });
    $(".third3").animate({ top: "550px" });

});
$(".container .row .fourth1").hover(function () {
    $(".fourth1").animate({ top: "540px" }, 300);
    $(".fourth2").animate({ top: "450px" }, 400);
    $(".fourth3").animate({ top: "500px" }, 500);

});
$(".container .row .fourth1").mouseout(function () {
    $(".fourth1").animate({ top: "570px" });
    $(".fourth2").animate({ top: "480px" });
    $(".fourth3").animate({ top: "530px" });

});
});