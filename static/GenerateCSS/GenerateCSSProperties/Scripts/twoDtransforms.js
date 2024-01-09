window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "X : "+input_elements[0].value+"%";
        subproperty_value[1].innerHTML = "Y : "+input_elements[1].value+"%";
        subproperty_value[2].innerHTML = "Rotate : "+input_elements[2].value+"deg";
        subproperty_value[3].innerHTML = "X : "+input_elements[3].value+"deg";
        subproperty_value[4].innerHTML = "Y : "+input_elements[4].value+"deg";
        subproperty_value[5].innerHTML = "X : "+input_elements[5].value+"px";
        subproperty_value[6].innerHTML = "Y : "+input_elements[6].value+"px";
        subproperty_value[7].innerHTML = "X : "+input_elements[7].value+" times";
        subproperty_value[8].innerHTML = "Y : "+input_elements[8].value+" times";
        
        
        css_code_container.innerHTML = `
        transform-origin: ${input_elements[0].value}% ${input_elements[1].value}%;<br>
        transform: rotate(${input_elements[2].value}deg) skew(${input_elements[3].value}deg, ${input_elements[4].value}deg) translate(${input_elements[5].value}px, ${input_elements[6].value}px) scale(${input_elements[7].value}, ${input_elements[8].value});<br>
        `;

        property_css_playground_child.style.transformOrigin = `${input_elements[0].value}% ${input_elements[1].value}%`;
        property_css_playground_child.style.transform = `rotate(${input_elements[2].value}deg) skew(${input_elements[3].value}deg, ${input_elements[4].value}deg) translate(${input_elements[5].value}px, ${input_elements[6].value}px) scale(${input_elements[7].value}, ${input_elements[8].value})`;
    }
    setInterval(upadate_everything, 100);
});