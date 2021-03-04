
const Education = () => {
    return `
        <form>
            <fieldset>
                <h2>Education History</h2>
                <div class="wrapper">
                    <div class="item">
                            <label>Primary School Attended<span>*</span></label>
                            <input type="text" id="primary">
                    </div>

                    <div class="item">
                        <label for="primary-cert">Certificate Obtained<span>*</span></label>
                        <select id="primary-cert">
                            <option>None</option>
                            <option>Senior School Certificate Examination</option>
                            <option>Interim Joint Matriculation Board</option>
                            <option>School leaving Certificate</option>
                        </select>
                    </div>
                    <div class="item">
                            <label for="pri-start-date">Start date<span>*</span></label>
                            <input type="date" id="pri-start-date">
                    </div>
                    <div class="item">
                            <label for="pri-end-date">End date<span>*</span></label>
                            <input type="date" id="pri-end-date">
                    </div>
                    
                    <div class="item">
                            <label>Secondary School Attended<span>*</span></label>
                            <input type="text" id="secondary">
                    </div>
                    <div class="item">
                        <label for="secondary-cert">Certificate Obtained<span>*</span></label>
                        <select id="secondary-cert">
                            <option>None</option>
                            <option>Senior School Certificate Examination</option>
                            <option>Interim Joint Matriculation Board</option>
                            <option>School leaving Certificate</option>
                        </select>
                    </div>
                    <div class="item">
                            <label for="sec-start-date">Start date<span>*</span></label>
                            <input type="date" id="sec-start-date">
                    </div>
                    <div class="item">
                            <label for="sec-end-date">End date<span>*</span></label>
                            <input type="date" id="sec-end-date">
                    </div>
                    <div class="item">
                            <label for="tertiary1">University/Polytechnic Attended<span>*</span></label>
                            <input type="text" id="tertiary1">
                    </div>
                    <div class="item">
                            <label for="course1">Course of Study<span>*</span></label>
                            <input type="text" id="course1">
                    </div>
                    <div class="item">
                        <label for="tert1-cert">Certificate Obtained<span>*</span></label>
                        <select id="tert1-cert">
                            <option>None</option>
                            <option>Msc</option>
                            <option>Bsc</option>
                            <option>B.eng</option>
                            <option>HND</option>
                            <option>OND</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="tert1-grade">Grade Obtained<span>*</span></label>
                        <select id="tert1-grade">
                            <option>None</option>
                            <option>First Class</option>
                            <option>Second Class(upper division)</option>
                            <option>Second Class(lower division)</option>
                            <option>Distinction</option>
                            <option>Upper Credit</option>
                            <option>Lower Credit</option>
                            <option>Pass</option>
                        </select>
                    </div>
                    <div class="item">
                            <label for="t1-start-date">Start date<span>*</span></label>
                            <input type="date" id="t1-start-date">
                    </div>
                    <div class="item">
                            <label for="t1-end-date">End date<span>*</span></label>
                            <input type="date" id="t1-end-date">
                    </div>
                    <div class="edit">
                        <input type="button" value="Add+" name="addBtn" id="add">
                    </div>
                </div>
                <div class="post wrapper">
                    <div class="item">
                            <label for="tertiary2">Other Certificate Obtained<span>*</span></label>
                            <input type="text" id="tertiary2">
                    </div>
                    <div class="item">
                            <label for="course2">Course of Study<span>*</span></label>
                            <input type="text" id="course2">
                    </div>
                    <div class="item">
                        <label for="tert2-cert">Certificate Obtained<span>*</span></label>
                        <select id="tert2-cert">
                            <option>None</option>
                            <option>Phd</option>
                            <option>Msc</option>
                            <option>Bsc</option>
                            <option>B.eng</option>
                            <option>HND</option>
                            <option>OND</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="tert2-grade">Grade Obtained<span>*</span></label>
                        <select id="tert2-grade">
                            <option value="">None</option>
                            <option value="First Class">First Class</option>
                            <option value="Second Class(Upper)">Second Class(upper division)</option>
                            <option value="Second Class(lower)">Second Class(lower division)</option>
                            <option value="distinction">Distinction</option>
                            <option value="upper credit">Upper Credit</option>
                            <option value="lower credit">Lower Credit</option>
                            <option>Pass</option>
                        </select>
                    </div>
                    <div class="item">
                            <label for="t2-start-date">Start date<span>*</span></label>
                            <input type="date" id="t2-start-date">
                    </div>
                    <div class="item">
                            <label for="t2-end-date">End date<span>*</span></label>
                            <input type="date" id="t2-end-date">
                    </div>
                </div>
            </fieldset>
        </form>
    `
}

export default Education;