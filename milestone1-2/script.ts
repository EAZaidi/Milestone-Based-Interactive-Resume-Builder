const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsHideShow = document.getElementById('skill') as HTMLElement;

toggleButton.addEventListener("click", ()=>{
    if (skillsHideShow.style.display === 'none'){
        skillsHideShow.style.display = 'block';
    }
    else {
        skillsHideShow.style.display = "none";
    }
});