document.addEventListener('DOMContentLoaded', () => {
    const lang = document.documentElement.lang;
    let menus;
    let pizzaTerm;

    if (lang === 'ko') {
        menus = ['치킨', '피자', '삼겹살', '초밥', '파스타', '김치찌개', '된장찌개', '카레', '햄버거', '떡볶이'];
        pizzaTerm = '피자';
    } else { // 'en'
        menus = ['Chicken', 'Pizza', 'Pork Belly', 'Sushi', 'Pasta', 'Kimchi Stew', 'Doenjang Stew', 'Curry', 'Hamburger', 'Tteokbokki'];
        pizzaTerm = 'Pizza';
    }

    // Attach the recommend function to the window object to make it globally accessible from the onclick attribute
    window.recommend = function() {
        const menuDisplay = document.getElementById('menu-display');
        const menuImage = document.getElementById('menu-image');
        
        const randomIndex = Math.floor(Math.random() * menus.length);
        const selectedMenu = menus[randomIndex];

        menuDisplay.textContent = selectedMenu;

        // Hide image by default
        menuImage.style.display = 'none';

        // If pizza is selected, show pizza image
        if (selectedMenu === pizzaTerm) {
            menuImage.style.display = 'block';
        }
    }
});
