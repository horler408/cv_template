import Certification from './Certifications.js'
const Skills = () => {
    return `
        <form>
            <fieldset>
                <h2>Skills and Certification</h2>
                <div class="wrapper">
                    <div class="item skill-cert">
                        <label>Technical Skills</label>
                        <select multiple id="technical-skills">
                            <option value="">--Select--</option>
                            <option value="Windows Appreciation">Window Appreciation</option>
                            <option value="Desktop Publishing">Desktop Publishing</option>
                            <option value="ms-offices">Ms Offices</option>
                            <option value="Photoshop">Photoshop Design</option>
                            <option value="Adobe Design">Adope illustrator</option>
                            <option value="Web design">Website Design</option>
                            <option value="Fontend">Front-end Development</option>
                            <option value="Backend">Back-end Development</option>
                            <option value="Sql database">Database Management</option>
                            <option value="Android development">Mobile App</option>
                        </select>
                    </div>
                ${Certification()}
                </div>
            </fieldset>
        </form>
    `
}

export default Skills