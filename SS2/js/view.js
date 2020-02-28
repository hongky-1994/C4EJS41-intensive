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
                        firstName: form.firstName.value,
                        lastName: form.lastName.value,
                        email: form.email.value,
                        password:form.password.value, 
                        confirmPassword: form.confirmPassword.value 
                    }
                    console.log(signUpInfo);
                    
                    // 2. validate data
                    view.validate(signUpInfo.firstName,'#firstName-error','Missing First Name')
                    view.validate(signUpInfo.lastName,'#lastName-error','Missing Last Name')
                    view.validate(signUpInfo.email,'#email-error','Missing Email')
                    view.validate(signUpInfo.password.length >= 6 ,'#password-error','Password length less than 6')
                    view.validate(signUpInfo.confirmPassword == signUpInfo.password,'#confirmPassword-error','Mismatch Password')

                    // 3. submit data (next class)
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
                        email: form.email.value,
                        password:form.password.value, 
                    }
                    console.log(signInInfo);
                    
                    // 2. validate data
                    view.validate(signInInfo.email,'#email-error','Missing Email')
                    view.validate(signInInfo.password.length >= 6 ,'#password-error','Password length less than 6')

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
        } else {
            view.setText(queryErrorTag,messageError);
        }
    }
}