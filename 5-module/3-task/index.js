function initCarousel() {
  const btnLeft = document.querySelector('.carousel__arrow_left')
  const btnRight = document.querySelector('.carousel__arrow_right')
  const slideWidth = document.querySelector('.carousel__slide').offsetWidth
  const sliderLine = document.querySelector('.carousel__inner')
  let position = 0

  btnLeft.style.display = 'none'

  btnLeft.addEventListener('click', () => {
    position += slideWidth
    sliderLine.style.transform = `translateX(-${position / 2}px)`

    if (position >= slideWidth * 3) {
      btnLeft.style.display = 'none'
    } else {
      btnLeft.style.display = ''
    }
  })
  btnRight.addEventListener('click', () => {
    position += slideWidth
    sliderLine.style.transform = `translateX(-${position}px)`
    if (position >= slideWidth * 3 ) {
      btnRight.style.display = 'none'
    } else {
      btnRight.style.display = ''
    }
  })
}
