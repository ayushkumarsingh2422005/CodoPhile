window.addEventListener("load", function(){
    // Element decleration
    const properies_css_container_arrow = document.getElementById("properies_css_container_arrow");
    const properies_css_container = document.getElementById("properies_css_container");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");
    const code_copied_text_temp_popup = document.getElementById("code_copied_text_temp_popup");
    const property_css_playground_div = this.document.querySelector("#property_css_playground > div");
    // variable decleration
    //this.localStorage.clear();
    var history_data = JSON.parse(localStorage.getItem("history_data"));
    var properies_css_container_arrow_val = 0;
    if (localStorage.getItem('history_data') == null) {
        localStorage.setItem('history_data', '{}');
        history_data = {};
    }
    else {
        data = JSON.parse(localStorage.getItem('history_data'));
    }

    properies_css_container_arrow.addEventListener("click", function(){
        if(properies_css_container_arrow_val == 0){
            properies_css_container_arrow_val = 1;
            properies_css_container.style.left = "0";
            properies_css_container_arrow.style.backgroundColor = "lightcoral";
            if (property_css_playground_div != null) {
                property_css_playground_div.style.display = "None";
            }
        } else {
            properies_css_container_arrow_val = 0;
            properies_css_container.style.left = "-95%";
            properies_css_container_arrow.style.backgroundColor = "lightgreen";
            if (property_css_playground_div != null) {
                setTimeout(function () {
                    property_css_playground_div.style.display = "block";
                }, 300);
            }
        }
    });

    css_code_container.addEventListener('click', function() {
        const str = css_code_container.innerText;
        const str_html = css_code_container.innerHTML;
        data = JSON.parse(localStorage.getItem("history_data"));
        var date = new Date();
        var date_string = (date.getDate()).toString()+"/"+(date.getMonth()+1).toString()+"/"+(date.getFullYear()).toString();
        if (data[date_string] == null) {
            data[date_string] = [];
        }
        data[date_string].push(str_html);
        localStorage.setItem("history_data", JSON.stringify(data));
        

        // console.log(JSON.parse(localStorage.getItem("history_data")));
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'fixed';
        el.style.top = '-100vh';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        css_code_container.style.animation = 'copy_animation 0.3s 1';
        code_copied_text_temp_popup.style.animation = "copy_animation_text 2s 1";
        // navigator.vibrate(100);
        setTimeout(function() {
            code_copied_text_temp_popup.style.animation = "none";
        }, 2000);
        setTimeout(function() {
            css_code_container.style.animation = 'none';
        }, 300);
    });
});