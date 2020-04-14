/*
function testPage() {
	var inputName = prompt('Type your name');
	window.onload = inputName;
	//localStorage.setItem(name, inputName.value);

}
testPage();
*/

/*Getting DOM Objects from Forms*/
$(document).ready(() => {
	const $footer = $('footer');
	const $mainHeader = $('.main-header');
	const $displayContainer = $('.display-container');
	const $info = $('.info');
	const $error = $('#error');
	const $addBtn = $('#add');
	const $editBtn = $('.edit');
	const $hiddenPost = $('.post');
	const $workBtn = $('#work-button');
	const $input = $('input');
	const $printBtn = $('#print-button');

	//Names Objects
	const $firstName = $('#first-name');
	const $middleName = $('#middle-name');
	const $lastName = $('#last-name');

	//Button Objects
	const $submitBtn = $('#submit-button');
	const $resetBtn = $('#reset-button');

	//Form Container Objects
	const $form = $('form');

	//Address Objects
	const $address = $('#contact-address');
	const $email = $('#email-address');
	const $phoneNo = $('#phone-number');

	//Career Objects
	const $careerObj = $('#career-objectives');

	//Personal Information
	const $dob = $('#dob');
	const $pob = $('#pob');
	const $sex = $('#gender');
	const $status = $('#status');
	const $country = $('#country');
	const $faith = $('#faith');
	const $origin = $('#state');
	const $local = $('#local');
	const $photo = $('passport');

	//Institution Attended Objects
	const $primarySch = $('#primary');
	const $priCert = $('#primary-cert');
	const $priStart = $('#pri-start-date');
	const $priEnd = $('#pri-end-date');


	const $secondarySch = $('#secondary');
	const $secCert = $('#secondary-cert');
	const $secStart = $('#sec-start-date');
	const $secEnd = $('#sec-end-date');

	const $tertiarySch1 = $('#tertiary1');
	const $tertiaryCert1 = $('#tert1-cert');
	const $course1 = $('#course1');
	const $grade1 = $('#tert1-grade');
	const $tert1Start = $('#t1-start-date');
	const $tert1End = $('#t1-end-date');

	const $tertiarySch2 = $('#tertiary2');
	const $tertiaryCert2 = $('#tert2-cert');
	const $course2 = $('#course2');
	const $grade2 = $('#tert2-grade');
	const $tert2Start = $('#t2-start-date');
	const $tert2End = $('#t2-end-date');

	//Working Experience Objects
	const $workExp1 = $('#work-1');
	const $pos1 = $('#pos-1');
	const $workStart1 = $('#work-start-1');
	const $workEnd1 = $('#work-end-1');

	const $workExp2 = $('#work-2');
	const $pos2 = $('#pos-2');
	const $workStart2 = $('#work-start-2');
	const $workEnd2 = $('#work-end-2');

	const $workExp3 = $('#work-3');
	const $pos3 = $('#pos-3');
	const $workStart3 = $('#work-start-3');
	const $workEnd3 = $('#work-end-3');

	const $workExp4 = $('#work-4');
	const $pos4 = $('#pos-4');
	const $workStart4 = $('work-start-4');
	const $workEnd4 = $('work-end-4');

	//Skills Acquired Objects
	const $skillsAcquired = $('#technical-skills');
	const $skillsCert = $('#skills-certification');
	const $otherSkills = $('#other-skills');
	const $otherCert = $('#other-cert');

	//Hobbies and Languages
	const $hobbies = $('#hobbies');
	const $language = $('#language-skill');
	const $otherHobbies = $('other-hobbies');
	const $otherLanguage = $('other-languages');
	
	//REFERENCE Objects
	const $refName1 = $('#referee-1');
	const $refName2 = $('#referee-2');
	const $refName3 = $('#referee-3');
	const $refAddress1 = $('#referee-address-1');
	const $refAddress2 = $('#referee-address-2');
	const $refAddress3 = $('#referee-address-3');
	const $refPhone1 = $('#referee-phone-1');
	const $refPhone2 = $('#referee-phone-2');
	const $refPhone3 = $('#referee-phone-3');
	const $refEmail1 = $('#referee-email-1');
	const $refEmail2 = $('#referee-email-2');
	const $refEmail3 = $('#referee-email-3');


/*Getting DOM Object from UI*/
	var $title = $('.title');
	var $shadow = $('.shadow');
	var $image = $('image');

	//Address display
	var $personalEmail = $('.personal-email');
	var $personalPhone = $('.personal-phone');
	var $personalAddress = $('.personal-address');

	//Objective Display
	var $objectives = $('#objectives');
	var $subHeading = $('.sub-heading');

	//Personal Info Display
	var $personalInfo = $('.info-heading');
	var $birthDate = $('#info-item1');
	var $birthPlace = $('#info-item2');
	var $gender = $('#info-item3');
	var $maritalStatus = $('#info-item4');
	var $religion = $('#info-item5');
	var $nationalty = $('#info-item6');
	var $stateOfOrigin = $('#info-item7');
	var $localGovt = $('#info-item8');

	//Institutions Display
	var $schAttended = $('.sch-attended');

	var $priHead = $('#primary-head');
	var $priSch = $('#pri-sch');
	//var priDate = document.getElementById('pri-date');

	var $secHead = $('#secondary-head');
	var $secSch = $('#sec-sch');
	//var secDate = document.getElementById('sec-date');

	var $tert1Head = $('#tertiary1-head');
	var $tert1Sch = $('#tert1-sch');
	//var tert1Date = document.getElementById('tert1-date');

	var $tert2Head = $('#tertiary2-head');
	var $tert2Sch = $('#tert2-sch'); 
	//var tert2Date = document.getElementById('tert2-date');

	//Qualification Display
	var $qualificationHead = $('#qualification');

	var $priQualification = $('#pri-qual');

	var $secQualification = $('#sec-qual');

	var $tert1Qualification = $('#tert1-qual');

	var $tert2Qualification = $('#tert2-qual');


	//Working Experience UI Display
	var $expTitle = $('#experience-title');

	var $exp1 = $('#experience-1');
	var $work1 = $('#exp-1');
	var $role1 = $('#role-1');
	var $workDate1 = $('#exp-date-1');

	var $exp2 = $('#experience-2');
	var $work2 = $('#exp-2');
	var $role2 = $('#role-2');
	var $workDate2 = $('#exp-date-2');

	var $exp3 = $('#experience-3');
	var $work3 = $('#exp-3');
	var $role3 = $('#role-3');
	var $workDate3 = $('#exp-date-3');

	var $exp4 = $('#experience-4');
	var $work4 = $('#exp-4');
	var $role4 = $('#role-4');
	var $workDate4 = $('#exp-date-4');

	//skills Acquired
	var $skillTitle = $('#skills');
	var $certTitle = $('#cert');

	var $technicalSkills = $('#skill-item');
	var $technicalCert = $('#cert-item');


	//Hobby and Languages Display
	var $hobbyTitle = $('#hobby-head');
	var $langTitle = $('#lang-head');
	var $hobby = $('#hobby-item');
	var $lang = $('#lang-item');

	
	//Referees DOM Display
	var $refHead = $('#referee-head');

	var $referee1 = $('#referee-1-name');
	var $addressRef1 = $('#referee-1-add');
	var $phoneRef1 = $('#referee-1-phone');
	var $emailRef1 = $('#referee-1-email');

	var $referee2 = $('#referee-2-name');
	var $addressRef2 = $('#referee-2-add');
	var $phoneRef2 = $('referee-2-phone');
	var $emailRef2 = $('referee-2-email');

	var $referee3 = $('#referee-3-name');
	var $addressRef3 = $('#referee-3-add');
	var $phoneRef3 = $('#referee-3-phone');
	var $emailRef3 = $('#referee-3-email');


	
	$input.on('change', (e) => {
		$(e.currentTarget).toggleClass('valid');
	});
	
	$addBtn.on('click', function() {
		$hiddenPost.toggle();
		//$editBtn.hide();
	});
	
	/*$addBtn.on('click', () => {
 		for (var i = 0; i < $addBtn.length; i++) {
			$hiddenPost.show()[i];
 		}
 	});*/

	$submitBtn.on('click', (e) => {
		e.preventDefault();

		if ($firstName.val() === '' || $lastName.val() === '' || $email.val() === '' || $phoneNo.val() === '' || $address.val() === '' || $careerObj.val() === ''
		|| $dob.val() === '' || $pob.val() === '' || $sex.val() === '' || $status.val() === ''|| $country.val() === '' || $faith.val() === '' || $origin.val() === ''
		|| $local.val() === '' || $primarySch.val() === '' || $priCert.val() === '' || $priStart.val() === '' || $priEnd.val() === '' || $secondarySch.val() === ''
		|| $secCert.val() === '' || $secStart.val() === '' || $secEnd.val() === '' || $tertiary1.val() === '' || $tertiaryCert1.val() === '' || $course1.val() === ''
		|| $grade1.val() === '' || $tert1Start.val() === '' || $tert1End.val() === '' || $workExp1.val() === '' || $pos1.val() === '' || $workStart1.val() === ''
		|| $workEnd1.val() === '' || $workExp2.val() === '' || $pos2.val() === '' || $workStart2.val() === '' || $workEnd2.val() === '' 
		|| $skillsAcquired.val() === '' || $skillsCert.val() === '' || $refName1.val() === '' || $refName2.val() === '' || $refName3.val() === '' 
		|| $refAddress1.val() === '' || $refAddress2.val() === '' || $refAddress3.val() === '' || $refPhone1.val() === '' || $refPhone2.val() === '' 
		|| $refPhone3.val() === '' || $refEmail1.val() === '' || $refEmail2.val() === '' || $refEmail3.val() === '') {
			$error.show();
			alert('Fill all necessary fields *');
			window.location.href = "indexQueryCV.html";
		}
		else {
			$footer.hide();
			$mainHeader.fadeOut();
			$form.hide();
			$info.hide();
			$printBtn.show();
			$shadow.show();
			$displayContainer.removeClass('display-container');



			$printBtn.on('click', () => {
				$shadow.removeClass('shadow');
				$printBtn.hide();
				window.print();
			})

			var $fName = $firstName.val();
			var $mName = $middleName.val();
			var $lName = $lastName.val();

			$fName = $fName.toUpperCase();
			$mName = $mName.toUpperCase();
			$lName = $lName.toUpperCase();

			var $value = $lName + ' ' + $mName + ' ' + $fName;
			$title.text($value);


			$personalAddress.text($address.val());
			$personalEmail.text($email.val());
			$personalPhone.text($phoneNo.val());

			$subHeading.text('CAREER OBJECTIVES');
			$subHeading.addClass('displayHead');
			$objectives.text($careerObj.val());

//Personal Information
			$personalInfo.text('PERSONAL INFORMATION');
			$personalInfo.addClass('displayHead');

			$birthDate.text('DATE OF BIRTH: ' + $dob.val());
			$birthPlace.text('PLACE OF BIRTH: ' + $pob.val());
			$gender.text('GENDER: ' + $sex.val());
			$maritalStatus.text('MARITAL STATUS: ' + $status.val());
			$religion.text('RELIGION: ' + $faith.val());
			$nationalty.text('NATIONALTY: ' + $country.val());
			$stateOfOrigin.text('STATE OF ORIGIN: ' + $origin.val());
			$localGovt.text('LOCAL GOVERNMENT: ' + $local.val());

//Institutions Attended
			$schAttended.text('INSTITUTION ATTENDED WITH DATES');
			$schAttended.addClass('displayHead');

			if ($tertiarySch2.val() !== '' && $course2.val() !== '' && $tert2Start.val() !== '' && $tert2End.val() !== '') {
				$hiddenPost.removeClass('post');
				$tert2Head.text('Tertiary Education2');
			 	$tert2Sch.text($tertiarySch2.val() + ' ' + '(' + $tert2Start.val() + ' ' +'to'+ ' ' + $tert2End.val() + ').');
			}
			else {
				$hiddenPost.addClass('post');
			} 			

			$tert1Head.text('Tertiary Education1');
			$tert1Sch.text($tertiarySch1.val() + ' ' + '(' + $tert1Start.val() + ' ' +'to'+ ' ' + $tert1End.val() + ').');  
			
			//Secondary School Display
			$secHead.text('Secondary Education');
			$secSch.text($secondarySch.val() + ' ' + '(' + $secStart.val() + ' ' +'to'+  ' ' + $secEnd.val() + ').'); 
			
			//Primary School Display
			$priHead.text('Primary Education');
			$priSch.text($primarySch.val() + ' ' + '(' + $priStart.val() + ' ' +'to'+ ' ' + $priEnd.val() + ').'); 
		

//Educational Qualification
			$qualificationHead.text('EDUCATIONAL QUALIFICATIONS WITH DATES');
			$qualificationHead.addClass('displayHead');

			//Tertiary Qualification Display
			$tert1Qualification.text($tertiaryCert1.val() +  ',' + ' '
											+ $course1.val() + ' ' + '('
											+ $grade1.val() + ')' + ' ' + '-' + ' ' 
											+ '(' + $tert1Start.val() + ' ' +'to'+ ' ' 
											+ $tert1End.val() + ')');  
			 

			$tert2Qualification.text($tertiaryCert2.val() +  ',' + ' '
											+ $course2.val() + ' ' + '('
											+ $grade2.val() + ')' + ' ' + '-' + ' ' 
											+ '(' + $tert2Start.val() + '' +'to'+ ' ' 
											+ $tert2End.val() + ')');
			
			//Secondary Qualification Display
			$secQualification.text($secCert.val() + ' ' + '('
											+ $secStart.val() + 
											' ' +'to'+ ' ' 
											+ $secEnd.val() + ')');

			//Primary Qualification Display
			$priQualification.text($priCert.val() + ' ' + '('
											+ $priStart.val() + 
											' ' +'to'+ ' ' 
											+ $priEnd.val() + ')');

//Working Experience
			$expTitle.text('WORKING EXPERIENCE WITH DATES');
			$expTitle.addClass('displayHead');

			$work1.text($workExp1.val().toUpperCase());
			$role1.text('Position Held: ' + $pos1.val());
			$workDate1.text('Duration: ' + $workStart1.val() + ' ' +'to'+ ' ' + $workEnd1.val());
			
			$work2.text($workExp2.val().toUpperCase()).css('marginLeft', '-10px');
			$role2.text('Position Held: ' + $pos2.val());
			$workDate2.text('Duration: ' + $workStart2.val() + ' ' +'to'+ ' ' + $workEnd2.val());
	
//Skills and Certification
			$skillTitle.text('TECHNICAL SKILLS ACQUIRED');
			$skillTitle.addClass('displayHead');

			var $skillValues = $skillsAcquired.val() || [];
			$skillValues = $skillValues.join(',');

			if($otherSkills.val() !== '') {
				$technicalSkills.text('Skills Acquired are: ' + $skillValues + ' and ' + $otherSkills.val());
			}
			else {
				$technicalSkills.text('Skills Acquired are: ' + $skillValues);
				$otherSkills.hide();	
			}
			$technicalSkills.addClass('select-values');

			$certTitle.text('PROFESSIONAL CERTIFICATION');
			$certTitle.addClass('displayHead');

			var $certValues = $skillsCert.val() || [];
			$certValues = $certValues.join(',');

			if($otherCert.val() !== '') {
				$technicalCert.text('Certification Obtained are: ' + $certValues + ' and ' + $otherCert.val());
			}
			else {
				$technicalCert.text('Certification Obtained are: ' + $certValues);
				$otherCert.hide();	
			}
			$technicalCert.addClass('select-values');

//Hobbies Checkbox Display
			$hobbyTitle.text('HOBBIES');
			$hobbyTitle.addClass('displayHead');

			var $hobbyValues = $hobbies.val() || [];
			$hobbyValues = $hobbyValues.join(',');

			if($otherHobbies.val() !== '') {
				$hobby.text('My Favorite Habbits are: ' + $hobbyValues + ' and ' + $otherHobbies.val());
			}
			else {
				$hobby.text('My Favorite Habbits are: ' + $hobbyValues);
				$otherHobbies.hide();	
			}
			$hobby.addClass('select-values');

//Language Display
			$langTitle.text('LANGUAGE SPOKEN');
			$langTitle.addClass('displayHead');

			var $langValues = $language.val() || [];
			$langValues = $langValues.join(',');

			if($otherLanguage.val() !== '') {
				$lang.text('My Spoken Languages are: ' + $langValues + ' and ' + $otherLanguage.val());
			}
			else {
				$lang.text('My Spoken Languages are: ' + $hobbyValues);
				$otherLanguage.hide();	
			}
			$lang.addClass('select-values');

	//Referees
			$refHead.text('REFEREES');
			$refHead.addClass('displayHead');

			$referee1.text($refName1.val());		
			$addressRef1.text($refAddress1.val());
			$phoneRef1.text($refPhone1.val());
			$emailRef1.text($refEmail1.val());

			$referee2.text($refName2.val());		
			$addressRef2.text($refAddress2.val());
			$phoneRef2.text($refPhone2.val());
			$emailRef2.text($refEmail2.val());

			$referee3.text($refName3.val());		
			$addressRef3.text($refAddress3.val());
			$phoneRef3.text($refPhone3.val());
			$emailRef3.text($refEmail3.val());
		}	

	});

	
});


populateCountries("country", "state");

