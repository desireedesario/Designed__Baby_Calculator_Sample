/* script.js 
   Desiree Desario
   2016
*/
$(document).ready(function() {

    //setting the first variable to nothing so that it will begin clean and then creating a variable that will change total_value

    var name = 0;
    $(".thumb_img").click(function() {
        var total_value = $(this).attr("photo-id");

        //the image at the bottom will change by each src image clicked. The the values of each image will be parsed at numbers and will be calculated 

        $("#display_img").attr("src", "img/" + total_value + ".jpg");
        var value = $(this).attr("num-value");
        name = name + parseInt(value);
        $("#total").html(name)
    });

    //when the thumbnail is hovered, the background of both the border and the margin of the dib will be changed

    $(".thumbnail").hover(function() {
        $(this).css({
            "background-color": "#FFDA70"
        })
    }, function() {
        $(this).css({
            "background-color": "#08D1B9"
        })
    });

    //when you add a value into the class of your name, the html will join together "hello, INPUT TEXT, and "!"

    $("#btn_yourname").click(function() {
        var name = $("#yourname").val();
        $("#hellotext").html("Hello, " + name + "! Welcome to the baby calculator")
    })

    // when the reset button is clicked, the div of display_num will return to its original form.

    $("#reset").click(function() {
        name = 0;
        $("#total").html(name);


    });
});
