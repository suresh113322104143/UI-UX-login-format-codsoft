
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}


function showLogin() {
    alert('Login functionality is not implemented in this demo.');
}


function signUpWith(method) {
    alert(`Sign up with ${method} is not implemented in this demo.`);
}


function verifyOtp() {
    showScreen('profileSetupScreen');
}


function agreeAndContinue() {
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox.checked) {
        showScreen('onboardingScreen');
    } else {
        alert('You must agree to the terms and conditions to continue.');
    }
}

let currentOnboardingStep = 0;


function nextOnboardingStep() {
    const steps = document.querySelectorAll('.onboarding-step');
    steps[currentOnboardingStep].classList.remove('active');
    currentOnboardingStep++;
    if (currentOnboardingStep < steps.length) {
        steps[currentOnboardingStep].classList.add('active');
    } else {
        showScreen('homeScreen');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    showScreen('welcomeScreen');
    document.querySelector('.onboarding-step').classList.add('active');
});
