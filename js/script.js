jQuery( document ).ready(function(){
  $(function (){
  $(".Open").click(function(){
  $(".Heder_modal:hidden").animate({'height': 'toggle'});
  $(".Open").css("opacity","0");
  $(".Close").css("visibility","visible");
});
  $(".Close").click(function(){
  $(".Heder_modal").animate({'height': 'toggle'});
  $(".Open").css("opacity","1");
  $(".Close").css("visibility","hidden");
});
$(".Molnia").click(function(){
  $(".Menu_Down_modal").animate({'height': 'toggle'});
});
});
});
