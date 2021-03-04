
const Display = () => {
    return `
        <div>
            <button class="print">Print</button>
        </div>
        <!--UI Display starts Here-->
        <div class="display-container">
                <header class="shadow">
                    <img src="" id="image">
                    <h1 class="title"></h1>
                    <p class="personal-address add"></p>
                    <p class="personal-phone add"></p>
                    <p class="personal-email add"></p>
                </header>
                <main>
                    <h2 class="sub-heading"></h2>
                    <p id="objectives"></p>

                    <div class="personal-info">
                        <h2 class="info-heading"></h2>
                        <p id="info-item1"></p>
                        <p id="info-item2"></p>
                        <p id="info-item3"></p>
                        <p id="info-item4"></p>
                        <p id="info-item5"></p>
                        <p id="info-item6"></p>
                        <p id="info-item7"></p>
                        <p id="info-item8"></p>
                    </div>

                // Institution Attended with dates
                    <div>
                        <h2 class="sch-attended"></h2>
                        <div class="post">
                            <h3 id="tertiary2-head" class="sch-head"></h3>
                            <p id="tert2-sch"></p>

                        </div>
                        <div>
                        <h2 class="sch-attended"></h2>
                        <div>
                            <h3 id="tertiary1-head" class="sch-head"></h3>
                            <p id="tert1-sch"></p>
                        
                        </div>
                        <div>
                            <h2 id="secondary-head" class="head"></h2>
                            <p id="sec-sch"></p>
                            
                        </div>
                        <div>
                            <h2 id="primary-head" class="sch-head"></h2>
                            <p id="pri-sch"></p>
                            
                        </div>
                    </div>

                // Qualification Obtained with dates
                    <div>
                        <h2 id="qualification" class="heading"></h2>
                        <div>
                            <p id="tert2-qual" class="post"></p>
                        </div>
                        <div>
                            <p id="tert1-qual"></p>
                        </div>
                        <div>
                            <p id="sec-qual"></p>
                        </div>
                        <div>
                            <p id="pri-qual"></p>
                        </div>
                    </div>

                // Working Experience with dates
                    <div>
                        <h2 id="experience-title" class="heading"></h2>
                        <div id="experience-1" class="head">
                            <p id="exp-1"></p>
                            <p id="role-1"></p>
                            <p id="exp-date-1"></p>	
                        </div>
                        <div id="experience-2" class="head">
                            <p id="exp-2"></p>
                            <p id="role-2"></p>
                            <p id="exp-date-2"></p>	
                        </div>
                        <div id="experience-3" class="head">
                            <p id="exp-3"></p>
                            <p id="role-3"></p>
                            <p id="exp-date-3"></p>	
                        </div>
                        <div id="experience-4" class="head">
                            <p id="exp-4"></p>
                            <p id="role-4"></p>
                            <p id="exp-date-4"></p>	
                        </div>
                    </div>

                // Skills and Certification
                    <div>
                        <h2 id="skills"></h2>
                        <p id="skill-item"></p>
                    </div>
                    <div>
                        <h2 id="cert"></h2>
                        <p id="cert-item"></p>
                    </div>

                // Hobbies and Language-->
                    <div id="hobbies">
                        <h2 id="hobby-head"></h2>
                        <p id="hobby-sport"></p>
                        <p id="hobby-read"></p>
                        <p id="hobby-swim"></p>
                        <p id="hobby-travel"></p>
                        <p id="hobby-games"></p>
                        <p id="hobby-friend"></p>
                    </div>
                    <div id="language">
                        <h2 id="lang-head"></h2>
                        <p id="lang-yoruba"></p>
                        <p id="lang-hausa"></p>
                        <p id="lang-igbo"></p>
                        <p id="lang-english"></p>
                        <p id="lang-french"></p>
                        <p id="lang-spanish"></p>
                        <p id="lang-german"></p>
                        <p id="lang-portugal"></p>
                    </div>

                    <div id="referees">
                        <h2 id="referee-head"></h2>
                        <div id="referee-1">
                            <p id="referee-1-name" class="referee"></p>
                            <p id="referee-1-add"></p>
                            <p id="referee-1-phone"></p>
                            <p id="referee-1-email"></p>
                        </div>
                        <div id="referee-2">
                            <p id="referee-2-name" class="referee"></p>
                            <p id="referee-2-add"></p>
                            <p id="referee-2-phone"></p>
                            <p id="referee-2-email"></p>
                        </div>
                        <div id="referee-3">
                            <p id="referee-3-name" class="referee"></p>
                            <p id="referee-3-add"></p>
                            <p id="referee-3-phone"></p>
                            <p id="referee-3-email"></p>
                        </div>
                    </div>
                </main>
                <div>
                    <button class="print">Print</button>
                </div>
        </div> 
    `
}