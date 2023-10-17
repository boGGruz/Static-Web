const leafs = document.querySelectorAll('.leaf');

leafs.forEach((leaf) => {
  leaf.addEventListener('click', () => {
    if (!leaf.classList.contains('expanded')) {
      leaf.classList.add('expanded'); // Добавляем класс expanded при клике
    } else {
      leaf.classList.remove('expanded'); // Убираем класс expanded при следующем клике
    }
  });
});