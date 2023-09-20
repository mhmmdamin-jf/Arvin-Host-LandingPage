let menuIcon = document.querySelector('#menuicon');
let menuIconSpan = document.querySelector('.menu-icon');
let menuListsm = document.querySelector('.menu-list-sm');
let open = false;
const twTextEl = document.querySelector('#tw-text');
const particleEl = document.querySelector('#particles-js');
menuIcon.addEventListener('click', function () {
      menuIconSpan.classList.toggle('menu-icon--open');
      open = !open;
      console.log(open)
      !open &&
            setTimeout(() => {
                  menuListsm.classList.remove('open');
                  menuListsm.classList.add('close');
            }, 200);
      open && setTimeout(() => {
            menuListsm.classList.remove('close');
            menuListsm.classList.add('open');
      }, 200);
});

function twHandler() {
      const twElement = new Typewriter(twTextEl, {
            loop: true,
            cursor: ''
      }).typeString("ترکیب هنر")
            .pauseFor(800)
            .deleteChars(3)
            .typeString("تکنولوژی")
            .pauseFor(1000)
            .deleteAll()
            .typeString("تجربه منحصر به فرد در زمینه وب")
            .pauseFor(800)
            .deleteChars(2)
            .typeString("هاستینگ")
            .pauseFor(1000)
            .start();
}
window.addEventListener('load', twHandler);

(function getDeviceType() {
      particleEl.style.display = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|iPad|Android|Tablet/i)
            .test(navigator.userAgent) ?
            'none' : ""
})()
