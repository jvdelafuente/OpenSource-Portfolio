import "./NavbarOriginalLinks.css";
import logoimg from '../../../../public/Logo.png'

function NavbarOriginalLinks() {
  return (
    <div className="nav-bar">
      <div className="navbar-small-logo-container">
        <a>
          <img className="navbar-small-logo" src={logoimg} alt="" />
        </a>
      </div>      <ul className="nav-ul">
        <li className="nav-li">
          <a className="navbarsmall-links">Home</a>
        </li>
        <li className="nav-li">
          <a className="navbarsmall-links">Content</a>
        </li>
        <li className="nav-li">
          <a className="navbarsmall-links">Projects</a>
        </li>
        <li className="nav-li">
          <a className="navbarsmall-links">Contacts</a>
        </li>
      </ul>
        <div className="navbar-small-profile">
          <a><div className="navbar-small-profileimg-example"></div></a>
        </div>

    </div>
  );
}

export default NavbarOriginalLinks;
