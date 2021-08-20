const Title = document.getElementById('title');
const Subtitle = document.getElementById('subtitle');
const circleSvg = document.querySelector('.cursor-follow');

const titleLetters = Title.innerHTML = Title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
const SubtitleLetters = Subtitle.innerHTML = Subtitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
let tl = gsap.timeline();
let mouseX = 0
let mouseY = 0

tl.to('#title .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '0.1'})
tl.to('#subtitle .letter', {opacity: 1, y: '0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: '0.1'})
tl.to('.hero-img .hat', { opacity: 1, x: '0'})
tl.to('.hero-img .glasses', { opacity: 1, x: '0'})
tl.to('.hero-img .mustache', { opacity: 1, x: '0'})
window.addEventListener('mousemove', (event) => {
    mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
    mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
})

const mouseMove = () => {
    circleSvg.style.top = mouseY
    circleSvg.style.left = mouseX
    window.requestAnimationFrame(mouseMove)
}

mouseMove()



