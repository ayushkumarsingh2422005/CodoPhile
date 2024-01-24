window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const select_elements = document.querySelectorAll("select");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {
        subproperty_value[0].innerHTML = "flex-direction : "+select_elements[0].value;
        subproperty_value[1].innerHTML = "flex-wrap : "+select_elements[1].value;
        subproperty_value[2].innerHTML = "justify-content : "+select_elements[2].value;
        subproperty_value[3].innerHTML = "align-items : "+select_elements[3].value;
        subproperty_value[4].innerHTML = "align-content : "+select_elements[4].value;
        
        
        if (input_elements[0].checked) {
            css_code_container.innerHTML = `
                display : ${(input_elements[0].checked ? "flex" : "block")};<br>
                flex-direction : ${select_elements[0].value};<br>
                flex-wrap : ${select_elements[1].value};<br>
                justify-content : ${select_elements[2].value};<br>
                align-items : ${select_elements[3].value};<br>
                align-content : ${select_elements[4].value};
            `;
        } else {
            css_code_container.innerHTML = `
                display : ${(input_elements[0].checked ? "flex" : "block")};<br>
            `;
        }


        property_css_playground_child.style.display = (input_elements[0].checked ? "flex" : "block");
        property_css_playground_child.style.flexDirection = select_elements[0].value;
        property_css_playground_child.style.flexWrap = select_elements[1].value;
        property_css_playground_child.style.justifyContent = select_elements[2].value;
        property_css_playground_child.style.alignItems = select_elements[3].value;
        property_css_playground_child.style.alignContent = select_elements[4].value;
    }
    setInterval(upadate_everything, 100);
});