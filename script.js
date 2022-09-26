var submit_button = document.querySelector(".submit_button");

submit_button.addEventListener("click", function() {
    // redirect to thank you page
    window.location.href = "thank_you.html";
})

var cancel_button = document.querySelector(".cancel_button");

cancel_button.addEventListener("click", function() {
    //  close window
    window.close();
})