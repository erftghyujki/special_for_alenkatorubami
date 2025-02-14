let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll('.page');
  pages[currentPage].style.display = 'none'; // Скрываем текущую страницу
  currentPage += 1; // Переходим на следующую страницу
  if (currentPage < pages.length) {
    pages[currentPage].style.display = 'flex'; // Показываем следующую страницу
  }
}