document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      const accordionBody = this.nextElementSibling;
      const icon = this.querySelector(".icon");
      const accordion = document.querySelectorAll(".accordion");
      if (accordionBody.style.display === "none") {
        accordionBody.style.display = "block";
        if (icon) {
          if (icon.classList.contains("fa-plus")) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
            icon.style.color= "white";
            icon.style.background= "#EF3D5B";
            icon.style.padding= "5px";
            // for (let i = 0; i < accordion.length; i++) {
            //   accordion[i].style.border = "1px solid #EF3D5B";
            //   console.log(accordion[i])
            // }
          }
        }
      } else {
        accordionBody.style.display = "none";
        if (icon) {
           if (icon.classList.contains("fa-minus")) {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
            icon.style.color= "#38495F";
            icon.style.background= "none";
            icon.style.padding= "5px";
            for (let i = 0; i < accordion.length; i++) {
              accordion[i].style.border = "1px solid #E3E3E3";
              
            }
          }
        }
      }
    });
  });
});