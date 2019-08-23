// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', toggleMenu);

function toggleMenu () {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
};

// Select DOM Items
const questionsBtnRectangle = document.querySelector('.questions-btn-rectangle');
const answersWrap = document.querySelector('.answers-wrap');
const questionsCircleBtn = document.querySelector('.questions-circle-btn');

// Set Initial State Of Menu
let showQuestions = false;

questionsCircleBtn.addEventListener('click', toggleQuestions);

function toggleQuestions () {
  if(!showQuestions) {
    answersWrap.classList.remove('close-answers');
    questionsBtnRectangle.classList.add('show-answers');
    questionsCircleBtn.classList.add('show-answers');
    
    // Set Menu State
    showQuestions = true;
  } else {
    answersWrap.classList.add('close-answers');
    questionsBtnRectangle.classList.remove('show-answers');
    questionsCircleBtn.classList.remove('show-answers');

    // Set Menu State
    showQuestions = false;
  }
};

