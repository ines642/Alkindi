//showing menu bar
const menu = document.querySelector('.menu');
const menubar  = document.querySelector('.menu-bar');

console.log('hey');
menu.addEventListener('click', () => {
    console.log('click');
    menubar.classList.toggle('show')
    
});


//animation
    const rocket = document.querySelector('.bgrocket');
    const title = document.querySelectorAll('.secttl')
    const desc = document.querySelectorAll('.seccnt')
  
    //rocket animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          rocket.classList.add('fly');
          
        }
        else{
            rocket.classList.remove('fly');
        }

        
      });
    });
  
    observer.observe(rocket);

    // text animation
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('text-up');
          } else {
            entry.target.classList.remove('text-up');
          }
        });
      });
      
      // Observe all titles and descriptions
      title.forEach(title => textObserver.observe(title));
      desc.forEach(desc => textObserver.observe(desc));
    
  
  