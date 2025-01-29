const faqItems = document.querySelectorAll('li.faq-item')

faqItems.forEach((item, indice) => {
    item.addEventListener('click', () => {
        const activeItem = document.querySelector('.faq-item.active')
        
        if (activeItem) activeItem.classList.remove('active')

        if (item != activeItem) item.classList.add('active')
        else item.classList.remove('active')
    })
});