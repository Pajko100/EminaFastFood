const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
       
    burger.addEventListener('click', () => {
      
        //Toggle gornji bar 
        nav.classList.toggle('nav-active');
    
        //animacija linkova
        navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        } else{link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
      });
      //burger animacija
      burger.classList.toggle('toggle');
    });
}

navSlide();


        function show() {
            /* Access image by id and change 
            the display property to block*/
            document.getElementById('image')
                .style.display = "block";
            document.getElementById('btnID')
                .style.display = "none";
        }
        
        const showImageButton = document.getElementById("show-image-button");
        const myImage = document.getElementById("my-image"); 
        showImageButton.addEventListener("click", () => { 
           myImage.style.display = "block"; 
        });