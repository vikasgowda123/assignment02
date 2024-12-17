$(document).ready(function(){
    $('#registrationForm').on('submit',function(event){
    event.preventDefault();//Preventformsubmission
    //Clearpreviouserrormessages
    $('#responseMessage').text('');
    //Getformfieldvalues
    varname=$('#name').val();
    varemail=$('#email').val();
    varphone=$('#phone').val();
    varpassword=$('#password').val();
    varconfirmPassword=$('#confirm_password').val();
    //Simplevalidation
    if(name===""||email===""||phone===""||password===""||confirmPassword===""){
    $('#responseMessage').text('Allfieldsarerequired.');
    return;
    }
    if(password!==confirmPassword){
    $('#responseMessage').text('Passwordsdonotmatch.');
    return;
    }
    //SendformdataviaAJAXtoPHP
    $.ajax({
    url: 'submit_form.php',
    type: 'POST',
    data:{
    name:name,
   
    email:email,
    phone:phone,
    password:password
    },
    success:function(response){
    $('#responseMessage').html(response);
    },
    error:function(){
    $('#responseMessage').text('Therewasanerrorsubmittingtheform.');
    }
    });
    });
    });
   