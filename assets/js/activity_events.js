$(document).on("click", "#btn_stop", function (event) {
    StopOscillation();
    RunningOscillation = false;
});
$(document).on("click", "#btn_reset", function (event) {
    OnResetButton();
});
$(document).on("click", "#btn_settings", function (event) {
    $(".popup").hide();
    $(".forceSplit").removeClass("forceSplit");
    $(".forceSplit0").removeClass("forceSplit0");
    $(".forceSplit1").removeClass("forceSplit1");
    $(".forcePopup").removeClass("forcePopup");
    $(".popup.settings").fadeIn();
});
$(document).on("click", "#btn_sheet", function (event) {
    $(".popup").hide();
    $(".forceSplit").removeClass("forceSplit");
    $(".forceSplit0").removeClass("forceSplit0");
    $(".forceSplit1").removeClass("forceSplit1");
    $(".forcePopup").removeClass("forcePopup");
    $(".popup.worksheet").fadeIn();

});
$(document).on("click", "#btn_calculations", function (event) {
    $(".popup").hide();
    $(".popup.calculations").fadeIn();
    if (IsDesktop) {
        $("#split-main").addClass("forceSplit")
        $("#split-0").addClass("forceSplit0")
        $("#split-1").addClass("forceSplit1")
        $(".popup.calculations").addClass("forcePopup")
    }
});
$(document).on("click", "#btn_info", function (event) {
    $(".popup").hide();
    $(".popup.info").fadeIn();
    if (IsDesktop) {
        $("#split-main").addClass("forceSplit")
        $("#split-0").addClass("forceSplit0")
        $("#split-1").addClass("forceSplit1")
        $(".popup.info").addClass("forcePopup")
    }
});
$(document).on("click", "#btn_procedure", function (event) {
    $(".popup").hide();
    $(".popup.procedure").fadeIn();
    if (IsDesktop) {
        $("#split-main").addClass("forceSplit");
        $("#split-0").addClass("forceSplit0");
        $("#split-1").addClass("forceSplit1");
        $(".popup.procedure").addClass("forcePopup");
    }
});
$(document).on("click", ".btn-close-popup", function (event) {
    $(this).closest(".popup").fadeOut();
    $(".forceSplit").removeClass("forceSplit");
    $(".forceSplit0").removeClass("forceSplit0");
    $(".forceSplit1").removeClass("forceSplit1");
    $(".forcePopup").removeClass("forcePopup");
});
