window.onload = function() {
  setTimeout(function() {
    var els = document.querySelectorAll('.project');
    for (var i = 0; i < els.length; i++) {
      els[i].classList.add('animated');
    }
  }, 100);
}

$('.front-on-click').click(function() {
  $('.front').removeClass('front');
  $(this).addClass('front');
});


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
