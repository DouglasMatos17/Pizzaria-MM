let show = true
const menuContent = document.querySelector('.header-content')
const menuToggle = menuContent.querySelector('.menu-toggle')


menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show)
    show = !show
})
