document.addEventListener("DOMContentLoaded", function (event) {
  grecaptcha.ready(function () {
    grecaptcha
      .execute(window.recaptcha_script_vars?.recaptcha_site_key || "", {
        action: "login",
      })
      .then(function (token) {
        console.log(1, "recaptcha_script_token:", token);
      });
  });
});
