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
        // body.classList.toggle = 'hiddenAuto';

        let mainSearchBtnHtml = mainSearchBtn.innerHTML;
        if (mainSearchBtnHtml === 'search') {
            mainSearchBtn.innerHTML = 'close';
        } else if (mainSearchBtnHtml === 'close') {
            mainSearchBtn.innerHTML = 'search';
        }
    });
}


const showSearchBtn = document.querySelector('.show-search-btn');
const showSearchInput = document.querySelector('.show-search-input');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (1249 < widthBody) {
    showSearchInput.classList.remove('main-input');
    searchInput.classList.add('main-input');
    showSearchBtn.classList.remove('main-btn');
    searchBtn.classList.add('main-btn');
}else if (widthBody <= 1249) {
    searchInput.classList.remove('main-input');
    showSearchInput.classList.add('main-input');
    searchBtn.classList.remove('main-btn');
    showSearchBtn.classList.add('main-btn');
}

const mainInput = document.querySelector('.main-input');
const mainBtn = document.querySelector('.main-btn');
const recipeContainer = document.querySelector('.recipe-container');
const h1 = document.querySelector('h1');

const fetchRecipes = async (query) => {
    h1.innerHTML = '<h2>Waiting...</h2>';
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    
    recipeContainer.innerHTML = '';
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h3>${meal.strMeal}</h3>
        <P>${meal.strArea}</P>
        <P>${meal.strCategory}</P>
        `;
        console.log(response);
        
        recipeContainer.appendChild(recipeDiv);
    });
}
mainBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let searchValueInt =  mainInput.value.trim();
    fetchRecipes(searchValueInt);
    // console.log(valueInt);  
});

mainBtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    body.classList.toggle('hiddenAuto');
}), 2000;

