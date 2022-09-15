const screenDisplay = document.getElementById("screen");
const generatePasswords = document.getElementById("gen");
const copy = document.getElementById("copy");

// Passwords Generator

generatePasswords.addEventListener('click', () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let passwordLength = 12;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword + 1 );
    }
    screenDisplay.innerHTML = password;
    }
);

// Copy Passwords   

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(screenDisplay.innerHTML).then(() => {
        screenDisplay.value;
        alert("Password copied successfully");
        }
    )
    if(screenDisplay.innerHTML === "") {
        alert("Password not found, please generate a new password")
    } else {
        screenDisplay.innerHTML = "";
        }
    }
);