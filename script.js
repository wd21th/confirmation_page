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

var confirm = document.querySelector("input#confirm");
console.log('confirm :', confirm);

// add event listener to confirm button on input
confirm.addEventListener("input", function() {
    submit_button.classList.toggle("disabled");
})

// add event when window is loaded
window.addEventListener("load", function() {
    const params = new URLSearchParams(window.location.search)
    console.log('window.location.search :', window.location.search);
    console.log('params :', params);

    var phone_number = params.get('tel')
    console.log('phone_number :', phone_number);
    // get element with id phone_number
    var phone_number_element = document.querySelector("#phone_number");
    // set value of phone_number_element to phone_number
    phone_number_element.textContent = phone_number;
})