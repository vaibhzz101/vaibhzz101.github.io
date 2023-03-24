



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



    GitHubCalendar(".calendar", "vaibhzz101");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "vaibhzz101", { responsive: true });

    // Use a proxy
    // GitHubCalendar(".calendar", "vaibhzz101", {
    //    proxy (username) {
    //      return fetch(`https://your-proxy.com/github?user=${vaibhzz101}`)
    //    }
    // }).then(r => r.text())



    let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

    function NewTab() {
      window.open(
        "https://drive.google.com/file/d/16tQUUbquZpysvg0H4ZR6gTEdReZQuqjO/view",
        "_blank"
      );
    }


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
    };

  })
}







