window.addEventListener('load', function(){
    document.getElementById("loader_container").style.display = "none";
    // Elements declerations
    var codophile_top_icon_bar = document.getElementById("codophile_top_icon_bar");
    var codophile_top_icon_cover = document.getElementById("codophile_top_icon_cover");
    var vin = document.getElementById("codophile_main_container");

    // Variable declerations
    var codophile_top_icon_bar_val = 0;

    // functions definations 
    codophile_top_icon_bar.addEventListener("click", function(){
        if(codophile_top_icon_bar_val == 0){
            codophile_top_icon_bar_val = 1;
            codophile_top_icon_cover.style.right = "0";
        } else {
            codophile_top_icon_bar_val = 0;
            codophile_top_icon_cover.style.right = "-60%";
        }
    });
    vin.onscroll = function(){
        var winScroll = vin.scrollTop;
        var height = vin.scrollHeight - vin.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("codophile_top_scrollbar_slider").style.width = scrolled + "%";
    }
});