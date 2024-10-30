// FAQ 
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            document.querySelectorAll('.faq-question.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.nextElementSibling.style.maxHeight = null;
            });
            
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// Animazione
const elements = document.querySelectorAll('.pricing-card.hidden, .stats, .pricing.hidden');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 1
});

elements.forEach(element => {
    observer.observe(element);
});
