/*iconito de favoritos on/off*/
$(document).ready(function(){
 
  $(".shoppingUtil >  img").mouseover(function(){
       console.log("ruta="+$(this).attr("src"));
       var ruta = $(this).attr("src").replace("StarA","StarB");
       $(this).attr("src",ruta);
   });

   $(".shoppingUtil >  img").mouseout(function(){
       console.log("ruta="+$(this).attr("src"));
       var ruta = $(this).attr("src").replace("StarB","StarA");
       $(this).attr("src",ruta);
   });

       
});
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
