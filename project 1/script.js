function onformsubmit(){
  let name = document.forms['registrationform']['name'].value;
  let password = document.forms['registrationform']['password'].value;
  let toc = document.forms['registrationform']['toc'].checked;

  if(password == ''){
     alert('password cannot be blank');
  }
  if(password.length < 8){
     alert('password cannot be less than 8 characters');
     return false;
  }
  if(!toc){
     alert('You must agree to the terms and conditions');
     return false;
  }
  return true;

}
