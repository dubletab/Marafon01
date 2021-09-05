function SliderPlugin(num = 0) {
    const slides = document.querySelectorAll('.slide');

    slides[num].classList.add('active');

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
}

SliderPlugin(1);