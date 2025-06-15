document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.read-more').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const modalId = this.dataset.target;
      document.querySelector(modalId).style.display = 'flex';
    });
  });

  document.querySelectorAll('.close').forEach(function (span) {
    span.addEventListener('click', function () {
      this.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', function (e) {
    document.querySelectorAll('.modal').forEach(function (modal) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
});
