
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








//Text animation

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

//buttons
var question1=["#include<stdio.h>","int fib(int n){","if (n <= 1){","return n};","return fib(n-1) + fib(n-2);}","int main (){","int n = 4;","printf('%d', fib(n));","return 0;}"];
var question2=["class fibonacci{","static int fib(int n){","if (n <= 1){","return n;}","return fib(n-1) + fib(n-2);}","public static void main (String args[]){","int n = 9;","System.out.println(fib(n));}}"];

var id="";
function reply_click(clicked_id)
{
    if(clicked_id=='c')
    {
      id="c";
      document.getElementById('question').innerHTML="";
      for(var i=0;i<question1.length;i++){
      document.getElementById('question').innerHTML+=question1[i]+"</br>";
    }
    
}
if(clicked_id=='java')
      {
        var id="java";
        document.getElementById('question').innerHTML="";
      for(var i=0;i<question2.length;i++){
      document.getElementById('question').innerHTML+=question2[i]+"</br>";
    }
  }
  
}
$('#submit').click(function(){
  var result=document.getElementById('answer').value;
  if(result==3){
    change();
  }
})
function change(){
  window.location = "hompage.html";
}