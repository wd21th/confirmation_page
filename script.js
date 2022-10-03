const API = 'https://apps.uzbcrm.uz/form/pub/api/v1/widgets/form/'
const CRM_ID = 22
const FIELD_ID = 35
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
       await fetch(`${API}/create-lead/${CRM_ID}/`, {
            method: "POST",
            headers: {
                // "Content-Type": "application/x-www-form-urlencoded"
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                form_name: "testform",
                "phone": phone_number,
                custom_values: [
                    {
                        "field": FIELD_ID,
                        "value": 'Согласен',
                    }
                ]
            } )
        }).then(function(data) {
            window.location.href = "thank_you.html";
        });
        
    })
    
    

    
    var confirm = document.querySelector("input#confirm");
    
    
    // add event listener to confirm button on input
    confirm.addEventListener("input", function() {
        submit_button.classList.toggle("disabled");
    })

})