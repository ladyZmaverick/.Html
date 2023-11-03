function validateCode() {
    var code = document.querySelector('input[name="code"]').value;
    if (code.length !== 4) {
      alert('The code must be 4 digits long.');
      return false;
    }
  
    // Submit the form if the code is valid.
    document.querySelector('form').submit();
  }
  
  document.querySelector('input[name="code"]').addEventListener('keyup', validateCode);
  