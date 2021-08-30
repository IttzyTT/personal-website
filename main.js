// Mobile nav
const wrapperMenu = document.querySelector('.wrapper-menu');
const mobileNav = document.querySelector('.open-nav');

wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');

  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
});

// Job tabs
function _class(name) {
  return document.getElementsByClassName(name);
}

let tabPanes = _class('tab-header')[0].getElementsByTagName('div');

for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener('click', function () {
    _class('tab-header')[0].getElementsByClassName('active')[0].classList.remove('active');
    tabPanes[i].classList.add('active');

    _class('tab-indicator')[0].style.top = `calc(80px + ${i * 50}px)`;

    _class('tab-content')[0].getElementsByClassName('active')[0].classList.remove('active');
    _class('tab-content')[0].getElementsByTagName('div')[i].classList.add('active');
  });
}

// contact form
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
