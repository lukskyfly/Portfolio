//zaznaczenie w navigacji aktywnej secji
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 150
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active')
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
			})
		}
	})
}
// dodawanie klasy .hide (przenoszenie na gore strony)
const arrowUp = document.querySelector('.scrollToTop')
function trackScroll() {
	if (window.scrollY > 1000) {
		arrowUp.classList.add('hide')
	} else {
		arrowUp.classList.remove('hide')
	}
}
window.addEventListener('scroll', trackScroll)

let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-xmark')
	navBar.classList.toggle('active')
}
