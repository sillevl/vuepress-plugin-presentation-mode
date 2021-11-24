import './style.css'
const Mousetrap = require('mousetrap')

export default ({ Vue }) => {
    if(typeof(Mousetrap.bind) === 'function') {
        Mousetrap.bind('p', () => { 
            document.querySelector(".theme-container").classList.toggle('presentation-mode')
        });
    }
}
