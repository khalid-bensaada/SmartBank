
function authForm(mode) {

    if (mode === 'login') {

        return `
            <form id="authLogin" class="auth-form">
 
                <div class="auth-left">
                    <h1 class="welcome">WELCOME TO SMART BANK</h1>
                    <p class="secure">Secure and simple banking</p>
                    <p class="secure">at your fingertips.</p>
                    <p class="secure">Log in to manage your</p>
                    <p class="secure">accounts with ease.</p>
 
                    <button type="button" id="goToSignup" class="account-btn">
                        I don't have an account
                    </button>
                </div>
 
                <div class="auth-right">
                    <h1 class="auth-title">Sign in</h1>
 
                    <div class="input-box">
                        <input type="email" id="loginEmail" class="auth-input" placeholder="Email" />
                        <small id="login-mail-error" style="color: red; display: block;"></small>
                    </div>
 
                    <div class="input-box">
                        <input type="password" id="loginPassword" class="auth-input" placeholder="Password" />
                        <small id="login-pass-error" style="color: red; display: block;"></small>
                    </div>
 
                    <button type="submit" id="comeIn" class="come-in">Enter</button>
                </div>
 
            </form>
        `;
    }
    else if (mode === 'signup') {

        return `
            <form id="authForm" class="auth-form">
 
                <div class="auth-left">
                    <h1 class="welcome">WELCOME TO SMART BANK</h1>
                    <p class="secure">Secure and simple banking</p>
                    <p class="secure">at your fingertips.</p>
                    <p class="secure">Log in to manage your</p>
                    <p class="secure">accounts with ease.</p>
 
                    <button type="button" id="goToLogin" class="account-btn">
                        I have an account
                    </button>
                </div>
 
                <div class="auth-right">
                    <h1 class="auth-title">Create Account</h1>
 
                    <div class="input-box">
                        <input type="text" id="signupUsername" class="auth-input" placeholder="Fullname" />
                        <small id="signup-user-error" style="color: red; display: block;"></small>
                    </div>
 
                    <div class="input-box">
                        <input type="email" id="signupEmail" class="auth-input" placeholder="Email" />
                        <small id="signup-mail-error" style="color: red; display: block;"></small>
                    </div>
 
                    <div class="input-box">
                        <input type="password" id="signupPassword" class="auth-input" placeholder="Password" />
                        <small id="signup-pass-error" style="color: red; display: block;"></small>
                    </div>
 
                    <button type="submit" id="comeIn" class="come-in">Enter</button>
                </div>
 
            </form>
        `;
    }
}

function authEvent(mode){

    if(mode === 'login'){
        loginEvent();
    }
    else if(mode === 'signup'){
        signEvent();
    }
}

function loginEvent(){

    const form = document.getElementById('authLogin');
    const goToSignup = document.getElementById('goToSignup');

    goToSignup.addEventListener('click',function(){
        document.getElementById('app').innerHTML = authForm('signup');
        authEvent('signup');
    })

    form.addEventListener('submit', function (event){

        event.preventDefault();

        const loginEmail = document.getElementById('loginEmail');
        const loginPassword = document.getElementById('loginPassword');

        const mailError = document.getElementById('login-mail-error');
        const passError = document.getElementById('login-pass-error');

        mailError.textContent = '';
        passError.textContent = '';

        const emailValue = loginEmail.value.trim();
        const passwordValue = loginPassword.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        let hasError = false;

        if (emailValue === '') {
            mailError.textContent = 'Please enter your email';
            hasError = true;
        } else if (!emailRegex.test(emailValue)) {
            mailError.textContent = 'Please enter a valid email (name@domain.com)';
            hasError = true;
        }


    })
}

const form = document.getElementById('authForm') ;

form.addEventListener('submit' , function (event) {

    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    const signupUsername = document.getElementById('signupUsername');
    const signupEmail = document.getElementById('signupEmail');
    const emailValue = signupEmail.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const signupPassword = document.getElementById('signupPassword');

    const userError = document.getElementById('user-error');
    const mailError = document.getElementById('mail-error');
    const passError = document.getElementById('pass-error');

    userError.textContent = '';
    mailError.textContent = '';
    passError.textContent = '';

    if (!emailRegex.test(emailValue)) {
        mailError.textContent = 'Please Enter The correct Structure of Email like (name@domain.com)';
        return;
    }

    if (userError === '') {
        userError.textContent = 'The Full name is Empty Please Enter your Full name'
    }
    if (loginEmail === '') {
        mailError.textContent = 'The Email is Empty Please Enter your Email';
    }

    if (loginPassword === '') {
        passError.textContent = 'The Password is Empty Please Enter your Password';
    }

})





