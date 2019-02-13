import React from "react";
import { Link } from "gatsby";

class Navigation extends React.Component {
  /* componentDidMount() {
    document.querySelector('.navbutton').addEventListener('click', openNav)
    function openNav() {
      let myNav = document.getElementById('myNav')
      if ((myNav.style.width = '0%')) {
        myNav.style.width = '100%'
      } else {
        if ((myNav.style.width = '100%')) {
          myNav.style.width = '0%'
        }
      }
    }
  }*/
  render() {
    return (
      <header className="container" id="header_container_post">
        <div className="logo_wrapper">
          <Link to="/">
            <h3 id="logo">Roy Persson</h3>
          </Link>
        </div>
        <div className="toggle">
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <div className="row menu_wrapper menu">
          <div className="col-xs-4  ">
            <nav id="main_nav">
              <div id="" className="mobile-nav">
                <div className="mobile-nav-container">
                  <Link className="nav-item" to={"/"}>
                    Hem
                  </Link>
                  <Link className="nav-item" to={"/lab"}>
                    Projekt
                  </Link>
                  <Link className="nav-item" to={"/cv"}>
                    CV
                  </Link>
                  <div className="mail-adress-wrapper">
                    <span className="mail-adress-mobile">
                      E: roypers89@gmail.com
                    </span>{" "}
                    <br />
                    <span className="mail-adress-mobile">T: +46 735747926</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-xs-offset-4  ">
            <span className="mail_adress">E: roypers89@gmail.com</span> <br />
            <span className="mail_adress">T: +46 735747926</span>
          </div>
        </div>

        {/*   <div className="row menu_wrapper menu">
          <div className="col-xs-4  ">
            <nav id="main_nav">
              <div id="myNav" class="overlay">
                <div class="overlay-content">
                  <Link className="nav-item" to={'/'}>
                    Hem
                  </Link>
                  <Link className="nav-item" to={'/lab'}>
                    Projekt
                  </Link>
                  <Link className="nav-item" to={'/cv'}>
                    CV
                  </Link>
                </div>
              </div>
            </nav>  
          </div>
    
          <div className="col-xs-offset-4 ">
            <span className="mail_adress">E: roypers89@gmail.com</span> <br />
            <span className="mail_adress">T: +46 735747926</span>
          </div>
        </div>*/}
      </header>
    );
  }
}

export default Navigation;
