import { addTransition, removeTransition } from './utils.js';
import { navItems, tools, contactData, portfolioData, translation } from './data.js';

const preloader = document.getElementById('preloader')
const langControl = document.getElementById('lang-control')
const langSelect = document.getElementById('lang-select')
const navList = document.getElementById("nav-list")
const menuButton = document.getElementById("menu-button")
const menuIcon = document.getElementById("menu-icon")
const linksContainer = document.getElementById("links-container")
const navButtonsContainer = document.getElementById("nav-buttons-container")
const aboutButtonsContainer = document.getElementById("about-buttons-container")
const toolList = document.getElementById('tools-list')
const projectContainer = document.getElementById('project-container')
const contactContainer = document.getElementById('contact-container')
const scrollTopBtn = document.getElementById('scroll-top')

const hidePreloader = () => {
    setTimeout(() => {
        preloader.classList.add('hidden')
    }, "300");
}

const displayLangSelectBtns = () => {
    langSelect.innerHTML = Object.keys(translation).map((item) => {
        return `<button class="block text-slate-400 hover:text-slate-600 font-medium" data-lang="${item}">${translation[item].langName}</span></button>`
    }).join('')
}

const openLangSelect = () => {
    langSelect.classList.remove('hidden')
    langSelect.classList.add('flex')
}

const closeLangSelect = () => {
    if (langSelect.classList.contains('flex'))
    langSelect.classList.remove('flex')
    langSelect.classList.add('hidden')
}

const langSelectOpener = () => {
    if (langSelect.classList.contains('hidden')){
        openLangSelect()
    } else {
        closeLangSelect()
    }
}

const storeLanguage = (selectedLanguage) => {
    if (selectedLanguage && selectedLanguage !== undefined) {
        const language = selectedLanguage

        localStorage.setItem('language', language)
        location.reload()
    }
}

const setPageLanguage = () => {
    const currentLanguage = localStorage.getItem('language')

    if(currentLanguage){
        document.body.dataset.lang = currentLanguage
    } else {
        document.body.dataset.lang = 'english'
    }
}

const translatePageContent = () => {
    const language = document.body.dataset.lang
    // HEADER
    document.getElementById('current-language').innerHTML = translation[language].langCode
    document.getElementById('nav-about-me').innerHTML = translation[language].navAbout
    document.getElementById('nav-portfolio').innerHTML = translation[language].navPortfolio
    document.getElementById('nav-connect').innerHTML = translation[language].navConnect
    document.getElementById('header-name').innerHTML = translation[language].headerName
    document.getElementById('header-role').innerHTML = translation[language].headerRole
    document.getElementById('header-button').innerHTML = translation[language].headerButton
    // ABOUT ME
    document.getElementById('about-section-heading').innerHTML = translation[language].aboutHeading
    document.getElementById('about-text').innerHTML = translation[language].aboutText
    // PORTFOLIO
    document.getElementById('portfolio-heading').innerHTML = translation[language].portfolioHeading
    document.getElementById('portfolio-note').innerHTML = translation[language].portfolioNote
    document.querySelector('#pedaler .title').innerHTML = translation[language].pedalerTitle
    document.querySelector('#pedaler .description').innerHTML = translation[language].pedalerDescription
    document.querySelector('#ny-times .title').innerHTML = translation[language].nyTimesTitle
    document.querySelector('#ny-times .description').innerHTML = translation[language].nyTimesDescription
    document.querySelector('#my-page .title').innerHTML = translation[language].myPageTitle
    document.querySelector('#my-page  .description').innerHTML = translation[language].myPageDescription
    document.querySelector('#my-page  .home-link-text').innerHTML = translation[language].homeLink
    document.querySelectorAll('.preview-link-text').forEach(button => {
        button.innerHTML = translation[language].previewLink })
    document.querySelectorAll('.code-link-text').forEach(button => {
        button.innerHTML = translation[language].codeLink })
    // FOOTER
    document.getElementById('connect-heading').innerHTML = translation[language].connectHeading
    document.getElementById('linked-in-link').innerHTML = translation[language].linkedInLink
    document.getElementById('git-hub-link').innerHTML = translation[language].gitHubLink
}


const displayNavItems = () => {
    let displayNavItems = Object.keys(navItems).map((item) => {
        return `<li class="md:hover:translate-x-2 ease-in-out duration-300">
                    <a id="nav-${navItems[item].link}" href="#${navItems[item].link}" class="text-xl text-slate-50 hover:text-yellow-50 pb-1 hover:border-b-2 hover:border-emerald-100 md:pb-0 md:hover:border-b-0 md:hover:border-l-2 md:pl-2">${navItems[item].caption}</a>
                </li>`
    })
    displayNavItems = displayNavItems.join("")
    navList.innerHTML = displayNavItems
}

const setNavWidth = () => {
    const navListWidth = Math.floor(navList.getBoundingClientRect().width)

    navList.style.width = `${navListWidth}px`
}

const openMobileMenu = () => {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-xmark")
    linksContainer.classList.remove('invisible')
    linksContainer.classList.add('visible')
}

const closeMobileMenu = () => {
    menuIcon.classList.remove("fa-xmark")
    menuIcon.classList.add("fa-bars")
    linksContainer.classList.remove('visible')
    linksContainer.classList.add('invisible')
}

const displayMobileMenu = () => {
        if(menuIcon.classList.contains("fa-bars")){
            openMobileMenu()
        } else {
            closeMobileMenu()
        }
        linksContainer.classList.toggle("-translate-y-full")
}

const closeMenuOnLinkClick = () => {
    const navLinks = document.querySelectorAll("#nav-list li")
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            displayMobileMenu()
        })
    })
}

const closeMenuOnScroll = () => {
    if(window.scrollY >= 300 && menuIcon.classList.contains("fa-xmark")){
        closeMobileMenu()
    }
}

const displayToolList = (toolsArray) => {
    let displayToolList = toolsArray.map((tool) => {
        return `<li class="w-auto uppercase sm:text-xl text-slate-50 bg-yellow-50 bg-opacity-20 drop-shadow-lg font-regular text-left px-4 py-1 rounded-full last:mr-0">${tool}</li>`
    })
    displayToolList = displayToolList.join("")
    toolList.innerHTML = displayToolList
}

const getContactType = (item) => {
    let link = ''
    let text = ''

    if (item.id === 'email'){
        link = `mailto:${item.contact}`
        text = item.contact
    } else if (item.id === 'linked-in'){
        link = item.contact
        text = 'Visit my profile'
    } else if (item.id === 'git-hub'){
        link = item.contact
        text = 'See my code'
    }
    
    return {
        link: link,
        text: text
    }
}

const displayContactButtons = (data) => {
    const displayButtons = data.map((item) => {
        const type = getContactType(item)

        return `<button class="text-2xl text-slate-50 hover:text-slate-500 hover:scale-105 hover:opacity-100 ease-in-out duration-500 leading-none"><a href="${type.link}" target="_blank"><i class="${item.icon} drop-shadow-lg"></i></a></button>`
    }).join("")
    aboutButtonsContainer.innerHTML = displayButtons
    navButtonsContainer.innerHTML = displayButtons
}

const displayContactInfo = (data) => {
    const contacts = data.map((item) => {
        const type = getContactType(item)

        return `<div class="w-56 flex-none flex flex-col gap-2 items-center">
                    <div class="w-full flex align-baseline justify-center gap-2 pb-3 border-b-2 border-slate-400">
                    <i class='${item.icon} text-amber-50 leading-none text-xl'></i>
                    <h2 class="text-center text-slate-100 text-xl font-medium leading-none p-0 m-0">${item.title}</h2>
                    </div>
                    <a href="${type.link}" target="_blank" id="${item.id}-link"  class="text-slate-200 text-center font-medium font-regular hover:text-amber-50 px-4 duration-200 ease-in-out">${type.text}</a>
                </div>`
    }).join("")

    contactContainer.innerHTML = contacts
}

const displayPortfolio = () => {
    const articles = Object.keys(portfolioData).map((item) => {
    let pageLink = `<i class="fa-solid fa-magnifying-glass mr-2"></i><span class="preview-link-text capitalize">preview</span>`
    let target = `target="_blank"`
    if(portfolioData[item].id === 'my-page'){
        pageLink = `<i class="fa-solid fa-arrow-up mr-2"></i><span class="home-link-text capitalize">Home</span>`
        target = ''
    }

    return `<article class="w-full sm:max-w-2xl xl:max-w-6xl flex flex-col xl:even:flex-row xl:odd:flex-row-reverse items-center justify-start bg-slate-300 overflow-hidden" id='${portfolioData[item].id}' data-aos="fade-up">
                <div class="w-full h-full basis-2/3 overflow-hidden">
                    <img class="w-full h-full object-cover object-top" src="./images/${portfolioData[item].image}">
                </div>
                <div class="w-full h-full text-center xl:text-left xl:w-32 flex flex-col gap-4 p-8 basis-1/3">
                <h2 class="title w-full text-2xl font-medium leading-none text-slate-600 border-b-2 border-b-slate-50 pb-4">${portfolioData[item].title}</h2>
                <p class="description text-slate-500 text-md">${portfolioData[item].description}</p>
                <div class="flex w-full justify-center xl:justify-start gap-2 border-t-2 border-t-slate-50 pt-6">                
                    <a class="preview-link w-auto text-center bg-slate-200 hover:bg-amber-50 text-slate-500 font-medium px-5 py-2  hover:text-slate-500 ease-in-out duration-300 rounded-full" href="${portfolioData[item].previewLink}" ${target}>${pageLink}</a>
                    <a class="w-auto text-center bg-slate-200 hover:bg-amber-50 text-slate-500 font-medium px-5 py-2  hover:text-slate-500 ease-in-out duration-300 rounded-full" href="${portfolioData[item].codeLink}" target="_blank"><i class="fa-solid fa-code mr-2"></i><span class="code-link-text capitalize">code</span></a>
                </div>
                </div>
            </article>`
    }).join("")
    projectContainer.innerHTML = articles
}

const editThisPageLink = () => {
    const previewLink = document.querySelector('#my-page .preview-link')
    console.log(previewLink.getAttribute('target'));
    previewLink.removeAttribute('target');
}

const showScrollTopBtn = () => {
    if (window.scrollY >= 300) {
        scrollTopBtn.classList.remove('invisible')
        scrollTopBtn.classList.add('visible')
    } else {
        scrollTopBtn.classList.remove('visible')
        scrollTopBtn.classList.add('invisible')    }
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

const init = () => {
    displayNavItems()
    setNavWidth()
    closeMenuOnLinkClick()
    displayToolList(tools)
    displayContactButtons(contactData)
    displayContactInfo(contactData)
    displayPortfolio()
    displayLangSelectBtns()
    setPageLanguage()
    translatePageContent()
    // editThisPageLink()
}

// Settings for AOS animations script
AOS.init({
    duration: 800,
    offset: 50,
    once: true
})

window.addEventListener("load", hidePreloader)
window.addEventListener("DOMContentLoaded", init)
window.addEventListener("scroll", () => {
    closeMenuOnScroll()
    showScrollTopBtn()
})

langControl.addEventListener('click', langSelectOpener)

langControl.addEventListener('mouseleave', closeLangSelect)

langSelect.addEventListener('click', (e) => {
    const selectedLanguage = e.target.dataset.lang

    storeLanguage(selectedLanguage)
})

scrollTopBtn.addEventListener('click', scrollToTop)

menuButton.addEventListener("click", displayMobileMenu)
menuButton.addEventListener("mouseenter", () => {addTransition(linksContainer)})
menuButton.addEventListener("mouseleave", () => {removeTransition(linksContainer)})