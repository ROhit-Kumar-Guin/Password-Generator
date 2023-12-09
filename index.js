let passLength = document.getElementById("passLength")
let passLengthValue = document.getElementById("passLengthValue")
let passDisplay = document.getElementById("passDisplay")
let copyIcon = document.getElementById("copyIcon")
passIndicator = document.querySelector(".pass-indicator")
let generatePassword=document.getElementById("generatePassword")




let lowercase = document.getElementById("lowercase")
let Uppercase = document.getElementById("Uppercase")
let Numbers = document.getElementById("Numbers")
let Spaces = document.getElementById("Spaces")
let Symbols = document.getElementById("Symbols")




let lowercasecharacters = "abcdefghijklmnopqrstuvwxyz";
let uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*()?";
let space = " ";




// input slider
passLengthValue.textContent = passLength.value;
passLength.addEventListener('input', () => {
    passLengthValue.textContent = passLength.value;
})


// strength indicator


const updatePassIndicator = () => {
    passIndicator.id = passLength.value <= 8 ? "weak" : passLength.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
    // passing slider value as counter text
    document.getElementById("passLengthValue").innerText = passLength.value;
    getpassword();
    updatePassIndicator();
}

updateSlider();

passLength.addEventListener("input", updateSlider);
passLength.addEventListener("click", getpassword);



// pass generator

generatePassword.addEventListener('click', () => {
    passDisplay.value = getpassword();
})
passDisplay.value = getpassword();

function getpassword() {
    let store = "";
    let finalarr = "";

    finalarr += lowercase.checked ? lowercasecharacters: "";
    finalarr += Uppercase.checked ? uppercasecharacters: "" ;
    finalarr += Numbers.checked ? allnumbers: "" ;
    finalarr += Spaces.checked ? space: "" ;
    finalarr += Symbols.checked ? allsymbols: "" ;
    if(finalarr == "" || finalarr.value == 0){
        return store;
    }

    let i = 1;
    while(i<=passLength.value){
        store += finalarr.charAt(Math.floor(Math.random() * finalarr.length))
        i++;
    }
    return store;

}

// copy password

copyIcon.addEventListener("click",()=>{
    if(passDisplay.value != "" || passDisplay.length >=1){
        navigator.clipboard.writeText(passDisplay.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        },3000)
    }
})

// navigation bar


document.addEventListener("DOMContentLoaded",function(){
    const homeButton = document.querySelector('nav ul li:nth-child(1) a');
    const aboutButton = document.querySelector('nav ul li:nth-child(2) a');

    // Highlight Home button as active (blue) by default on the Home page
    homeButton.classList.add('active');
    aboutButton.classList.remove('active');

    // Redirect to About page when About button is clicked
    aboutButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "about.html";
    });
});


