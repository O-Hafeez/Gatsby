function toggleIcon(e) {
  $(e.target)
    .prev(".panel-heading")
    .find(".more-less")
    .toggleClass("fa-plus fa-minus")
}
(function($){
    $(document).ready(function () {
        setTimeout(() => {
          $("#recipeCarousel").carousel({
            interval: 10000,
          })
      
          $(".carousel .carousel-item").each(function () {
            var minPerSlide = 3
            var next = $(this).next()
            if (!next.length) {
              next = $(this).siblings(":first")
            }
            next.children(":first-child").clone().appendTo($(this))
      
            for (var i = 0; i < minPerSlide; i++) {
              next = next.next()
              if (!next.length) {
                next = $(this).siblings(":first")
              }
      
              next.children(":first-child").clone().appendTo($(this))
            }
          })
        },3000)
      })
})(jQuery)

//   alert("hello ")
//   $(".panel-group").on("hidden.bs.collapse", toggleIcon)
//   $(".panel-group").on("shown.bs.collapse", toggleIcon)
