window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const css_properties_container = document.querySelectorAll(".css_properties_container");
    const input_elements = document.querySelectorAll("input");
    const select_elements = document.querySelectorAll("select");
    const property_css_playground_child = document.querySelector("#property_css_playground > div");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");
    const property_css_playground_child_childeren = property_css_playground_child.children;
    let style_values = [
        {
            flexGrow : "0",
            flexShrink : "1",
            flexBasis : "1",
            alignSelf : "auto",
            order : "1"
        },
        {
            flexGrow : "0",
            flexShrink : "1",
            flexBasis : "1",
            alignSelf : "auto",
            order : "2"
        },
        {
            flexGrow : "0",
            flexShrink : "1",
            flexBasis : "1",
            alignSelf : "auto",
            order : "3"
        },
        {
            flexGrow : "0",
            flexShrink : "1",
            flexBasis : "1",
            alignSelf : "auto",
            order : "4"
        }
    ];
    const css_properties_container_bg = [
        "aliceblue",
        "rgb(254, 249, 242)",
        "rgb(240, 252, 241)",
        "rgb(255, 245, 255)"
    ]
    let active_element = 0;
    for (let index = 0; index < property_css_playground_child_childeren.length; index++) {
        const element = property_css_playground_child_childeren[index];
        element.addEventListener('click', function () {
            active_element = parseInt(this.innerHTML) - 1;
            input_elements[1].value = style_values[active_element].flexGrow;
            input_elements[2].value = style_values[active_element].flexShrink;
            input_elements[3].value = style_values[active_element].flexBasis;
            input_elements[4].value = style_values[active_element].order;
            select_elements[0].value = style_values[active_element].alignSelf;
        });
    }
    function upadate_everything(params) {
        subproperty_value[0].innerHTML = "flex-grow : "+input_elements[1].value;
        subproperty_value[1].innerHTML = "flex-shrink : "+input_elements[2].value;
        subproperty_value[2].innerHTML = "flex-basis : "+input_elements[3].value;
        subproperty_value[3].innerHTML = "order : "+input_elements[4].value;
        subproperty_value[4].innerHTML = "align-self : "+select_elements[0].value;
        // console.log(active_element);
        for (let index = 0; index < css_properties_container.length; index++) {
            const element = css_properties_container[index];
            element.style.backgroundColor = css_properties_container_bg[active_element];
        }
        for (let index = 0; index < property_css_playground_child_childeren.length; index++) {
            const element = property_css_playground_child_childeren[index];
            element.style.flexGrow = style_values[index].flexGrow;
            element.style.flexBasis = style_values[index].flexBasis;
            element.style.flexShrink = style_values[index].flexShrink;
            element.style.alignSelf = style_values[index].alignSelf;
            element.style.order = style_values[index].order;
        }

        style_values[active_element].flexGrow = input_elements[1].value;
        style_values[active_element].flexShrink = input_elements[2].value;
        style_values[active_element].flexBasis = input_elements[3].value;
        style_values[active_element].order = input_elements[4].value;
        style_values[active_element].alignSelf = select_elements[0].value;
        // if (input_elements[0].checked) {
        //     
        // } else {
        //     css_code_container.innerHTML = `
        //         display : ${(input_elements[0].checked ? "flex" : "block")};<br>
        //     `;
        // }

        css_code_container.innerHTML = `
            flexGrow : ${input_elements[1].value};<br>
            flexBasis : ${input_elements[2].value};<br>
            flexShrink : ${input_elements[3].value};<br>
            order : ${input_elements[4].value};<br>
            alignSelf : ${select_elements[0].value};
        `;
        property_css_playground_child.style.display = (input_elements[0].checked ? "flex" : "block");
        // property_css_playground_child.style.flexDirection = select_elements[0].value;
        // property_css_playground_child.style.flexWrap = select_elements[1].value;
        // property_css_playground_child.style.justifyContent = select_elements[2].value;
        // property_css_playground_child.style.alignItems = select_elements[3].value;
        // property_css_playground_child.style.alignContent = select_elements[4].value;
    }
    setInterval(upadate_everything, 100);
});