/* Author: 

*/

$(document).ready(function() {
    var filter=$(".gallery-filters");
    filter.on("click", function(e) {
    if(e.target && e.target.nodeName == "SPAN") {
    var x = $(".tabs");    
    if(x.hasClass("bg-green"))
    {
    x.removeClass("bg-green");        
    x.addClass("bg-black");
    }
      
      var image_li=$(".image-li");
      
      image_li.each(function(){
        if($(this).hasClass("show-img"))
        {
          $(this).removeClass("show-img");
        }
        $(this).addClass("hide-img");
      });


    var classname_sel=e.target.className;
    $.each(image_li,function(i,image){
      if(classname_sel=="all"){
        if($(this).hasClass("hide-img")){
          $(this).removeClass("hide-img");
          $(this).addClass("show-img");
      }
      }
      else if($(this).hasClass(classname_sel)) {
         if($(this).hasClass("hide-img")){
          $(this).removeClass("hide-img");
          $(this).addClass("show-img");
      }
      }
  });

  if( $(e.target).parent().hasClass("bg-black"))
      {
        $(e.target).parent().removeClass("bg-black");
        $(e.target).parent().addClass("bg-green");
      }
    }  
});

});

























