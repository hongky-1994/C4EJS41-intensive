const components = {
    signUp: `
    <section class="sign-up-container">
        <div class="background-container"></div>
        <div class="container">
            <form action="" class="form-sign-up">
                <div class="form-header">
                    <h3>MindX Chat</h3>
                </div>
                <div class="form-content">
                    <div class="name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First name">
                            <div id="firstName-error" class="message-error"></div>
                        </div>
                        <div class="input-wrapper">
                            <input type="text" name="lastName" placeholder="Last name" >
                            <div id="lastName-error" class="message-error"></div>

                        </div>
                    </div>
                    <div class="email-password">
                        <div class="input-wrapper">
                            <input type="email" name="email" placeholder="Email" >
                            <div id="email-error" class="message-error"></div>

                        </div>
                        <div class="input-wrapper">
                            <input type="password" name="password" placeholder="Password" >
                            <div id="password-error" class="message-error"></div>

                        </div>
                        <div class="input-wrapper">
                            <input type="password" name="confirmPassword" placeholder="Confirm password" >
                            <div id="confirmPassword-error" class="message-error"></div>

                        </div>  
                    </div>
                    <div id="sign-up-error" class="message-error"></div>
                    <div id="sign-up-success" class="message-success"></div>
                </div>
                <div class="form-footer">
                        <a id="form-sign-in-link">Already have an account? Login</a>
                        <button type="submit" class="btn btn-register">Register</button>
                </div>
            </form>
        </div>
    </section>`,
    signIn: `
    <section class="sign-in-container">
        <div class="background-container"></div>
        <div class="container">
            <form action="" class="form-sign-in">
                <div class="form-header">
                    <h3>MindX Chat</h3>
                </div>
                <div class="form-content">
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email">
                        <div id="email-error" class="message-error"></div>

                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password">
                        <div id="password-error" class="message-error"></div>

                    </div>
                </div>
                <div class="form-footer">
                        <a id="form-sign-up-link">Not yet have an account? Resgister</a>
                        <button type="submit" class="btn btn-sign-in">Sign In</button>
                </div>
            </form>
        </div>
    </section>`,

}