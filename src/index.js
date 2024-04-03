document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault();
  })
});
