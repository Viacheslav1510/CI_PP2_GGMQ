/**
 * Add an eventListener to listen for the submit.
 * Sends an email to site owner through emailJS if the submit is fired.
 * Script taken from the official EmailJS tutorial https://www.emailjs.com/docs/tutorial/creating-contact-form/ 
 * and Email Templates Playground environment.
 */
document.querySelector('.contact-form').addEventListener("submit", function(event) { 
    event.preventDefault();
    emailjs.send("service_9ivf2es","template_3jzkvro",{
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message-form").value,
        })
        .then(() => {
            submitMessage();
        }, (err) => {
            alert("Try again, please.");
        }); 
})

/**
 * function submitMessage shows message after submit contact form
 * it gives user possibility to send one more message. 
 */
function submitMessage() {
    let subMessage = `<img src="https://media2.giphy.com/media/P3EbzdvmTIqZofxqug/giphy.gif?cid=ecf05e47q791ipvwgu8nkec3uoukrnqz2i1hpj5e4e85o8oa&rid=giphy.gif&ct=g" 
    alt="Submited image" width="100%">
    <h3>Thank you!!! Your message so important for us.</h3>
    <button id="send-message" type="submit">One more message</button>
    `;

    document.querySelector('.game-container').style.top = '0';
    document.querySelector('.game-container').innerHTML = subMessage;
    let sendMessageButton = document.getElementById('send-message');
    sendMessageButton.onclick = () => history.go();
}

