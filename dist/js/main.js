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

// Select DOM Items for Questions
const questionsBtnRectangle = document.querySelector('.questions-btn-rectangle');
const answersWrap = document.querySelector('.answers-wrap');
const questionsCircleBtn = document.querySelector('.questions-circle-btn');
const questionsContainer = document.querySelector('.questions-container');

// Set Initial State Of Questions
let showQuestions = false;

questionsCircleBtn.addEventListener('click', toggleQuestions);
questionsBtnRectangle.addEventListener('click', toggleQuestions);

function toggleQuestions () {
  if(!showQuestions) {
    answersWrap.classList.remove('close-answers');
    questionsBtnRectangle.classList.add('show-answers');
    questionsCircleBtn.classList.add('show-answers');
    questionsCircleBtn.classList.add('rotate');
    questionsContainer.classList.remove('questions-flex-flow-nowrap');
    questionsContainer.classList.add('questions-flex-flow-wrap');
    
    // Set Questions State
    showQuestions = true;
  } else {
    answersWrap.classList.add('close-answers');
    questionsBtnRectangle.classList.remove('show-answers');
    questionsCircleBtn.classList.remove('show-answers');
    questionsCircleBtn.classList.remove('rotate');
    questionsContainer.classList.add('questions-flex-flow-nowrap');
    questionsContainer.classList.remove('questions-flex-flow-wrap');

    // Set Questions State
    showQuestions = false;
  }
};

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("question-arrow-close");
    this.classList.toggle("question-arrow-open");
    var answers = this.nextElementSibling;
    if (answers.style.display === "block") {
      answers.style.display = "none";
    } else {
      answers.style.display = "block";
    }
  });
}


// Select DOM Items for Packages
const packagesCardWraperWeek = document.querySelector('.packages__card_wraper-week');
const packagesCardWraperMonth = document.querySelector('.packages__card_wraper-month');
const packagesCardWraperYear = document.querySelector('.packages__card_wraper-year');

const btnWeek = document.querySelector('.btn-week');
const btnMonth = document.querySelector('.btn-month');
const btnYear = document.querySelector('.btn-year');

btnWeek.addEventListener('click', togglePackagesWeek);

function togglePackagesWeek () {
  if(packagesCardWraperWeek.classList.contains('packages_none')) {
    packagesCardWraperWeek.classList.toggle('packages_none');
    btnWeek.classList.toggle('current-bg');
  };
      if(!packagesCardWraperMonth.classList.contains('packages_none')) {
        packagesCardWraperMonth.classList.add('packages_none');
        btnMonth.classList.toggle('current-bg');
      };
          if(!packagesCardWraperYear.classList.contains('packages_none')) {
            packagesCardWraperYear.classList.add('packages_none');
            btnYear.classList.toggle('current-bg');
          };

  return;
}

btnMonth.addEventListener('click', togglePackagesMonth);

function togglePackagesMonth () {
  if(packagesCardWraperMonth.classList.contains('packages_none')) {
    packagesCardWraperMonth.classList.toggle('packages_none');
    btnMonth.classList.toggle('current-bg');
  }
        if(!packagesCardWraperWeek.classList.contains('packages_none')) {
          packagesCardWraperWeek.classList.add('packages_none');
          btnWeek.classList.toggle('current-bg');
        }
            if(!packagesCardWraperYear.classList.contains('packages_none')) {
              packagesCardWraperYear.classList.add('packages_none');
              btnYear.classList.toggle('current-bg');
            }
  
  return;
}

btnYear.addEventListener('click', togglePackagesYear);

function togglePackagesYear () {
  if(packagesCardWraperYear.classList.contains('packages_none')) {
    packagesCardWraperYear.classList.toggle('packages_none');
    btnYear.classList.toggle('current-bg');
  }
      if(!packagesCardWraperWeek.classList.contains('packages_none')) {
        packagesCardWraperWeek.classList.add('packages_none');
        btnWeek.classList.toggle('current-bg');
      }
          if(!packagesCardWraperMonth.classList.contains('packages_none')) {
            packagesCardWraperMonth.classList.add('packages_none');
            btnMonth.classList.toggle('current-bg');
          }
  
  return;
}