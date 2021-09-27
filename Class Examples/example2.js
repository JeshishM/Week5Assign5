// examples of jQuery

// plain JavaScript: document.getElementById("thing").addEventListener("click", function() { });
$('#thing').click (
  function() {
    // change class of elements in page
    $('.stuff').toggleClass('myclass');
  }
);