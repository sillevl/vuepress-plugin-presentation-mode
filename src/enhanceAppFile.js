import './style.css'
const Mousetrap = require('mousetrap')

export default ({ Vue }) => {
    console.log('hello from presentation-mode')
    Mousetrap.bind('p', () => { 
        document.querySelector(".theme-container").classList.toggle('presentation-mode')
    });
}