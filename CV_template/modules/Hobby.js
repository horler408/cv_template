import Language from './Languages.js';
const Hobby = () => {
    return `
        <form>
            <fieldset>
                <h2>hobbies and Language Spoken</h2>
                <div class="wrapper">
                    <div>
                        <input type="checkbox" name="sports" value="Sports" id="sports" class="check">
                        <label for="sports" class="check-label">Sports</label>
                    </div>
                    <div>
                        <input type="checkbox" name="reading" value="Reading" id="reading" class="check">
                        <label for="reading" class="check-label">Reading</label>
                    </div>
                    <div>
                        <input type="checkbox" name="swimming" value="Swimming" id="swimming" class="check">
                        <label for="swimming" class="check-label">Swimming</label>
                    </div>
                    <div>
                        <input type="checkbox" name="games" value="Video Games" id="games" class="check">
                        <label for="games" class="check-label">Video Games</label>
                    </div>
                    <div>
                        <input type="checkbox" name="traveling" value="Traveling" id="traveling" class="check">
                        <label for="traveling" class="check-label">Travelling</label>
                    </div>
                    <div>
                        <input type="checkbox" name="meeting" value="Making Friends" id="meeting" class="check">
                        <label for="meeting" class="check-label">Making Friends</label>
                    </div>
                </div>
                ${Language()}
            </fieldset>
        </form>
    `
}

export default Hobby;