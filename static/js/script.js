
// Initalize tabular elements on the CV section
$('.menu .item')
.tab();

// Adjust Scroll-to-Top button visibility
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myScrollBtn").style.display = "block";
  } else {
    document.getElementById("myScrollBtn").style.display = "none";
  }
}
