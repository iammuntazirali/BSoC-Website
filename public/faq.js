document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        document.querySelectorAll('.faq-answer').forEach(faq => {
            if (faq !== answer) {
                faq.classList.remove('open');
            }
        });
        answer.classList.toggle('open');
    });
});
