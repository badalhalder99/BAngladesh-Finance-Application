/*........carousel code start....................................................*/
$('#demoSlide').carousel({
    interval: 3000,
	pause: false
});	

$('#carouselExampleIndicators').carousel({
    interval: 3000,
	pause: false
});	

/*............carousel code end......................................................*/

/*.............................sidepanel js code start...............................*/

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
/*.............................sidepanel js code end...............................*/
/*.............................multiple item responsive carousel start...............................*/
$('#myCarousel').carousel({
    interval: 3000,
	pause: false
})

$('.mycarousel .carouselItem').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

/*.............................multiple item responsive carousel end...............................*/

/*.............................backToTop Button js code start...............................*/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
});
/*.............................backToTop Button js code end...............................*/
/*........one modal inside another modal require js  code start....................*/

$("#myModal").on('show.bs.modal', function (e) {
    $("#myModal2").modal("hide");
});

$("#myModal2").on('show.bs.modal', function (e) {
    $("#myModal").modal("hide");
});
/*........one modal inside another modal require js  code start....................*/


























