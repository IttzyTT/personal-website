// Mobile nav
const wrapperMenu = document.querySelector('.wrapper-menu');
const mobileNav = document.querySelector('.open-nav');
let mobileLinks = document.querySelectorAll('.links-mobile ul li a');

wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');

  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
});

mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNav.style.display = 'none';
    wrapperMenu.classList.toggle('open');
  });
});
// ----------------------------------------------------------------------------

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

// Send email Info
//get the form by its id
const form = document.querySelector('form');
console.log(form);

const formEvent = form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submitted');

  let mail = new FormData(form);

  sendMail(mail);
});

const sendMail = (mail) => {
  fetch('https://igorljevak.com/send', {
    method: 'post',
    body: mail,
  }).then((response) => {
    return response.json();
  });
};
