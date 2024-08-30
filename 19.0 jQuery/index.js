/*ready method: Check if the jQuery Library is already load
This is only if put the script tag inside the head tag
If put the script tag before the closing body tag, no need to add ready method */
// $(document).ready(function(){
    //Set color with h1 tag in red
    // $("h1").css("color", "red");
// })

/* Use the class from css file
.addClass(), removeClass(), hasClass()
*/
// $("h1").addClass("big-title margin-50");

/* text() - Update the text on the webpage
html() - Update the html on the webpage
*/
// $("h1").text("GoodBye");
// $("button").html("<em>Hey</em>");

/* attr() - getting the attribute of the element
one attribute - get the information of this attribute
two attributes - set this attribute to a new value
on() - has two parameters, first one is type of listener, second one is call back function
*/
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com")

/* click() - Using the click listener 
keypress() - Using the key press listener
*/
// $("h1").click(function () {
//     $("h1").css("color", "purple")
// })

// $("button").click(function() {
//     $("h1").css("color", "purple")
// })

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple")
// })

/* before() - add a new html element before this element
after() - add a new html element after this element 
prepend() - add a new html element on the element just after the open tag
append() - add a new html element on the element just before the close tag
*/
// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

/* hide() - hide the element 
show() - show the hided element
toggle() - if element already hide, then show, otherwise hide
fadeOut() - reduce for opacity
fadeIn() - opposite of fadeOut
fadeToggle() - toggle the fade
slideUp()/slideDown - (not)collapse the element
slideToggle() - toggle the slide
animate() - modify the value of CSS/ Becareful this is only can modify the numeric value
*/
$("button").on("click", function() {
    // $("h1").slideToggle();
    // $("h1").animate({margin: "20%"});
    //Chained the method together
    //This method would play in order(slideUp -> slideDown -> animate)
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})