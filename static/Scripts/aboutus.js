window.addEventListener("load", function () {
    let profiles = document.querySelectorAll(".team_members > div:nth-child(2) > div");
    let profile_cut = document.querySelector('.profile_cut');

    for (let index = 0; index < profiles.length; index++) {
        const element = profiles[index];
        element.addEventListener('click', ()=>{
            profile_cut.parentElement.style.top = "0";
            profile_cut.parentElement.style.left = "0";
            console.log(profile_cut.parentElement);
        });
    }

    profile_cut.addEventListener("click", () => {
        profile_cut.parentElement.style.top = "100vh";
        profile_cut.parentElement.style.left = "-100vw";
    });
    // profile_cut.parentElement.addEventListener("click", () => {
    //     profile_cut.parentElement.style.top = "100vh";
    //     profile_cut.parentElement.style.left = "-100vw";
    // });
});