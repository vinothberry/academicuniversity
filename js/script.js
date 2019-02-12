function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 800){
      $('#topBtn').fadeIn();
    }else{
      $('#topBtn').fadeOut();
    }
  });
  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
