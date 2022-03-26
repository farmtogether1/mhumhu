var lastScrollTop = 0;
$(window).scroll(function(event){
 var st = $(this).scrollTop();
 if (st > lastScrollTop){
     $('header').css('background', '#27033e');
 } else if(st == 0) {
   $('header').css('background', 'none');
}
lastScrollTop = st;
});
$(document).ready(function() {
    var st = $(this).scrollTop();
    if (st > 0) {
     $('header').css('background', '#27033e');
     
 }
});