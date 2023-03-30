function button_ia(){
    var role = document.querySelector('#button_ia_oc');
    if(role.getAttribute('value') == 'Edit'){
        role.style.display = 'none';
    }


    


    

    document.getElementById("button_icon_ia_on").style.display = "none";
    document.getElementById("button_icon_ia_close").style.display = "flex";
}

(function() {
    $('.item').hover(
        function() {
            $('.description').css({opacity: 0, display: 'flex'}).animate({
                opacity: 1
            }, 1000);
        },
        function() {
            $('.description').fadeOut(1000);
        });
}); 
