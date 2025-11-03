const user = [
    {
        name: "SUBHADEEP SUR",
        email: "subhadeep@gmail.com",
        password: "SUBHADEEP@1234"
    },

    {
        name: "SONIYA BOSE",
        email: "soniyabose@gmail.com",
        password: "SONIYA@1234"
    },
    {
        name: "ADITI PODDAR",
        email: "iamaditi2025@gmail.com",
        password: "ADITI@1234"
    },

    {
        name: "MOUMITA GHOSH",
        email: "mou.std16@gmail.com",
        password: "MOUMITA@1234"
    },
    {
        name: "HRTWIK SHAH SWARNAKAR",
        email: "hritwik@gmail.com",
        password: "HRITWIK@1234"
    },
    {
        name: "FALGUNI SARKAR",
        email: "falgunisarkar2007@gmail.com",
        password: "FALGUNI@1234"
    },
    {
        name: "MADHUSHALINI GHOSHAL",
        email: "ghoshalmadhushalini@gmail.com",
        password: "MADHUSHALINI@1234"
    },
    {
        name: "NABAMI DAS",
        email: "nabami@gmail.com",
        password: "NABAMI@1234"
    },
    {
        name: "KRISHNA PRAMANIK",
        email: "krishna@gmail.com",
        password: "KRISHNA@1234"
    },
    {
        name: "SOUTAM GHOSH",
        email: "ghoshsoutam9@gmail.com",
        password: "SOUTAM@1234"
    },
    {
        name: "SHAGNIK ROY CHOWDHURY",
        email: "shagnikroy70@gmail.com",
        password: "SHAGNIK@1234"
    },
    {
        name: "RAJIB BARMAN",
        email: "rajib@gmail.com",
        password: "RAJIB@1234"
    },
    {
        name: "PRITY MANDAL",
        email: "prity@gmail.com",
        password: "PRITY@1234"
    },
    {
        name: "SUPARNA CHAKRABARTY",
        email: "suparna@gmail.com",
        password: "SUPARNA@1234"
    },
    {
        name: "KRIPA SAHA",
        email: "sahakripa211@gmail.com",
        password: "KRIPA@1234"
    },
    {
        name: "SANKET SWARNAKAR",
        email: "2025sank@gmail.com",
        password: "SANKET@1234"
    },
    {
        name: "AKHIL TARAFDAR",
        email: "akhiltarafdar07@gmail.com",
        password: "AKHIL@1234"
    },
    {
        name: "PAYEL BISWAS",
        email: "payel646@gmail.com",
        password: "PAYEL@1234"
    },
    {
        name: "ANUSMITA SAHA",
        email: "iamanusmita20@gmail.com",
        password: "ANUSMITA@1234"
    },
    {
        name: "SAYANTANU SAMADDAR",
        email: "sayan@gmail.com",
        password: "SAYANTANU@1234"
    },
    {
        name: "PUSPITA KHATUA",
        email: "pushpitakhatua98@gmail.com",
        password: "PUSPITA@1234"
    },
    {
        name: "SONALI KAR",
        email: "sonalikar468@gmail.com",
        password: "SONALI@1234"
    },
    {
        name: "SUBHAJIT PAL",
        email: "subhajitpal@gmail.com",
        password: "SUBHAJIT@1234"
    },
    {
        name: "SAMIDIP MAJUMDER",
        email: "samidipmajumder@gmail.com",
        password: "SAMIDIP@1234"
    },
    {
        name: "SRABANTI CHACKRABORTY",
        email: "srabantichackraborty@gmail.com",
        password: "SRABANTI@1234"
    },
    {
        name: "test",
        email: "test@gmail.com",
        password: "test1234"
    }

]

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const togglePassword = document.getElementById('togglePassword');

    // Toggle password visibility
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Email validation
    emailInput.addEventListener('blur', function () {
        const email = this.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showError(emailError, 'Email is required');
        } else if (!emailRegex.test(email)) {
            showError(emailError, 'Please enter a valid email address');
        } else {
            hideError(emailError);
        }
    });

    // Password validation
    passwordInput.addEventListener('blur', function () {
        const password = this.value;

        if (!password) {
            showError(passwordError, 'Password is required');
        } else if (password.length < 6) {
            showError(passwordError, 'Password must be at least 6 characters');
        } else {
            hideError(passwordError);
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;
        if (!name) {
            showError(nameError, 'Name is required');
            isValid = false;
        }
        else if (!email) {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        } else {
            hideError(emailError);
        }

        if (!password) {
            showError(passwordError, 'Password is required');
            isValid = false;
        } else if (password.length < 6) {
            showError(passwordError, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            hideError(passwordError);
        }

        if (isValid) {
            // Simulate login process
            const loginButton = document.querySelector('.login-button');
            const originalText = loginButton.textContent;

            loginButton.textContent = 'Logging in...';
            loginButton.disabled = true;

            const authenticatedUser = authenticateUser(name, email, password);

            setTimeout(() => {
                if (authenticatedUser) {
                    alert('Login successful!');
                    window.location.href = 'voting.html';
                    loginButton.textContent = originalText;
                    loginButton.disabled = false;
                    localStorage.setItem('loggedInUser', authenticatedUser ? name : null);
                } else {
                    loginButton.textContent = originalText;
                    loginButton.disabled = false;
                    showError(passwordError, 'Invalid credentials. Please try again.');
                    showError(emailError, 'Invalid credentials. Please try again.');
                    showError(nameError, 'Invalid credentials. Please try again.');
                }
            }, 1500);
        }
    });

    // Helper functions
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function hideError(errorElement) {
        errorElement.style.display = 'none';
    }

    function authenticateUser(name, email, password) {
        return user.find(user => user.name === name && user.email === email && user.password === password);
    }
});