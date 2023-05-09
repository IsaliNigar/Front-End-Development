document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementsByClassName('toggle')[0];
  
    toggle.addEventListener('click', function() {
      var content = toggle.nextElementSibling;
      content.classList.toggle('show');
    });
  });
  