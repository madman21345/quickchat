import './index.css'

//status button
const stusButton = document.querySelector('.stus');

stusButton.addEventListener('click', function() {
  if (stusButton.classList.contains('red')) {
    stusButton.classList.remove('red');
  } else {
    stusButton.classList.add('red');
  }
});

