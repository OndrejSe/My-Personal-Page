import { mediumText, portfolioLink } from "./utils.js"

const navItems = {
    about: {
        caption: "about me",
        link: "about-me"
    },
    portfolio: {
        caption: "portfolio",
        link: "portfolio"
    },
    connect: {
        caption: "connect",
        link: "connect"
    },
}

const tools = ["html5", "css3", "javascript", "scss", "tailwind"]

const contactData = [
    {
        id: 'email',
        title: 'Email',
        icon: 'fa-solid fa-envelope',
        contact: 'ondrejsedlak94@gmail.com',
    },
    {
        id: 'linked-in',
        title: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        contact: 'https://www.linkedin.com/in/ondrej-sedlak-brn',
    },
    {
        id: 'git-hub',
        title: 'GitHub',
        icon: 'fa-brands fa-github',
        contact: 'https://github.com/OndrejSe/',
    }
]

const portfolioData = {
    pedaler: {
        id: 'pedaler',
        title: 'Pedaler Bike Rental',
        image: 'pedaler-bike-rental.png',
        description: 'The website of a fictional bike rental, which includes various sections and particularly provides the option to add a reservation for a selected bike to the cart. The project aimed for a deeper understanding of JavaScript. Simultaneously, I acquainted myself with SCSS during its creation.',
        previewLink: 'https://pedaler-bike-rental.netlify.app/',
        codeLink: 'https://github.com/OndrejSe/Pedaler-Bike-Rental'
    },
    nyTimes: {
        id: 'ny-times',
        title: 'New York Times API',
        image: 'ny-times-api.png',
        description: 'The aim of this project was to practice using API to fetch data. I&nbsp;used two different types of APIs from the New York Times, one for creating the homepage and the other for listing New York Times articles containing the term searched by the user.',
        previewLink: 'https://nyt-article-api.netlify.app/',
        codeLink: 'https://github.com/OndrejSe/NY-Times-API'
    },
    myPage: {
        id: 'my-page',
        title: 'My Personal Page',
        image: 'my-page.png',
        description: 'I created this page primarily to showcase my front-end development projects. Simultaneously, I learned to use Tailwind CSS through its creation. I also added the option to choose between English and Czech languages to the page.',
        previewLink: '#home',
        codeLink: 'https://github.com/OndrejSe/My-Personal-Page'
    },
}

const translation = {
    english: {
        // HEADER
        langCode: 'ENG',
        langName: 'English',
        navAbout: navItems.about.caption,
        navPortfolio: navItems.portfolio.caption,
        navConnect: navItems.connect.caption,
        headerName: 'Ondřej Sedlák',
        headerRole: `I'm learning web development`,
        headerButton: 'see my projects',
        // ABOUT
        aboutHeading: 'About Me',
        aboutText: `My&nbsp;name is ${mediumText('Ondřej Sedlák')}, and&nbsp;I'm currently learning ${mediumText('web development')}. I've&nbsp;become more interested in this field in the past year. My&nbsp;learning path started with a course in ${mediumText('HTML, CSS a&nbsp;Javascript')} at Engeto Academy. Since completing it, I&nbsp;continue to learn independently, mainly through the creation of personal training projects. In&nbsp;the process of their creation, I&nbsp;deepened my knowledge of JavaScript and acquainted myself with ${mediumText('SCSS')} and ${mediumText('Tailwind')}. My&nbsp;greatest challenge so far was to create e&#8209;commerce page for fictional bike rental business, with functional booking form and shopping cart. ${portfolioLink('See my portfolio')} for an overview of my selected&nbsp;projects.`,
        // PORTFOLIO
        portfolioHeading: 'Portfolio',
        portfolioNote: `I'm listing here only my own selected projects that did not originate completely from tutorials or other instructional materials.`,
        pedalerTitle: portfolioData.pedaler.title,
        pedalerDescription: portfolioData.pedaler.description,
        nyTimesTitle: portfolioData.nyTimes.title,
        nyTimesDescription: portfolioData.nyTimes.description,
        myPageTitle: portfolioData.myPage.title,
        myPageDescription: portfolioData.myPage.description,
        previewLink: 'preview',
        codeLink: 'code',
        homeLink: 'home',
        connectHeading: `Let's connect`,
        linkedInLink: 'Visit my profile',
        gitHubLink: 'See my code'
    },
    czech: {
        // HEADER
        langCode: 'CZE',
        langName: 'Čeština',
        navAbout: 'o mně',
        navPortfolio: 'portfolio',
        navConnect: 'spojení',
        headerName: 'Ondřej Sedlák',
        headerRole: 'Učím se vyvíjet weby',
        headerButton: 'ukázkové projekty',
        // ABOUT
        aboutHeading: 'O mně',
        aboutText: `Jmenuji se ${mediumText('Ondřej Sedlák')} a&nbsp;v&nbsp;současné době se seznamuji s ${mediumText('webovým vývojem')}. O&nbsp;tuto oblast jsem se začal více zajímat v&nbsp;minulém roce. Pro&nbsp;osvojení základů jsem zvolil kurz ${mediumText('HTML, CSS a&nbsp;Javascriptu')} od&nbsp;Engeto Akademie. Po&nbsp;jeho dokončení jsem v&nbsp;dalším rozvoji pokračoval samostatně, a&nbsp;to především skrze tvorbu vlastních cvičných projektů. Jejich tvorbou jsem prohloubil své znalosti Javascriptu a seznámil jsem se s&nbsp;${mediumText('SCSS')} a&nbsp;${mediumText('Tailwindem')}. Mojí největší dosavadní výzvou byla tvorba webu fiktivní cyklopůjčovny, s&nbsp;funkčním rezervačním formulářem a&nbsp;nákupním košíkem. Přehled&nbsp;mých vybraných projektů naleznete ${portfolioLink('v&nbsp;mém portfoliu')}.`,
        // PORTFOLIO
        portfolioHeading: 'Portfolio',
        portfolioNote: 'Uvádím zde pouze mé vlastní vybrané projekty, které nevznikly kompletně podle tutoriálu nebo jiných návodných materiálů.',
        pedalerTitle: 'Cyklopůjčovna Pedaler',
        pedalerDescription: 'Webová stránka fiktivní půjčovny jízdních kol, která obsahuje řadu sekcí a&nbsp;především možnost přidat do košíku rezervaci vybraného kola. Cílem projektu bylo hlubší porozumění Javascriptu. Zároveň jsem se během jeho tvorby seznámil s SCSS.',
        nyTimesTitle: 'New York Times API',
        nyTimesDescription: 'Cílem tohoto projektu bylo procvičit využití API k&nbsp;získávání dat. Použil jsem dva různé typy API od New York Times, jeden pro vytvoření domovské stránky a druhý pro vypsání článků New York Times obsahujících uživatelem hledaný pojem.',
        myPageTitle: 'Má osobní stránka',
        myPageDescription: 'Tuto stránku jsem vytvořil primárně pro prezentaci mých projektů z oblasti front-end developmentu. Zároveň jsem se během její tvorby naučil používat Tailwind CSS. Do&nbsp;stránky jsem také přidal možnost volby anglického nebo českého jazyka.',
        previewLink: 'náhled',
        codeLink: 'kód',
        homeLink: 'úvod',
        connectHeading: 'Spojme se',
        linkedInLink: 'Navštivte můj profil',
        gitHubLink: 'Prohlédněte si můj kód'
    }
}

export { navItems, tools, contactData, portfolioData, translation }
