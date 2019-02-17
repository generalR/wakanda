exports.onRouteUpdate = () => {
  /*
  require('./src/styles/global.scss')
  require('./src/styles/normalize.css') */

  // require('./src/styles/bootstrap.min.css')

  require('./src/styles/flexboxgrid.css')
}
  /* skulle ev. kunna lägga jquery koden här för att på varje onRouteUpdate
  köra koden. Alt. lägga den i layout för att på såvis få in den i varje layout.
  */
  /*const menuBtn = document.querySelector('.menu-btn')
  const menu = document.querySelector('.menu')
  const menuNav = document.querySelector('.menu-nav')
  const navItems = document.querySelectorAll('.nav-item')

  let showMenu = false
  menuBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close')
      menu.classList.add('show')
      menuNav.classList.add('show')
      navItems.forEach(item => item.classList.add('show'))

      showMenu = true
    } else {
      menuBtn.classList.remove('close')
      menu.classList.remove('show')
      menuNav.classList.remove('show')
      navItems.forEach(item => item.classList.remove('show'))

      showMenu = false
    }
  }
*/
  /*
  if (typeof window !== 'undefined') {
    document.querySelector('.navbutton').addEventListener('click', openNav)

    function openNav() {
      let myNav = document.getElementById('myNav')
      if ((myNav.style.width = '0%')) {
        myNav.style.width = '100%'
      } else {
        if ((myNav.style.width = '100%')) {
          myNav.style.width = '0%'
        }
        console.log('else')
      }
    }
  }*/

  let $
  if (typeof window !== `undefined`) {
    $ = require('jquery')
  }

  $(document).ready(function() {
    $('.toggle').click(function() {
      $('.mobile-nav').toggleClass('active')
    })
  })


//exports.onClientEntry = () => {}
