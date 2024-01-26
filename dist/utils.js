const addTransition = () => {
    linksContainer.classList.add("duration-300")
}
const removeTransition = () => {
    linksContainer.classList.remove("duration-300")
}

const mediumText = (string) => {
    return `<strong class="font-medium">${string}</strong>`
}

const portfolioLink = (string) => {
    return `<a class="font-medium text-slate-500 hover:text-slate-400 transition-all ease-in-out duration-200"href="#portfolio">${string}</a>`
}

export {addTransition, removeTransition, mediumText, portfolioLink}