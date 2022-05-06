//code for nav bar color
$(".navbar-nav a").on("click", function () {
  $(".navbar-nav").find("li.active").removeClass("active");
  $(this).parent("li").addClass("active");
});

//Code form validations
$(document).ready(() =>
  $("#myform").validate({
    rules: {
      name: {
        required: true, //for name field required
        onlyLetters: true, //for Alphabets only
        minlength: 3, //for minimum length (Additional features)
      },

      email: {
        required: true,
        validMail: true,
      },
    },
    messages: {
      name: {
        required: "Please enter the name", //for display the error message
      },

      email: {
        required: "Please enter your email address",
      },
    },
  })
);
$.validator.addMethod(
  "onlyLetters",
  (value) => {
    //onlyLetters is the name of custom method
    value = value.trim();
    return /^[a-zA-Z]([a-z A-Z\.]){0,30}$/i.test(value); //testing the value with regex
  },
  "Please enter the alphabets only"
);

$.validator.addMethod(
  "validMail",
  (value) => {
    value = value.trim();
    return /^([\-\.0-9a-zA-Z])+@([\-\.0-9a-zA-Z])+\.([a-zA-Z]){2,7}$/.test(
      value
    );
  },
  "Please enter a valid email"
);
