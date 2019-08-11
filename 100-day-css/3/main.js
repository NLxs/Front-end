$(".icon").bind("click", function() {
  $(".icon")
    .removeClass("iconVisible")
    .addClass("iconInvisible");
  $(".panel")
    .removeClass("panelVisible")
    .addClass("panelInvisible");
});

$(".panel").bind("click", function() {
  $(".icon")
    .removeClass("iconInvisible")
    .addClass("iconVisible");
  $(".panel")
    .removeClass("panelInvisible")
    .addClass("panelVisible");
});
