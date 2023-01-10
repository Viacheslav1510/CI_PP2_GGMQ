/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 */
document.querySelector() ('.contact-form').addEventListener("submit", function(event) { 
    event.preventDefault();
    emailjs.send("service_9ivf2es","template_3jzkvro",{
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message-form").value,
        })
        .then(() => {
            console.log();
        }, (err) => {
            alert("Try again, please.");
        }); 
})