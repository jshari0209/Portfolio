// const sections = document.querySelectorAll('.project1 a');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//         } else {
//             entry.target.classList.remove('active');
//         }
//     });
// }, {
//     threshold: 0.5, // Trigger when 50% of the section is visible
// });

// sections.forEach(section => observer.observe(section));


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