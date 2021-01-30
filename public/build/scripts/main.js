$(document).ready(function() {
  $('select').niceSelect();
});

/*toggle nav bar on small screens*/

// Select DOM items
const menuBtn = document.querySelector('.humberger');
const menu = document.querySelector('.col1');
const lines = document.querySelectorAll('.line');

// Set initial state of menu

let showMenu = false;

// menuBtn.addEventListener('click',toggleMenu);

menuBtn.addEventListener('click',function(){
  if(!showMenu)
  {
    menuBtn.classList.add('close');
  
    menu.classList.add('show');

    showMenu = true;

    for(let i = 0 ; i < lines.length ; i++)
    {
      lines[i].style.backgroundColor = "#fff";
    }
  }else{

    menuBtn.classList.remove('close');
    
    menu.classList.remove('show');

    showMenu = false;

    for(let i = 0 ; i < lines.length ; i++)
    {
      lines[i].style.backgroundColor = "#293341";
    }

  }
});


/*-----------------------------smooth scroll---------------------------------*/

var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('#my-scrollbar'));