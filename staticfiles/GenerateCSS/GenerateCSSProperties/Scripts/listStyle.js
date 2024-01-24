window.addEventListener("load", function () {
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div > ol");
    const img_tag = document.querySelectorAll("img");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");


    function upadate_everything(params) {

        subproperty_value[0].innerHTML = "list-style-type : " + document.querySelector("select").value;
        subproperty_value[1].innerHTML = "list-style-position : " + (input_elements[1].checked ? "outside" : "inside");
        // input_elements[0].nextElementSibling.innerHTML = (input_elements[0].checked ? "image" : "Iullet style");
        // console.log(input_elements[0].checked);
        if (input_elements[0].checked) {
            property_css_playground_child.style.listStyleImage = `url('${img_tag[0].src}')`;
            property_css_playground_child.style.listStyleType = "none";
            css_code_container.innerHTML = `
                list-style-image: url('link_to_your_image');<br>
                list-style-position: ${(input_elements[1].checked ? "outside" : "inside")};
            `;
        } else {
            property_css_playground_child.style.listStyleType = document.querySelector("select").value;
            property_css_playground_child.style.listStyleImage = "none";
            css_code_container.innerHTML = `
                list-style-type: ${document.querySelector("select").value};<br>
                list-style-position: ${(input_elements[1].checked ? "outside" : "inside")};
            `;
        }
        property_css_playground_child.style.listStylePosition = (input_elements[1].checked ? "outside" : "inside");

        // property_css_playground_child.style.columnCount = input_elements[0].value;
        // property_css_playground_child.style.columnGap = input_elements[1].value+"px";
        // property_css_playground_child.style.columnRule = input_elements[2].value+"px "+document.querySelector("select").value+" "+input_elements[3].value;
        // h6.style.columnSpan = ((input_elements[4].checked) ? "all" : "none");
    }
    setInterval(upadate_everything, 100);
});