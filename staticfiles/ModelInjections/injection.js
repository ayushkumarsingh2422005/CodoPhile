let script = document.createElement("script");
script.type = 'text/javascript';
script.src = 'https://cdn.tiny.cloud/1/dbrj2w36dy2zekcirw1177hxi2tg0q2kzya4qoxkt8y7jsyk/tinymce/6/tinymce.min.js';
script.setAttribute("referrerpolicy", "origin");
document.head.append(script);
script.onload = function () {
    tinymce.init({
        selector: 'textarea#id_desc',
        skin: "oxide-dark",
        content_css: "dark",
        menubar: 'forecolor insert view format',
        toolbar: 'align blocks bold italic underline strikethrough forecolor fontsize fontfamily'
    });
    tinymce.init({
        selector: 'textarea#id_code',
        skin: "oxide-dark",
        content_css: "dark",
        menubar: 'forecolor insert view format',
        toolbar: 'align blocks bold italic underline strikethrough forecolor fontsize fontfamily'
    });
}
