window.addEventListener('load', function () {
    const lst = [
        'This is our website',
        'Dynamic',
        'Productive',
        'Intelligent',
        'ayush'
    ];

    const dynamic = document.getElementById('homepage_dynamic');
    var line_number = 0;
    var character_counter = 0;
    var dir = 0;
    setInterval(() => {
        if (line_number > lst.length - 1) {
            line_number = 0;
        }
        let text = lst[line_number];
        if (dir == 0) {
            if (character_counter > text.length - 1) {
                dir = 1;
            } else {
                dynamic.textContent += text[character_counter];
                character_counter++;
            }
        } else {
            if (character_counter < 0) {
                character_counter = 0;
                line_number++;
                dynamic.textContent = "";
                dir = 0;
            } else {
                dynamic.innerHTML = dynamic.textContent.slice(0, character_counter);
                character_counter--;
            }
        }


    }, 100);
});