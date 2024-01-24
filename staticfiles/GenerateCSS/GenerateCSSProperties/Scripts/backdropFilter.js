window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "blur : "+input_elements[0].value+"px";
        subproperty_value[1].innerHTML = "brightness : "+input_elements[1].value+"%";
        subproperty_value[2].innerHTML = "contrast : "+input_elements[2].value+"%";
        subproperty_value[3].innerHTML = "Grayscale : "+input_elements[3].value+"%";
        subproperty_value[4].innerHTML = "hue rotate : "+input_elements[4].value+"deg";
        subproperty_value[5].innerHTML = "invert : "+input_elements[5].value+"%";
        subproperty_value[6].innerHTML = "opacity : "+input_elements[6].value;
        subproperty_value[7].innerHTML = "sepia : "+input_elements[7].value+"%";
        subproperty_value[8].innerHTML = "saturate : "+input_elements[8].value+"%";
        subproperty_value[9].innerHTML = `Drop shadow : ${input_elements[9].value}px ${input_elements[10].value}px ${input_elements[11].value}px ${input_elements[12].value}`;
        
        
        css_code_container.innerHTML = `
            backdrop-filter : blur(${input_elements[0].value}px)
            brightness(${input_elements[1].value}%)
            contrast(${input_elements[2].value}%)
            grayscale(${input_elements[3].value}%)
            hue-rotate(${input_elements[4].value}deg)
            invert(${input_elements[5].value}%)
            opacity(${input_elements[6].value})
            sepia(${input_elements[7].value}%)
            saturate(${input_elements[8].value}%)
            drop-shadow(${input_elements[9].value}px ${input_elements[10].value}px ${input_elements[11].value}px ${input_elements[12].value});
        `;


        property_css_playground_child.style.backdropFilter = `
            blur(${input_elements[0].value}px)
            brightness(${input_elements[1].value}%)
            contrast(${input_elements[2].value}%)
            grayscale(${input_elements[3].value}%)
            hue-rotate(${input_elements[4].value}deg)
            invert(${input_elements[5].value}%)
            opacity(${input_elements[6].value})
            sepia(${input_elements[7].value}%)
            saturate(${input_elements[8].value}%)
            drop-shadow(${input_elements[9].value}px ${input_elements[10].value}px ${input_elements[11].value}px ${input_elements[12].value})
        `;
    }
    setInterval(upadate_everything, 100);
});