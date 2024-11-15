var toggleButton = document.getElementById('toggle-skills');
var skillsHideShow = document.getElementById('skill');
toggleButton.addEventListener("click", function () {
    if (skillsHideShow.style.display === 'none') {
        skillsHideShow.style.display = 'block';
    }
    else {
        skillsHideShow.style.display = "none";
    }
});
