$(document).ready(function(){
    $("#remove-box").click(function(){
        $("#box").remove();
    })

    $("#empty-div").click(function(){
        document.getElementById('box').innerHTML='';
    });
})