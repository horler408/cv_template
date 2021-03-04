
const Certification = () => {
    return `
        <div class="item skill-cert">
            <label>Certification</label>
            <select multiple id="skills-certification">
                <option value="">--Select--</option>
                <option value="CCNA">CCNA</option>
                <option value="CCNP">CCNP</option>
                <option value="Comptia A+">Comptia A+</option>
                <option value="COMPTIA N+">Comptia N+</option>
                <option value="Oracle database Administrator">Oracle Database Administrator</option>
                <option value="Linux Certification">Linus Plus</option>
            </select>
        </div>
        <div class="item other-skill-cert">
            <label for="other-skills" class="other">Other skills not specified</label>
            <input type="text" id="other-skills" placeholder="Other skills">
        </div>
        <div class="item other-skill-cert">
            <label for="other-cert" class="other">Other Certification</label>
            <input type="text" id="other-cert" placeholder="Other certifications">
        </div>
    `
}

export default Certification;