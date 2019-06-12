var windowStatus = "";

// Change some css styles
$(document).ready(function($) {
  var alterMetaInSinglePage = function() {
    var width = document.body.clientWidth;

    if (width < 540) {

      $('#prevPageBtn').removeClass('right floated button');
      $('#prevPageBtn').addClass('left floated button');

      $('#backToBtn').removeClass('right floated button');
      $('#backToBtn').addClass('left floated button');

    } else if (width >= 541) {

      $('#backToBtn').removeClass('left floated button');
      $('#backToBtn').addClass('right floated button');

   	  $('#prevPageBtn').removeClass('left floated button');
      $('#prevPageBtn').addClass('right floated button');

    };

    if(width < 400) {

      $('#prevExtraBtn').removeClass('right floated button');
      $('#prevExtraBtn').addClass('left floated button');

    } else if (width >= 401) {

      $('#prevExtraBtn').removeClass('left floated button');
      $('#prevExtraBtn').addClass('right floated button');
      
    }

    // if(width < 768) {

    // }

    if (width < 390) {
      $('#metaSingle').removeClass('horizontal');
    } else if (width >= 391) {
      $('#metaSingle').addClass('horizontal');
    };

  };
  $(window).resize(function(){
    alterMetaInSinglePage();
  });

  alterMetaInSinglePage();
});

// Maximaze and minimize the single page window for better reading
function MaxContentSection() {
  document.getElementById("mainMenu").style.display = "none";

  $('#contentSection').removeClass('ten wide column');
  $('#contentSection').addClass('fourteen wide column');

  document.getElementById("MinSecBtn").style.display = "inline-block";
  document.getElementById("MaxSecBtn").style.display = "none";
  location.href = "#contentSection";
}

function MinContentSection() {

  $('#contentSection').removeClass('fourteen wide column');
  $('#contentSection').addClass('ten wide column');

  document.getElementById("mainMenu").style.display = "inline-block";

  document.getElementById("MinSecBtn").style.display = "none";
  document.getElementById("MaxSecBtn").style.display = "inline-block";
  location.href = "#contentSection";
}


// Initalize tabular elements on the CV section
$('.menu .item')
.tab();

// Adjust Scroll-to-Top button visibility
window.onscroll = function() {
	scrollFunction();
	// console.log("onscroll works");
};

function scrollFunction() {
	// console.log("got in scrollFunction");

  if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
    document.getElementById("myScrollBtn").style.display = "block";
    // console.log("should have changed to block element");
  } else {
    document.getElementById("myScrollBtn").style.display = "none";
    // console.log("should have changed to none element");

  }
}

function getPrevPage() {
 // location.href = document.referrer + "#contentSection";
 window.history.back();
}