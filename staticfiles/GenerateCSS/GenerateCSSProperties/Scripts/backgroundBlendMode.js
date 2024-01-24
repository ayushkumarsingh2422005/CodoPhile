window.addEventListener("load", function () {
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");
    let value_ = "both";
    for (let index = 0; index < input_elements.length; index++) {
        const element = input_elements[index];
        element.addEventListener("click", () => {
            value_ = element.value;
        });
    }

    function upadate_everything(params) {
        // console.log(value_);
        subproperty_value[0].innerHTML = "background-blend-mode : " + document.querySelector("#selected_unit").value;
        subproperty_value[1].innerHTML = value_ == "both" ? "both" : "only " + value_;

        property_css_playground_child.style.backgroundBlendMode = document.querySelector("#selected_unit").value;
        
        // if (value_ === "both") {
        //     property_css_playground_child.style.background = 'url("../../../Images/AdditionalImages/mountain.jpg") , linear-gradient(red, white)';
        //     property_css_playground_child.style.backgroundSize = "cover";
        //     css_code_container.innerHTML = `
        //         background-image: url("img1_url...") , url("img2_url...");<br>
        //         background-blend-mode: ${document.querySelector("#selected_unit").value};
        //     `;
        // } else if (value_ === "gradient") {
        //     // property_css_playground_child.style.backgroundImage = 'none';
        //     property_css_playground_child.style.background = 'none';
        //     css_code_container.innerHTML = `
        //         background-image:liner-gradient(color1, color2);
        //     `;
        // } else {
        //     property_css_playground_child.style.background = 'url("../../../Images/AdditionalImages/mountain.jpg")';
        //     property_css_playground_child.style.backgroundSize = "cover";
        //     css_code_container.innerHTML = `
        //         background-image:url('url_to_image');
        //     `;
        // }
    }
    setInterval(upadate_everything, 100);
});