const controller = {
    signUp: async function(signUpInfo) {
        let email = signUpInfo.email;
        let password = signUpInfo.password;
        let firstName = signUpInfo.firstName;
        let lastName = signUpInfo.lastName;

        view.setText('#sign-up-success','');
        view.setText('#sign-up-error','');
        //lock submit btn ( tranh truong hop loi)
        view.disable('btn-register');
        try{
            await firebase.auth().createUserWithEmailAndPassword(email,password);
            await firebase.auth().currentUser.updateProfile({
                displayName: firstName + ' ' + lastName
            });
            await firebase.auth().currentUser.sendEmailVerification();
            view.setText('#sign-up-success','An email verification has been send to your email.')
        } catch(error) {
            let message = error.message;
            view.setText('#sign-up-error',message);
        }
        
        // unlock btn submit
        view.enable('btn-register');

    },
    
    signIn: async function(signInInfo){
        
        try {
            //firebase.auth().signInWithEmailAndPassword(email,password)
        } catch(error) {
            console.log(error.message);
            
        }
    }

}