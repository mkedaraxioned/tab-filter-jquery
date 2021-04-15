/* Author: 

*/

$(document).ready(function() {
    // alert("hi");
    var filter=$(".gallery-filters");
    filter.on("click", function(e) {
        var sel_ele=e.target;
    var classname_sel1=sel_ele.className;
    alert("classname="+classname_sel1);
    alert("filter clicked"+e.target.nodeName);
    if(e.target && e.target.nodeName == "SPAN") {
    var x = $(".tabs");


    
    if(x.hasClass("bg-green"))
    {
        alert("has green class");
    x.removeClass("bg-green");        
    x.addClass("bg-black");
    }
      
      var image_li=$(".image-li");
      
      $.each(image_li,function(i,image){
        //   console.log(value.classList.contains("color1"));
          if(image.classList.contains("show-img"))
          {
              alert("has show-img");
              image.classList.remove("show-img");
          }
              image.classList.add("hide-img");
              alert("dont have show-imge");
      });


    var classname_sel=e.target.className;
    $.each(image_li,function(i,image){
        if(classname_sel=="all"){
          if(image.classList.contains("hide-img")){
            image.classList.remove("hide-img");
            image.classList.add("show-img");
        }
        }
        else if(image.classList.contains(classname_sel)) {
           if(image.classList.contains("hide-img")){
            image.classList.remove("hide-img");
            image.classList.add("show-img");
        }
        }
    });

    if(e.target.parentNode.classList.contains("bg-black"))
      {
        e.target.parentNode.classList.remove("bg-black");        
        e.target.parentNode.classList.add("bg-green");
      }
    }  
});

});

























