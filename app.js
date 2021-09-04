const slides = document.querySelectorAll('.slide');

for (const slide of slides){
    slide.addEventListener('click', () => {
        // slides.forEach(slide => {
        //     slide.classList.remove('active');
        // })

        clearActiveClasses(slides);

        slide.classList.add('active');

    })
}

function clearActiveClasses(arr) {
        arr.forEach(elem => {
            elem.classList.remove('active');
        })
}