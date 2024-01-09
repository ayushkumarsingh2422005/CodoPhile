window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const h6 = document.querySelector("#property_css_playground > div > h6");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "Count : "+input_elements[0].value;
        subproperty_value[1].innerHTML = "Gap : "+input_elements[1].value+"px";
        subproperty_value[2].innerHTML = "Rule width : "+input_elements[2].value+"px";
        subproperty_value[3].innerHTML = "Rule Style : "+document.querySelector("select").value;
        subproperty_value[4].innerHTML = "Rule Color : "+input_elements[3].value;
        subproperty_value[5].innerHTML = "h6{ column-span : "+((input_elements[4].checked) ? "all" : "none")+"; }";
        
        
        css_code_container.innerHTML = `
        column-count: ${input_elements[0].value};<br>
        column-gap: ${input_elements[1].value}px;<br>
        column-rule: ${input_elements[2].value}px ${document.querySelector("select").value} ${input_elements[3].value};<br>
        `;
        property_css_playground_child.style.columnCount = input_elements[0].value;
        property_css_playground_child.style.columnGap = input_elements[1].value+"px";
        property_css_playground_child.style.columnRule = input_elements[2].value+"px "+document.querySelector("select").value+" "+input_elements[3].value;
        h6.style.columnSpan = ((input_elements[4].checked) ? "all" : "none");
    }
    setInterval(upadate_everything, 100);
});