window.addEventListener('load', function(){
    const homepage_dynamic = document.getElementById('homepage_dynamic');
    var text_dynamic = [
        'This is our website',
        'Dynamic',
        'Productive',
        'Intelligent',
        'ayush'
    ];
    var line_number = 0;
    var line_length = 0;
    var char_index = 0;
    var direction = 1;
    

    function dynamic_typing() {
        line_length = text_dynamic[line_number].length;
        if (direction == 1) {
            if(char_index < line_length){
                homepage_dynamic.innerHTML += text_dynamic[line_number][char_index];
                char_index++;
            } else {
                direction = -1;
                char_index = 0;
                homepage_dynamic.innerHTML = text_dynamic[line_number];
            }
        } else {
            if(char_index <= line_length){
                homepage_dynamic.innerHTML = text_dynamic[line_number].slice(0, -char_index);
                char_index++;
            } else {
                line_number++;
                direction = 1;
                char_index = 0;
                homepage_dynamic.innerHTML = '';
            }
        }
        
        if(line_number >= text_dynamic.length){
            line_number = 0;
        }
    }
    setInterval(dynamic_typing, 100);
});