$(function() {

 $("input").focus(function () {
      $(this).prev("label").css("font-weight", "bold");
      $(this).css("background", "cyan");
  });

 $("div").hover(function () {
    $(this).show("input").css({"border-color": "blue", "border-width": "1px", "border-style": "solid"});
 });


   });
