//PROBLEM: User when clicking on image goes to a dead end. Poor UX.
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")
// An Image to Overlay
$overlay.append($image);

// Add an Overlay. 
$("body").append($overlay);

// A Caption
$overlay.append($caption);
 

// Capture the Click Event on a link to an image.
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $overlay.show();
;
  // Update Overlay with the image linked in the link.
  $image.attr("src", imageLocation);
  
  // Show the Overlay.
  $overlay.show();

  // Get child's alt attribute and set caption.
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
})


// When Overlay is clicked 
$overlay.click(function() {
  // Hide the Overlay.
    $overlay.hide();
    
    });

