
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add("abrir-menu")
})

menu.addEventListener('click', () => {
    menu.classList.remove("abrir-menu")
})

overlay.addEventListener('click', () => {
    menu.classList.remove("abrir-menu")
})

const chk = document.getElementById('checkbox')

chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
})

// Scroll Animation

const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-global')

    const windowHalfSize = window.innerHeight * 0.6

    const animateScroll = () => {
        sections.forEach(item => {
            const sectionTop = item.getBoundingClientRect().top

            const isSectionVisible = (sectionTop - windowHalfSize) < 0

            if (isSectionVisible) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }

        })
    }

    animateScroll()

    window.addEventListener('scroll', animateScroll)

}

initAnimationScroll()

// Scroll Smooth

const initScrollSmooth = () => {

    const linksInternos = document.querySelectorAll('nav a')

    linksInternos.forEach(item => {

        const scrollToSection = (event) => {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)

            window.scrollTo ({
                top: section.offsetTop - 100
            })


        }


        item.addEventListener('click', scrollToSection)

    })

}

initScrollSmooth()

    const initTypingAnimation = () => {
        const title = document.querySelector('#topo-site .txt-topo-site h1')
        const span = document.querySelector('#topo-site .txt-topo-site span')
        const paragraph = document.querySelector('#topo-site .txt-topo-site h2')

        const typingAnimation = (element) => {

            if (element == title) {
                element.innerHTML = 'Olá, eu sou o '
                const textToArray = element.innerHTML.split('')
                element.innerHTML = ''

                textToArray.forEach((item, index) => {
                    setTimeout(() => element.innerHTML += item, 120 * index)
                })

            } else if (element == span) {
                element.innerHTML = 'Heitor Zelbato'
                const textToArray = element.innerHTML.split('')
                element.innerHTML = ''

                textToArray.forEach((item, index) => {
                    setTimeout(() => element.innerHTML += item, 150 * index)
                })

            } else {
                element.innerHTML = 'Desenvolvedor Front-End'
                const textToArray = element.innerHTML.split('')
                element.innerHTML = ''

                textToArray.forEach((item, index) => {
                    setTimeout(() => element.innerHTML += item, 75 * index)
                })

            }

        }

        typingAnimation(title)
        setTimeout(() => typingAnimation(span), 1600)
        setTimeout(() => typingAnimation(paragraph), 3700)

    }



initTypingAnimation()
