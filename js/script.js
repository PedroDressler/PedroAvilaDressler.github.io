window.addEventListener('load', (e)=>{
  e.preventDefault();
})

const addImg = document.querySelector('.imgCopy');
const addSpan = document.querySelector('.spanEmail');
const imgCopy = document.getElementById('copiarEmail');
const gmail = document.getElementById('gmail');

gmail.addEventListener('click', () => {
  addImg.removeAttribute('hidden');
  addSpan.removeAttribute('hidden');
  gmail.setAttribute('disabled', 'disabled')
});


imgCopy.addEventListener('click', () => {
  const email = document.getElementById('email');
  navigator.clipboard.writeText('pedro2003dressler@gmail.com');
  email.textContent = 'Copiado!';
  setTimeout(() => {
    email.textContent = 'pedro2003dressler@gmail.com';
  }, 1500);
  imgCopy.classList.add('active');
  setTimeout(() => {
    imgCopy.classList.remove('active');
  }, 200);
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
});
