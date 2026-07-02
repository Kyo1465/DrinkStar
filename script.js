const menuBtn = document.querySelector('.header__nav-btn');
const menu = document.querySelector('.header__nav ul');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
} );


const anchors = document.querySelectorAll(".header__nav a, .hero__main a");

anchors.forEach(anc =>{
  anc.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    
    const elem = document.querySelector(id);
    let offset = 0;
    
    window.scroll({
      top: elem.offsetTop + offset,
      behavior: "smooth"
    });
  });
})