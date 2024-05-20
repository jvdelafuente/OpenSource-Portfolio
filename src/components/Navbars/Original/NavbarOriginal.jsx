import "./NavbarOriginal.css";
import logoimg from "../../../../public/Logo.png";

function NavbarOriginal() {
  return (
    <div className="nav-bar">
      <div className="navbar-small-logo-container">
        <a>
          <img className="navbar-small-logo" src={logoimg} alt="" />
        </a>
      </div>
      <div className="navbar-small-input-container">
        <input
          className="navbar-small-input"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="navbar-small-profile">
        <a>
          <div className="navbar-small-profileimg-example"></div>
        </a>
      </div>
    </div>
  );
}

export default NavbarOriginal;
