
function authForm(mode) {

    if (mode === 'login') {

        return `
            <form id = "authLogin" class = "auth-form">

                <div class = "auth-left">

                    <h1 class = "welcome"> WELCOME TO SMART BANK </h1>

                    <p class = "secure"> Secure and simple banking </p>
                    <p class = "secure"> at your fingertips. </p>
                    <p class = "secure"> Log in to manage your </p>
                    <p class = "secure"> accounts with ease. </p>

                    <button type = "submit" id = "goToSignup" class = "account-btn">
                        I don't have an account
                    </button>

                </div>

                <div class = "auth-right">

                    <h1 class = "auth-title"> Sign in</h1>

                    <div class = "input-box">
                        <input type = "email" id = "loginEmail" class = "auth-input" placeholder = "Email" />
                        <small id = "mail-error" style = "color: red; display: block;"></small>
                    </div>

                    <div class = "input-box">
                        <input type = "password" id = "loginPassword" class = "auth-input" placeholder = "Password" />
                        <small id="pass-error" style="color: red; display: block;"></small>
                        
                    </div>

                    <button type = "submit" id = "comeIn" class = "come-in"> Enter </button>

                </div>

            </form>
        `;

    } else if (mode === 'signup') {

        return `
            <form id = "authForm" class = "auth-form" >

                <div class = "auth-left">

                    <h1 class = "welcome"> WELCOME TO SMART BANK </h1>

                    <p class = "secure"> Secure and simple banking </p>
                    <p class = "secure"> at your fingertips. </p>
                    <p class = "secure"> Log in to manage your </p>
                    <p class = "secure"> accounts with ease. </p>

                    <button type = "submit" id = "goToLogin" class = "account-btn">
                        I have an account
                    </button>

                </div>

                <div class = "auth-right">

                    <h1 class = "auth-title"> Create Account </h1>

                    <div class = "input-box">
                        <input type = "text" id = "signupUsername" class = "auth-input" placeholder = "Fullname" />
                        <small id="user-error" style="color: red; display: block;"></small>
                    </div>

                    <div class = "input-box">
                        <input type = "email" id = "signupEmail" class = "auth-input" placeholder = "Email" />
                        <small id="mail-error" style="color: red; display: block;"></small>
                    </div>

                    <div class = "input-box">
                        <input type = "password" id = "signupPassword" class = "auth-input" placeholder = "Password" />
                        <small id="pass-error" style="color: red; display: block;"></small>
                    </div>

                    <button type = "submit" id = "comeIn" class = "come-in"> Enter </button>

                </div>

            </form>
        `;
    }
}


const form = document.getElementById('authForm') ;

form.addEventListener('submit' , function (event){

    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    const signupUsername = document.getElementById('signupUsername');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');

    const userError = document.getElementById('user-error');
    const mailError = document.getElementById('mail-error');
    const passError = document.getElementById('pass-error');

    userError.textContent = '' ;
    mailError.textContent = '' ;
    passError.textContent = '' ;

    if(userError === ''){
        userError.textContent = 'The Full name is Empty Please Enter your Full name'
    }
    if(loginEmail === ''){
        mailError.textContent = 'The Email is Empty Please Enter your Email' ;
    }

    if(loginPassword === ''){
        passError.textContent = 'The Password is Empty Please Enter your Password';
    }



})


