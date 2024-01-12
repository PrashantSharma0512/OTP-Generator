let generateOTP = () => {
    const otplen = 6;
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.querySelector("#otpDisplay").innerHTML = `${otp}`;
};
document.querySelector("#otpButton")
    .addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);



// function for copy otp 
let otp = document.querySelector("#otpDisplay")
let copy = document.querySelector("#copyButton");
    copy.addEventListener("click", function () {
        navigator.clipboard.writeText(otp.innerHTML);
        copy.innerHTML ="copied";
        setTimeout(() => {
            copy.innerHTML="copy"
        }, 2000);

    });
