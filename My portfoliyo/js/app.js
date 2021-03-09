window.addEventListener("scroll", function(){
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY>10);
});
$(document).ready(function(){
    $('.loading').css('display','none')
});

$('#btnn').click(function(){
    $('#nav').addClass("change");
})
