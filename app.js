
// new fullpage('#fullpage', {
//    autoScrolling : true,
// })
// ScrollBar
$('nav .container ul li a').on('click', function(e){
   if(this.hash !== ''){
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
         scrollTop : $(hash).offset().top
      }, 800);
   }
})

$(window).scroll(function(){
   var scrollbarLocation = $(this).scrollTop();
   scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top
      if(sectionOffset <= scrollbarLocation){
         $(this).parent().addClass('active')
         $(this).parent().siblings().removeClass('active')
      }
   })
})
// $('#my-scrollbar').fullpage();
// new fullpage('#fullpage', {
//    autoScrolling : true,
// })

// change nav

const nav = document.querySelector(".nav");
window.addEventListener("scroll", changeNav);

function changeNav(){
   if(window.scrollY > nav.offsetHeight + 150){
      nav.classList.add("active");
   }else{
      nav.classList.remove("active");
   }
}

// change slider



var heroes = document.querySelectorAll('.hero');
var buttons = document.querySelectorAll('.bt');

let currentSlideBar = 1;


var manualNavBar = function(index){
   heroes.forEach((hero)=>{
      hero.classList.remove('active1');

      btns.forEach((btn)=>{
         btn.classList.remove('active1')
      })
   })
   heroes[index].classList.add('active1')
   buttons[index].classList.add('active1')
}
buttons.forEach((btn, i)=>{
   btn.addEventListener('click', ()=>{
      manualNavBar(i);
      currentSlideBar = i;
   })
})

var autoRepeat = function(){
   let active = document.getElementsByClassName('active1');
   let i = 1;
   var autoRepeater = ()=>{
      setTimeout(function(){
         [...active].forEach((activeSlide)=>{        //[...active] = all active classes
            activeSlide.classList.remove('active1')
         })
         heroes[i].classList.add('active1')
         buttons[i].classList.add('active1')
         i++;
         if(heroes.length == i){
            i = 0;
         }
         if(i >= heroes.length){
            return;
         }
         autoRepeater();
      }, 8500);
   }
   autoRepeater();
}
autoRepeat();
//typing effect
const typingText = document.querySelectorAll('#typing');
typingText.forEach((typing)=>{
   var typewriter = new Typewriter(typing, {
   loop : true,
   delay : 125,
   });
   typewriter
      .pauseFor(500)
      .typeString('WE ARE COSMIX')
      .pauseFor(4500)
      .start();
})

//progress
const progresses = document.querySelectorAll("#progress-bar");
function run(){
   var width = 1;
   var id = setInterval(move, 10);

   function move(){
      progresses.forEach((progress)=>{
         if(width >= 95){
            clearInterval(id);
         }else{
            width ++;
            progress.style.width = width + '%';
            progress.innerHTML = width + '%';
         }
      })
   }
}
function check(){
   const trigger = window.innerHeight / 5 * 4;
   progresses.forEach(progress=>{
      const boxTop = progress.getBoundingClientRect().top;
      if(boxTop < trigger){
         run();
      }else{
         return 0;
      }
   })
}
window.addEventListener("scroll", check)

// ul li



const contents = document.querySelectorAll('.features-des');
const listItems = document.querySelectorAll('.features-content ul li');



function hideAllContents(){
   contents.forEach(content=>content.classList.remove('show'))
}
function hideAllItems(){
   listItems.forEach(item=>item.classList.remove('active'))
}
listItems.forEach((item, idx)=>{
   item.addEventListener('click', ()=>{
      hideAllContents();
      hideAllItems();
      item.classList.add('active');
      contents[idx].classList.add('show');
   })
})

//gallery
const galleries = document.querySelectorAll('.gallery-image');
const items = document.querySelectorAll('.art-porfolio ul li');

function deleteContents(){
   galleries.forEach(gallery=>gallery.classList.remove('show'));
}
function deleteItems(){
   items.forEach(item1=>item1.classList.remove('active'));
}

items.forEach((gallery, index)=>{
   gallery.addEventListener("click", ()=>{
      deleteContents();
      deleteItems();
      gallery.classList.add('active');
      galleries[index].classList.add('show');
   })
})


// hover

const members = document.querySelectorAll('.member');
const h2 = document.querySelectorAll('.h');
members.forEach((member,idx)=>{
   member.addEventListener('mouseover', ()=>{
      h2[idx].style.color = 'red'
   })
   member.addEventListener('mouseout', ()=>{
      h2[idx].style.color ='black'
   })
})

// slider


var persons = document.querySelectorAll('.person');
var btns = document.querySelectorAll('.btnx');

let currentSlide = 1;


var manualNav = function(manual){
   persons.forEach((person)=>{
      person.classList.remove('active');

      btns.forEach((btn)=>{
         btn.classList.remove('active')
      })
   })
   persons[manual].classList.add('active')
   btns[manual].classList.add('active')
}
btns.forEach((btn, i)=>{
   btn.addEventListener('click', ()=>{
      manualNav(i);
      currentSlide = i;
   })
})

var repeat = function(){
   let active = document.getElementsByClassName('active');
   let i = 1;
   var repeater = ()=>{
      setTimeout(function(){
         [...active].forEach((activeSlide)=>{        //[...active] = all active classes
            activeSlide.classList.remove('active')
         })
         persons[i].classList.add('active')
         btns[i].classList.add('active')
         i++;
         if(persons.length == i){
            i = 0;
         }
         if(i >= persons.length){
            return;
         }
         repeater();
      }, 5000);
   }
   repeater();
}
repeat();

// increasing number

const numbers = document.querySelectorAll('#nums');

function x(){
   numbers.forEach((number)=>{
      number.innerText = '0';
      const updateCounter = ()=>{
         const target = + number.getAttribute('data-target');
         const c = + number.innerText;
         const increment = target / 100;
         if(c < target){
            number.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
         }

         else{
            number.innerText = target
         }
      }
      updateCounter();
   })
}

function runStatic(){
   const counter = window.innerHeight / 6 * 5;
   numbers.forEach((number)=>{
      const h = number.getBoundingClientRect().top;
      if(h > counter){
         x();
         clearInterval(runStatic)
      }else{
         return;
      }
   })
}
window.addEventListener('scroll', runStatic)

// slider branch
const carouselSlide = document.querySelector('.animation-container')
const branches = document.querySelectorAll('.owl-item a img');

let cou = 3;
const size = branches[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * cou) + 'px)';
console.log(carouselSlide.length)
var animated = function(){
   branches.forEach((branch)=>{
      branch.addEventListener("mouseover", ()=>{
         if(cou >= carouselSlide.length - 1) return;
         carouselSlide.style.transition = 'transform 0.4s ease-in-out';
         cou++;
         carouselSlide.style.transform = 'translateX(' + (-size * cou) + 'px)';
         carouselSlide.addEventListener('transitionend', ()=>{
            if(branches[cou].id === 'lastClone'){
               carouselSlide.style.transition = 'none';
               cou = carouselSlide.length - 2;
               carouselSlide.style.transform = 'translateX(' + (-size * cou) + 'px)';
            }
            if(branches[cou].id === 'firstClone'){
               carouselSlide.style.transition = 'none';
               cou = carouselSlide.length - cou;
               carouselSlide.style.transform = 'translateX(' + (-size * cou) + 'px)';
            }
         })
      })
   })
}


// Change Social Media
const social_medias = document.querySelectorAll('.social-icon li');
const social_icons = document.querySelectorAll('.social-icon li a i');
social_medias.forEach((media, icon) => {
   media.addEventListener('mouseover', () =>{
      social_icons[icon].style.color = 'white'
   })
   media.addEventListener('mouseout', ()=>{
      social_icons[icon].style.color = "#e73131"
   })
})







   


