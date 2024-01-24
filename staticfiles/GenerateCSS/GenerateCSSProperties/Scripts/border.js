window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "Style : "+document.querySelector("#selected_unit").value;
        subproperty_value[1].innerHTML = "width : "+input_elements[0].value+"px";
        subproperty_value[2].innerHTML = "Color : "+input_elements[1].value;

        
        css_code_container.innerHTML = "border: "+document.querySelector("#selected_unit").value+" "+input_elements[0].value+"px "+input_elements[1].value+";";
        property_css_playground_child.style.border = document.querySelector("#selected_unit").value+" "+input_elements[0].value+"px "+input_elements[1].value;
    }
    setInterval(upadate_everything, 100);
});