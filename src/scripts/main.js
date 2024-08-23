document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const altHero = document.querySelector('.hero').clientHeight;

    // Seção de atrações, programação das abas
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            hideAbas();
            aba.classList.add('shows__list--is-active');
            hideButtonActive();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Seção FAQ, accordion
    for (var i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', hideOpenQuestion);
    }

})

function hideOpenQuestion(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe);
}

function hideButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (var i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}