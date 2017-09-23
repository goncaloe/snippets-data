/* javascript file */

$(document).ready(function(){
    var $cartBtn = $('.minicart-wrap');
    var $cartDropdown = $('.minicart-dropdown');
    if($cartBtn.length > 0 && $cartDropdown.length > 0){

        $cartBtn.mouseover(function(){
            $cartDropdown.stop().fadeIn();
        }).mouseout(function(){
            $cartDropdown.stop().fadeOut();
        });
    }
});


