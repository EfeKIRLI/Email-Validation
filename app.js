const email= document.getElementById("email");
const password= document.getElementById("pasword");

email.addEventListener("input",()=>{
    const emailBox = document.querySelector(".emailbox")
    const emailText = document.querySelector(".emailText")
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

    if(email.value.match(emailPattern)){
        emailBox.classList.add('valid');
        emailBox.classList.remove('invalid');
        emailText.innerHTML = "Your Email Adress in Valid."
    }
    else {
        emailBox.classList.add('invalid');
        emailBox.classList.remove('valid');
        emailText.innerHTML = "Your Email Must Be a valid adress."

    }
})


password.addEventListener("input",()=>{
    const passBox = document.querySelector(".passBox")
    const passText = document.querySelector(".passText")
    const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(password.value.match(passPattern)){
        passBox.classList.add('valid');
        passBox.classList.remove('invalid');
        passText.innerHTML = "Your Password in Valid."
    }
    else {
        passBox.classList.add('invalid');
        passBox.classList.remove('valid');
        passText.innerHTML = "Your Password Must Be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."

    }
})

