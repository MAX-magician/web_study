window.onload = function(){
    ajaxs('./page/game_index.html', 'maindiv');
}
function footer_click(){
    var footer_click = document.querySelectorAll(".footer_menu > div");
    for(let footers = 0; footers < footer_click.length; footers++){
        footer_click[footers].setAttribute("class", "footers");
    }
}