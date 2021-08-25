// Listen to Submit
document.querySelector('.contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input values
  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let subject = document.querySelector('.subject').value;
  let message = document.querySelector('.message').value;

  document.querySelector('.contact-form').reset();

  sendEmail(name, email, subject, message);
}

// Send email Info
function sendEmail(name, email, subject, message) {
  Email.send({
    SecureToken: '145731b8-ff91-4382-8837-d130c9cf8aa3',
    To: 'igorljevak@gmail.com',
    From: 'igorljevak@gmail.com',
    Subject: `${subject}`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}`,
  }).then((message) => alert('mail sent seccessfully'));
}
