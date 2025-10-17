// create buttons constants 

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
	document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
	menuOpenButton.click();
});


//document.getElementById('columna3d').addEventListener('click', function() {
    // Get the target section element
//    const targetSection = document.getElementById('section-3d');

    // Scroll to the target section
//    if (targetSection) {
//        targetSection.scrollIntoView({
//            behavior: 'smooth' // For smooth scrolling animation
//        });
//    }
//});

//document.getElementById('columnaHospital').addEventListener('click', function() {
    // Get the target section element
//    const targetSection = document.getElementById('section-hospital');

    // Scroll to the target section
//    if (targetSection) {
//        targetSection.scrollIntoView({
//            behavior: 'smooth' // For smooth scrolling animation
//        });
//    }
//});

//document.getElementById('columnaComputers').addEventListener('click', function() {
    // Get the target section element
//    const targetSection = document.getElementById('computers-section');

    // Scroll to the target section
//    if (targetSection) {
//        targetSection.scrollIntoView({
//            behavior: 'smooth' // For smooth scrolling animation
//        });
//    }
//});


let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);

/*
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);*/


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const hiddenDiv = document.getElementById('hiddenDiv');

  toggleButton.addEventListener('click', function() {
    if (hiddenDiv.style.display === 'none') {
      hiddenDiv.style.display = 'block'; // Or 'flex', 'grid', etc., depending on desired layout
    } else {
      hiddenDiv.style.display = 'none';
    }
  });

  const closeButton = document.getElementById('close-button');


  closeButton.addEventListener('click', function() {
    if (hiddenDiv.style.display === 'none') {
      hiddenDiv.style.display = 'block'; // Or 'flex', 'grid', etc., depending on desired layout
    } else {
      hiddenDiv.style.display = 'none';
    }
  });

});

const closeButton = document.getElementById('menu-close-button');
const navItem1 = document.getElementById('nav-link1');
const navItem2 = document.getElementById('nav-link2');
const navItem3 = document.getElementById('nav-link3');
const navItem4 = document.getElementById('nav-link4');
const navItem5 = document.getElementById('nav-link5');


navItem1.addEventListener('click', function() {
	closeButton.click();
}, 1000);

navItem2.addEventListener('click', function() {
	closeButton.click();
}, 1000);

navItem3.addEventListener('click', function() {
	closeButton.click();
}, 1000);

navItem4.addEventListener('click', function() {
	closeButton.click();
}, 1000);

navItem5.addEventListener('click', function() {
	closeButton.click();
}, 1000);




function Clear_Fields() {
    document.getElementById("messageInput").value = "";
}

const buttonX = document.getElementById("toggleButton");
buttonX.addEventListener("click", Clear_Fields);


document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded phone number (international format, no "+" or spaces)
  const phone = "+527292626379"; 

  document.getElementById("sendBtn").addEventListener("click", () => {
    const rawText = document.getElementById("messageInput").value.trim();

    if (!rawText) {
      alert("Por favor escribe tu mensaje primero.");
      return;
    }

    Clear_Fields()

    // Encode to make it URL-safe
    const encodedMessage = encodeURIComponent(rawText);


    // Detect mobile vs desktop
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    let url;
    if (isMobile) {
      // Mobile → default wa.me link
      url = `https://wa.me/${phone}?text=${encodedMessage}`;
    } else {
      // Desktop → WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    }

    // Open in new tab
    window.open(url, "_blank");
  });
});


