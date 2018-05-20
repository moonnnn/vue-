$(function() {
  // nav

  // main
  $(".tjwf-er ul li").hover(
    function() {
      $(this)
        .children(".sz-y")
        .css("paddingTop", "62px")
        .animate({ bottom: "0" }, 500);
    },
    function() {
      $(this)
        .children(".sz-y")
        .css("paddingTop", "0px")
        .animate({ bottom: "-244px" }, 500);
    }
  );

  $(".tjdf-er:eq(0) ul li").hover(function() {
    $(this)
      .stop()
      .addClass("dangxia-er")
      .siblings()
      .stop()
      .removeClass("dangxia-er");
    $(".tjwf-er:eq(0) ul")
      .eq($(this).index())
      .stop()
      .show()
      .siblings()
      .stop()
      .hide();
  });

  $(".tjdf-er:eq(1) ul li").hover(function() {
    $(this)
      .stop()
      .addClass("dangxia-er")
      .siblings()
      .stop()
      .removeClass("dangxia-er");
    $(".tjwf-er:eq(1) ul")
      .eq($(this).index())
      .stop()
      .show()
      .siblings()
      .stop()
      .hide();
  });

  $(".tjdf-er:eq(2) ul li").hover(function() {
    $(this)
      .stop()
      .addClass("dangxia-er")
      .siblings()
      .stop()
      .removeClass("dangxia-er");
    $(".tjwf-er:eq(2) ul")
      .eq($(this).index())
      .stop()
      .show()
      .siblings()
      .stop()
      .hide();
  });
});
