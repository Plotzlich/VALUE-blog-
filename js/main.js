$(document).ready(function () {
  $('.fa-bars').click(function (e) {
    $(this).toggleClass('active');
      $('.header .container').toggle();
        });

        $('.close').click(function(){
          $('.header .container').hide();
        })
    });