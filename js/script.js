$(document).ready(function(){



	var navbar= $('.navbar');
	$(window).scroll(function(){

		if($(window).scrollTop() > 700){
			navbar.css("background-color", "black");
		}
		else
		{
            navbar.css("background-color", "rgba(0,0,0,.6)");
		}
	});


  $(window).scroll(function(){
  $('.block1').each(function(){
    if($(window).scrollTop() > $(this).offset().top){
      var block= $(this).attr('id');
      $('.navbar a').removeClass('active');
      $('.navbar li a[data-value="' +block+ '"]').addClass('active');
    }
  });
  
});



//links add active class******************
  $('ul li').click(function(){
      $(this).addClass('active').siblings().removeClass("active"); //5ly li ely ana wa2f 3leha 7otlha class active bs w shel class active mn 3nd a5watha
      //alert("test");
  });



// smooth scroll from li navbar about to services
 $('.links li a').click(function(){
    $('html,body').animate({
         scrollTop: $( '#' + $(this).data('value') ).offset().top  // 3shan ynzlna bn3oma lma ados 3la ay kelma f nav ywdena ll div ely wa5da id bta3ha
    },1000);
 });




   //caching the scroll top element
        var scrollButton = $("#scroll-top");
        $(window).scroll(function()
        {
          if($(this).scrollTop() >= 700){
             scrollButton.show();
          }
          else{
            scrollButton.hide();
          }
        });

        scrollButton.click(function() // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
          {
             $("html,body").animate({scrollTop : 0},600);
          });


/////////////////////////////// hide placeholder on focus
var x='';
$('[placeholder]').focus(function(){

  x = $(this).attr('placeholder');

  $(this).attr('placeholder','');

}).blur(function(){

  $(this).attr('placeholder',x);
});
        


$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('.counter2 h3').addClass('animated fadeIn');


// team section
$(document).ready(function() {
    $('#Carousel-team').carousel({
        interval: 5000
    })
});



 // trigger mixItUp w dh gaybeno mn 3la elnet   dh l section latest works
    $("#container2").mixItUp();

 // trigger shuffle    dh l section latest works
    $(".shuffle li").click(function(){
      $(this).addClass('selected').siblings().removeClass('selected');
    });



  //trigger niceScroll w dh gaybeno mn 3la elnet
   $('html').niceScroll({
    cursorcolor: '#2a80b9',
    cursorwidth:'10px',
    cursorborder:'1px solid #2a80b9',
    cursorborderradius: '0'
   });




// clients
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})



// our products shuffle

$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");



  

});