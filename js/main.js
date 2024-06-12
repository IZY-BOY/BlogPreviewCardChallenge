const container = document.getElementById('container')
const title = document.getElementById('title')

title.addEventListener('mouseenter', () => {
    container.classList.add('container-shadow')
})

title.addEventListener('mouseleave', () => {
    container.classList.remove('container-shadow')
})