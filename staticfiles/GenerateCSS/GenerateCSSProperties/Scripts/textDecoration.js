window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const select_elements = document.querySelectorAll("select");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "text-decoration-line : "+select_elements[0].value;
        subproperty_value[1].innerHTML = "text-decoration-color : "+input_elements[0].value;
        subproperty_value[2].innerHTML = "text-decoration-style : "+select_elements[1].value;
        subproperty_value[3].innerHTML = "text-decoration-thickness : "+input_elements[1].value+"px";

        
        css_code_container.innerHTML = `text-decoration : ${select_elements[0].value} ${input_elements[0].value} ${select_elements[1].value} ${input_elements[1].value}px;`;
        property_css_playground_child.style.textDecoration = `${select_elements[0].value} ${input_elements[0].value} ${select_elements[1].value} ${input_elements[1].value}px`;
    }
    setInterval(upadate_everything, 100);
});