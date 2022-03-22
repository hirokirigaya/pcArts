const burgList = document.getElementById('burguer')
const menu = document.getElementById('btn-menu')

menu.addEventListener('click', () => {
    burgList.classList.toggle('open')
})
