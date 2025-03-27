let genders = document.querySelectorAll('input[name="genero"]');
let img = document.querySelector('#profileImage');

genders.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        let newImageSrc = event.target.value === 'masculino' ? 'homem-jovem.png' : 'mulher.png'
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = newImageSrc;
            img.style.opacity = 1;
        }, 250);
    });
});
