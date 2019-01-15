const wrapper = document.querySelector('.carousel .wrapper');
const wrapperText = document.querySelector('.carousel .wrapper h3');
const animateWrapperOn = () => {
    wrapper.style.height = "30%";
    wrapperText.style.visibility = "visible";
}
const animateWrapperOut = () => {
    wrapper.style.height = "0%";
    wrapperText.style.visibility = "hidden";
}