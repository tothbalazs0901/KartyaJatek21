$(function (){
    //$("#kezd").on("click", init);
    init();
});

function init(){
    $("jatekter").empty();
    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id":"" +(i+1)});
        //$("#jatekter div img").eq(i).attr({"src":'kartya/'+ (i+1) + '.png',"alt":"Kartya"});
        $("#jatekter div img").eq(i).attr({"src":'kartya/hatlap.jpg',"alt":"Kartya"});
        $("#jatekter div").addClass("kartya");
    }
    $("#jatekter div").click(
            function(){
                var id = "";
                id = $(this).attr("id");
                console.log(id);
                $("#jatekter div img").eq(id-1).attr({"src":'kartya/'+ (id) + '.png',"alt":"Kartya"});
            },
            );
}