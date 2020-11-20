//nav bar//
      let scrollPos = 0;
      const mainContentTop = document.getElementById('main-content').getBoundingClientRect().y;   
      function hideNavBar() {
        const navBar = document.querySelector('.nav__flex-container');
        let windowY = window.scrollY;
        if (windowY < scrollPos || mainContentTop > windowY) {
          // Scrolling DOWN
          navBar.classList.add('is-visible');
          navBar.classList.remove('is-hidden');
        } else {
          // Scrolling UP
          navBar.classList.add('is-hidden');
          navBar.classList.remove('is-visible');      
        }
        
        scrollPos = windowY;
      }
      window.addEventListener('scroll', hideNavBar);
      
      //back to top button
      function showScrollButton() {
     let windowY = window.scrollY;
     if (mainContentTop < windowY) {
      document.querySelector('.scrollBackButton').style.display = "flex";
     } else {
       document.querySelector('.scrollBackButton').style.display = "none";
     }
    }
    window.addEventListener("scroll", showScrollButton); 