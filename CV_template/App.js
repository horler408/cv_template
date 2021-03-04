import Bio from './modules/Bio.js';
import Education from './modules/Education.js';
import Experience from './modules/Experience.js';
import Skills from './modules/Skills.js';
import Certification from './modules/Certifications.js';
import Hobby from './modules/Hobby.js';
import Language from './modules/Languages.js';
import Referee from './modules/Referees.js';
import Display from './modules/Display.js';
import Nav from './modules/nav/Nav.js';
import Footer from './modules/Footer.js';

const rootDiv = document.getElementById('root')

const App = async () => {
    return `
        ${Nav()}
        <div class="container">
            ${Bio()}
            ${Education()}
            ${Experience()}
            ${Skills()}
            ${Certification()}
            ${Hobby()}
            ${Language()}
            ${Referee()}
            ${Display()}
        </div>
        ${Footer()}
    `
}

document.getElementById('root').innerHTML = App(); 