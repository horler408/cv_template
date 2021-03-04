//Function Definitions
export function education($schDisplay, $schAttended, $schStart, $schEnd) {
    $schDisplay.text($schAttended.val() + ' ' 
        + '(' + $schStart.val() + ' ' 
        + 'to' + ' ' + $schEnd.val() + ').');
}


export function tertEduQualification($qualification, $certificate, $course, $grade, $schStart, $schEnd) {
    $qualification.text($certificate.val() +  ',' + ' '
                                + $course.val() + ',' + ' '
                                + $grade.val()  + ' ' + '-' + ' ' 
                                + '(' + $schStart.val() + ' ' +'to'+ ' ' 
                                + $schEnd.val() + ')');			
}


export function eduQualification($qualification, $certificate, $schStart, $schEnd) {
    $qualification.text($certificate.val() + ' ' + '('
                                + $schStart.val() + 
                                ' ' +'to'+ ' ' 
                                + $schEnd.val() + ')');	
}

export function workExperience($work, $workExp, $role, $position, $workDates, $workStart, $workEnd) {
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


export function selectItems($acquired, $technical, $others, $string1, $string2) {
        var $selectValues = $acquired.val() || [];
        $selectValues = $selectValues.join(',');

        if ($acquired.val() === '' && $others.val() === '') {
            $technical.text($string1);
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


export function selectItem($input, $display, $others, $string) {
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


export function referees($referee, $refName, $addressRef, $refAddress, $phoneRef, $refPhone, $emailRef, $refEmail) {
    $referee.text($refName.val());		
    $addressRef.text($refAddress.val());
    $phoneRef.text($refPhone.val());
    $emailRef.text($refEmail.val());	
}					
