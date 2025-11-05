const user = [
// <<<<<<< HEAD
    { name: "SUBHADEEP SUR", email: "subhadeep@gmail.com", password: "SUBHADEEP@1234", photo:"" },
    { name: "SONIYA BOSE", email: "soniyabose7@gmail.com", password: "SONIYA@1234", photo:"soniya.jpg" },
    { name: "ADITI PODDAR", email: "imaditi2025@gmail.com", password: "ADITI@1234", photo:"aditi.jpg" },
    { name: "MOUMITA GHOSH", email: "mou.std16@gmail.com", password: "MOUMITA@1234", photo:"moumita.jpg" },
    { name: "HRITWIK SHAH SWARNAKAR", email: "hritwik@gmail.com", password: "HRITWIK@1234", photo:"" },
    { name: "FALGUNI SARKAR", email: "falgunisarkar2007@gmail.com", password: "FALGUNI@1234", photo:"falguni.jpg" },
    { name: "MADHUSHALINI GHOSAL", email: "ghosalmadhushalini@gmail.com", password: "MADHUSHALINI@1234", photo:"madhisalini.jpg" },
    { name: "NABAMI DAS", email: "nabami@gmail.com", password: "NABAMI@1234", photo:"" },
    { name: "KRISHNA PRAMANIK", email: "krishna@gmail.com", password: "KRISHNA@1234", photo:"" },
    { name: "SOUTAM GHOSH", email: "ghoshsoutam9@gmail.com", password: "SOUTAM@1234", photo:"soutam.jpg" },
    { name: "SHAGNIK ROY CHOUDHURY", email: "shagnikroy70@gmail.com", password: "SHAGNIK@1234", photo:"sagnik.jpg" },
    { name: "RAJIB BARMAN", email: "rajib@gmail.com", password: "RAJIB@1234", photo:"" },
    { name: "PRITY MANDAL", email: "prity@gmail.com", password: "PRITY@1234", photo:"" },
    { name: "SUPARNA CHAKRABARTY", email: "suparna@gmail.com", password: "SUPARNA@1234", photo:"" },
    { name: "KRIPA SAHA", email: "sahakripa211@gmail.com", password: "KRIPA@1234", photo:"kripa.jpg" },
    { name: "SANKET SWARNAKAR", email: "2025sank@gmail.com", password: "SANKET@ADITI", photo:"me2.jpg" },
    { name: "AKHIL TARAFDER", email: "akhiltarafder07@gmail.com", password: "AKHIL@1234", photo:"akhil.jpg" },
    { name: "PAYEL BISWAS", email: "payelb646@gmail.com", password: "PAYEL@1234", photo:"payel.jpg" },
    { name: "ANUSMITA SAHA", email: "imanusmita20@gmail.com", password: "ANUSMITA@1234", photo:"anushmita.jpg" },
    { name: "SAYANTANU SAMADDAR", email: "sayan@gmail.com", password: "SAYANTANU@1234", photo:"" },
    { name: "PUSHPITA KHATUA", email: "pushpitakhatua98@gmail.com", password: "PUSHPITA@1234", photo:"pushpita.jpg" },
    { name: "SONALI KAR", email: "sonalikar468@gmail.com", password: "SONALI@1234", photo:"sonali.jpg" },
    { name: "SUBHAJIT PAL", email: "subhajitpal@gmail.com", password: "SUBHAJIT@1234", photo:"pal.jpg" },
    { name: "SAMIDIP MAJUMDAR", email: "samidipmajumder@gmail.com", password: "SAMIDIP@1234", photo:"samidip.jpg" },
    { name: "SRABANTI CHACKRABORTY", email: "srabantichackraborty@gmail.com", password: "SRABANTI@1234", photo:"" },
    { name: "TEST", email: "test@gmail.com", password: "test1234",  photo: "logo.jpg" }
];

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');

    // 👁 Toggle password visibility
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // 🚀 Form submit
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        hideError(nameError);
        hideError(emailError);
        hideError(passwordError);

        if (!name) return showError(nameError, 'Name is required');
        if (!email) return showError(emailError, 'Email is required');
        if (!password) return showError(passwordError, 'Password is required');

        // 🧠 Compare case-insensitively
        const authenticatedUser = user.find(
            u =>
                u.name.toUpperCase() === name.toUpperCase() &&
                u.email.toLowerCase() === email.toLowerCase() &&
                u.password.toUpperCase() === password.toUpperCase()
        );

        if (authenticatedUser) {
  alert('✅ Login successful!');
  localStorage.setItem('loggedInUser', authenticatedUser.name);
  localStorage.setItem('userPhoto', authenticatedUser.photo); // store photo URL
  window.location.href = `voting.html?name=${encodeURIComponent(authenticatedUser.name)}`;
}
 else {
            showError(passwordError, '❌ Invalid credentials. Please try again.');
        }
    });

    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(errorElement) {
        errorElement.style.display = 'none';
    }

    function authenticateUser(name, email, password) {
        return user.find(user => user.name.toUpperCase() === name.toUpperCase() && user.email === email && user.password === password.toUpperCase());
    }
});
