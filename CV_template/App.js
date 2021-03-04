import Bio from './modules/Bio.js';
import Education from './modules/Education.js';
import Experience from './modules/Experiences.js';
import Skills from './modules/Skills.js';
import Hobby from './modules/Hobby.js';
import Referee from './modules/Referees.js';
import Display from './modules/Display.js';
import Nav from './modules/Nav.js';
import Footer from './modules/Footer.js';

const App = () => {
    return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Education()}
            ${Experience()}
            ${Skills()}
            ${Hobby()}
            ${Referee()}
            ${Display()}
        </div>
        ${Footer()}
    `
}

document.getElementById('root').innerHTML = App(); 