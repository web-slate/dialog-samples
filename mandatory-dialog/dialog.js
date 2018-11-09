(function() {
  var dialog = document.getElementById('optionalDialog');

  // Button opens the <dialog> modally
  document.querySelector('button').addEventListener('click', function() {
    dialog.showModal();
  });

})();
