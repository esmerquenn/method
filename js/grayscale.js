document.addEventListener('scroll', function() {
    if (window.innerWidth < 768) {
      const images = document.querySelectorAll('.main_img, .main_img_vertical');
      let closest = null;
      let closestDist = Infinity;
  
      images.forEach(img => {
        const imgRect = img.getBoundingClientRect();
        const imgCenter = imgRect.top + (imgRect.height / 2);
        const screenCenter = window.innerHeight / 2;
        const dist = Math.abs(screenCenter - imgCenter);
  
        if (dist < closestDist) {
          closest = img;
          closestDist = dist;
        }
      });
  
      images.forEach(img => {
        if (img === closest) {
          img.style.filter = 'grayscale(0)';
        } else {
          img.style.filter = 'grayscale(100%)';
        }
      });
    }
  });
