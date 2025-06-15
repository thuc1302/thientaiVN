// Chọn loại quyên góp
if (document.querySelectorAll(".donate-type-btn").length) {
  document.querySelectorAll(".donate-type-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".donate-type-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}
// Chọn số tiền
if (document.querySelectorAll(".amount-btn").length) {
  document.querySelectorAll(".amount-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".amount-btn")
        .forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      document.querySelector(".amount-input").value = "";
    });
  });
  document
    .querySelector(".amount-input")
    .addEventListener("input", function () {
      document
        .querySelectorAll(".amount-btn")
        .forEach((b) => b.classList.remove("selected"));
    });
}
