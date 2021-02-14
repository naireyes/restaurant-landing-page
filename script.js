const showMenu = (menu) => {
    var menu = document.querySelector(".mobile-menu");
    if (menu.style.display == 'block')
        menu.style.display = 'none';
    else
        menu.style.display = 'block';


}