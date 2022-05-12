const gmail = document.getElementById('gmail').addEventListener('click', () => {
    // alert('Email copiado!');

    var addImg = document.querySelector('.imgCopy');
    addImg.removeAttribute('hidden');
    var addSpan = document.querySelector('.spanEmail');
    addSpan.removeAttribute('hidden');
    var imgCopy = document.querySelector('#copiarEmail');
    imgCopy.addEventListener('click', () => {
        navigator.clipboard.writeText('pedro2003dressler@gmail.com');
    });
});




const zap = document.getElementById('whats').addEventListener('click', () => {
    window.open('https://wa.me/5531994903183');
});

const linkedin = document.getElementById('linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/pedro-avila-dressler/');
});

const github = document.getElementById('github').addEventListener('click', () => {
    window.open('https://github.com/PedroDressler');
});

ScrollOut({
    targets: '.box'
})
