$(document).ready(function(){

    console.log($("p:first").text());

    $("#changeBtn").click(function(){

        $("h1").text(
        "Welcome to Local Community Portal"
        );

        $("#hideMe").hide();

    });

    $("#hideBtn").click(function(){
        $(".box").hide();
    });

    $("#showBtn").click(function(){
        $(".box").show();
    });

    $("#fadeOutBtn").click(function(){
        $(".box").fadeOut();
    });

    $("#fadeInBtn").click(function(){
        $(".box").fadeIn();
    });

    $("#toggleBtn").click(function(){

        $(".box")
        .slideUp()
        .delay(1000)
        .slideDown();

    });

    $("#addBtn").click(function(){

        let value =
        $("#itemInput").val();

        if(value!=""){

            $("#eventList").append(
            "<li>"+value+"</li>"
            );

            $("#itemInput").val("");

        }

    });

    $("#removeBtn").click(function(){

        $("#eventList").empty();

    });

    $("#colorBtn").click(function(){

        $("#colorBox").css(
        "background",
        "red"
        );

    });

    $("#colorBtn").dblclick(function(){

        $("#colorBox").css(
        "background",
        "white"
        );

    });

    $("#eventBox").click(function(){

        $(this).append(
        "<p>Clicked</p>"
        );

    });

    $("#eventBox").dblclick(function(){

        alert("Double Clicked");

    });

    $("#eventBox").mouseenter(function(){

        $(this).css(
        "background",
        "lightgreen"
        );

    });

    $("#eventBox").mouseleave(function(){

        $(this).css(
        "background",
        "white"
        );

    });

    $("#keyInput").keypress(function(e){

        $("#output").text(
        "You Pressed : "
        + String.fromCharCode(e.which)
        );

    });

});
