$(document).ready(function() {

  // Set current year in copyright notice
  const currentYear = new Date().getFullYear();
  $('#year').text(currentYear);

  // Set up accordions
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

});  


function mapResize() {
  console.log("Map resize");
  // google.maps.event.trigger(map, 'resize');
};

const cookieNotice = document.getElementById('cookie-notice');
const acceptButton = document.querySelector('#cookie-notice button')

const shouldShowCookieNotice = () => !localStorage.getItem('hasAcceptedCookies');
const showCookieNotice = () => cookieNotice.classList = 'section section__footer';
const acceptAndHideNotice = () => {
  cookieNotice.classList += ' is-hidden';
  localStorage.setItem('hasAcceptedCookies', true);
}

window.onload = () => {

	if(shouldShowCookieNotice()) {
		showCookieNotice();
	}

  acceptButton.addEventListener('click', acceptAndHideNotice, false);
}
