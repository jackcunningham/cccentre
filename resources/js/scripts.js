(function($) {
    
  var allPanels = $('.accordion > dd').hide();




    
  $('.accordion > dt > a').click(function() {
      $this = $(this);
      $target =  $this.parent().next();

      if(!$target.hasClass('active')){
         allPanels.removeClass('active').slideUp();
         $target.addClass('active').slideDown();
      }
      
    return false;
  });

  $('.show').click(function() {
    $('#map').slideToggle( [], [ mapResize() ] );
  });

})(jQuery);  


function mapResize() {
  console.log("ball bag");
  // google.maps.event.trigger(map, 'resize');
};