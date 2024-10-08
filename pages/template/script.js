// Propósito: Adicionar um efeito de hover no botão que segue o movimento do mouse
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.btn--custom');

    buttons.forEach(function (item) {
        let span = document.createElement('span');
        span.className = 'btn-hover-effect';
        let hoverEffect = item.appendChild(span);

        item.onmousemove = (e) => {
            let rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            hoverEffect.style.left = x + 'px';
            hoverEffect.style.top = y + 'px';
        };
    });
});