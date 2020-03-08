// When main navigation links are clicked, the page smooth scrolls to the appropriate section.
$(function() {
    $(".sf-menu li a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500); // 1500 = 1.5 seconds
    });
});