document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    const phoneInput = document.getElementById("phone-number");
    const DispOTP = document.getElementById("disp-otp");
    let username = document.getElementById("username")
    let generatedOtp = "";  

    if (submit && phoneInput && username && DispOTP) {
        submit.addEventListener("click", (e) => {
            e.preventDefault();  

            if (phoneInput.value.length === 10 && username.value.length >5) {
                generatedOtp = otp(); 
            let disply  = document.querySelector(".otp-submition")
                disply.style.display = "block";  
                // [submit,phoneInput,username].forEach((e)=>{
                //     e.style.display="none"
                // })
            } else {
                alert("Enter a valid 10-digit phone number");
            }
        });
    } else {
        console.error("One or more elements are not found.");
    }

   
    function otp() {
        const res = Math.floor(Math.random() * 9000 + 1000).toString();  
        alert(`Your OTP is ${res}`);

        return res; 
       
    }


    const submitOtp = document.getElementById("submit-otp");
    // submit.style.display="block";
    if (submitOtp) {
        submitOtp.addEventListener("click", (e) => {
            alert("You in Dashboard page")
            e.preventDefault();  
        let inputOtp  =document.getElementById("disp-otp").value
            if (inputOtp === generatedOtp) {
                window.location.href = "../bus-details/index.html"; 
                console.log("Your OTP is correct");
            } else {
                console.log("Your OTP is invalid");
            }
        });
    } 
    
});
