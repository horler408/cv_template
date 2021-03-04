//Function Definitions
export function education(schDisplay, schAttended, schStart, schEnd) {
    schDisplay.textContent = schAttended.value + ' ' + '(' + schStart.value + ' ' + 'to' + ' ' + schEnd.value + ').';
}


export function eduQualifications(qualification, certificate, course, grade, schStart, schEnd) {
    qualification.textContent =  certificate.value +  ',' + ' '
                                + course.value + ' ' + '('
                                + grade.value + ')' + ' ' + '-' + ' ' 
                                + '(' + schStart.value + ' ' +'to'+ ' ' 
                                + schEnd.value + ')';			
}


export function eduQualification(qualification, certificate, schStart, schEnd) {
    qualification.textContent = certificate.value + ' ' + '('
                                + schStart.value + 
                                ' ' +'to'+ ' ' 
                                + schEnd.value + ')';	
}

export function workExperience(work, workExp, role, position, workDates, workStart, workEnd) {
    work.textContent = workExp.value.toUpperCase();
    role.textContent = position.value;
    if (workEnd.value === '') {
        workDates.textContent = workStart.value + ' ' +'-'+ ' ' + 'till date';
        if (workExp.value === '' || position.value === '' || workStart.value === '') {
            workDates.style.display = 'none';
        }
    }
    else {
        workDates.textContent = workStart.value + ' ' +'to'+ ' ' + workEnd.value;
    }	
}


export function skill_cert(technical, acquired, others, string) {
    if (acquired.value === '' && others.value === '') {
        technical.textContent = string;
}
    else {
        if(others.value !== '') {
            technical.textContent = acquired.value + ' and ' + others.value;
            if (acquired.value === '') {
                technical.textContent = others.value;
            }
        }
        else {
            technical.textContent = acquired.value;
            others.style.display = 'none';	
        }
    }	
}


export function hobby(hobby, display) {
    if(hobby.checked) {
        display.textContent = hobby.value;
    }
}


export function languageSpoken(language, display) {
    if(language.checked) {
        display.textContent = language.value;
    }
}


export function referees(referee, refName, addressRef, refAddress, phoneRef, refPhone, emailRef, refEmail) {
    referee.textContent = refName.value;		
    addressRef.textContent = refAddress.value;
    phoneRef.textContent = refPhone.value;
    emailRef.textContent = refEmail.value;	
}

export function validation(input, errorMsg) {
    let valid = false
    input.addEventListener("blur", () =>{
        if(input.value === ""){
            errorMsg.textContent = "This field is required!"
            valid = false
        }else {
            errorMsg.textContent = ""
            valid = true
        }
        return valid
    })
}