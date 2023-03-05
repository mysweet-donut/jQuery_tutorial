$(function() {
    var elem = $.jInvertScroll(['.scroll'],        
        {
        onScroll: function(percent) {
            console.log(percent);
        }
    });
    $(window).resize(function() {
      if ($(window).width() <= 768) {
        elem.destroy();
      }
      else {
        elem.reinitialize();
      }
    });
});