const header=document.querySelector(".main-title");

const sticky = header.offsetTop;

window.onscroll = function() {
    if(window.scrollY > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
};

 var typed= new Typed(".input",{
            strings:["website interactivity builder.","photo editor.","mind game solver."],
            typeSpeed: 80,
            backSpeed: 50,
            loop:true
        });

        let menu=document.querySelector('#menu-icon');
        let navlist=document.querySelector('.navlist');

        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        }

 function showPopup() {
      const popup = document.getElementById("popup");
      popup.classList.add("show");

      setTimeout(() => {
        popup.classList.remove("show");
      }, 3000);
    }

        