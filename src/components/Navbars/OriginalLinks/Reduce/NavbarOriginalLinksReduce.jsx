import "./NavbarOriginalLinksReduce.css";
import logoimg from '../../../../../public/Logo.png'

function NavbarOriginalLinksReduce() {
  return (
    <div className="nav-bar-rl">
    <div className="navbar-small-logo-container-rl">
        <a><img className="navbar-small-logo-rl" src={logoimg} alt="" /></a>
      </div>
      <ul className="nav-ul-rl">
        <li className="nav-li-rl">
          <a className="navbarsmall-links-rl">Home</a>
        </li>
        <li className="nav-li-rl">
          <a className="navbarsmall-links-rl">Content</a>
        </li>
        <li className="nav-li-rl">
          <a className="navbarsmall-links-rl">Projects</a>
        </li>
        <li className="nav-li-rl">
          <a className="navbarsmall-links-rl">Contacts</a>
        </li>
      </ul>
        <div className="navbar-small-profile-rl">
          <a><div className="navbar-small-profileimg-example-rl"></div></a>
        </div>

    </div>
  );
}

export default NavbarOriginalLinksReduce;
