window.addEventListener("load", function(){
    // defining elements
    const subproperty_value = document.querySelectorAll(".css_property_subproperty_value");
    const input_elements = document.querySelectorAll("input");
    const property_css_playground = document.querySelector("#property_css_playground");
    const css_code_container = document.querySelector("#properies_css_container_code_box > div");
    const layer_container = document.querySelector("#layer_container");
    //const layer_container_childerens = document.querySelectorAll("#layer_container > div");
    const layer_add_btn = document.querySelector("#add_btn");
    const layer_sub_btn = document.querySelector("#sub_btn");

    var total_child = 1;
    var active_layer = "layer1";
    var lst = [
        "0 0 0 #000000",
    ];
    var id_lst = [
        "layer1",
    ]

    function update_listner(){
        layer_container.childNodes.forEach(element => {
            // element.style.backgroundColor = "white";
            // element.style.color = "black";
            element.addEventListener("click", function(){
                active_layer = element.id;
                // var id_index = id_lst.indexOf(active_layer);
                for (let index = 0; index < id_lst.length; index++) {
                    document.querySelector("#"+id_lst[index]).style.backgroundColor = "white";
                    document.querySelector("#"+id_lst[index]).style.color = "black";
                }
                document.querySelector("#"+active_layer).style.backgroundColor = "black";
                document.querySelector("#"+active_layer).style.color = "white";

                var value = lst[id_lst.indexOf(active_layer)].split(" ");
                
                input_elements[0].value = value[0].match(/-?\d+/g).map(Number)[0];
                input_elements[1].value = value[1].match(/-?\d+/g).map(Number)[0];
                input_elements[3].value = value[2].match(/-?\d+/g).map(Number)[0];
                input_elements[2].value = value[3];
                // console.log(value[0]+" "+value[1]+" "+value[2]+" "+value[3]);
                // console.log(lst);
                //alert(active_layer);
            });
            // console.log(element);
        });
    }
    update_listner();

    layer_add_btn.addEventListener("click", function(){
        layer_container.innerHTML += "<div id=layer"+(++total_child)+">Layer"+total_child+"</div>";
        lst.push("0 0 0 black");
        id_lst.push("layer"+total_child);
        update_listner();
        //console.log(id_lst);
    });
    layer_sub_btn.addEventListener("click", function(){
        if (layer_container.children.length > 1) {
            layer_container.removeChild(layer_container.lastChild);
            lst.pop();
            id_lst.pop();
            total_child--;
            update_listner();
            //console.log(id_lst);
        }
    });

    function upadate_everything(params) {

        var id_index = id_lst.indexOf(active_layer);
        lst[id_index] = input_elements[0].value+"px "+input_elements[1].value+"px "+input_elements[3].value+"px "+input_elements[2].value;


        subproperty_value[0].innerHTML = "X-Offset : "+input_elements[0].value+"px";
        subproperty_value[1].innerHTML = "Y-Offset : "+input_elements[1].value+"px";
        subproperty_value[2].innerHTML = "Color : "+input_elements[2].value;
        subproperty_value[3].innerHTML = "Blur : "+input_elements[3].value+"px";

        
        css_code_container.innerHTML = "text-shadow: "+lst.join(", ")+";";
        property_css_playground.style.textShadow = lst.join(", ");
    }
    setInterval(upadate_everything, 100);
});