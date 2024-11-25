/*----------------------------change-theme-----------------------------------*/

const themeSelector = document.querySelector('.theme-selector');

themeSelector.addEventListener('click', () => {
    const body = document.querySelector('body');
    const mode = document.querySelector('.min-mode'); // Correct class selector for the theme button

    if (mode) {
        const modeText = mode.innerHTML.trim(); // Fetch the inner text of the mode element

        // Toggle light and dark mode
        if (modeText === 'light_mode') {
            body.classList.remove('dark-mode');
            body.setAttribute('class', 'light-mode');
            mode.innerText = 'dark_mode'; // Update icon or text
            
        } else if (modeText === 'dark_mode') {
            body.classList.remove('light-mode');
            body.setAttribute('class', 'dark-mode');
            mode.innerText = 'light_mode'; // Update icon or text
        }
        else {
            console.error('Mode text not found.');
        }
    } else {
        console.error('Element with class "mode" not found.');
    }
});



/*----------------------------search-----------------------------------*/

const body = document.querySelector('body');
const mainSearchBtn = document.querySelector('.main-search-btn');

let widthBody = parseInt(window.getComputedStyle(body).width); // Convert to number for comparison

if (widthBody <= 1249) {
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        const showBox = document.querySelector('.show-box');
        showBox.classList.toggle('animation');
        
        let mainSearchBtnHtml = mainSearchBtn.innerHTML;
        if (mainSearchBtnHtml === 'search') {
            mainSearchBtn.innerHTML = 'close';
        } else if (mainSearchBtnHtml === 'close') {
            mainSearchBtn.innerHTML = 'search';
        }
    });
    console.log(`No because width: ${widthBody}`); // Proper string interpolation
}
