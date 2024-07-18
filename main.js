const projectitems = document.querySelectorAll( '.project, .inner .items .item');

projectitems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3 ease-in-out';
  });
  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
  });
});