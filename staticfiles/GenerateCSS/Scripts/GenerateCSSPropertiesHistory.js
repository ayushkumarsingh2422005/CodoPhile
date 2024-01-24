window.addEventListener("load", function(){
    var data = JSON.parse(localStorage.getItem("history_data"));
    var data_length = 0;
    var data_html = '';
    if (data != null) {
        data_length = Object.keys(data).length;
    }
    // console.log(Object.keys(data));
    data = Object.fromEntries(
        Object.entries(data).reverse()
    );
      
    for (const key in data) {
        // console.log(data[key].length);
        var data_temp = "";
        for (const data_snipsets in data[key].reverse()){
            // console.log(data[key][data_snipsets]);
            data_temp+=data[key][data_snipsets]+"<hr>";
        }
        data_html+=`
        <div id="history_data_container">
            <div id="history_data_date">${key}</div>
            <div id="history_data_data">
                ${data_temp}
            </div>
        </div>
        `;
    }

    this.document.querySelector("#history_data").innerHTML = data_html;
});