$(document).ready(function () {
  $('#nav-toggle').click(function (e) {
    $(this).toggleClass('active');
      $('.header .container').toggle();
        });

        $('.close').click(function(){
          $('.header .container').hide();
        })
    });

    document.querySelector( "#nav-toggle" )
	  	.addEventListener( "click", function() {
	this.classList.toggle( "active1" );
	});

