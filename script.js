// add event when window is loaded
window.addEventListener("load", function() {
    const params = new URLSearchParams(window.location.search)
    var phone_number = params.get('tel')
    
    // get element with id phone_number
    var phone_number_element = document.querySelector("#phone_number");
    // set value of phone_number_element to phone_number
    phone_number_element.textContent = phone_number;

    var submit_button = document.querySelector(".submit_button");
    submit_button.addEventListener("click", async function() {
        // send post request to create lead
     /*   await fetch(`http://apps.ummed.ncrm.kz/form/pub/api/v1/widgets/form/create-lead/${uid}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: {
                "phone": phone_number
            }
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            // redirect to thank you page
        }); */
        window.location.href = "thank_you.html";
        console.log(data);
    })
    
    

    
    var confirm = document.querySelector("input#confirm");
    
    
    // add event listener to confirm button on input
    confirm.addEventListener("input", function() {
        submit_button.classList.toggle("disabled");
    })

})