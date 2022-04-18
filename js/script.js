var email = document.querySelector('#myEmail');
let tooltip = document.getElementById("myTooltip");


email.addEventListener('click', () => {
    navigator.clipboard.writeText('pedro2003dressler@gmail.com');
    tooltip.innerHTML = "Copiado!";
});

email.addEventListener('mouseleave', () => {
    tooltip.innerHTML = "Copiar email";
});