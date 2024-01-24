window.addEventListener("load", function () {
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const img_tag = document.querySelectorAll("img");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {
        subproperty_value[0].innerHTML = "background-clip : " + document.querySelector("select").value;
        property_css_playground_child.style.backgroundClip = document.querySelector("select").value;
        if(document.querySelector("select").value==="text"){
            property_css_playground_child.style.color = 'transparent';
            property_css_playground_child.style.borderColor = 'black';
        } else {
            property_css_playground_child.style.color = 'black';
        }
        css_code_container.innerHTML = `background-clip : ${document.querySelector("select").value};<br>
        ${
            document.querySelector("select").value==="text" ? "color : transparent;": ""
        }`;
    }
    setInterval(upadate_everything, 100);
});