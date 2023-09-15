/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x')
	navbar.classList.toggle('active')
}

/*==================== scroll sections active link ====================*/
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
	/*==================== sticky navbar ====================*/
	let header = document.querySelector('header')

	header.classList.toggle('sticky', window.scrollY > 100)

	/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
	menuIcon.classList.remove('bx-x')
	navbar.classList.remove('active')
}
const arrowUp = document.querySelector('.scrollToTop')
function trackScroll() {
	if (window.scrollY > 1000) {
		arrowUp.classList.add('hide')
	} else {
		arrowUp.classList.remove('hide')
	}
}
window.addEventListener('scroll', trackScroll)

/*==================== scroll reveal ====================*/
ScrollReveal({
	// reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200,
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
	strings: ['Frontend Developer', 'Technical Programmatic', 'Blogger'],
	typeSpeed: 50,
	backSpeed: 50,
	backDelay: 1000,
	loop: true,
})
// const num = [5, 8, 10, 23, 48, 60]

// for (const n of num) {
// 	if (n % 2 == 0) {
// 		console.log(`%cLiczba ${n} jest parzysta`)
// 	} else {
// 		console.log(`%cLiczba ${n} jest nieparzysta`)
// 	}
// }

// const numbers = [1, 5, 13, 26, 48]
// const newNum = numbers.map(num => num * 5)

// console.log(newNum)
// // let funcion = check (num) {
// //     if(num%2==0){
// //         console.log(`Liczba ${num} jes parzysta`);
// //     }else {
// //         console.log(`Liczba ${num} jest nieparzysta`);
// //     }
// // };
// newNum.forEach(num => {
// 	if (num % 2 == 0) {
// 		console.log(`Liczba ${num} jest parzysta`)
// 	} else {
// 		console.log(`Liczba ${num} jest nieparzysta`)
// 	}
// })

// const colors = ['red']
// colors.unshift('blue')
// colors.push('green')

// console.log(colors)

// for (let color of colors) {
// 	console.log(`Moj ululbiony kolor to ${color.charAt(0).toUpperCase() + color.slice(1)}`)
// }

// const cars = 'audi, mercedes, bmw, doge, ferrari'
// let newCars = cars.split(',')
// console.log(newCars);

// if(cars.length > 3){
//     console.log(`Jest OK`)
// }else{
//     console.log(`Nie jest OK`);
// }
// if(newCars.includes('Audi')){
//     newCars.pop()
// }else{
//     newCars.push('Audi')
// }
// console.log(newCars);

// function read (name, age){
//     console.log(`Cześć mam na imię ${name} i mam ${age} lat`);
// }
// read('Laura',7)

// let score
// const add = (x, y) => {
// 	score = x + y
// 	if (score % 2 === 0) {
// 		f1(score)
// 	} else {
// 		f2(score)
// 	}
// }
// const f1 = x => {
// 	console.log(`Liczba ${x} jest parzysta`)
// }
// const f2 = x => {
// 	console.log(`Liczba ${x} jest nieparzysta`)
// }

// add(101, 2)

// let celcius
// let temp
// const fahrenheit = c => {
// 	// celcius = c
// 	temp = c * 1.8 + 32
//     console.log(`${c}*C = ${temp}*F`);
// }

// fahrenheit(2)
// const num = 10
// let numbers = []

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)

// }

// const check = x => {
// 	if ((x % 3 === 0) & (x !== 0)) {
// 		console.log(`Liczba ${x} jest podzielna przez 3`)
// 	} else if (x == 0) {
// 		console.log(`Liczba ${x} jest równa zero i nie jest podzielne przez 3`)
// 	} else {
// 		console.log(`Liczba ${x} nie jest podzielna przez 3`)
// 	}

// }
// numbers.forEach(check)
// const par = document.createElement('p')
// const divA = document.querySelector('div.a')
// par.textContent = 'Dupa jasiu pierdzi stasiu'
// divA.appendChild(par)
// let score = 10
// const ulList = document.createElement('ul')
// const liList = document.createElement('li')
// for (let i = 1; i <= score; i++) {
//     ulList.append(liList)
// }
// console.log(ulList);