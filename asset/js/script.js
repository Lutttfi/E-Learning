document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      setTimeout(() => {
        event.target.scrollIntoView({ behavior: "smooth", inline: "start" });
      }, 100); // Delay to ensure the tab is activated
    });
  });
});
