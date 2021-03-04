
const Bio = () => {
    return `
        <form>
            <fieldset>
                <div class="info" id="error-message">All fields with * are required</div>
                <h2>Personal Information</h2>
                <div class="wrapper">
                    <div class="item">
                        <label for="first-name">First Name<span>*</span></label>
                        <input type="text" name="fName" id="first-name" placeholder="e.g Adisa">
                        <small id="errorMsg"></small>
                    </div>
                    <div class="item">
                        <label for="middle-name">Middle Name<span>*</span></label>
                        <input type="text" name="mName" id="middle-name" placeholder="e.g Muhammad">
                    </div>
                    <div class="item">
                        <label for="last-name">Last Name<span>*</span></label>
                        <input type="text" name="lName" id="last-name" placeholder="e.g Buhari">
                    </div>
                    <div class="item">
                        <label for="contact-address">Contact Address<span>*</span></label>
                        <input type="text" name="address" id="contact-address" placeholder="e.g 5, Mafoluku street, Surulere, Lagos state">
                    </div>
                    <div class="item">
                        <label for="phone-number">Phone Number<span>*</span></label>
                        <input type="tel" name="phoneNo" id="phone-number">
                    </div>
                    <div class="item">
                        <label for="email-address">Email<span>*</span></label>
                        <input type="Email" name="emailAdd" id="email-address" multiple>
                    </div>
                    <div class="item">
                        <label for=career-objectives>Career Objectives<span>*</span></label>
                        <textarea id="career-objectives" cols="30" rows=""></textarea> 
                    </div>
                    <div class="item">
                        <label for="dob">Date of birth<span>*</span></label>
                        <input type="date" name="" id="dob">
                    </div>
                    <div class="item">
                        <label for="pob">Place of birth<span>*</span></label>
                        <input type="text" name="" id="pob">
                    </div>
                    <div class="item">
                        <label for="gender">Gender<span>*</span></label>
                        <select id="gender">
                            <option value="none">--Select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="status">Marital Status<span>*</span></label>
                        <select id="status">
                            <option value="none">-Choose--</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>
                    <div class="item">
                        <label for="country">Nationalty<span>*</span></label>
                        <select type="text" id="country" name="country"></select>
                    </div>
                    <div class="item">
                        <label for="faith">Religion<span>*</span></label>
                        <input type="text" id="faith">
                    </div>
                    <div class="item">
                        <label for="state">State of origin<span>*</span></label>
                        <select type="text" name="state" id="state"></select>
                    </div>
                    <div class="item">
                        <label for="passport">Upload Passport</label>
                        <input type="file" name="" id="passport">
                    </div>
                    <div class="item">
                        <label for="local">Local Government<span>*</span></label>
                        <input type="text" name="" id="local">
                    </div>
                </div>
            </fieldset>
        </form>
    `
}

export default Bio;