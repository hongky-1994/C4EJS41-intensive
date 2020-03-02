const view = {
    showScreen: function (screenName){
        let app = document.querySelector('#app');
        switch(screenName) {
            case 'signUp':{
                app.innerHTML = components.signUp;
                
                // Link chuyển màn hình
                let link = document.querySelector('#form-sign-in-link');
                link.onclick = ()=>view.showScreen('signIn');
                
                // Submit form
                let form = document.querySelector('.form-sign-up');
                form.onsubmit = function(event){
                    event.preventDefault();
                    // 1. get Data
                    let signUpInfo = {
                        firstName: form.firstName.value.trim(),
                        lastName: form.lastName.value.trim(),
                        email: form.email.value.trim().toLowerCase(),
                        password:form.password.value, 
                        confirmPassword: form.confirmPassword.value 
                    }
                    
                    // 2. validate data
                    let validateResult = [
                        view.validate(signUpInfo.firstName,'#firstName-error','Missing First Name'),
                        view.validate(signUpInfo.lastName,'#lastName-error','Missing Last Name'),
                        view.validate(signUpInfo.email,'#email-error','Missing Email'),
                        view.validate(signUpInfo.password.length >= 6 && signUpInfo.password,'#password-error','Invalid Password'),
                        view.validate(signUpInfo.confirmPassword == signUpInfo.password && signUpInfo.confirmPassword,'#confirmPassword-error','Invalid Confirm Password')
                    ];
                    
                    // 3. submit data (next class)
                    if(view.allPassed(validateResult)) {
                        controller.signUp(signUpInfo);
                    }
                }
            
                
                break;
            }
            case 'signIn': {
                app.innerHTML = components.signIn;

                // Link chuyển màn hình
                let link = document.querySelector('#form-sign-up-link');
                link.onclick = () => view.showScreen('signUp');
                
                // Submit form
                let form = document.querySelector('.form-sign-in');
                form.onsubmit = function(event){
                    event.preventDefault();
                    // 1. get Data
                    let signInInfo = {
                        email: form.email.value.trim().toLowerCase(),
                        password:form.password.value,
                    }
                    
                    // 2. validate data
                    let validateResult = [
                        view.validate(signInInfo.email,'#email-error','Missing Email')
                        view.validate(signInInfo.password.length >= 6 || signInInfo.password,'#password-error','Invalid Password')
                    ];

                    // 3. submit data (next class)
                }
                break;
            }
        }
    },
    setText(query,text){
        document.querySelector(query).innerHTML = text;
    },
    validate(condition, queryErrorTag, messageError){
        if(condition){
            view.setText(queryErrorTag,'');
            return true;
        } else {
            view.setText(queryErrorTag,messageError);
            return false;
        }
    },
    allPassed(validate){
        for (let result of validate) {
            if(!result){
                return false;
            }
        }
        return true;
    },
    disable(query){
        document.querySelector(query).setAttribute('disabled',true);
    },
    enable(query){
        document.querySelector(query).removeAttribute('disabled');
    }
}