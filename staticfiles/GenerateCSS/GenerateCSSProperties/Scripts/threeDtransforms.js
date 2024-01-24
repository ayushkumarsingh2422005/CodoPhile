window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div > div");
    const property_css_playground = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "X : "+input_elements[0].value+"%";
        subproperty_value[1].innerHTML = "Y : "+input_elements[1].value+"%";
        subproperty_value[2].innerHTML = "perspective : "+input_elements[2].value+"px";
        subproperty_value[3].innerHTML = "transform-style : "+(input_elements[3].checked ? "flat":"preserve-3d");
        subproperty_value[4].innerHTML = "X : "+input_elements[5].value+"%";
        subproperty_value[5].innerHTML = "Y : "+input_elements[6].value+"%";
        subproperty_value[6].innerHTML = "X : "+input_elements[7].value+"px";
        subproperty_value[7].innerHTML = "Y : "+input_elements[8].value+"px";
        subproperty_value[8].innerHTML = "z : "+input_elements[9].value+"px";
        subproperty_value[9].innerHTML = "X : "+input_elements[10].value+" times";
        subproperty_value[10].innerHTML = "Y : "+input_elements[11].value+" times";
        subproperty_value[11].innerHTML = "z : "+input_elements[12].value+" times";
        subproperty_value[12].innerHTML = "X : "+input_elements[13].value+"deg";
        subproperty_value[13].innerHTML = "Y : "+input_elements[14].value+"deg";
        subproperty_value[14].innerHTML = "z : "+input_elements[15].value+"deg";
        
        css_code_container.innerHTML = `
        <span style='color: red'>perspective-origin: ${input_elements[0].value}% ${input_elements[1].value}%;<br>
        perspetive: ${input_elements[2].value}px;<br>
        transform-style: ${(input_elements[3].checked ? "flat":"preserve-3d")};<br></span>
        transform-origin: ${input_elements[5].value}% ${input_elements[6].value}%;<br>
        transform: translate3d(${input_elements[7].value}px, ${input_elements[8].value}px, ${input_elements[9].value}px) scale3d(${input_elements[10].value}, ${input_elements[11].value}, ${input_elements[12].value}) rotateX(${input_elements[13].value}deg) rotateY(${input_elements[14].value}deg) rotateZ(${input_elements[15].value}deg);
        `;

        property_css_playground.style.perspectiveOrigin = `${input_elements[0].value}% ${input_elements[1].value}%`;
        property_css_playground.style.perspective = `${input_elements[2].value}px`;
        property_css_playground.style.transformStyle = (input_elements[3].checked ? "flat":"preserve-3d");
        property_css_playground_child.style.transformOrigin = `${input_elements[5].value}% ${input_elements[6].value}%`;
        property_css_playground_child.style.transform = `translate3d(${input_elements[7].value}px, ${input_elements[8].value}px, ${input_elements[9].value}px) scale3d(${input_elements[10].value}, ${input_elements[11].value}, ${input_elements[12].value}) rotateX(${input_elements[13].value}deg) rotateY(${input_elements[14].value}deg) rotateZ(${input_elements[15].value}deg)`;
        

    }
    setInterval(upadate_everything, 100);
});