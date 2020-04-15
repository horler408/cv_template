/*
function testPage() {
	window.onload = prompt('Type your name');
}

//testPage();
*/
alert("All information submitted on this site is solely for the view of the owner only. No part of this data is stored in any form of device or database as no database is used with this website. We therefore assure our user to disppel any fear of data exposure to third parties. Thanks for your understanding.");

/*Getting DOM Objects from Forms*/
const footer = document.querySelector('footer');
const mainHeader = document.querySelector('.main-header');
const displayContainer = document.querySelector('.display-container');
const error = document.getElementById('error-message');
const addBtn = document.getElementById('add');
const editBtn = document.querySelector('.edit');
const hiddenPost = document.querySelector('.post');
const work = document.getElementById('work');
const workBtn = document.getElementById('work-button');
const input = document.querySelectorAll('input');
const printBtn = document.querySelector('.print');
const timeStamp = document.getElementById('time-stamp');

//Names Objects
const firstName = document.getElementById('first-name');
const middleName = document.getElementById('middle-name');
const lastName = document.getElementById('last-name');

//Button Objects
const submitBtn = document.getElementById('submit-button');
const resetBtn = document.getElementById('reset-button');

//Form Container Objects
const form = document.querySelector('form');

//Address Objects
const address = document.getElementById('contact-address');
const email = document.getElementById('email-address');
const phoneNo = document.getElementById('phone-number');

//Career Objects
const careerObj = document.getElementById('career-objectives');

//Personal Information
const dob = document.getElementById('dob');
const pob = document.getElementById('pob');
const sex = document.getElementById('gender');
const status = document.getElementById('status');
const country = document.getElementById('country');
const faith = document.getElementById('faith');
const origin = document.getElementById('state');
const local = document.getElementById('local');
const passport = document.getElementById('passport');

//Institution Attended Objects
const primarySch = document.getElementById('primary');
const priCert = document.getElementById('primary-cert');
const priStart = document.getElementById('pri-start-date');
const priEnd = document.getElementById('pri-end-date');


const secondarySch = document.getElementById('secondary');
const secCert = document.getElementById('secondary-cert');
const secStart = document.getElementById('sec-start-date');
const secEnd = document.getElementById('sec-end-date');

const tertiarySch1 = document.getElementById('tertiary1');
const tertiaryCert1 = document.getElementById('tert1-cert');
const course1 = document.getElementById('course1');
const grade1 = document.getElementById('tert1-grade');
const tert1Start = document.getElementById('t1-start-date');
const tert1End = document.getElementById('t1-end-date');

const tertiarySch2 = document.getElementById('tertiary2');
const tertiaryCert2 = document.getElementById('tert2-cert');
const course2 = document.getElementById('course2');
const grade2 = document.getElementById('tert2-grade');
const tert2Start = document.getElementById('t2-start-date');
const tert2End = document.getElementById('t2-end-date');

//Working Experience Objects
const workExp1 = document.getElementById('work-1');
const pos1 = document.getElementById('pos-1');
const workStart1 = document.getElementById('work-start-1');
const workEnd1 = document.getElementById('work-end-1');

const workExp2 = document.getElementById('work-2');
const pos2 = document.getElementById('pos-2');
const workStart2 = document.getElementById('work-start-2');
const workEnd2 = document.getElementById('work-end-2');

const workExp3 = document.getElementById('work-3');
const pos3 = document.getElementById('pos-3');
const workStart3 = document.getElementById('work-start-3');
const workEnd3 = document.getElementById('work-end-3');

const workExp4 = document.getElementById('work-4');
const pos4 = document.getElementById('pos-4');
const workStart4 = document.getElementById('work-start-4');
const workEnd4 = document.getElementById('work-end-4');

//Skills Acquired Objects
const skillsAcquired = document.getElementById('technical-skills');
const skillsCert = document.getElementById('skills-certification');
const otherSkills = document.getElementById('other-skills');
const otherCert = document.getElementById('other-cert');

//Hobbies
const hobbySport = document.getElementById('sports');
const hobbyReading = document.getElementById('reading');
const hobbySwimming = document.getElementById('swimming');
const hobbyGames = document.getElementById('games');
const hobbyTraveling = document.getElementById('traveling');
const hobbyFriends = document.getElementById('meeting');

//Language
const yoruba = document.getElementById('yoruba');
const hausa = document.getElementById('hausa');
const igbo = document.getElementById('igbo');
const english = document.getElementById('english');
const french = document.getElementById('french');
const spanish = document.getElementById('spanish');
const german = document.getElementById('german');
const portuguese = document.getElementById('portuguese');

//REFERENCE Objects
const refName1 = document.getElementById('referee-1');
const refName2 = document.getElementById('referee-2');
const refName3 = document.getElementById('referee-3');
const refAddress1 = document.getElementById('referee-address-1');
const refAddress2 = document.getElementById('referee-address-2');
const refAddress3 = document.getElementById('referee-address-3');
const refPhone1 = document.getElementById('referee-phone-1');
const refPhone2 = document.getElementById('referee-phone-2');
const refPhone3 = document.getElementById('referee-phone-3');
const refEmail1 = document.getElementById('referee-email-1');
const refEmail2 = document.getElementById('referee-email-2');
const refEmail3 = document.getElementById('referee-email-3');


/*Getting DOM Object from UI*/
var title = document.querySelector('.title');
var shadow = document.querySelector('.shadow');
var image = document.getElementById('image');

//Address display
var personalEmail = document.querySelector('.personal-email');
var personalPhone = document.querySelector('.personal-phone');
var personalAddress = document.querySelector('.personal-address');

//Objective Display
var objectives = document.querySelector('#objectives');
var subHeading = document.querySelector('.sub-heading');

//Personal Info Display
var personalInfo = document.querySelector('.info-heading');
var birthDate = document.querySelector('#info-item1');
var birthPlace = document.querySelector('#info-item2');
var gender = document.querySelector('#info-item3');
var maritalStatus = document.querySelector('#info-item4');
var religion = document.querySelector('#info-item5');
var nationalty = document.querySelector('#info-item6');
var stateOfOrigin = document.querySelector('#info-item7');
var localGovt = document.querySelector('#info-item8');

//Institutions Display
var schAttended = document.querySelector('.sch-attended');

var priHead = document.getElementById('primary-head');
var priSch = document.getElementById('pri-sch');
//var priDate = document.getElementById('pri-date');

var secHead = document.getElementById('secondary-head');
var secSch = document.getElementById('sec-sch');
//var secDate = document.getElementById('sec-date');

var tert1Head = document.getElementById('tertiary1-head');
var tert1Sch = document.getElementById('tert1-sch');
//var tert1Date = document.getElementById('tert1-date');

var tert2Head = document.getElementById('tertiary2-head');
var tert2Sch = document.getElementById('tert2-sch'); 
//var tert2Date = document.getElementById('tert2-date');

//Qualification Display
var qualificationHead = document.getElementById('qualification');

var priQualification = document.getElementById('pri-qual');

var secQualification = document.getElementById('sec-qual');

var tert1Qualification = document.getElementById('tert1-qual');

var tert2Qualification = document.getElementById('tert2-qual');


//Working Experience UI Display
var expTitle = document.getElementById('experience-title');

var exp1 = document.getElementById('experience-1');
var work1 = document.getElementById('exp-1');
var role1 = document.getElementById('role-1');
var workDate1 = document.getElementById('exp-date-1');

var exp2 = document.getElementById('experience-2');
var work2 = document.getElementById('exp-2');
var role2 = document.getElementById('role-2');
var workDate2 = document.getElementById('exp-date-2');

var exp3 = document.getElementById('experience-3');
var work3 = document.getElementById('exp-3');
var role3 = document.getElementById('role-3');
var workDate3 = document.getElementById('exp-date-3');

var exp4 = document.getElementById('experience-4');
var work4 = document.getElementById('exp-4');
var role4 = document.getElementById('role-4');
var workDate4 = document.getElementById('exp-date-4');

//skills Acquired
var skillTitle = document.getElementById('skills');
var certTitle = document.getElementById('cert');

var technicalSkills = document.getElementById('skill-item');
var technicalCert = document.getElementById('cert-item');

//Hobby and Languages
var hobbies = document.getElementById('hobbies');
var language = document.getElementById('language');

var hobbyTitle = document.getElementById('hobby-head');
var langTitle = document.getElementById('lang-head');

var sport = document.getElementById('hobby-sport');
var reading = document.getElementById('hobby-read');
var swimming = document.getElementById('hobby-swim');
var traveling = document.getElementById('hobby-travel');
var games = document.getElementById('hobby-games');
var friends  = document.getElementById('hobby-friend');

var langYoruba = document.getElementById('lang-yoruba');
var langHausa = document.getElementById('lang-hausa');
var langIgbo = document.getElementById('lang-igbo');
var langEnglish = document.getElementById('lang-english');
var langFrench = document.getElementById('lang-french');
var langSpanish = document.getElementById('lang-spanish');
var langGerman = document.getElementById('lang-german');
var langPortugal = document.getElementById('lang-portugal');

//Referees DOM Display
var refHead = document.getElementById('referee-head');

var referee1 = document.getElementById('referee-1-name');
var addressRef1 = document.getElementById('referee-1-add');
var phoneRef1 = document.getElementById('referee-1-phone');
var emailRef1 = document.getElementById('referee-1-email');

var referee2 = document.getElementById('referee-2-name');
var addressRef2 = document.getElementById('referee-2-add');
var phoneRef2 = document.getElementById('referee-2-phone');
var emailRef2 = document.getElementById('referee-2-email');

var referee3 = document.getElementById('referee-3-name');
var addressRef3 = document.getElementById('referee-3-add');
var phoneRef3 = document.getElementById('referee-3-phone');
var emailRef3 = document.getElementById('referee-3-email');

//Add Work Experience Event Listener
// workBtn.addEventListener('click', () => {
// 	for (var i = 0; i < click.length; i++) {
		
// 	}
// })




//Add Button Event Listener
addBtn.addEventListener('click', function() {
	hiddenPost.style.display = 'block';
	editBtn.style.display = 'none';
})

//Add Event Listener
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	//alert('Are you sure?');
	if(firstName.value === '' || lastName.value === '' || email.value === '' || phoneNo.value === '' || address.value === '' || careerObj.value === ''
		|| dob.value === '' || pob.value === '' || sex.value === '' || status.value === ''|| country.value === '' || faith.value === '' || origin.value === ''
		|| local.value === '' || primarySch.value === '' || priCert.value === '' || priStart.value === '' || priEnd.value === '' || secondarySch.value === ''
		|| secCert.value === '' || secStart.value === '' || secEnd.value === '' ||tertiary1.value === '' || tertiaryCert1.value === '' || course1.value === ''
		|| grade1.value === '' || tert1Start.value === '' || tert1End.value === '' || workExp1.value === '' || pos1.value === '' || workStart1.value === ''
		|| workEnd1.value === '' || workExp2.value === '' || pos2.value === '' || workStart2.value === '' || workEnd2.value === '' 
		|| skillsAcquired.value === '' || skillsCert.value === '' || refName1.value === '' || refName2.value === '' || refName3.value === '' 
		|| refAddress1.value === '' || refAddress2.value === '' || refAddress3.value === '' || refPhone1.value === '' || refPhone2.value === '' 
		|| refPhone3.value === '' || refEmail1.value === '' || refEmail2.value === '' || refEmail3.value === '') {

		alert('Fill all necessary fields *');
		window.location.href = "indexCV.html";
	}
	else {
		error.style.display = 'none';
		footer.style.display = 'none';
		timeStamp.style.display = 'none';
		mainHeader.style.display = 'none';
 		form.style.display = 'none';
 		shadow.style.display = 'block';
 		displayContainer.classList.remove('display-container');
		printBtn.style.display = 'block';
		
		printBtn.addEventListener('click', () => {
			shadow.classList.remove('shadow');
			timeStamp.style.display = 'none';
			printBtn.style.display = 'none';
			window.print();
		});

		var fName = firstName.value;
		var mName = middleName.value;
		var lName = lastName.value;

		

		fName = fName.toUpperCase();
		mName = mName.toUpperCase();
		lName = lName.toUpperCase();

		title.textContent = lName + ' ' + fName + ' ' + mName;
		personalPhone.textContent = "Phone: " + phoneNo.value;
		personalEmail.textContent = "Email: " + email.value;
		personalAddress.textContent = address.value;
		image.textContent = passport.value;

//Career Objective Display
		subHeading.textContent = 'CAREER OBJECTIVES';
		subHeading.classList.add('displayHead');
		objectives.textContent = careerObj.value;		
		
//Personal Info Heading
		personalInfo.textContent = 'PERSONAL INFORMATION';
		personalInfo.classList.add('displayHead');

//Personal Info Display
		birthDate.textContent = 'Date of birth: ' + dob.value.toUpperCase();
		birthPlace.textContent = 'Place of birth: ' + pob.value.toUpperCase();
		gender.textContent = 'Gender: ' + sex.value.toUpperCase();
		maritalStatus.textContent = 'Marital status: ' + status.value.toUpperCase();
		religion.textContent = 'Religion: ' + faith.value.toUpperCase();
		nationalty.textContent = 'Nationalty: ' + country.value.toUpperCase();
		stateOfOrigin.textContent = 'State of origin: ' + origin.value.toUpperCase();
		localGovt.textContent = 'Local government: ' + local.value.toUpperCase();
		
		//School Attended with dates
		schAttended.textContent = 'INSTITUTION ATTENDED WITH DATES';
		schAttended.classList.add('displayHead');

		//Tertiary school Display
		if (tertiarySch2.value !== '' && course2.value !== '' && tert2Start.value !== '' && tert2End.value !== '') {
			hiddenPost.classList.remove('post');
			tert2Head.textContent = 'Tertiary Education2';
		 	tert2Sch.textContent = tertiarySch2.value + ' ' + '(' + tert2Start.value + ' ' +'to'+ ' ' + tert2End.value + ').';
		}
		else {
			hiddenPost.classList.add('post');
		} 
		  
		
		tert1Head.textContent = 'Tertiary Education1';
		tert1Sch.textContent = tertiarySch1.value + ' ' + '(' + tert1Start.value + ' ' +'to'+ ' ' + tert1End.value + ').';  
		
		//Secondary School Display
		secHead.textContent = 'Secondary Education';
		secSch.textContent = secondarySch.value + ' ' + '(' + secStart.value + ' ' +'to'+  ' ' + secEnd.value + ').'; 
		
		//Primary School Display
		priHead.textContent = 'Primary Education';
		priSch.textContent = primarySch.value + ' ' + '(' + priStart.value + ' ' +'to'+ ' ' + priEnd.value + ').'; 
	

		//Educational Qualification
		qualificationHead.textContent = 'EDUCATIONAL QUALIFICATIONS WITH DATES';
		qualificationHead.classList.add('displayHead');

		//Tertiary Qualification Display
		tert1Qualification.textContent =  tertiaryCert1.value +  ',' + ' '
										+ course1.value + ' ' + '('
										+ grade1.value + ')' + ' ' + '-' + ' ' 
										+ '(' + tert1Start.value + ' ' +'to'+ ' ' 
										+ tert1End.value + ')';
		 

		 tert2Qualification.textContent =  tertiaryCert2.value +  ',' + ' '
										+ course2.value + ' ' + '('
										+ grade2.value + ')' + ' ' + '-' + ' ' 
										+ '(' + tert2Start.value + '' +'to'+ ' ' 
										+ tert2End.value + ')';
		
		//Secondary Qualification Display
		secQualification.textContent = secCert.value + ' ' + '('
										+ secStart.value + 
										' ' +'to'+ ' ' 
										+ secEnd.value + ')';

		//Primary Qualification Display
		priQualification.textContent = priCert.value + ' ' + '('
										+ priStart.value + 
										' ' +'to'+ ' ' 
										+ priEnd.value + ')';
	
//Working Experience
		expTitle.textContent = 'WORKING EXPERIENCE WITH DATES';
		expTitle.classList.add('displayHead');

		work1.textContent = workExp1.value.toUpperCase();
		role1.textContent = pos1.value;
		workDate1.textContent = workStart1.value + ' ' +'to'+ ' ' + workEnd1.value;
		
		work2.textContent = workExp2.value.toUpperCase();
		role2.textContent = pos2.value;
		workDate2.textContent = workStart2.value + ' ' +'to'+ ' ' + workEnd2.value;

	
//Skills and Certification
		skillTitle.textContent = 'TECHNICAL SKILLS ACQUIRED';
		skillTitle.classList.add('displayHead');

		if(otherSkills.value !== '') {
			technicalSkills.textContent = skillsAcquired.value + ' and ' + otherSkills.value;
		}
		else {
			technicalSkills.textContent = skillsAcquired.value;
			otherSkills.style.display = 'none';	
		}


		certTitle.textContent = 'PROFESSIONAL CERTIFICATION';
		certTitle.classList.add('displayHead');

		if(otherCert.value !== '') {
			technicalCert.textContent = skillsCert.value + ' and ' + otherCert.value;
		}
		 else {
		 	technicalCert.textContent = skillsCert.value;
		 	otherSkills.style.display = 'none';	
		 }

//Hobbies CheckBox
		hobbyTitle.textContent = 'HOBBIES';
		hobbyTitle.classList.add('displayHead');

		if(hobbySport.checked) {
			sport.textContent = hobbySport.value;
		}

		if(hobbyReading.checked) {
			reading.textContent = hobbyReading.value;
		}

		if(hobbySwimming.checked) {
			swimming.textContent = hobbySwimming.value;
		}

		if(hobbyGames.checked) {
			games.textContent = hobbyGames.value;
		}

		if(hobbyTraveling.checked) {
			traveling.textContent = hobbyTraveling.value;
		}

		if(hobbyFriends.checked) {
			friends.textContent = hobbyFriends.value;
		}

		// else {
		// 	hobbies.style.display = 'none';
		// }

//Language Spoken
		langTitle.textContent = 'LANGUAGE SPOKEN';	
		langTitle.classList.add('displayHead');

		if(yoruba.checked) {
			langYoruba.textContent = yoruba.value;
		}

		if(hausa.checked) {
			langHausa.textContent = hausa.value;
		}

		if(igbo.checked) {
			langIgbo.textContent = igbo.value;
		}

		if(english.checked) {
			langEnglish.textContent = english.value;
		}

		if(french.checked) {
			langFrench.textContent = french.value;
		}

		if(german.checked) {
			langGerman.textContent = german.value;
		}

		if(spanish.checked) {
			langSpanish.textContent = spanish.value;
		}

		if(portuguese.checked) {
			langPortugal.textContent = portuguese.value;
		}

		// else {
		// 	language.style.display = 'none';
		// }

//Referees Display
		refHead.textContent = 'REFEREES';
		refHead.classList.add('displayHead');

		referee1.textContent = refName1.value;		
		addressRef1.textContent = refAddress1.value;
		phoneRef1.textContent = refPhone1.value;
		emailRef1.textContent = refEmail1.value;

		referee2.textContent = refName2.value;		
		addressRef2.textContent = refAddress2.value;
		phoneRef2.textContent = refPhone2.value;
		emailRef2.textContent = refEmail2.value;

		referee3.textContent = refName3.value;		
		addressRef3.textContent = refAddress3.value;
		phoneRef3.textContent = refPhone3.value;
		emailRef3.textContent = refEmail3.value;

	//window.location.href = "indexCV.html";
	//window.location.replace("indexCV.html");
}
		form.reset();
});


//Countries and State Library
populateCountries("country", "state");


