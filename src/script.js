let menuIcon = document.querySelector('#menuicon');
let menuIconSpan = document.querySelector('.menu-icon');
let menuListsm = document.querySelector('.menu-list-sm');
let open = false;
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
})