/*----------------------------change-theme-----------------------------------*/

const themeSelector = document.querySelector('.theme-selector');

themeSelector.addEventListener('click', () => {
    const body = document.querySelector('body');
    const mode = document.querySelector('.min-mode'); // Correct class selector for the theme button

    if (mode) {
        const modeText = mode.innerHTML.trim(); // Fetch the inner text of the mode element

        // Toggle light and dark mode
        if (modeText === 'dark_mode') {
            body.classList.remove('Dark-mode');
            body.classList.add('light-mode');
            mode.innerText = 'light_mode'; // Update icon or text
            console.log('yes');
            
        } else {
            body.classList.remove('light_mode');
            body.classList.add('Dark-mode');
            mode.innerText = 'dark_mode'; // Update icon or text
            console.log('no');
        }
    } else {
        console.error('Element with class "mode" not found.');
    }
});

/*----------------------------search-----------------------------------*/

const searchBtn = document.querySelector('.search-btn');

let body = document.querySelector('body');
if (body) {
    let computedWidth = window.getComputedStyle(body).width.trim();

    if (computedWidth <= '1249px') {
        searchBtn.addEventListener('click', () => {
            let mainSidebarContent = document.querySelector('.main-sidebar-content');
    
            // Dynamically update content
            mainSidebarContent.innerHTML = `
                <div class="search-box" style="
                    width: 100%;
                    height: 80%;
                    min-height: 50px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;">
                    <input type="text" placeholder="Search..." class="search-input" style="
                        width: 100%;
                        height: 100%;
                        min-height: 50px;
                        background-color: var(--search-clr);
                        border: none;
                        outline: none;
                        border-radius: 20px 0 0 20px;
                        box-shadow: 0px 0px 10px 0px rgba(48, 48, 48, 0.3);
                        color: #000;
                        font-size: 16px;
                        padding: 10px 20px;">
                    <button type="button" class="search-btn" style="
                        height: 50px;
                        width: 25%;
                        border: none;
                        border-radius: 0 20px 20px 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: var(--btn-clr);
                        color: #fff;
                        transition: background-color 0.3s ease-in-out;">
                        <span class="material-symbols-rounded">search</span>
                    </button>
                </div>
            `;
    
            // Re-add event listener to the newly created search button
            const newSearchBtn = document.querySelector('.search-box .search-btn');
            newSearchBtn.addEventListener('click', () => {
                const searchInput = document.querySelector('.search-box .search-input');
                const query = searchInput.value.trim();
                if (query) {
                    alert(`You searched for: ${query}`);
                } else {
                    alert('Please enter a search term.');
                }
            });
        });
    } else {
        alert('The width of the body is greater than 1249px. No need to add the search button.');
    }
}


    






