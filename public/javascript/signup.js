$(document).ready(function() {
    var signUpForm = $("#signUpBtn");
    var emailInput = $("#emailInput");
    var passwordInput = $("#pwdInput");
  
    signUpForm.on("click", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
      console.log(userData);
  
      if (!userData.email || !userData.password) {
        return;
      }
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    function signUpUser(email, password) {
      console.log('hi');
      $.post("/api/signup", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace("members");
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });