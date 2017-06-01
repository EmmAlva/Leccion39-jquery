//$(document).ready(function(){
	//alert("Cargo jQuery");
//});

/*$( ()=> {//function(){}
	/*$("a:first-child").click( e =>{
		alert("Clicked here")
	});*/

	/*const band = $("<a href='#'>"Banderita"</a>");
	$(".container").append(band);*/

	/*$(".popup-link").click( e=> {
		$('.brand-popup').show();
	});

	/*$("a:last-child").('click',e=> {
		$('.brand-popup').toggle();
	});*/
	/*$(".brand-popup .popup-close").on('click', e => {
		e.preventDefault();
		$('.brand-popup').hide();
		$(".brand-popup").removeClass("hide");
		$(".brand-popup").addClass("show");

	})

});*/

$( () => { //function() {}
  $(".popup-link").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').show();
    //$('.brand-popup').removeClass('hide');
    //$('.brand-popup').addClass('show');

  });

  $(".brand-popup .popup-close").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').hide();
    //$('.brand-popup').removeClass('show');
    //$('.brand-popup').addClass('hide');
  })
});