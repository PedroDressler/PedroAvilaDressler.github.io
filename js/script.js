let gmail = document.getElementById('gmail').addEventListener('click', () => {
    navigator.clipboard.writeText('pedro2003dressler@gmail.com');
    alert('Email copiado!');
});

let zap = document.getElementById('whats').addEventListener('click', () => {
    window.open('https://wa.me/5531994903183');
});

let linkedin = document.getElementById('linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/pedro-avila-dressler/');
});

let github = document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/PedroDressler');
});