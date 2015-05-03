setInterval(
  function(){
    $("img.speaker").addClass('rotated',1000)
    setTimeout(function(){
        $("img.speaker").removeClass('rotated')},1000);
  },2000);
$("div.gopher").mouseenter(function(){
    $( "div.gopher" ).effect( "bounce", { times: 1 }, "slow" );
});
