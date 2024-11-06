document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    let currentIndex = 0;
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        showImage(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showImage(currentIndex + 1);
      }
    });
  
    function showImage(index) {
      const totalImages = gallery.children.length;
  
      if (index < 0) {
        index = totalImages - 1;
      } else if (index >= totalImages) {
        index = 0;
      }
  
      currentIndex = index;
      const translateValue = -index * 100 + '%';
      gallery.style.transform = 'translateX(' + translateValue + ')';
    }
  });
  