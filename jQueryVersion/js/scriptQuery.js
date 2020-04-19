/*
function testPage() {
	var inputName = prompt('Type your name');
	window.onload = inputName;
	//localStorage.setItem(name, inputName.value);

}
testPage();
*/

alert("All information submitted on this site is solely for the view of the owner only. No part of this data is stored in any form of device or database as no database is used with this website. We therefore assure our user to disppel any fear of data exposure to third parties. Thanks for your understanding.");

/*Getting DOM Objects from Forms*/
$(document).ready(() => {
	const $footer = $('footer');
	const $mainHeader = $('.main-header');
	const $displayContainer = $('.display-container');
	const $info = $('.info');
	const $error = $('#error');
	const $addBtn = $('#add');
	const $addExpBtn = $('#add-exp');
	const $editBtn = $('.edit');
	const $hiddenPost = $('.post');
	const $hiddenExp = $('.exp');
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
	const $otherHobbies = $('#other-hobbies');
	const $otherLanguage = $('#other-languages');
	
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
	});

	$addExpBtn.on('click', function() {
		$hiddenExp.toggle();
	});
	
	
	$submitBtn.on('click', (e) => {
		e.preventDefault();

		if ($firstName.val() === '' ) {
			
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
			education($tert1Sch, $tertiarySch1, $tert1Start, $tert1End);
		
			//Secondary School Display
			$secHead.text('Secondary Education');
			education($secSch, $secondarySch, $secStart, $secEnd); 
		
			//Primary School Display
			$priHead.text('Primary Education');
			education($priSch, $primarySch, $priStart, $priEnd); 
		

//Educational Qualification
			$qualificationHead.text('EDUCATIONAL QUALIFICATIONS WITH DATES');
			$qualificationHead.addClass('displayHead');

			//Tertiary Qualification Display
			tertEduQualification($tert1Qualification, $tertiaryCert1, $course1, $grade1, $tert1Start, $tert1End);
			tertEduQualification($tert2Qualification, $tertiaryCert2, $course2, $grade2, $tert2Start, $tert2End);


			eduQualification($secQualification, $secCert, $secStart, $secEnd);
			eduQualification($priQualification, $priCert, $priStart, $priEnd);


			//Primary Qualification Display
			$priQualification.text($priCert.val() + ' ' + '('
											+ $priStart.val() + 
											' ' +'to'+ ' ' 
											+ $priEnd.val() + ')');

//Working Experience
			$expTitle.text('WORKING EXPERIENCE WITH DATES');
			$expTitle.addClass('displayHead');

			workExperience($work1, $workExp1, $role1, $pos1, $workDate1, $workStart1, $workEnd1);			
			workExperience($work2, $workExp2, $role2, $pos2, $workDate2, $workStart2, $workEnd2);
			workExperience($work3, $workExp3, $role3, $pos3, $workDate3, $workStart3, $workEnd3);
			workExperience($work4, $workExp4, $role4, $pos4, $workDate4, $workStart4, $workEnd4);

	
//Skills and Certification
			$skillTitle.text('TECHNICAL SKILLS ACQUIRED');
			$skillTitle.addClass('displayHead');

			selectItem($skillsAcquired, $technicalSkills, $otherSkills, "Skills Acquired are:", "No technical skill acquired");


			$certTitle.text('PROFESSIONAL CERTIFICATION');
			$certTitle.addClass('displayHead');

			selectItem($skillsCert, $technicalCert, $otherCert, "Certification Obtained are:", "No Professional certificate obtained");

			
//Hobbies Checkbox Display
			$hobbyTitle.text('HOBBIES');
			$hobbyTitle.addClass('displayHead');

			selectItem($hobbies, $hobby, $otherHobbies, "My Favorite Habbits are:");


//Language Display
			$langTitle.text('LANGUAGE SPOKEN');
			$langTitle.addClass('displayHead');

			selectItem($language, $lang, $otherLanguage, "My Spoken Languages are:");


//Referees
			$refHead.text('REFEREES');
			$refHead.addClass('displayHead');

			referees($referee1, $refName1, $addressRef1, $refAddress1, $phoneRef1, $refPhone1, $emailRef1, $refEmail1);
			referees($referee2, $refName2, $addressRef2, $refAddress2, $phoneRef2, $refPhone2, $emailRef2, $refEmail2);
			referees($referee3, $refName3, $addressRef3, $refAddress3, $phoneRef3, $refPhone3, $emailRef3, $refEmail3);	

		}	

	});

	
});


populateCountries("country", "state");

/*|| $lastName.val() === '' || $email.val() === '' || $phoneNo.val() === '' || $address.val() === '' || $careerObj.val() === ''
		|| $dob.val() === '' || $pob.val() === '' || $sex.val() === '' || $status.val() === ''|| $country.val() === '' || $faith.val() === '' || $origin.val() === ''
		|| $local.val() === '' || $primarySch.val() === '' || $priCert.val() === '' || $priStart.val() === '' || $priEnd.val() === '' || $secondarySch.val() === ''
		|| $secCert.val() === '' || $secStart.val() === '' || $secEnd.val() === '' || $tertiary1.val() === '' || $tertiaryCert1.val() === '' || $course1.val() === ''
		|| $grade1.val() === '' || $tert1Start.val() === '' || $tert1End.val() === '' || $workExp1.val() === '' || $pos1.val() === '' || $workStart1.val() === ''
		|| $workExp2.val() === '' || $pos2.val() === '' || $workStart2.val() === '' || $refName1.val() === '' || $refName2.val() === '' 
		|| $refName3.val() === '' || $refAddress1.val() === '' || $refAddress2.val() === '' || $refAddress3.val() === '' || $refPhone1.val() === '' 
		|| $refPhone2.val() === '' || $refPhone3.val() === '' || $refEmail1.val() === '' || $refEmail2.val() === '' || $refEmail3.val() === ''*/


//Function Definitions
function education($schDisplay, $schAttended, $schStart, $schEnd) {
			$schDisplay.text($schAttended.val() + ' ' 
				+ '(' + $schStart.val() + ' ' 
				+ 'to' + ' ' + $schEnd.val() + ').');
		}


function tertEduQualification($qualification, $certificate, $course, $grade, $schStart, $schEnd) {
			$qualification.text($certificate.val() +  ',' + ' '
										+ $course.val() + ',' + ' '
										+ $grade.val()  + ' ' + '-' + ' ' 
										+ '(' + $schStart.val() + ' ' +'to'+ ' ' 
										+ $schEnd.val() + ')');			
		}


function eduQualification($qualification, $certificate, $schStart, $schEnd) {
			$qualification.text($certificate.val() + ' ' + '('
										+ $schStart.val() + 
										' ' +'to'+ ' ' 
										+ $schEnd.val() + ')');	
		}

function workExperience($work, $workExp, $role, $position, $workDates, $workStart, $workEnd) {
			$work.text($workExp.val().toUpperCase()).css('fontWeight', 'bolder');
			$role.text($position.val());
			if ($workEnd.val() === '') {
				$workDates.text($workStart.val() + ' ' +'-'+ ' ' + 'till date');
				if ($workExp.val() === '' || $position.val() === '' || $workStart.val() === '') {
					$workDates.css('display', 'none');
				}
			}
			else {

				$workDates.text($workStart.val() + ' ' +'to'+ ' ' + $workEnd.val());
			}	
		}


function selectItem($acquired, $technical, $others, $string1, $string2) {
				var $selectValues = $acquired.val() || [];
				$selectValues = $selectValues.join(',');

				if ($acquired.val() === '' && $others.val() === '') {
					$technical.text(string1);
				}
				else {
					if($others.val() !== '') {
						$technical.text($string2 + ' ' + $selectValues + ' and ' + $others.val());
						if ($acquired.val() === '') {
							$technical.text($others.val());
						}
					}
					else {
						$technical.text($string2 + ' ' + $selectValues);
						$others.hide();	
					}	
				}
			
				$technical.addClass('select-values');				
			}


function selectItem($input, $display, $others, $string) {
				var $selectValues = $input.val() || [];
				$selectValues = $selectValues.join(',');

				if($others.val() !== '') {
					$display.text($string + ' ' + $selectValues + ' and ' + $others.val());
				}
				else {
					$display.text($string + ' ' + $selectValues);
					$others.hide();	
				}
				$display.addClass('select-values');
			}


function referees($referee, $refName, $addressRef, $refAddress, $phoneRef, $refPhone, $emailRef, $refEmail) {
			$referee.text($refName.val());		
			$addressRef.text($refAddress.val());
			$phoneRef.text($refPhone.val());
			$emailRef.text($refEmail.val());	
		}					
