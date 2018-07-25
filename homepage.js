//Scroll animation
AOS.init({
        easing: 'ease-out-back',
        duration: 2000
       });
     
     

      $('.hero__scroll').on('click', function(e) {
        $('html, body').animate({
          scrollTop: $(window).height()
        }, 1200);
      });
var speed1=200;
$(document).ready(function(){
  j=0
  typeWriter1();
});
function typeWriter1() {
var txt1 = 'We code we help you code';
  if (j < txt1.length) {
    document.getElementById("sub").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typeWriter1, speed1);
  }
}