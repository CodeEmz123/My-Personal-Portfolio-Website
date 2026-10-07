const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//Form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const formMsg = document.getElementById("form-msg");

  if (contactForm && formMsg) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email && message) {
        formMsg.textContent = "Thank you for your message!";
        formMsg.style.color = "green";
        contactForm.reset();
      } else {
        formMsg.textContent = "Please fill in all fields.";
        formMsg.style.color = "red";
      }
    });
  }
});
