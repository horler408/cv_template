
const Referee = () => {
    return `
        <form>
            <fieldset>
                <h2>Referees</h2>
                <div class="wrapper">
                    <div class="item">
                        <label for="referee-1">Name of Referee<span>*</span></label>
                        <input type="text" id="referee-1">
                    </div>
                    <div class="item">
                        <label for="referee-address-1">Address of Referee<span>*</span></label>
                        <input type="text" id="referee-address-1">
                    </div>
                    <div class="item">
                        <label for="referee-phone-1">Phone Number<span>*</span></label>
                        <input type="tel" id="referee-phone-1">
                    </div>
                    <div class="item">
                        <label for="referee-email-1">Email Address<span>*</span></label>
                        <input type="email" id="referee-email-1">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="item">
                        <label for="referee-2">Name of Referee<span>*</span></label>
                        <input type="text" id="referee-2">
                    </div>
                    <div class="item">
                        <label for="referee-address-2">Address of Referee<span>*</span></label>
                        <input type="text" id="referee-address-2">
                    </div>
                    <div class="item">
                        <label for="referee-phone-2">Phone Number<span>*</span></label>
                        <input type="tel" id="referee-phone-2">
                    </div>
                    <div class="item">
                        <label for="referee-email-2">Email Address<span>*</span></label>
                        <input type="email" id="referee-email-2">
                    </div>
                </div>
                <div class="wrapper">
                    <div class="item">
                        <label for="referee-3">Name of Referee<span>*</span></label>
                        <input type="text" id="referee-3">
                    </div>
                    <div class="item">
                        <label for="referee-address-3">Address of Referee<span>*</span></label>
                        <input type="text" id="referee-address-3">
                    </div>
                    <div class="item">
                        <label for="referee-phone-3">Phone Number<span>*</span></label>
                        <input type="tel" id="referee-phone-3">
                    </div>
                    <div class="item">
                        <label for="referee-email-3">Email Address<span>*</span></label>
                        <input type="email" id="referee-email-3">
                    </div>
                </div>
            </fieldset>

            <div class="wrapper">	
                <div class="item">
                    <input type="submit" id="submit-button" value="Submit & View" class="decision">
                </div>
                <div class="item">
                    <input type="reset" id="reset-button" value="Reset" class="decision">
                </div>
            </div>
        </form>
    `
}

export default Referee;