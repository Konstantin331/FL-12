let ask = prompt('Enter your e-mail: ');
let emailLength = 5;
let passLength = 6;
if (ask === null || ask === ''){
    alert('Canceled');
} else if (ask.length < emailLength){
    alert('I don’t know any emails having name length less than 5 symbols');
} else if(ask === 'user@gmail.com' || ask === 'admin@gmail.com'){
   let pass = prompt('Enter password: ');
   if (pass === null || pass === ''){
        alert('Canceled');
    } else if (ask === 'user@gmail.com' && pass === 'UserPass' || ask === 'admin@gmail.com' && pass === 'AdminPass'){
        let changePass = confirm('Do you want to change your password?');
        if (changePass === false){
            alert('You have failed the change.');
        } else{
            let oldP = prompt('Enter the old password: ');
            if (ask === 'user@gmail.com' && oldP === 'UserPass' || ask === 'admin@gmail.com' && oldP === 'AdminPass'){
                let newPass = prompt('Enter new password: ');
                if(newPass === null || newPass === ''){
                    alert('Canceled');
                } else if (newPass.length < passLength){
                    alert('It’s too short password. Sorry.');
                } else {
                    let validPass = prompt('Enter new password again: ');
                    if (validPass !== newPass){
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }        
                }
            } else {
                alert('Wrong password');
            }
        }      
    } else {
        alert('Wrong password');
    }
} else{
    alert('I don’t know you');
}